"""Use the 2026-10-21 real photos (camp, shows, buffet, buggies) where the site had stand-ins."""
import os
os.chdir(os.path.join(os.path.dirname(__file__), '..'))

def edit(p, pairs):
    s = open(p, encoding='utf-8').read()
    for a, b in pairs:
        assert s.count(a) >= 1, (p, a[:80])
        s = s.replace(a, b)
    open(p, 'w', encoding='utf-8').write(s)

edit('src/pages/PackageDetailPage.tsx', [
    ('src="/images/real/camp-dinner.webp" \n                    alt="Dinner at camp"', 'src="/images/real/buffet.webp" \n                    alt="Dinner buffet at camp"'),
    ('src="/images/real/show-dancer.webp" \n                    alt="Live show at camp"', 'src="/images/real/fire-show.webp" \n                    alt="Fire show at camp"'),
])
edit('src/pages/VIPTraditionalPage.tsx', [
    ('/images/real/falcon-dunes.webp', '/images/real/majlis.webp'),
    ('alt="Falcon experience on the dunes"', 'alt="Majlis seating at the desert camp"'),
    ('src="/images/real/show-dancer.webp" \n                    alt="Live shows at camp"', 'src="/images/real/tanoura.webp" \n                    alt="Tanoura show at camp"'),
    ('>Night Shows</span>', '>Tanoura show</span>'),
])
edit('src/components/sections/VIPSection.tsx', [
    ("image: '/images/real/falcon-dunes.webp',\n      badge: 'POPULAR VIP'", "image: '/images/real/majlis.webp',\n      badge: 'POPULAR VIP'"),
])
edit('src/components/sections/VisualItinerary.tsx', [
    ("    image: '/images/real/falcon-sunset.webp',\n  },\n  {\n    time: '07:15 PM'", "    image: '/images/real/camp-night.webp',\n  },\n  {\n    time: '07:15 PM'"),
    ("'/images/real/camp-dinner.webp'", "'/images/real/buffet-station.webp'"),
    ("'/images/real/show-dancer.webp'", "'/images/real/fire-show.webp'"),
])
edit('src/data/addons.ts', [
    ("    icon: CarFront,\n", "    icon: CarFront,\n    image: '/images/real/dune-buggy.webp',\n"),
])
edit('src/data/guides.ts', [
    ("image: '/images/real/show-drums.webp'", "image: '/images/real/tanoura.webp'"),
])
