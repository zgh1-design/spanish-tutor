#!/usr/bin/env python3
"""
Generate Jorge MP3s for every (verb, tense, form) conjugation and example sentence.
Reads _tools/conj_audio_manifest.json (produced by build_conjugations.py).
Saves files as audio/conj/{id}.mp3.
"""
import asyncio, json, os, sys
import edge_tts

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MANIFEST = os.path.join(ROOT, '_tools', 'conj_audio_manifest.json')
OUT_DIR = os.path.join(ROOT, 'audio', 'conj')
VOICE = 'es-MX-JorgeNeural'

os.makedirs(OUT_DIR, exist_ok=True)


def clean(text):
    return text.strip('¿?¡!').strip()


async def gen_one(item, sem):
    async with sem:
        path = os.path.join(OUT_DIR, f"{item['id']}.mp3")
        if os.path.exists(path) and os.path.getsize(path) > 100:
            return item['id'], 'skip'
        try:
            c = edge_tts.Communicate(clean(item['text']), VOICE)
            await c.save(path)
            return item['id'], 'ok'
        except Exception as e:
            return item['id'], f'err: {e}'


async def main():
    manifest = json.load(open(MANIFEST, encoding='utf-8'))
    sem = asyncio.Semaphore(8)
    tasks = [gen_one(item, sem) for item in manifest]
    done = 0; ok = 0; skip = 0; errs = []
    for coro in asyncio.as_completed(tasks):
        idx, status = await coro
        done += 1
        if status == 'ok': ok += 1
        elif status == 'skip': skip += 1
        else: errs.append((idx, status))
        if done % 50 == 0 or done == len(tasks):
            print(f'  {done}/{len(tasks)}  ✓{ok}  ↷{skip}  ✗{len(errs)}')
    print(f'\nDone. {ok} new, {skip} skipped, {len(errs)} failed.')
    for e in errs[:10]:
        print(f'  {e[0]}: {e[1]}')


if __name__ == '__main__':
    asyncio.run(main())
