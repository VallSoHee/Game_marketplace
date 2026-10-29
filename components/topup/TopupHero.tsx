import { Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Artwork } from "@/components/ui/Artwork";
import { Badge } from "@/components/ui/Badge";

export function TopupHero() {
  return (
    <section className="relative overflow-hidden rounded-[24px] border border-border bg-gradient-to-br from-green-dark/20 via-base-secondary to-base">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_18%_25%,rgba(34,197,94,0.22),transparent_55%),radial-gradient(circle_at_88%_80%,rgba(132,204,22,0.14),transparent_50%)]"
        aria-hidden
      />

      <div className="relative grid gap-8 px-6 py-10 sm:px-10 sm:py-12 lg:min-h-[320px] lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-16">
        <div className="space-y-5">
          <Badge variant="lime">
            <Sparkles className="h-3 w-3" />
            Top Up Game Jadi Lebih Mudah
          </Badge>
          <h1 className="max-w-lg text-[32px] font-bold leading-[1.1] tracking-tight text-ink sm:text-[44px]">
            Top Up Game Favoritmu
          </h1>
          <p className="flex flex-wrap items-center gap-2 text-sm text-ink-secondary sm:text-base">
            <span className="inline-flex items-center gap-1.5 font-medium text-green">
              <Zap className="h-4 w-4" />
              Instant
            </span>
            <span aria-hidden>•</span>
            <span>Aman</span>
            <span aria-hidden>•</span>
            <span>Harga Terjangkau</span>
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button href="#browse" size="lg">
              Explore Games
            </Button>
            <Button href="#browse" variant="outline" size="lg">
              View Promo
            </Button>
          </div>
        </div>

        <div className="relative mx-auto h-[180px] w-full max-w-sm sm:h-[220px] lg:h-[260px]">
          <div className="absolute inset-0 rounded-[24px] bg-green/20 blur-3xl" aria-hidden />
          <Artwork
            art="mlbb"
            className="relative h-full w-full rounded-[24px] border border-border"
            iconClassName="h-16 w-16"
          />
        </div>
      </div>
    </section>
  );
}
