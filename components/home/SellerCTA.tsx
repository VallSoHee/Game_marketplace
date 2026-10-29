import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function SellerCTA() {
  return (
    <section className="relative overflow-hidden rounded-[24px] border border-border bg-gradient-to-br from-green-dark/25 via-base-secondary to-base px-6 py-12 sm:px-12 sm:py-16">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(132,204,22,0.16),transparent_55%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-xl text-center">
        <h2 className="text-[28px] font-bold tracking-tight text-ink sm:text-[34px]">
          Turn your gaming inventory into income
        </h2>
        <p className="mt-3 text-[15px] text-ink-secondary sm:text-base">
          Jual akun, item, game key, atau jasa gaming kamu di marketplace kami.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <Button size="lg">
            Mulai Jualan
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg">
            Pelajari Seller Program
          </Button>
        </div>
      </div>
    </section>
  );
}
