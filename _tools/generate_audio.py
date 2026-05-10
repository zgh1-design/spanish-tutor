#!/usr/bin/env python3
"""
Generate Jorge (es-MX-JorgeNeural) MP3s for vocabulary entries that don't
have audio yet. Skips files already present unless --regen-all is given.

Usage:
    python3 generate_audio.py [--regen-all] [--start 0] [--end 3000]
"""
import asyncio, json, os, re, sys, argparse
import edge_tts

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_JS = os.path.join(ROOT, 'data.js')
AUDIO_DIR = os.path.join(ROOT, 'audio')
VOICE = 'es-MX-JorgeNeural'


def load_vocab():
    src = open(DATA_JS, encoding='utf-8').read()
    m = re.search(r'const VOCABULARY = (\[.*?\n\]);', src, re.DOTALL)
    return json.loads(m.group(1))


def clean(spanish):
    """Strip alternate forms and stray punctuation so the TTS speaks cleanly."""
    s = spanish.split('/')[0].split(',')[0].strip()
    return s.strip('¿?¡!').strip()


async def gen_one(idx, spanish, sem, regen):
    async with sem:
        path = os.path.join(AUDIO_DIR, f'{idx}.mp3')
        if (not regen) and os.path.exists(path) and os.path.getsize(path) > 100:
            return idx, 'skip'
        try:
            c = edge_tts.Communicate(clean(spanish), VOICE)
            await c.save(path)
            return idx, 'ok'
        except Exception as e:
            return idx, f'err: {e}'


async def run(args):
    vocab = load_vocab()
    end = args.end if args.end is not None else len(vocab)
    targets = list(enumerate(vocab))[args.start:end]
    print(f'Audio targets: {len(targets)} (range {args.start}–{end})')

    sem = asyncio.Semaphore(8)
    tasks = [gen_one(i, w[0], sem, args.regen_all) for i, w in targets]
    done = 0; ok = 0; skip = 0; errs = []
    for coro in asyncio.as_completed(tasks):
        idx, status = await coro
        done += 1
        if status == 'ok':   ok += 1
        elif status == 'skip': skip += 1
        else: errs.append((idx, status))
        if done % 50 == 0 or done == len(tasks):
            print(f'  {done}/{len(tasks)}  ✓{ok}  ↷{skip}  ✗{len(errs)}')
    print(f'\nDone. {ok} new, {skip} skipped, {len(errs)} failed.')
    for e in errs[:10]:
        print(f'  idx={e[0]}: {e[1]}')


if __name__ == '__main__':
    ap = argparse.ArgumentParser()
    ap.add_argument('--regen-all', action='store_true')
    ap.add_argument('--start', type=int, default=0)
    ap.add_argument('--end',   type=int, default=None)
    asyncio.run(run(ap.parse_args()))
