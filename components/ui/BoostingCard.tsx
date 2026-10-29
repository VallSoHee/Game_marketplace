import { Clock, Star } from "lucide-react";
import type { BoostingService } from "@/types/marketplace";
import { formatIDR, cn } from "@/lib/utils";
import { Artwork } from "@/components/ui/Artwork";
import { Button } from "@/components/ui/Button";

type BoostingCardProps = {
  service: BoostingService;
};

export function BoostingCard({ service }: BoostingCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-[20px] border border-border bg-card transition-all duration-200 hover:-translate-y-1 hover:border-green/40">
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Artwork art={service.art} className="h-full w-full" iconClassName="h-9 w-9" />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-[15px] font-semibold leading-snug text-ink">{service.title}</p>
        <div className="mt-1.5 flex items-center gap-2 text-xs text-ink-secondary">
          <span
            className={cn("h-2 w-2 rounded-full", service.online ? "bg-green" : "bg-muted")}
            aria-hidden
          />
          <span>{service.provider}</span>
          <span className="flex items-center gap-1">
            <Star className="h-3 w-3 fill-lime text-lime" />
            {service.rating}
          </span>
        </div>
        <div className="mt-3 flex items-center gap-1.5 text-xs text-ink-secondary">
          <Clock className="h-3.5 w-3.5" />
          Estimated {service.eta}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-[11px] text-muted">Starting from</p>
            <p className="text-base font-semibold text-green">{formatIDR(service.startingPrice)}</p>
          </div>
          <Button variant="secondary" size="sm">
            Order
          </Button>
        </div>
      </div>
    </div>
  );
}
