import { boostingServices } from "@/lib/mock-data";
import { BoostingCard } from "@/components/ui/BoostingCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function BoostingServices() {
  return (
    <section className="space-y-5">
      <SectionHeader
        title="Joki & Boosting"
        subtitle="Rank push, leveling, and quest services from trusted pros"
        actionLabel="See All"
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {boostingServices.map((service) => (
          <BoostingCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}
