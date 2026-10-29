"use client";

import { useState } from "react";
import { Heart, Star } from "lucide-react";
import type { Game } from "@/types/marketplace";
import { formatIDR } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { Artwork } from "@/components/ui/Artwork";

type GameCardProps = {
  game: Game;
};

export function GameCard({ game }: GameCardProps) {
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <div className="group relative w-[168px] shrink-0 rounded-[20px] border border-border bg-card p-2.5 transition-all duration-200 hover:-translate-y-1 hover:border-green/40 hover:shadow-[0_12px_32px_-12px_rgba(34,197,94,0.25)] sm:w-[190px]">
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl">
        <Artwork
          art={game.art}
          className="h-full w-full transition-transform duration-500 group-hover:scale-110"
          iconClassName="h-9 w-9"
        />
        <button
          type="button"
          aria-label={wishlisted ? `Remove ${game.name} from wishlist` : `Add ${game.name} to wishlist`}
          aria-pressed={wishlisted}
          onClick={() => setWishlisted((prev) => !prev)}
          className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-base/60 backdrop-blur-sm transition-colors hover:bg-base/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green/70"
        >
          <Heart
            className={cn("h-4 w-4", wishlisted ? "fill-green text-green" : "text-ink")}
          />
        </button>
      </div>
      <div className="mt-3 space-y-1 px-0.5">
        <p className="truncate text-[15px] font-semibold text-ink">{game.name}</p>
        <div className="flex items-center justify-between text-xs text-ink-secondary">
          <span>{game.category}</span>
          <span className="flex items-center gap-1">
            <Star className="h-3 w-3 fill-lime text-lime" />
            {game.rating}
          </span>
        </div>
        <p className="text-xs text-muted">{game.productCount} products</p>
        <p className="pt-0.5 text-sm font-semibold text-green">
          From {formatIDR(game.startingPrice)}
        </p>
      </div>
    </div>
  );
}
