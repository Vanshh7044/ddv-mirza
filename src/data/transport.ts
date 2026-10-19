import type { LucideIcon } from 'lucide-react';
import { PlaneLanding, PlaneTakeoff, Plane, Route, Map as MapIcon, Building, Crown, Baby, Users } from 'lucide-react';

export interface TransferService {
  id: string;
  name: string;
  desc: string;
  icon: LucideIcon;
}

export interface Vehicle {
  id: string;
  name: string;
  /** Passenger seats — confirm with the fleet before publishing changes. */
  passengers: number;
  luggage: string;
  bestFor: string;
  image?: string;
}

export const TRANSFER_SERVICES: TransferService[] = [
  { id: 'dxb-pickup', name: 'Dubai Airport Pickup', icon: PlaneLanding, desc: 'Meet & greet at DXB or DWC arrivals, flight tracked so we wait if you land late.' },
  { id: 'dxb-dropoff', name: 'Dubai Airport Drop-off', icon: PlaneTakeoff, desc: 'On-time pickup from your hotel or home to DXB or DWC departures.' },
  { id: 'shj', name: 'Sharjah Airport Transfers', icon: Plane, desc: 'Arrivals and departures at Sharjah International (SHJ), to or from anywhere in Dubai.' },
  { id: 'auh', name: 'Abu Dhabi Airport Transfers', icon: Plane, desc: 'Zayed International (AUH) arrivals and departures, to Dubai or within Abu Dhabi.' },
  { id: 'dxb-auh', name: 'Dubai ↔ Abu Dhabi Transfers', icon: Route, desc: 'Door-to-door intercity rides between hotels, homes, Yas Island and Saadiyat.' },
  { id: 'city', name: 'Private City Tours', icon: MapIcon, desc: 'Your own car and driver for Dubai or Abu Dhabi sightseeing at your pace.' },
  { id: 'hotel', name: 'Hotel Transfers', icon: Building, desc: 'Point-to-point rides between hotels, malls, restaurants and attractions.' },
  { id: 'land-cruiser', name: 'Luxury Land Cruiser Transport', icon: Crown, desc: 'Premium Toyota Land Cruiser with professional driver for VIP and business travel.' },
  { id: 'family', name: 'Family Transportation', icon: Baby, desc: 'Spacious vehicles with room for strollers and luggage. Ask for child seats when booking.' },
  { id: 'group', name: 'Group Transportation', icon: Users, desc: 'High-roof vans for groups, events and corporate outings.' },
];

export const VEHICLES: Vehicle[] = [
  { id: 'land-cruiser', name: 'Toyota Land Cruiser 4×4', passengers: 6, luggage: '3–4 large bags', bestFor: 'VIP, families, desert & city tours', image: '/images/real/land-cruiser-peace.webp' },
  { id: 'premium-suv', name: 'Premium SUV', passengers: 4, luggage: '3 large bags', bestFor: 'Couples, business travel, airport runs' },
  { id: 'seven-seater', name: '7-Seater Vehicle', passengers: 6, luggage: '4–5 large bags', bestFor: 'Families and small groups' },
  { id: 'hiroof', name: '14-Seater HiRoof Van', passengers: 13, luggage: '10+ large bags', bestFor: 'Groups, events, corporate trips' },
];
