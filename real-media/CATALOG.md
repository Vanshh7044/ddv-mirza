# Real media (no AI) — received 2026-10-19

All photos 1125×2000 (vertical, phone quality — good enough for web + ads).

| File | Shot | Best use | Notes |
|---|---|---|---|
| photo-01 | Silhouette, heart hands framing the sun, from behind | Hero / ad hook | No face — easiest to use |
| photo-02 | Woman with falcon, blue sky | Falcon add-on, VIP | Identifiable |
| photo-03 | White flowing dress at sunset | Mood / gallery | Identifiable; outfit may trip Meta ad review |
| photo-04 | Woman with falcon at sunset | Falcon add-on, VIP | Identifiable |
| photo-05 | Woman standing on red quad, arm raised | Quad combo | Identifiable |
| photo-06 | Woman sitting on Land Cruiser bonnet | 4×4 / dune bashing | Identifiable; Dubai plate visible |
| photo-07 | Two women on red quad #04 | Quad combo | Identifiable |
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
| photo-18 | Camel ride, Land Cruisers behind, sunset | Camel / Standard package | Identifiable |
| photo-19 | Peace sign leaning on Land Cruiser, sunset | Premium / 4×4 | Identifiable |
| photo-20 | Back view on dune at sunset (variant of 16) | Gallery / mood | No face |
| photo-21 | Couple at sunset, cars behind | Couples / private | Identifiable |

## Batch 2 — received 2026-10-21 (photo-22 … photo-70, mixed sizes)

Mostly professional photos of the desert camp at night (shows, buffet, majlis) plus buggies and camels.
**Permissions:** camp permission and guest consent confirmed by the client (2026-10-21).

| File | Shot | Used as | Notes |
|---|---|---|---|
| photo-24 | Camp overview at dusk, seating + stage | camp-overview | |
| photo-27 / 25 | LED tanoura (same shot twice) | tanoura-led | |
| photo-28 | Woman drummer in costume | drum-dancer | performer |
| photo-31 / 39 | Fire breather, wide (same shot twice) | fire-show-wide | |
| photo-32 / 67 | Majlis alcove with lit arch (same shot twice) | majlis | no people |
| photo-33 / 45 | Belly dancer with veil (near-duplicates) | belly-dance | |
| photo-37 | Live grill station, chef | buffet-station | |
| photo-38 | Camp from above at night | camp-night | no people — hero/gallery |
| photo-40 | Couple in kandura + shemagh at sunset | sunset-kandura | |
| photo-47 | Buffet counter | buffet | one guest at edge |
| photo-49 | Man with Can-Am buggy at sunset | buggy-sunset | |
| photo-51 / 52 | Folk dance troupe | folk-dance | camp signage in frame |
| photo-54 | Woman standing on buggy, dunes | buggy-dunes | |
| photo-55 | Tanoura with lights, blue palms | tanoura | |
| photo-56 | Fire breather close-ish | fire-show | ads + site |
| photo-57 | Two Polaris buggies on dunes | dune-buggy | no faces — buggy add-on |
| photo-60 | Dining terrace at night | camp-dining | |
| photo-63 | Fire performer close-up | fire-performer | |
| photo-64 / 68 | Daytime lounge, palms | camp-lounge | |
| photo-30 | Two women on camel (portrait) | camel-ride-2 | |
| photo-23 | Camel handler + family, child on camel | — | child — avoid |
| photo-22, 26, 34, 44, 61, 62 | Guests at camp, coffee hut, portraits | — | spare |

**Do not use**
- photo-41 — Photoshop composite (camels/quad/4×4 pasted together); looks fake, breaks the NO-AI spirit.
- photo-53 — web screenshot (white bars) of a different camp.
- photo-58 — another company's branding on the gate ("Dadabhai Travel").
- photo-69 — low-res (739×415) camel image that looks web-sourced; likely not ours.

## Website & ad build scripts
- `node real-media/build-site-images.cjs` → `public/images/real/*.webp` (focus-cropped 16:9) + `og-sunset.jpg`
- `bash real-media/build-hero-video.sh` → `public/videos/hero-real.mp4` (real-photo montage)

## Before using in ads / website
- **Consent:** guest consent confirmed for all photos (2026-10-21).
- **Meta ad review:** revealing outfits (03, 08, 11) can get ads limited/rejected — prefer 01, 09, 12–17 for ads.
