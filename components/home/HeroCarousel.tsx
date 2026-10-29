"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { banners } from "@/lib/mock-data";
import { Button } from "@/components/ui/Button";
import { Artwork } from "@/components/ui/Artwork";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const banner = banners[index];

  const goTo = (next: number) => {
    setIndex((next + banners.length) % banners.length);
  };

  return (
    <section className="relative overflow-hidden rounded-[24px] border border-border bg-base-secondary">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(34,197,94,0.16),transparent_55%),radial-gradient(circle_at_85%_75%,rgba(132,204,22,0.12),transparent_50%)]"
        aria-hidden
      />

      <div className="relative grid gap-8 px-6 py-10 sm:px-10 sm:py-14 lg:grid-cols-2 lg:items-center lg:gap-6 lg:py-20">
        {/* Left column */}
        <div key={banner.id} className="animate-fade-in space-y-5">
          <Badge variant="green">{banner.discount ?? "Featured"}</Badge>
          <h1 className="max-w-md text-[38px] font-bold leading-[1.08] tracking-tight text-ink sm:text-[50px]">
            {banner.title}
          </h1>
          <p className="max-w-sm text-[15px] leading-relaxed text-ink-secondary sm:text-base">
            {banner.subtitle}
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button size="lg">
              {banner.ctaLabel}
              <ArrowRight className="h-4 w-4" />
            </Button>
            {banner.secondaryCtaLabel ? (
              <Button variant="outline" size="lg">
                {banner.secondaryCtaLabel}
              </Button>
            ) : null}
          </div>
        </div>

        {/* Right column — artwork + floating card */}
        <div className="relative mx-auto h-[220px] w-full max-w-sm sm:h-[280px] lg:h-[320px]">
          <div className="absolute inset-0 rounded-[24px] bg-green/20 blur-3xl" aria-hidden />
          <Artwork
            art={banner.accentImage}
            className="relative h-full w-full rounded-[24px] border border-border"
            iconClassName="h-16 w-16"
          />
          <div className="absolute -bottom-5 -left-4 flex items-center gap-3 rounded-2xl border border-border bg-card/95 p-3 pr-5 shadow-2xl backdrop-blur sm:-left-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green/15 text-green">
              <Star className="h-5 w-5 fill-green" />
            </div>
            <div>
              <p className="text-sm font-semibold text-ink">Verified Sellers</p>
              <p className="text-xs text-ink-secondary">4.9 average rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="relative flex items-center justify-center gap-4 pb-8">
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => goTo(index - 1)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-secondary transition-colors hover:border-green/40 hover:text-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green/60"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-2">
          {banners.map((b, i) => (
            <button
              key={b.id}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              onClick={() => goTo(i)}
              className={cn(
                "h-1.5 rounded-full transition-all",
                i === index ? "w-6 bg-green" : "w-1.5 bg-border hover:bg-muted"
              )}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => goTo(index + 1)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-secondary transition-colors hover:border-green/40 hover:text-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green/60"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
