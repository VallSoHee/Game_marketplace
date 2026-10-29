import type { TopupNominal } from "@/types/marketplace";
import { TopupProductCard } from "@/components/topup/TopupProductCard";

type TopupProductGridProps = {
  products: TopupNominal[];
  selectedId: string | null;
  onSelect: (id: string) => void;
};

export function TopupProductGrid({ products, selectedId, onSelect }: TopupProductGridProps) {
  return (
    <section className="space-y-4 rounded-[24px] border border-border bg-card p-5 sm:p-6">
      <h2 className="text-base font-semibold text-ink">Pilih Nominal</h2>
      <div role="radiogroup" aria-label="Pilih nominal top up" className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {products.map((product) => (
          <TopupProductCard
            key={product.id}
            product={product}
            selected={product.id === selectedId}
            onSelect={() => onSelect(product.id)}
          />
        ))}
      </div>
    </section>
  );
}
