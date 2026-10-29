"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { GameAccount } from "@/types/marketplace";
import { AccountCard } from "@/components/ui/AccountCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

type AccountExplorerProps = {
  accounts: GameAccount[];
};

export function AccountExplorer({ accounts }: AccountExplorerProps) {
  const [query, setQuery] = useState("");
  const [gameFilter, setGameFilter] = useState("All");

  const games = useMemo(() => {
    const unique = Array.from(new Set(accounts.map((a) => a.game)));
    return ["All", ...unique];
  }, [accounts]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return accounts.filter((account) => {
      const inGame = gameFilter === "All" || account.game === gameFilter;
      const inQuery =
        q.length === 0 ||
        account.game.toLowerCase().includes(q) ||
        account.rank.toLowerCase().includes(q) ||
        account.server.toLowerCase().includes(q);
      return inGame && inQuery;
    });
  }, [accounts, query, gameFilter]);

  const verified = useMemo(() => filtered.filter((a) => a.verifiedSeller), [filtered]);

  return (
    <div id="browse" className="scroll-mt-24 space-y-10">
      {/* Search */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
          <input
            type="text"
            placeholder="Cari game, rank, server..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="h-12 w-full rounded-[14px] border border-border bg-surface pl-12 pr-4 text-sm text-ink placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green/60 focus-visible:ring-offset-2 focus-visible:ring-offset-base"
          />
        </div>

        {/* Game filter pills */}
        <div className="scroll-rail -mx-4 flex gap-2 overflow-x-auto px-4 pb-1">
          {games.map((game) => (
            <button
              key={game}
              onClick={() => setGameFilter(game)}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                game === gameFilter
                  ? "border-green bg-green/10 text-green"
                  : "border-border bg-surface text-ink-secondary hover:border-green/40 hover:text-ink",
              )}
            >
              {game}
            </button>
          ))}
        </div>
      </div>

      {/* Verified seller accounts */}
      {verified.length > 0 ? (
        <section className="space-y-5">
          <SectionHeader title="Verified Sellers" subtitle="Akun dari penjual terverifikasi" />
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
            {verified.map((account) => (
              <AccountCard key={account.id} account={account} />
            ))}
          </div>
        </section>
      ) : null}

      {/* All accounts */}
      <section className="space-y-5">
        <SectionHeader title="Semua Akun" subtitle={`${filtered.length} akun tersedia`} />
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
            {filtered.map((account) => (
              <AccountCard key={account.id} account={account} />
            ))}
          </div>
        ) : (
          <div className="flex min-h-[200px] items-center justify-center rounded-[20px] border border-border bg-card">
            <p className="text-sm text-muted">Akun tidak ditemukan. Coba kata kunci lain.</p>
          </div>
        )}
      </section>
    </div>
  );
}