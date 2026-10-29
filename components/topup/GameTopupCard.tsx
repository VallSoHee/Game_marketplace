import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";
import type { TopupGame } from "@/types/marketplace";
import { cn, formatIDR } from "@/lib/utils";
import { Artwork } from "@/components/ui/Artwork";

type GameTopupCardProps = {
  game: TopupGame;
  className?: string;
};

/**
 * Reusable, fully-clickable Top Up game card. Navigates to /topup/[slug].
 * Width is controlled by the parent (grid cell or fixed-width rail wrapper).
 */
export function GameTopupCard({ game, className }: GameTopupCardProps) {
  return (
    <Link
      href={`/topup/${game.slug}`}
      className={cn(
        "group relative block h-full rounded-[20px] border border-border bg-card p-2.5 transition-all duration-200 hover:-translate-y-1 hover:border-green/40 hover:shadow-[0_12px_32px_-12px_rgba(34,197,94,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green/60",
        className
      )}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
        <Artwork
          art={game.art}
          className="h-full w-full transition-transform duration-300 group-hover:scale-[1.04]"
          iconClassName="h-9 w-9"
        />
        <span className="absolute left-2 top-2 flex items-center gap-1 rounded-full bg-base/70 px-2 py-1 text-[10px] font-semibold text-lime backdrop-blur-sm">
          <Zap className="h-3 w-3" />
          Instant
        </span>
      </div>
      <div className="mt-3 space-y-1 px-0.5 pb-0.5">
        <p className="truncate text-[15px] font-semibold text-ink">{game.name}</p>
        <p className="truncate text-xs text-ink-secondary">
          {game.category} • {game.platform.join("/")}
        </p>
        <div className="flex items-end justify-between pt-1">
          <div>
            <p className="text-[11px] text-muted">Mulai dari</p>
            <p className="text-sm font-semibold text-green">{formatIDR(game.startingPrice)}</p>
          </div>
          <ArrowRight className="h-4 w-4 shrink-0 text-ink-secondary transition-transform duration-200 group-hover:translate-x-1 group-hover:text-green" />
        </div>
      </div>
    </Link>
  );
}
