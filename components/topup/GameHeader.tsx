import { ShieldCheck, Star, Zap } from "lucide-react";
import type { TopupGame } from "@/types/marketplace";
import { cn } from "@/lib/utils";
import { Artwork } from "@/components/ui/Artwork";
import { Badge } from "@/components/ui/Badge";

type GameHeaderProps = {
  game: TopupGame;
};

export function GameHeader({ game }: GameHeaderProps) {
  return (
    <section className="grid gap-6 rounded-[24px] border border-border bg-card p-5 sm:p-6 lg:grid-cols-[220px_1fr] lg:items-center">
      <Artwork
        art={game.art}
        className="aspect-[4/3] w-full rounded-2xl lg:aspect-square lg:h-full"
        iconClassName="h-14 w-14"
      />

      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="green">Top Up</Badge>
          <Badge variant="outline">{game.platform.join(" / ")}</Badge>
        </div>

        <div>
          <h1 className="text-2xl font-bold tracking-tight text-ink sm:text-[28px]">{game.name}</h1>
          <p className="text-sm text-ink-secondary">Top Up {game.category}</p>
        </div>

        <div className="flex items-center gap-1 text-sm">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={cn("h-4 w-4", index < Math.round(game.rating) ? "fill-lime text-lime" : "text-border")}
            />
          ))}
          <span className="ml-1 text-ink-secondary">{game.rating.toFixed(1)}</span>
        </div>

        <div className="flex flex-wrap gap-4 pt-1 text-xs text-ink-secondary sm:text-sm">
          <span className="flex items-center gap-1.5">
            <Zap className="h-4 w-4 text-green" />
            Fast delivery
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-green" />
            Secure transaction
          </span>
          <span className="flex items-center gap-1.5">
            <Star className="h-4 w-4 fill-lime text-lime" />
            Verified product
          </span>
        </div>
      </div>
    </section>
  );
}
