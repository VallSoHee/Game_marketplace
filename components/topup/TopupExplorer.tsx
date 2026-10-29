"use client";

import { useMemo, useState } from "react";
import type { TopupGame } from "@/types/marketplace";
import { TopupSearch } from "@/components/topup/TopupSearch";
import { TopupCategoryFilter, type TopupCategory } from "@/components/topup/TopupCategoryFilter";
import { GameTopupGrid } from "@/components/topup/GameTopupGrid";
import { SectionHeader } from "@/components/ui/SectionHeader";

function matchesCategory(game: TopupGame, category: TopupCategory): boolean {
  switch (category) {
    case "All":
      return true;
    case "Mobile":
      return game.platform.includes("Android") || game.platform.includes("iOS");
    case "PC":
      return game.platform.includes("PC");
    case "Console":
      return game.platform.some((platform) => platform === "PS5" || platform === "Xbox" || platform === "PlayStation");
    case "Popular":
      return Boolean(game.popular);
    default:
      return game.category === category;
  }
}

type TopupExplorerProps = {
  games: TopupGame[];
};

export function TopupExplorer({ games }: TopupExplorerProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<TopupCategory>("All");

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return games.filter((game) => {
      const inCategory = matchesCategory(game, category);
      const inQuery =
        normalizedQuery.length === 0 ||
        game.name.toLowerCase().includes(normalizedQuery) ||
        game.category.toLowerCase().includes(normalizedQuery);
      return inCategory && inQuery;
    });
  }, [games, query, category]);

  const popular = useMemo(() => filtered.filter((game) => game.popular), [filtered]);

  return (
    <div id="browse" className="scroll-mt-24 space-y-10">
      <div className="space-y-4">
        <TopupSearch value={query} onChange={setQuery} />
        <TopupCategoryFilter active={category} onSelect={setCategory} />
      </div>

      {popular.length > 0 ? (
        <section className="space-y-5">
          <SectionHeader title="Popular Top Up" subtitle="Game yang paling sering di-top up" />
          <GameTopupGrid games={popular} />
        </section>
      ) : null}

      <section className="space-y-5">
        <SectionHeader title="All Games" subtitle={`${filtered.length} game tersedia`} />
        <GameTopupGrid games={filtered} emptyMessage="Game tidak ditemukan. Coba kata kunci lain." />
      </section>
    </div>
  );
}
