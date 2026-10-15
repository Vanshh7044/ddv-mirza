import type { LucideIcon } from 'lucide-react';
import {
  Building2, Frame, Rocket, Flower2, Bug, Sparkles, Waves, Fish, Snowflake,
  RollerCoaster, FerrisWheel, Shell, Ship, Sailboat, Plane, Landmark, Castle, Palmtree, Crown, Car,
} from 'lucide-react';

export type City = 'Dubai' | 'Abu Dhabi';
export type AttractionCategory = 'Landmarks' | 'Theme Parks' | 'Water & Marine' | 'Gardens & Seasonal' | 'Cruises & Adventures';

export interface Attraction {
  id: string;
  name: string;
  city: City;
  category: AttractionCategory;
  desc: string;
  icon: LucideIcon;
  seasonal?: boolean;
  /** Photo path — add real photos to /public/images and set this. Illustrated tile is shown until then. */
  image?: string;
  /** If we already sell this as a package, link there instead of asking for a quote. */
  packagePath?: string;
}

/**
 * Attraction tickets we can book for guests.
 * Prices are deliberately NOT shown — the owner quotes on WhatsApp until rates are approved.
 */
export const ATTRACTIONS: Attraction[] = [
  // ─── Dubai ────────────────────────────────────────────────
  { id: 'burj-khalifa', name: 'Burj Khalifa – At the Top', city: 'Dubai', category: 'Landmarks', icon: Building2, desc: 'Observation decks on the world’s tallest building, with views across the city, desert and coast.' },
  { id: 'dubai-frame', name: 'Dubai Frame', city: 'Dubai', category: 'Landmarks', icon: Frame, desc: 'A giant picture-frame landmark in Zabeel Park with a glass-floor skybridge between old and new Dubai.' },
  { id: 'museum-of-the-future', name: 'Museum of the Future', city: 'Dubai', category: 'Landmarks', icon: Rocket, desc: 'Immersive exhibitions about future technology, inside one of the most photographed buildings in Dubai.' },
  { id: 'aya-universe', name: 'AYA Universe', city: 'Dubai', category: 'Landmarks', icon: Sparkles, desc: 'A walk-through immersive light and digital-art experience — great for families and photos.' },
  { id: 'dubai-miracle-garden', name: 'Dubai Miracle Garden', city: 'Dubai', category: 'Gardens & Seasonal', icon: Flower2, seasonal: true, desc: 'Millions of flowers arranged into giant sculptures and displays. Open in the cooler months.' },
  { id: 'dubai-butterfly-garden', name: 'Dubai Butterfly Garden', city: 'Dubai', category: 'Gardens & Seasonal', icon: Bug, desc: 'Climate-controlled domes filled with thousands of butterflies, next to the Miracle Garden.' },
  { id: 'global-village', name: 'Global Village', city: 'Dubai', category: 'Gardens & Seasonal', icon: FerrisWheel, seasonal: true, desc: 'Open-air festival park with pavilions, food and shows from around the world. Winter season.' },
  { id: 'dubai-garden-glow', name: 'Dubai Garden Glow', city: 'Dubai', category: 'Gardens & Seasonal', icon: Sparkles, seasonal: true, desc: 'An evening park of illuminated sculptures and light installations.' },
  { id: 'aquaventure', name: 'Atlantis Aquaventure Waterpark', city: 'Dubai', category: 'Water & Marine', icon: Waves, desc: 'Record-breaking waterpark at Atlantis The Palm with slides, rivers and a private beach.' },
  { id: 'lost-chambers', name: 'The Lost Chambers Aquarium', city: 'Dubai', category: 'Water & Marine', icon: Shell, desc: 'Atlantis-themed aquarium tunnels with sharks, rays and thousands of marine animals.' },
  { id: 'dubai-aquarium', name: 'Dubai Aquarium & Underwater Zoo', city: 'Dubai', category: 'Water & Marine', icon: Fish, desc: 'Walk-through tunnel aquarium inside The Dubai Mall, plus the underwater zoo above it.' },
  { id: 'dubai-dolphinarium', name: 'Dubai Dolphinarium', city: 'Dubai', category: 'Water & Marine', icon: Fish, desc: 'Dolphin and seal shows at Creek Park — a popular family outing.' },
  { id: 'ski-dubai', name: 'Ski Dubai', city: 'Dubai', category: 'Theme Parks', icon: Snowflake, desc: 'Indoor snow park at Mall of the Emirates: skiing, snowboarding, tobogganing and penguins.' },
  { id: 'img-worlds', name: 'IMG Worlds of Adventure', city: 'Dubai', category: 'Theme Parks', icon: RollerCoaster, desc: 'One of the world’s largest indoor theme parks, with rides themed on comics and dinosaurs.' },
  { id: 'dubai-parks', name: 'Dubai Parks and Resorts', city: 'Dubai', category: 'Theme Parks', icon: Castle, desc: 'Theme-park destination including MOTIONGATE™ and LEGOLAND® Dubai, between Dubai and Abu Dhabi.' },
  { id: 'marina-dhow', name: 'Dubai Marina Dhow Cruise', city: 'Dubai', category: 'Cruises & Adventures', icon: Ship, desc: 'Dinner cruise past the Marina skyline with buffet and live entertainment.', packagePath: '/tours/dhow-cruise-dubai-marina' },
  { id: 'creek-dhow', name: 'Dubai Creek Dhow Cruise', city: 'Dubai', category: 'Cruises & Adventures', icon: Ship, desc: 'Traditional wooden dhow dinner cruise along historic Dubai Creek.' },
  { id: 'yacht', name: 'Luxury Yacht Tours', city: 'Dubai', category: 'Cruises & Adventures', icon: Sailboat, desc: 'Private yacht charters from Dubai Marina past Palm Jumeirah, Atlantis and Burj Al Arab.' },
  { id: 'helicopter', name: 'Helicopter Tours', city: 'Dubai', category: 'Cruises & Adventures', icon: Plane, desc: 'Scenic flights over Palm Jumeirah, Burj Khalifa and the coastline.' },

  // ─── Abu Dhabi ────────────────────────────────────────────
  { id: 'ferrari-world', name: 'Ferrari World Abu Dhabi', city: 'Abu Dhabi', category: 'Theme Parks', icon: Car, desc: 'Ferrari-themed indoor park on Yas Island, home to some of the world’s fastest roller coasters.' },
  { id: 'warner-bros-world', name: 'Warner Bros. World Abu Dhabi', city: 'Abu Dhabi', category: 'Theme Parks', icon: RollerCoaster, desc: 'Indoor theme park with lands based on DC superheroes and Looney Tunes.' },
  { id: 'seaworld', name: 'SeaWorld Abu Dhabi', city: 'Abu Dhabi', category: 'Water & Marine', icon: Fish, desc: 'Marine-life theme park on Yas Island with immersive realms, shows and rides.' },
  { id: 'yas-waterworld', name: 'Yas Waterworld', city: 'Abu Dhabi', category: 'Water & Marine', icon: Waves, desc: 'Emirati-themed waterpark on Yas Island with dozens of slides and attractions.' },
  { id: 'national-aquarium', name: 'National Aquarium Abu Dhabi', city: 'Abu Dhabi', category: 'Water & Marine', icon: Fish, desc: 'One of the region’s largest aquariums, with thousands of sea creatures.' },
  { id: 'qasr-al-watan', name: 'Qasr Al Watan', city: 'Abu Dhabi', category: 'Landmarks', icon: Crown, desc: 'The presidential palace — open to visitors for its grand halls, library and evening light show.' },
  { id: 'louvre-abu-dhabi', name: 'Louvre Abu Dhabi', city: 'Abu Dhabi', category: 'Landmarks', icon: Landmark, desc: 'World-class art museum on Saadiyat Island under its famous “rain of light” dome.' },
];

export const CATEGORIES: AttractionCategory[] = ['Landmarks', 'Theme Parks', 'Water & Marine', 'Gardens & Seasonal', 'Cruises & Adventures'];

export const CITY_ICON: Record<City, LucideIcon> = { Dubai: Building2, 'Abu Dhabi': Palmtree };
