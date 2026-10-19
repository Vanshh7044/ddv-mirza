"""Point every image reference on the site at the REAL photos (one-off migration)."""
import os, re
os.chdir(os.path.join(os.path.dirname(__file__), '..'))

MAP = {
    '/images/dune-bashing.webp': '/images/real/land-cruiser-sunset.webp',
    '/images/dune-bashing.jpg': '/images/real/og-sunset.jpg',
    '/images/camel-sunset.webp': '/images/real/camel-ride.webp',
    '/images/vip-majlis.webp': '/images/real/falcon-dunes.webp',
    '/images/falcon-portrait.webp': '/images/real/falcon-sunset.webp',
    '/images/sandboarding.webp': '/images/real/dune-jump.webp',
    '/images/private-camp.webp': '/images/real/sunset-couple.webp',
    '/images/bbq-buffet.webp': '/images/real/camp-dinner.webp',
    '/images/tanoura-dance.webp': '/images/real/show-dancer.webp',
    '/images/quad-buggy.webp': '/images/real/quad-bike.webp',
    '/images/desert-camp-night.webp': '/images/real/sunset-dunes.webp',
    '/images/henna-shisha.webp': '/images/real/abaya-sunset.webp',
    '/images/fire-show.webp': '/images/real/show-drums.webp',
}

def edit(p, pairs, must=True):
    s = open(p, encoding='utf-8').read()
    for a, b in pairs:
        if must:
            assert a in s, (p, a[:80])
        s = s.replace(a, b)
    open(p, 'w', encoding='utf-8').write(s)

# 1) Targeted fixes first (where captions/alt text must change with the photo)
edit('src/components/Hero.tsx', [
    ('poster="/images/dune-bashing.webp"', 'poster="/images/real/hero-poster.webp"'),
    ('            <source src="/videos/dunes.mp4" type="video/mp4" />\n            <source src="/videos/dunes-golden.mp4" type="video/mp4" />',
     '            <source src="/videos/hero-real.mp4" type="video/mp4" />'),
])
edit('src/pages/PackageDetailPage.tsx', [
    ('alt="Desert BBQ Buffet"', 'alt="Dinner at camp"'),
    ('>Live BBQ</span>', '>Dinner at camp</span>'),
    ('alt="Falcon Experience"', 'alt="Falcon photo session"'),
    ('alt="Live Arabian Shows"', 'alt="Live show at camp"'),
])
edit('src/pages/PrivateCampPage.tsx', [
    ('src="/images/desert-camp-night.webp"', 'src="/images/real/sunset-dunes.webp"'),
    ('alt="Camp by Night"', 'alt="Sunset on the dunes"'),
    ('src="/images/bbq-buffet.webp"', 'src="/images/real/heart-sunset.webp"'),
    ('alt="Private Chef Feast"', 'alt="Sunset moments"'),
])
edit('src/pages/VIPTraditionalPage.tsx', [
    ('alt="VIP Traditional Arabic Majlis"', 'alt="Falcon experience on the dunes"'),
    ('alt="VIP Majlis Lounge"', 'alt="Arabic dress photos at sunset"'),
    ('alt="Tanoura Shows"', 'alt="Live shows at camp"'),
])
# image-label chips next to those alts
for p, pairs in {
    'src/pages/PrivateCampPage.tsx': [('>Starlit Setup</span>', '>Sunset views</span>'), ('>Private Chef</span>', '>Sunset moments</span>')],
    'src/pages/VIPTraditionalPage.tsx': [('>VIP Majlis</span>', '>Arabic dress</span>')],
}.items():
    edit(p, pairs)

# 2) Package / add-on / transport data with deliberate picks
edit('src/data/safariPackages.ts', [
    ("    image: '/images/bbq-buffet.webp',\n    detailPath: '/evening-safari/premium',", "    image: '/images/real/land-cruiser-peace.webp',\n    detailPath: '/evening-safari/premium',"),
    ("    image: '/images/camel-sunset.webp',\n    detailPath: '/tours/dubai-city-tour-desert-safari-combo',", "    image: '/images/real/golden-hour-sand.webp',\n    detailPath: '/tours/dubai-city-tour-desert-safari-combo',"),
])
edit('src/data/addons.ts', [("    image: '/images/dune-buggy.webp',\n", "")])  # no real buggy photo yet -> icon tile
edit('src/data/transport.ts', [("image: '/images/dune-bashing.webp'", "image: '/images/real/land-cruiser-peace.webp'")])

# 3) Everything else: straight mapping
for root in ['src', 'public', '.']:
    files = []
    if root == '.':
        files = ['index.html']
    elif root == 'public':
        files = [os.path.join('public', f) for f in os.listdir('public') if f.endswith(('.txt', '.xml'))]
    else:
        for d, _, fs in os.walk('src'):
            files += [os.path.join(d, f) for f in fs if f.endswith(('.ts', '.tsx'))]
    for p in files:
        s = open(p, encoding='utf-8').read()
        n = s
        for a, b in MAP.items():
            n = n.replace(a, b)
        if n != s:
            open(p, 'w', encoding='utf-8').write(n)
            print('updated', p)

# 4) Anything AI left?
left = []
for d, _, fs in os.walk('src'):
    for f in fs:
        s = open(os.path.join(d, f), encoding='utf-8').read()
        left += [(f, m) for m in re.findall(r"/images/(?!real/)[a-z0-9-]+\.(?:webp|jpg)|/videos/(?!hero-real)[a-z0-9-]+\.mp4", s)]
print('remaining non-real refs:', left)
