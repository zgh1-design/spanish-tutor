#!/usr/bin/env python3
"""
Download a relevant Pixabay image for each "photo"-strategy vocabulary entry.
Saves resized 380x220 JPEGs to ../images/{idx}.jpg.

Usage:
    PIXABAY_KEY=... python3 fetch_images.py [--only-new]
"""
import json, os, re, sys, io, argparse, time
from concurrent.futures import ThreadPoolExecutor, as_completed
import requests
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_JS = os.path.join(ROOT, 'data.js')
IMG_DIR = os.path.join(ROOT, 'images')
LOG_PATH = os.path.join(ROOT, '_tools', 'fetch_images.log')
PIXABAY_URL = 'https://pixabay.com/api/'

RATE_LIMIT_DELAY = 0.6   # seconds between requests per worker
MAX_WORKERS = 5


def load_vocab():
    src = open(DATA_JS, encoding='utf-8').read()
    m = re.search(r'const VOCABULARY = (\[.*?\n\]);', src, re.DOTALL)
    return json.loads(m.group(1))


def search(query, key):
    """Try a Pixabay search; return image URL or None."""
    try:
        r = requests.get(PIXABAY_URL, params={
            'key': key, 'q': query,
            'image_type': 'photo',
            'safesearch': 'true',
            'orientation': 'horizontal',
            'per_page': 3,
            'order': 'popular',
        }, timeout=10)
        if r.status_code != 200:
            return None
        hits = r.json().get('hits', [])
        if not hits:
            return None
        return hits[0].get('webformatURL') or hits[0].get('largeImageURL')
    except Exception:
        return None


def download_and_resize(url, dest):
    r = requests.get(url, timeout=15)
    r.raise_for_status()
    img = Image.open(io.BytesIO(r.content)).convert('RGB')
    tw, th = 380, 220
    sw, sh = img.size
    ratio = min(tw / sw, th / sh)
    nw, nh = int(sw * ratio), int(sh * ratio)
    resized = img.resize((nw, nh), Image.LANCZOS)
    canvas = Image.new('RGB', (tw, th), (245, 240, 232))
    canvas.paste(resized, ((tw - nw) // 2, (th - nh) // 2))
    canvas.save(dest, 'JPEG', quality=82)


def needs_image(entry, idx, only_new):
    if len(entry) < 5 or entry[4] != 'photo':
        return False
    if only_new and os.path.exists(os.path.join(IMG_DIR, f'{idx}.jpg')):
        return False
    return True


def process_one(idx, entry, key):
    spanish, english, category, search_term, *_ = entry
    dest = os.path.join(IMG_DIR, f'{idx}.jpg')

    # Try several queries in order of specificity, stopping at the first hit.
    queries = []
    if search_term: queries.append(search_term)
    # Drop everything after the slash for things like "güey / wey"
    en_clean = english.split('/')[0].split('(')[0].strip()
    if en_clean and en_clean not in queries:
        queries.append(en_clean)
    # Try last word only (e.g. "tomato red" → "tomato")
    if search_term:
        last = search_term.split()[-1]
        if last not in queries: queries.append(last)
    # Single-word English
    en_first = en_clean.split()[0] if en_clean else ''
    if en_first and en_first not in queries: queries.append(en_first)

    url = None; query_used = None
    for q in queries:
        time.sleep(RATE_LIMIT_DELAY)
        url = search(q, key)
        if url:
            query_used = q
            break

    if not url:
        return idx, 'no-results', ' | '.join(queries)

    try:
        download_and_resize(url, dest)
        return idx, 'ok', query_used
    except Exception as e:
        return idx, f'download-err: {e}', query_used


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--only-new', action='store_true')
    ap.add_argument('--start', type=int, default=0)
    ap.add_argument('--end',   type=int, default=None)
    args = ap.parse_args()

    key = os.environ.get('PIXABAY_KEY')
    if not key:
        sys.exit('Set PIXABAY_KEY env var')

    vocab = load_vocab()
    end = args.end if args.end is not None else len(vocab)
    todo = [(i, v) for i, v in enumerate(vocab[args.start:end], start=args.start)
            if needs_image(v, i, args.only_new)]
    print(f'Photos to fetch: {len(todo)} (range {args.start}–{end})')

    ok = 0; missing = []; log = []
    with ThreadPoolExecutor(max_workers=MAX_WORKERS) as ex:
        futs = {ex.submit(process_one, idx, entry, key): idx for idx, entry in todo}
        done = 0
        for fut in as_completed(futs):
            idx, status, query = fut.result()
            done += 1
            if status == 'ok':
                ok += 1
            else:
                missing.append((idx, query, status))
            log.append(f'{idx}\t{query}\t{status}')
            if done % 25 == 0 or done == len(todo):
                print(f'  {done}/{len(todo)}  ✓{ok}  ✗{len(missing)}')

    with open(LOG_PATH, 'w') as f:
        f.write('\n'.join(log))

    print(f'\nDone. {ok} ok, {len(missing)} failed.')
    if missing[:8]:
        print('Sample failures:')
        for m in missing[:8]:
            print(f'  idx={m[0]:4} query={m[1]!r:50} reason={m[2]}')


if __name__ == '__main__':
    main()
