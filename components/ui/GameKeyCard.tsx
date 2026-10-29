import { ShoppingCart, Star } from "lucide-react";
import type { GameKey } from "@/types/marketplace";
import { formatIDR } from "@/lib/utils";
import { Artwork } from "@/components/ui/Artwork";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

type GameKeyCardProps = {
  gameKey: GameKey;
};

export function GameKeyCard({ gameKey }: GameKeyCardProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-[20px] border border-border bg-card transition-all duration-200 hover:-translate-y-1 hover:border-green/40 hover:shadow-[0_12px_32px_-12px_rgba(34,197,94,0.25)]">
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Artwork
          art={gameKey.art}
          className="h-full w-full transition-transform duration-500 group-hover:scale-110"
          iconClassName="h-10 w-10"
        />
        <div className="absolute left-2.5 top-2.5 flex items-center gap-1.5">
          <Badge variant="neutral" className="rounded-lg bg-base/70">
            {gameKey.platform}
          </Badge>
          <Badge variant="outline" className="rounded-lg bg-base/70">
            {gameKey.region}
          </Badge>
        </div>
        {gameKey.discount ? (
          <Badge variant="danger" className="absolute right-2.5 top-2.5 rounded-lg">
            -{gameKey.discount}%
          </Badge>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-[15px] font-semibold text-ink">{gameKey.title}</p>
        <p className="mt-1 text-xs text-ink-secondary">Sold by {gameKey.seller}</p>
        <div className="mt-3 flex items-center justify-between">
          <div>
            <p className="text-base font-semibold text-green">{formatIDR(gameKey.price)}</p>
            {gameKey.originalPrice ? (
              <p className="text-xs text-muted line-through">{formatIDR(gameKey.originalPrice)}</p>
            ) : null}
          </div>
          <span className="flex items-center gap-1 text-xs text-ink-secondary">
            <Star className="h-3.5 w-3.5 fill-lime text-lime" />
            {gameKey.rating}
          </span>
        </div>
        <Button variant="secondary" size="sm" className="mt-4 w-full">
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
