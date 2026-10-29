import { Check } from "lucide-react";
import type { TopupNominal } from "@/types/marketplace";
import { cn, formatIDR } from "@/lib/utils";

type TopupProductCardProps = {
  product: TopupNominal;
  selected: boolean;
  onSelect: () => void;
};

export function TopupProductCard({ product, selected, onSelect }: TopupProductCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={cn(
        "relative flex min-h-[92px] flex-col items-start justify-center gap-1 rounded-2xl border p-3.5 text-left transition-all duration-200",
        selected
          ? "border-green bg-green/10 shadow-[0_0_20px_rgba(34,197,94,0.18)]"
          : "border-border bg-card hover:border-green/30"
      )}
    >
      {selected ? (
        <span className="absolute right-2.5 top-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-green text-base">
          <Check className="h-3.5 w-3.5" strokeWidth={3} />
        </span>
      ) : null}

      {product.badge ? (
        <span className="rounded-full bg-lime/15 px-2 py-0.5 text-[10px] font-semibold text-lime">
          {product.badge}
        </span>
      ) : null}

      <p className="pr-6 text-sm font-semibold text-ink">{product.name}</p>
      <p className={cn("text-sm font-semibold", selected ? "text-green" : "text-ink-secondary")}>
        {formatIDR(product.price)}
      </p>
      {product.originalPrice ? (
        <p className="text-xs text-muted line-through">{formatIDR(product.originalPrice)}</p>
      ) : null}
    </button>
  );
}
