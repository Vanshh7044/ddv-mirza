# Real media (no AI) — received 2026-10-19

All photos 1125×2000 (vertical, phone quality — good enough for web + ads).

| File | Shot | Best use | Notes |
|---|---|---|---|
| photo-01 | Silhouette, heart hands framing the sun, from behind | Hero / ad hook | No face — easiest to use |
| photo-02 | Woman with falcon, blue sky | Falcon add-on, VIP | Identifiable — needs consent |
| photo-03 | White flowing dress at sunset | Mood / gallery | Identifiable; outfit may trip Meta ad review |
| photo-04 | Woman with falcon at sunset | Falcon add-on, VIP | Identifiable — needs consent |
| photo-05 | Woman standing on red quad, arm raised | Quad combo | Identifiable — needs consent |
| photo-06 | Woman sitting on Land Cruiser bonnet | 4×4 / dune bashing | Identifiable; Dubai plate visible |
| photo-07 | Two women on red quad #04 | Quad combo | Identifiable — needs consent |
| photo-08 | Heart hands with sun, sitting on dune | Sunset stop | Identifiable; short outfit |
| photo-09 | Throwing sand arc, sunset | Hero / ad hook | Face partly visible (sunglasses) |
| photo-10 | Sitting in abaya with sun behind | Sunset stop | Identifiable |
| photo-11 | Braids, sitting on dune at sunset | Gallery | Identifiable; high-slit outfit — avoid in ads |
| photo-12 | Couple jumping, blue sky | Fun / families-couples | Identifiable — great energy |
| photo-13 | Couple jumping, blue sky | Fun / couples | Identifiable |
| photo-14 | Couple jumping (same as 12) | Fun | Pick 12 or 14 |
| photo-15 | Two friends jumping, kicking sand | Fun / friends | Identifiable |
| photo-16 | Back view, white dress, sunset dunes | Hero / ad | No face — easy to use; camel group far left |
| photo-17 | Face covered with shemagh, arm up, Land Cruiser + sunset | Hero / ad | Face mostly covered; plate frame says "trading enterprises" |
| photo-18 | Camel ride, Land Cruisers behind, sunset | Camel / Standard package | Identifiable — needs consent |
| photo-19 | Peace sign leaning on Land Cruiser, sunset | Premium / 4×4 | Identifiable — needs consent |
| photo-20 | Back view on dune at sunset (variant of 16) | Gallery / mood | No face |
| photo-21 | Couple at sunset, cars behind | Couples / private | Identifiable — needs consent |

## Website & ad build scripts
- `node real-media/build-site-images.cjs` → `public/images/real/*.webp` (focus-cropped 16:9) + `og-sunset.jpg`
- `bash real-media/build-hero-video.sh` → `public/videos/hero-real.mp4` (real-photo montage)

## Before using in ads / website
- **Consent:** guests with recognisable faces need permission to appear in advertising.
- **Meta ad review:** revealing outfits (03, 08, 11) can get ads limited/rejected — prefer 01, 09, 12–17 for ads.
