import { partners } from "@/lib/mock-data";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function OfficialPartners() {
  return (
    <section className="space-y-5">
      <SectionHeader title="Platforms We Support" subtitle="Top up and trade across the platforms gamers use most" />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="flex h-16 items-center justify-center rounded-2xl border border-border bg-surface text-sm font-semibold text-ink-secondary/70 grayscale transition-all duration-200 hover:text-green hover:grayscale-0"
          >
            {partner.name}
          </div>
        ))}
      </div>
      <p className="text-xs text-muted">
        Logos are shown to indicate platform compatibility and do not imply an official partnership.
      </p>
    </section>
  );
}
