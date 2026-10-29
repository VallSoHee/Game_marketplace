import type {
  Banner,
  BoostingService,
  Category,
  Game,
  GameAccount,
  GameKey,
  Partner,
  Product,
  Seller,
  TopUpProduct,
  TopupGame,
  TopupNominal,
  TrustFeature,
} from "@/types/marketplace";

export const categories: Category[] = [
  { id: "cat-topup", label: "Top Up", slug: "top-up", icon: "Coins" },
  { id: "cat-keys", label: "Game Keys", slug: "game-keys", icon: "KeyRound" },
  { id: "cat-accounts", label: "Game Accounts", slug: "game-accounts", icon: "UserRound" },
  { id: "cat-items", label: "Game Items", slug: "game-items", icon: "Swords" },
  { id: "cat-vouchers", label: "Vouchers", slug: "vouchers", icon: "Ticket" },
  { id: "cat-steam", label: "Steam", slug: "steam", icon: "Gamepad2" },
  { id: "cat-joki", label: "Joki", slug: "joki", icon: "Rocket" },
  { id: "cat-boosting", label: "Boosting", slug: "boosting", icon: "TrendingUp" },
  { id: "cat-giftcards", label: "Gift Cards", slug: "gift-cards", icon: "Gift" },
  { id: "cat-membership", label: "Membership", slug: "membership", icon: "Crown" },
  { id: "cat-randomkeys", label: "Random Keys", slug: "random-keys", icon: "Shuffle" },
  { id: "cat-currency", label: "Currency", slug: "currency", icon: "CircleDollarSign" },
];

export const banners: Banner[] = [
  {
    id: "banner-1",
    title: "Level up your game",
    subtitle: "Top up your favorite games instantly, straight to your account.",
    discount: "Up to 50% off",
    ctaLabel: "Top Up Now",
    secondaryCtaLabel: "See All Deals",
    accentImage: "emerald-surge",
  },
  {
    id: "banner-2",
    title: "Own it forever, pay less today",
    subtitle: "Global game keys from verified sellers, delivered in seconds.",
    discount: "Up to 35% off",
    ctaLabel: "Browse Game Keys",
    secondaryCtaLabel: "Learn More",
    accentImage: "lime-grid",
  },
  {
    id: "banner-3",
    title: "Rank up without the grind",
    subtitle: "Trusted boosting services from verified pro players.",
    discount: "From Rp 150.000",
    ctaLabel: "Find a Booster",
    secondaryCtaLabel: "How It Works",
    accentImage: "green-orbit",
  },
];

export const trendingGames: Game[] = [
  { id: "g-mlbb", name: "Mobile Legends", category: "MOBA", productCount: 128, startingPrice: 15000, rating: 4.9, art: "mlbb" },
  { id: "g-valorant", name: "Valorant", category: "FPS", productCount: 96, startingPrice: 45000, rating: 4.8, art: "valorant" },
  { id: "g-pubgm", name: "PUBG Mobile", category: "Battle Royale", productCount: 84, startingPrice: 12000, rating: 4.7, art: "pubgm" },
  { id: "g-genshin", name: "Genshin Impact", category: "RPG", productCount: 71, startingPrice: 18000, rating: 4.9, art: "genshin" },
  { id: "g-hsr", name: "Honkai: Star Rail", category: "RPG", productCount: 58, startingPrice: 18000, rating: 4.8, art: "hsr" },
  { id: "g-roblox", name: "Roblox", category: "Sandbox", productCount: 63, startingPrice: 20000, rating: 4.6, art: "roblox" },
  { id: "g-ff", name: "Free Fire", category: "Battle Royale", productCount: 90, startingPrice: 10000, rating: 4.6, art: "freefire" },
  { id: "g-minecraft", name: "Minecraft", category: "Sandbox", productCount: 41, startingPrice: 55000, rating: 4.9, art: "minecraft" },
  { id: "g-eafc", name: "EA FC", category: "Sports", productCount: 37, startingPrice: 25000, rating: 4.5, art: "eafc" },
  { id: "g-steam", name: "Steam", category: "PC Platform", productCount: 210, startingPrice: 19000, rating: 4.8, art: "steam" },
];

export const flashDeals: Product[] = [
  { id: "fd-1", title: "Steam Wallet Code $10", seller: "PixelVault", price: 119000, originalPrice: 145000, discount: 18, rating: 4.9, sold: 1240, badge: "instant", art: "steam-wallet" },
  { id: "fd-2", title: "Mobile Legends 344 Diamonds", seller: "DiamondHub", price: 72000, originalPrice: 89000, discount: 19, rating: 4.8, sold: 3210, badge: "instant", art: "mlbb" },
  { id: "fd-3", title: "Valorant Points 1750 VP", seller: "AgentStore", price: 210000, originalPrice: 265000, discount: 21, rating: 4.7, sold: 860, badge: "instant", art: "valorant" },
  { id: "fd-4", title: "Genshin Impact Genesis Crystals 3200", seller: "TeyvatTrade", price: 415000, originalPrice: 490000, discount: 15, rating: 4.9, sold: 540, art: "genshin" },
  { id: "fd-5", title: "PUBG Mobile 660 UC", seller: "UCMarket", price: 129000, originalPrice: 155000, discount: 17, rating: 4.6, sold: 1980, badge: "limited", art: "pubgm" },
  { id: "fd-6", title: "Roblox 800 Robux", seller: "BloxTrade", price: 99000, originalPrice: 120000, discount: 18, rating: 4.7, sold: 720, badge: "instant", art: "roblox" },
];

export const popularTopUps: TopUpProduct[] = [
  { id: "tu-1", game: "Mobile Legends", item: "86 Diamonds", startingPrice: 19000, art: "mlbb" },
  { id: "tu-2", game: "Free Fire", item: "70 Diamonds", startingPrice: 10000, art: "freefire" },
  { id: "tu-3", game: "PUBG Mobile", item: "60 UC", startingPrice: 15000, art: "pubgm" },
  { id: "tu-4", game: "Valorant", item: "125 VP", startingPrice: 20000, art: "valorant" },
  { id: "tu-5", game: "Genshin Impact", item: "60 Genesis Crystals", startingPrice: 16000, art: "genshin" },
  { id: "tu-6", game: "Honkai: Star Rail", item: "60 Oneiric Shards", startingPrice: 16000, art: "hsr" },
  { id: "tu-7", game: "Roblox", item: "80 Robux", startingPrice: 14000, art: "roblox" },
];

export const gameKeys: GameKey[] = [
  { id: "gk-1", title: "Elden Ring", platform: "Steam", region: "Global", price: 289000, originalPrice: 445000, discount: 35, rating: 4.9, seller: "KeyForge", art: "eldenring" },
  { id: "gk-2", title: "Fortnite Founder's Pack", platform: "Epic Games", region: "Global", price: 159000, rating: 4.6, seller: "EpicTrade", art: "fortnite" },
  { id: "gk-3", title: "Red Dead Redemption 2", platform: "Rockstar", region: "Global", price: 199000, originalPrice: 349000, discount: 43, rating: 4.8, seller: "OutlawKeys", art: "rdr2" },
  { id: "gk-4", title: "Assassin's Creed Mirage", platform: "Ubisoft", region: "Global", price: 249000, originalPrice: 349000, discount: 29, rating: 4.5, seller: "UbiVault", art: "acmirage" },
  { id: "gk-5", title: "Forza Horizon 5", platform: "Xbox", region: "Global", price: 279000, originalPrice: 399000, discount: 30, rating: 4.7, seller: "DriftKeys", art: "forza" },
  { id: "gk-6", title: "Horizon Forbidden West", platform: "PlayStation", region: "Global", price: 329000, rating: 4.9, seller: "AloyStore", art: "horizonfw" },
];

export const gameAccounts: GameAccount[] = [
  { id: "ga-1", game: "Valorant", server: "SEA", rank: "Immortal 3", level: 220, skins: 145, originalOwner: true, verifiedSeller: true, price: 1250000, art: "valorant" },
  { id: "ga-2", game: "Mobile Legends", server: "Indonesia", rank: "Mythic Glory", level: 68, skins: 92, originalOwner: true, verifiedSeller: true, price: 890000, art: "mlbb" },
  { id: "ga-3", game: "Genshin Impact", server: "Asia", rank: "AR 58", level: 58, skins: 34, originalOwner: false, verifiedSeller: true, price: 2100000, art: "genshin" },
  { id: "ga-4", game: "PUBG Mobile", server: "Asia", rank: "Conqueror", level: 75, skins: 58, originalOwner: true, verifiedSeller: false, price: 650000, art: "pubgm" },
  { id: "ga-5", game: "Honkai: Star Rail", server: "Asia", rank: "TL 65", level: 65, skins: 28, originalOwner: true, verifiedSeller: true, price: 1800000, art: "hsr" },
  { id: "ga-6", game: "Free Fire", server: "Indonesia", rank: "Heroic", level: 72, skins: 110, originalOwner: true, verifiedSeller: true, price: 450000, art: "freefire" },
  { id: "ga-7", game: "Roblox", server: "Global", rank: "Premium", level: 120, skins: 200, originalOwner: true, verifiedSeller: false, price: 350000, art: "roblox" },
  { id: "ga-8", game: "Valorant", server: "SEA", rank: "Radiant", level: 310, skins: 210, originalOwner: true, verifiedSeller: true, price: 3500000, art: "valorant" },
  { id: "ga-9", game: "Mobile Legends", server: "Indonesia", rank: "Mythic V", level: 45, skins: 55, originalOwner: false, verifiedSeller: true, price: 520000, art: "mlbb" },
  { id: "ga-10", game: "Genshin Impact", server: "Asia", rank: "AR 60", level: 60, skins: 48, originalOwner: true, verifiedSeller: true, price: 4200000, art: "genshin" },
  { id: "ga-11", game: "PUBG Mobile", server: "Asia", rank: "Ace Master", level: 60, skins: 40, originalOwner: true, verifiedSeller: true, price: 480000, art: "pubgm" },
  { id: "ga-12", game: "Honkai: Star Rail", server: "America", rank: "TL 70", level: 70, skins: 35, originalOwner: false, verifiedSeller: true, price: 2500000, art: "hsr" },
];

export const boostingServices: BoostingService[] = [
  { id: "bs-1", title: "Valorant Rank Boost — Immortal to Radiant", provider: "ProBoosters ID", rating: 4.9, eta: "2-4 days", startingPrice: 150000, online: true, art: "valorant" },
  { id: "bs-2", title: "Mobile Legends Mythic Push", provider: "GlorySquad", rating: 4.8, eta: "1-2 days", startingPrice: 85000, online: true, art: "mlbb" },
  { id: "bs-3", title: "Genshin Impact Spiral Abyss Clear", provider: "AbyssMasters", rating: 4.9, eta: "Same day", startingPrice: 60000, online: false, art: "genshin" },
  { id: "bs-4", title: "PUBG Mobile Conqueror Push", provider: "SquadUp Pro", rating: 4.7, eta: "3-5 days", startingPrice: 175000, online: true, art: "pubgm" },
];

export const trustedSellers: Seller[] = [
  { id: "s-1", name: "PixelVault", verified: true, rating: 4.9, transactions: 12400, responseRate: 98, online: true, avatarArt: "emerald" },
  { id: "s-2", name: "DiamondHub", verified: true, rating: 4.8, transactions: 8600, responseRate: 96, online: true, avatarArt: "lime" },
  { id: "s-3", name: "KeyForge", verified: true, rating: 4.9, transactions: 15900, responseRate: 99, online: false, avatarArt: "green" },
  { id: "s-4", name: "ProBoosters ID", verified: true, rating: 4.8, transactions: 4300, responseRate: 95, online: true, avatarArt: "mint" },
];

export const partners: Partner[] = [
  { id: "p-1", name: "Steam" },
  { id: "p-2", name: "Riot Games" },
  { id: "p-3", name: "Garena" },
  { id: "p-4", name: "HoYoverse" },
  { id: "p-5", name: "Xbox" },
  { id: "p-6", name: "PlayStation" },
  { id: "p-7", name: "Epic Games" },
  { id: "p-8", name: "Nintendo" },
];

export const trustFeatures: TrustFeature[] = [
  { id: "tf-1", title: "Secure Transaction", description: "Every payment is protected end to end, so your money and your order are always safe.", icon: "ShieldCheck" },
  { id: "tf-2", title: "Verified Seller", description: "Sellers go through a verification process before they can list on the marketplace.", icon: "BadgeCheck" },
  { id: "tf-3", title: "Instant Delivery", description: "Digital products are delivered automatically the moment your payment is confirmed.", icon: "Zap" },
  { id: "tf-4", title: "24/7 Support", description: "Our support team is available around the clock if anything doesn't go as planned.", icon: "Headset" },
];

// --- Top Up marketplace flow (/topup, /topup/[slug]) ---

export const topupGames: TopupGame[] = [
  { id: "tg-1", slug: "mobile-legends", name: "Mobile Legends", category: "MOBA", platform: ["Android", "iOS"], rating: 4.9, startingPrice: 19000, requiresServer: true, popular: true, art: "mlbb" },
  { id: "tg-2", slug: "free-fire", name: "Free Fire", category: "Battle Royale", platform: ["Android", "iOS"], rating: 4.7, startingPrice: 10000, requiresServer: false, popular: true, art: "freefire" },
  { id: "tg-3", slug: "pubg-mobile", name: "PUBG Mobile", category: "Battle Royale", platform: ["Android", "iOS"], rating: 4.7, startingPrice: 15000, requiresServer: false, popular: true, art: "pubgm" },
  { id: "tg-4", slug: "valorant", name: "Valorant", category: "FPS", platform: ["PC"], rating: 4.8, startingPrice: 20000, requiresServer: false, popular: true, art: "valorant" },
  { id: "tg-5", slug: "genshin-impact", name: "Genshin Impact", category: "RPG", platform: ["PC", "Android", "iOS", "PS5"], rating: 4.9, startingPrice: 16000, requiresServer: true, popular: true, art: "genshin" },
  { id: "tg-6", slug: "honkai-star-rail", name: "Honkai: Star Rail", category: "RPG", platform: ["PC", "Android", "iOS"], rating: 4.8, startingPrice: 16000, requiresServer: true, popular: false, art: "hsr" },
  { id: "tg-7", slug: "roblox", name: "Roblox", category: "Sandbox", platform: ["Android", "iOS", "PC"], rating: 4.6, startingPrice: 14000, requiresServer: false, popular: true, art: "roblox" },
  { id: "tg-8", slug: "call-of-duty-mobile", name: "Call of Duty Mobile", category: "FPS", platform: ["Android", "iOS"], rating: 4.6, startingPrice: 15000, requiresServer: false, popular: false, art: "codm" },
  { id: "tg-9", slug: "ea-fc-mobile", name: "EA FC Mobile", category: "Sports", platform: ["Android", "iOS"], rating: 4.5, startingPrice: 25000, requiresServer: false, popular: false, art: "eafc" },
  { id: "tg-10", slug: "clash-of-clans", name: "Clash of Clans", category: "Strategy", platform: ["Android", "iOS"], rating: 4.6, startingPrice: 79000, requiresServer: false, popular: false, art: "coc" },
];

export const topupNominals: TopupNominal[] = [
  // Mobile Legends
  { id: "tn-mlbb-1", gameSlug: "mobile-legends", name: "86 Diamonds", price: 19000 },
  { id: "tn-mlbb-2", gameSlug: "mobile-legends", name: "172 Diamonds", price: 38000 },
  { id: "tn-mlbb-3", gameSlug: "mobile-legends", name: "257 Diamonds", price: 57000 },
  { id: "tn-mlbb-4", gameSlug: "mobile-legends", name: "344 Diamonds", price: 76000 },
  { id: "tn-mlbb-5", gameSlug: "mobile-legends", name: "514 Diamonds", price: 114000 },
  { id: "tn-mlbb-6", gameSlug: "mobile-legends", name: "Weekly Diamond Pass", price: 29000, badge: "Populer" },

  // Free Fire
  { id: "tn-ff-1", gameSlug: "free-fire", name: "70 Diamonds", price: 10000 },
  { id: "tn-ff-2", gameSlug: "free-fire", name: "140 Diamonds", price: 20000 },
  { id: "tn-ff-3", gameSlug: "free-fire", name: "355 Diamonds", price: 50000 },
  { id: "tn-ff-4", gameSlug: "free-fire", name: "720 Diamonds", price: 100000 },
  { id: "tn-ff-5", gameSlug: "free-fire", name: "Membership Mingguan", price: 30000, badge: "Populer" },

  // PUBG Mobile
  { id: "tn-pubgm-1", gameSlug: "pubg-mobile", name: "60 UC", price: 15000 },
  { id: "tn-pubgm-2", gameSlug: "pubg-mobile", name: "325 UC", price: 75000 },
  { id: "tn-pubgm-3", gameSlug: "pubg-mobile", name: "660 UC", price: 150000 },
  { id: "tn-pubgm-4", gameSlug: "pubg-mobile", name: "1800 UC", price: 400000 },

  // Valorant
  { id: "tn-val-1", gameSlug: "valorant", name: "125 VP", price: 20000 },
  { id: "tn-val-2", gameSlug: "valorant", name: "420 VP", price: 65000 },
  { id: "tn-val-3", gameSlug: "valorant", name: "700 VP", price: 105000 },
  { id: "tn-val-4", gameSlug: "valorant", name: "1750 VP", price: 250000 },

  // Genshin Impact
  { id: "tn-gi-1", gameSlug: "genshin-impact", name: "60 Genesis Crystals", price: 16000 },
  { id: "tn-gi-2", gameSlug: "genshin-impact", name: "300 Genesis Crystals", price: 79000 },
  { id: "tn-gi-3", gameSlug: "genshin-impact", name: "980 Genesis Crystals", price: 249000 },
  { id: "tn-gi-4", gameSlug: "genshin-impact", name: "Welkin Moon (30 hari)", price: 79000, badge: "Populer" },

  // Honkai: Star Rail
  { id: "tn-hsr-1", gameSlug: "honkai-star-rail", name: "60 Oneiric Shards", price: 16000 },
  { id: "tn-hsr-2", gameSlug: "honkai-star-rail", name: "300 Oneiric Shards", price: 79000 },
  { id: "tn-hsr-3", gameSlug: "honkai-star-rail", name: "980 Oneiric Shards", price: 249000 },
  { id: "tn-hsr-4", gameSlug: "honkai-star-rail", name: "Express Supply Pass", price: 79000, badge: "Populer" },

  // Roblox
  { id: "tn-rbx-1", gameSlug: "roblox", name: "80 Robux", price: 14000 },
  { id: "tn-rbx-2", gameSlug: "roblox", name: "400 Robux", price: 69000 },
  { id: "tn-rbx-3", gameSlug: "roblox", name: "800 Robux", price: 135000 },
  { id: "tn-rbx-4", gameSlug: "roblox", name: "1700 Robux", price: 275000 },

  // Call of Duty Mobile
  { id: "tn-codm-1", gameSlug: "call-of-duty-mobile", name: "80 CP", price: 15000 },
  { id: "tn-codm-2", gameSlug: "call-of-duty-mobile", name: "420 CP", price: 75000 },
  { id: "tn-codm-3", gameSlug: "call-of-duty-mobile", name: "880 CP", price: 150000 },
  { id: "tn-codm-4", gameSlug: "call-of-duty-mobile", name: "Battle Pass", price: 99000, badge: "Populer" },

  // EA FC Mobile
  { id: "tn-eafcm-1", gameSlug: "ea-fc-mobile", name: "100 FC Points", price: 25000 },
  { id: "tn-eafcm-2", gameSlug: "ea-fc-mobile", name: "500 FC Points", price: 115000 },
  { id: "tn-eafcm-3", gameSlug: "ea-fc-mobile", name: "1050 FC Points", price: 225000 },

  // Clash of Clans
  { id: "tn-coc-1", gameSlug: "clash-of-clans", name: "500 Gems", price: 79000 },
  { id: "tn-coc-2", gameSlug: "clash-of-clans", name: "1200 Gems", price: 179000 },
  { id: "tn-coc-3", gameSlug: "clash-of-clans", name: "2500 Gems", price: 349000 },
  { id: "tn-coc-4", gameSlug: "clash-of-clans", name: "Gold Pass", price: 99000, badge: "Populer" },
];
