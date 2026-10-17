#!/bin/sh
# Builds responsive WebP versions of every photo in assets/img/:
#   assets/img/webp/<name>-640.webp, -1024.webp, -1600.webp (never wider than the source)
# Needs cwebp (brew install webp). Run from the repo root after adding a photo.
set -e
mkdir -p assets/img/webp
for src in assets/img/*.jpg; do
  name=$(basename "$src" .jpg)
  width=$(sips -g pixelWidth "$src" | awk '/pixelWidth/ {print $2}')
  for w in 640 1024 1600; do
    [ "$w" -gt "$width" ] && w=$width
    out="assets/img/webp/$name-$w.webp"
    [ -f "$out" ] && continue
    cwebp -quiet -q 78 -m 6 -resize "$w" 0 "$src" -o "$out"
  done
done
