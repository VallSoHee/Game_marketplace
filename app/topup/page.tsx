import type { Metadata } from "next";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TopupHero } from "@/components/topup/TopupHero";
import { TopupExplorer } from "@/components/topup/TopupExplorer";
import { topupGames } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Top Up Game — Trusted Marketplace",
  description: "Top up game favorit kamu dengan cepat dan aman. Instant, aman, dan harga terjangkau.",
};

export default function TopupMarketplacePage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="mx-auto flex w-full max-w-[1280px] flex-1 flex-col gap-10 px-4 py-8 sm:px-6 sm:py-12">
        <TopupHero />
        <TopupExplorer games={topupGames} />
      </main>

      <Footer />
    </>
  );
}
