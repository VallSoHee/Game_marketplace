import Link from "next/link";
import type { Category } from "@/types/marketplace";
import { getIcon } from "@/lib/icon-map";

type CategoryCardProps = {
  category: Category;
};

export function CategoryCard({ category }: CategoryCardProps) {
  const Icon = getIcon(category.icon);

  return (
    <Link
      href={`/category/${category.slug}`}
      className="group flex flex-col items-center gap-2.5 rounded-2xl border border-transparent p-3 text-center transition-colors hover:border-green/30 hover:bg-surface"
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-surface text-green transition-colors group-hover:bg-green/15">
        {/* eslint-disable-next-line react-hooks/static-components -- getIcon returns a stable
            reference from a fixed lookup table; it does not create a new component on each render. */}
        <Icon className="h-6 w-6" strokeWidth={1.75} />
      </span>
      <span className="text-xs font-medium text-ink-secondary group-hover:text-ink">
        {category.label}
      </span>
    </Link>
  );
}
