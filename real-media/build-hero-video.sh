#!/usr/bin/env bash
# Hero background loop made only from REAL photos (slow drift + crossfades, no audio).
# Run from repo root after build-site-images.cjs:  bash real-media/build-hero-video.sh
set -euo pipefail
cd "$(dirname "$0")/.."
IMG=public/images/real
OUT=public/videos
TMP=real-media/tmp/hero
mkdir -p "$OUT" "$TMP"
W=1280; H=720; FPS=30; D=4; XF=0.8
SHOTS=(golden-hour-sand land-cruiser-sunset camel-ride quad-bike dune-buggy camp-night fire-show tanoura)

i=0
for s in "${SHOTS[@]}"; do
  dir=$(( i % 2 == 0 ? 1 : -1 ))
  # supersampled drift (2x canvas, then downscale) so motion is smooth, not stepped
  ffmpeg -v error -y -loop 1 -framerate $FPS -t $D -i "$IMG/$s.webp" \
    -vf "scale=-2:$((H*2*108/100)):flags=lanczos,crop=$((W*2)):$((H*2)):x='(iw-ow)/2+($dir)*60*(2*t/$D-1)':y='(ih-oh)/2',scale=$W:$H:flags=lanczos,format=yuv420p" \
    -t $D -c:v libx264 -preset medium -crf 18 "$TMP/$i.mp4"
  i=$((i+1))
done

# chain crossfades
inputs=(); for n in $(seq 0 $((i-1))); do inputs+=(-i "$TMP/$n.mp4"); done
filter=""; prev="[0:v]"; offset=0
for n in $(seq 1 $((i-1))); do
  offset=$(awk "BEGIN{print $offset + $D - $XF}")
  out="[x$n]"; [ $n -eq $((i-1)) ] && out="[v]"
  filter+="$prev[$n:v]xfade=transition=fade:duration=$XF:offset=$offset$out;"
  prev="[x$n]"
done
ffmpeg -v error -y "${inputs[@]}" -filter_complex "${filter%;}" -map "[v]" -an \
  -c:v libx264 -preset slow -crf 27 -pix_fmt yuv420p -movflags +faststart "$OUT/hero-real.mp4"
# poster = first frame
ffmpeg -v error -y -i "$OUT/hero-real.mp4" -frames:v 1 -q:v 3 "$TMP/poster.jpg"
node -e "require('sharp')('$TMP/poster.jpg').webp({quality:78}).toFile('$IMG/hero-poster.webp').then(()=>console.log('poster ok'))"
echo "hero video: $(du -h $OUT/hero-real.mp4 | cut -f1)"
