import { trustFeatures } from "@/lib/mock-data";
import { getIcon } from "@/lib/icon-map";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function WhyTrusted() {
  return (
    <section className="space-y-6">
      <SectionHeader title="Why Trusted Marketplace" subtitle="Built so buying and selling digital goods feels safe" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {trustFeatures.map((feature) => {
          const Icon = getIcon(feature.icon);
          return (
            <div
              key={feature.id}
              className="rounded-[20px] border border-border bg-card p-6 transition-colors hover:border-green/30"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green/10 text-green">
                <Icon className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <p className="mt-4 text-[15px] font-semibold text-ink">{feature.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-secondary">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
