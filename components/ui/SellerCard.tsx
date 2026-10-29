import { BadgeCheck, Star } from "lucide-react";
import type { Seller } from "@/types/marketplace";
import { formatCount, cn } from "@/lib/utils";
import { Artwork } from "@/components/ui/Artwork";
import { Button } from "@/components/ui/Button";

type SellerCardProps = {
  seller: Seller;
};

export function SellerCard({ seller }: SellerCardProps) {
  return (
    <div className="flex flex-col rounded-[20px] border border-border bg-card p-5 transition-all duration-200 hover:-translate-y-1 hover:border-green/40 hover:shadow-[0_12px_32px_-12px_rgba(34,197,94,0.25)]">
      <div className="flex items-center gap-3">
        <div className="relative h-12 w-12 shrink-0">
          <Artwork art={seller.avatarArt} className="h-full w-full rounded-full" iconClassName="h-5 w-5" />
          <span
            className={cn(
              "absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-card",
              seller.online ? "bg-green" : "bg-muted"
            )}
            aria-hidden
          />
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <p className="truncate text-[15px] font-semibold text-ink">{seller.name}</p>
            {seller.verified ? <BadgeCheck className="h-4 w-4 shrink-0 text-green" /> : null}
          </div>
          <p className="text-xs text-ink-secondary">
            {seller.online ? "Online now" : "Offline"}
          </p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2 rounded-2xl bg-surface p-3 text-center">
        <div>
          <p className="flex items-center justify-center gap-1 text-sm font-semibold text-ink">
            <Star className="h-3.5 w-3.5 fill-lime text-lime" />
            {seller.rating}
          </p>
          <p className="mt-0.5 text-[11px] text-muted">Rating</p>
        </div>
        <div className="border-x border-border">
          <p className="text-sm font-semibold text-ink">{formatCount(seller.transactions)}</p>
          <p className="mt-0.5 text-[11px] text-muted">Transactions</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-ink">{seller.responseRate}%</p>
          <p className="mt-0.5 text-[11px] text-muted">Response</p>
        </div>
      </div>

      <Button variant="secondary" size="sm" className="mt-4 w-full">
        View Store
      </Button>
    </div>
  );
}
