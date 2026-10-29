import { popularTopUps } from "@/lib/mock-data";
import { TopUpCard } from "@/components/ui/TopUpCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function PopularTopup() {
  return (
    <section className="space-y-5">
      <SectionHeader
        title="Popular Top Up"
        subtitle="Isi ulang game favoritmu, langsung masuk"
        actionLabel="See All"
        actionHref="/topup"
      />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {popularTopUps.map((topUp) => (
          <TopUpCard key={topUp.id} topUp={topUp} />
        ))}
      </div>
    </section>
  );
}
