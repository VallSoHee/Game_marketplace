import { ShieldCheck } from "lucide-react";
import type { TopupGame, TopupNominal } from "@/types/marketplace";
import { Button } from "@/components/ui/Button";
import { formatIDR } from "@/lib/utils";

export const SERVICE_FEE = 1000;

type OrderSummaryProps = {
  game: TopupGame;
  product: TopupNominal | null;
  canContinue: boolean;
};

export function OrderSummary({ game, product, canContinue }: OrderSummaryProps) {
  const total = product ? product.price + SERVICE_FEE : 0;

  return (
    <div className="space-y-4 rounded-[24px] border border-border bg-card p-5 sm:p-6">
      <h2 className="text-base font-semibold text-ink">Order Summary</h2>

      <div className="space-y-1 border-b border-border pb-4">
        <p className="text-sm font-medium text-ink">{game.name}</p>
        <p className="text-sm text-ink-secondary">{product ? product.name : "Pilih nominal top up"}</p>
      </div>

      <div className="space-y-2 border-b border-border pb-4 text-sm">
        <div className="flex items-center justify-between text-ink-secondary">
          <span>Price</span>
          <span className="text-ink">{product ? formatIDR(product.price) : "—"}</span>
        </div>
        <div className="flex items-center justify-between text-ink-secondary">
          <span>Service Fee</span>
          <span className="text-ink">{product ? formatIDR(SERVICE_FEE) : "—"}</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-ink-secondary">Total</span>
        <span className="text-lg font-bold text-green">{formatIDR(total)}</span>
      </div>

      <Button size="lg" className="w-full" disabled={!canContinue}>
        Continue
      </Button>

      <p className="flex items-center justify-center gap-1.5 text-center text-xs text-muted">
        <ShieldCheck className="h-3.5 w-3.5 text-green" />
        Transaksi aman &amp; terenkripsi
      </p>
    </div>
  );
}
