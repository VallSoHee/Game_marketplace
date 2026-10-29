import { Star, Zap } from "lucide-react";
import type { Product } from "@/types/marketplace";
import { formatIDR, formatCount } from "@/lib/utils";
import { Artwork } from "@/components/ui/Artwork";
import { Badge } from "@/components/ui/Badge";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group w-[176px] shrink-0 rounded-[20px] border border-border bg-card p-2.5 transition-all duration-200 hover:-translate-y-1 hover:border-green/40 hover:shadow-[0_12px_32px_-12px_rgba(34,197,94,0.25)] sm:w-[198px]">
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
        <Artwork
          art={product.art}
          className="h-full w-full transition-transform duration-500 group-hover:scale-110"
          iconClassName="h-9 w-9"
        />
        {product.discount ? (
          <Badge variant="danger" className="absolute left-2 top-2 rounded-lg">
            -{product.discount}%
          </Badge>
        ) : null}
        {product.badge === "instant" ? (
          <Badge variant="green" className="absolute right-2 top-2 rounded-lg">
            <Zap className="h-3 w-3" /> Instant
          </Badge>
        ) : null}
      </div>
      <div className="mt-3 space-y-1 px-0.5">
        <p className="text-xs text-muted">{product.seller}</p>
        <p className="line-clamp-2 text-sm font-medium leading-snug text-ink">
          {product.title}
        </p>
        <div className="flex items-baseline gap-2 pt-0.5">
          <span className="text-[15px] font-semibold text-green">
            {formatIDR(product.price)}
          </span>
          {product.originalPrice ? (
            <span className="text-xs text-muted line-through">
              {formatIDR(product.originalPrice)}
            </span>
          ) : null}
        </div>
        <div className="flex items-center justify-between text-xs text-ink-secondary">
          <span className="flex items-center gap-1">
            <Star className="h-3 w-3 fill-lime text-lime" />
            {product.rating}
          </span>
          <span>{formatCount(product.sold)} sold</span>
        </div>
      </div>
    </div>
  );
}
