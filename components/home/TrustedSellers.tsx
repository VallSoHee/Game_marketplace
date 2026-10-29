import { trustedSellers } from "@/lib/mock-data";
import { SellerCard } from "@/components/ui/SellerCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function TrustedSellers() {
  return (
    <section className="space-y-5">
      <SectionHeader title="Trusted Sellers" subtitle="Top-rated sellers with a track record" actionLabel="See All" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {trustedSellers.map((seller) => (
          <SellerCard key={seller.id} seller={seller} />
        ))}
      </div>
    </section>
  );
}
