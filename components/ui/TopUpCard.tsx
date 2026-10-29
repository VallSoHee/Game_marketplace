import { Zap } from "lucide-react";
import type { TopUpProduct } from "@/types/marketplace";
import { formatIDR } from "@/lib/utils";
import { Artwork } from "@/components/ui/Artwork";

type TopUpCardProps = {
  topUp: TopUpProduct;
};

export function TopUpCard({ topUp }: TopUpCardProps) {
  return (
    <div className="group flex items-center gap-3 rounded-2xl border border-border bg-card p-3 transition-colors hover:border-green/40">
      <Artwork
        art={topUp.art}
        className="h-14 w-14 shrink-0 rounded-xl"
        iconClassName="h-6 w-6"
      />
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-ink">{topUp.game}</p>
        <p className="truncate text-xs text-ink-secondary">{topUp.item}</p>
        <div className="mt-1 flex items-center justify-between gap-2">
          <p className="text-sm font-semibold text-green">
            {formatIDR(topUp.startingPrice)}
          </p>
          <span className="flex items-center gap-1 text-[11px] text-lime">
            <Zap className="h-3 w-3" />
            Instant
          </span>
        </div>
      </div>
    </div>
  );
}
