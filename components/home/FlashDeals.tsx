"use client";

import { useEffect, useState } from "react";
import { Timer } from "lucide-react";
import { flashDeals } from "@/lib/mock-data";
import { ProductCard } from "@/components/ui/ProductCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

const INITIAL_SECONDS = 60 * 60 + 24 * 60 + 42; // 01:24:42

function formatSegment(value: number): string {
  return value.toString().padStart(2, "0");
}

export function FlashDeals() {
  const [secondsLeft, setSecondsLeft] = useState(INITIAL_SECONDS);

  useEffect(() => {
    const id = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : INITIAL_SECONDS));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const hours = Math.floor(secondsLeft / 3600);
  const minutes = Math.floor((secondsLeft % 3600) / 60);
  const seconds = secondsLeft % 60;

  return (
    <section id="flash-deals" className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeader title="Flash Deals" subtitle="Harga spesial, waktu terbatas" />
        <div
          className="flex items-center gap-2 rounded-2xl border border-danger/30 bg-danger/10 px-3.5 py-2 text-danger"
          role="timer"
          aria-live="off"
        >
          <Timer className="h-4 w-4" />
          <span className="font-mono text-sm font-semibold tabular-nums">
            {formatSegment(hours)} : {formatSegment(minutes)} : {formatSegment(seconds)}
          </span>
        </div>
      </div>
      <div className="scroll-rail -mx-4 flex gap-3.5 overflow-x-auto px-4 pb-1 sm:gap-4">
        {flashDeals.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
