import { gameAccounts } from "@/lib/mock-data";
import { AccountCard } from "@/components/ui/AccountCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function AccountMarketplace() {
  return (
    <section className="space-y-5">
      <SectionHeader
        title="Game Accounts"
        subtitle="High-rank accounts from verified sellers"
        actionLabel="See All"
      />
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
        {gameAccounts.map((account) => (
          <AccountCard key={account.id} account={account} />
        ))}
      </div>
    </section>
  );
}
