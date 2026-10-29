// Core domain types for the Trusted Marketplace homepage.
// This is the first version — all data is typed mock data (see lib/mock-data.ts).
// It is intentionally shaped so a future API/Prisma layer can slot in without
// touching the presentational components.

export type Category = {
  id: string;
  label: string;
  slug: string;
  icon: string; // key into the lucide icon map, see lib/utils.ts
};

export type Banner = {
  id: string;
  title: string;
  subtitle: string;
  discount?: string;
  ctaLabel: string;
  secondaryCtaLabel?: string;
  accentImage: string; // gradient / art key used to render the artwork, see HeroCarousel
};

export type Game = {
  id: string;
  name: string;
  category: string;
  productCount: number;
  startingPrice: number;
  rating: number;
  art: string; // gradient key
};

export type Product = {
  id: string;
  title: string;
  seller: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  sold: number;
  badge?: "instant" | "limited";
  art: string;
};

export type TopUpProduct = {
  id: string;
  game: string;
  item: string;
  startingPrice: number;
  art: string;
};

export type GameKey = {
  id: string;
  title: string;
  platform: "Steam" | "Epic Games" | "Rockstar" | "Ubisoft" | "Xbox" | "PlayStation";
  region: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  seller: string;
  art: string;
};

export type GameAccount = {
  id: string;
  game: string;
  server: string;
  rank: string;
  level: number;
  skins: number;
  originalOwner: boolean;
  verifiedSeller: boolean;
  price: number;
  art: string;
};

export type BoostingService = {
  id: string;
  title: string;
  provider: string;
  rating: number;
  eta: string;
  startingPrice: number;
  online: boolean;
  art: string;
};

export type Seller = {
  id: string;
  name: string;
  verified: boolean;
  rating: number;
  transactions: number;
  responseRate: number;
  online: boolean;
  avatarArt: string;
};

export type Partner = {
  id: string;
  name: string;
};

export type TrustFeature = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

// --- Top Up marketplace flow (/topup, /topup/[slug]) ---

export type TopupGame = {
  id: string;
  slug: string;
  name: string;
  category: string;
  platform: string[];
  rating: number;
  startingPrice: number;
  /** Whether the purchase form needs a Server ID in addition to the User ID. */
  requiresServer: boolean;
  popular?: boolean;
  art: string; // gradient/icon key, see components/ui/Artwork
};

export type TopupNominal = {
  id: string;
  gameSlug: string;
  /** e.g. "86 Diamonds" or "Weekly Diamond Pass" */
  name: string;
  price: number;
  originalPrice?: number;
  badge?: string;
};
