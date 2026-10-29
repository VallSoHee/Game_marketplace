import { cn } from "@/lib/utils";

export const TOPUP_CATEGORIES = ["All", "Mobile", "PC", "Console", "Popular", "MOBA", "FPS", "RPG"] as const;

export type TopupCategory = (typeof TOPUP_CATEGORIES)[number];

type TopupCategoryFilterProps = {
  active: TopupCategory;
  onSelect: (category: TopupCategory) => void;
};

export function TopupCategoryFilter({ active, onSelect }: TopupCategoryFilterProps) {
  return (
    <div className="scroll-rail -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
      {TOPUP_CATEGORIES.map((category) => {
        const isActive = category === active;
        return (
          <button
            key={category}
            type="button"
            aria-pressed={isActive}
            onClick={() => onSelect(category)}
            className={cn(
              "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              isActive
                ? "border-green/50 bg-green/15 text-green shadow-[0_0_16px_rgba(34,197,94,0.18)]"
                : "border-border bg-card text-ink-secondary hover:border-green/30 hover:text-ink"
            )}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
