import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

import { HeroCarousel } from "@/components/home/HeroCarousel";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { TopupGameEntry } from "@/components/home/TopupGameEntry";
import { TrendingGames } from "@/components/home/TrendingGames";
import { FlashDeals } from "@/components/home/FlashDeals";
import { PopularTopup } from "@/components/home/PopularTopup";
import { GameKeys } from "@/components/home/GameKeys";
import { AccountMarketplace } from "@/components/home/AccountMarketplace";
import { BoostingServices } from "@/components/home/BoostingServices";
import { TrustedSellers } from "@/components/home/TrustedSellers";
import { OfficialPartners } from "@/components/home/OfficialPartners";
import { WhyTrusted } from "@/components/home/WhyTrusted";
import { SellerCTA } from "@/components/home/SellerCTA";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="mx-auto flex w-full max-w-[1280px] flex-1 flex-col gap-14 px-4 py-8 sm:px-6 sm:py-12 lg:gap-16">
        <HeroCarousel />
        <CategoryGrid />
        <TopupGameEntry />
        <TrendingGames />
        <FlashDeals />
        <PopularTopup />
        <GameKeys />
        <AccountMarketplace />
        <BoostingServices />
        <TrustedSellers />
        <OfficialPartners />
        <WhyTrusted />
        <SellerCTA />
      </main>

      <Footer />
    </>
  );
}
