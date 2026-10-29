import type { Metadata } from "next";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AccountHero } from "@/components/account/AccountHero";
import { AccountExplorer } from "@/components/account/AccountExplorer";
import { gameAccounts } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Game Accounts — Trusted Marketplace",
  description: "Beli akun game premium dari penjual terverifikasi. Original owner, garansi aman.",
};

export default function AccountMarketplacePage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="mx-auto flex w-full max-w-[1280px] flex-1 flex-col gap-10 px-4 py-8 sm:px-6 sm:py-12">
        <AccountHero />
        <AccountExplorer accounts={gameAccounts} />
      </main>

      <Footer />
    </>
  );
}