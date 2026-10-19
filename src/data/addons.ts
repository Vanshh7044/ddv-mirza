import type { LucideIcon } from 'lucide-react';
import { Bike, CarFront, Footprints, Bird } from 'lucide-react';

export interface AddOn {
  id: string;
  name: string;
  desc: string;
  icon: LucideIcon;
  image?: string;
  /** Packages that already include this, so we don't upsell it to them. */
  includedIn?: string[];
  note?: string;
}

/**
 * Optional desert activities, sold on top of any desert safari.
 * Prices are not published yet — shown as "additional cost" and quoted on WhatsApp.
 */
export const DESERT_ADDONS: AddOn[] = [
  {
    id: 'quad',
    name: 'Quad Bike Riding',
    icon: Bike,
    image: '/images/real/quad-bike.webp',
    desc: 'Ride your own quad bike on a marked desert track with a guide. Helmet and goggles provided.',
    includedIn: ['standard-quad', 'premium-quad'],
    note: 'Or book a Safari + 30-min Quad combo',
  },
  {
    id: 'buggy',
    name: 'Dune Buggy Riding',
    icon: CarFront,
    desc: 'Drive a powerful 2- or 4-seater dune buggy over the red dunes, following a lead guide.',
  },
  {
    id: 'horse',
    name: 'Horse Riding',
    icon: Footprints,
    desc: 'A guided horse ride across the desert — gentle pace, suitable for beginners.',
  },
  {
    id: 'falcon',
    name: 'Falcon Photography',
    icon: Bird,
    image: '/images/real/falcon-sunset.webp',
    desc: 'Hold a trained falcon with its handler and take home striking desert photos.',
    includedIn: ['evening-premium', 'evening-vip', 'premium-quad', 'vip-traditional'],
  },
];
