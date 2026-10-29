import { BadgeCheck, ShieldCheck } from "lucide-react";
import type { GameAccount } from "@/types/marketplace";
import { formatIDR } from "@/lib/utils";
import { Artwork } from "@/components/ui/Artwork";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

type AccountCardProps = {
  account: GameAccount;
};

export function AccountCard({ account }: AccountCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-[20px] border border-border bg-card p-4 sm:flex-row sm:items-center">
      <Artwork art={account.art} className="h-24 w-full shrink-0 rounded-2xl sm:h-20 sm:w-32" iconClassName="h-8 w-8" />

      <div className="flex-1">
        <div className="flex items-center gap-2">
          <p className="text-[15px] font-semibold text-ink">{account.game} Account</p>
          {account.verifiedSeller ? (
            <Badge variant="green" className="rounded-lg">
              <ShieldCheck className="h-3 w-3" /> Verified Seller
            </Badge>
          ) : null}
        </div>
        <p className="mt-1 text-sm text-ink-secondary">
          {account.server} &middot; {account.rank} &middot; Level {account.level}
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-ink-secondary">
          <span>{account.skins} skins</span>
          {account.originalOwner ? (
            <span className="flex items-center gap-1 text-lime">
              <BadgeCheck className="h-3.5 w-3.5" /> Original Owner
            </span>
          ) : (
            <span>Transferred Owner</span>
          )}
        </div>
      </div>

      <div className="flex flex-row items-center justify-between gap-3 sm:flex-col sm:items-end">
        <p className="text-base font-semibold text-green sm:text-lg">{formatIDR(account.price)}</p>
        <Button variant="secondary" size="sm">
          View Details
        </Button>
      </div>
    </div>
  );
}
