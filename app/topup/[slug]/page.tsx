import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import type { Metadata } from "next";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GameHeader } from "@/components/topup/GameHeader";
import { GameInfo } from "@/components/topup/GameInfo";
import { PurchaseFlow } from "@/components/topup/PurchaseFlow";
import { TrustFeatures } from "@/components/topup/TrustFeatures";
import { RelatedGames } from "@/components/topup/RelatedGames";
import { topupGames, topupNominals } from "@/lib/mock-data";

type RouteParams = {
  slug: string;
};

export function generateStaticParams(): RouteParams[] {
  return topupGames.map((game) => ({ slug: game.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const game = topupGames.find((candidate) => candidate.slug === slug);

  if (!game) {
    return { title: "Game Not Found — Trusted Marketplace" };
  }

  return {
    title: `Top Up ${game.name} — Trusted Marketplace`,
    description: `Top up ${game.name} instan, aman, dan harga terjangkau.`,
  };
}

export default async function TopupGameDetailPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const game = topupGames.find((candidate) => candidate.slug === slug);

  if (!game) {
    notFound();
  }

  const products = topupNominals.filter((product) => product.gameSlug === game.slug);
  const relatedGames = topupGames.filter((candidate) => candidate.slug !== game.slug).slice(0, 6);

  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="mx-auto flex w-full max-w-[1280px] flex-1 flex-col gap-8 px-4 py-8 sm:px-6 sm:py-10">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-ink-secondary">
          <Link href="/" className="transition-colors hover:text-ink">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-muted" aria-hidden />
          <Link href="/topup" className="transition-colors hover:text-ink">
            Top Up
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-muted" aria-hidden />
          <span className="text-ink">{game.name}</span>
        </nav>

        <GameHeader game={game} />
        <GameInfo game={game} />
        <PurchaseFlow game={game} products={products} />
        <TrustFeatures />
        <RelatedGames games={relatedGames} />
      </main>

      <Footer />
    </>
  );
}
