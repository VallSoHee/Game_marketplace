import { topupGames } from "@/lib/mock-data";
import { GameTopupCard } from "@/components/topup/GameTopupCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function TopupGameEntry() {
  return (
    <section className="space-y-5">
      <SectionHeader
        title="Top Up Game"
        subtitle="Top up game favorit kamu dengan cepat dan aman."
        actionLabel="View All"
        actionHref="/topup"
      />
      <div className="scroll-rail -mx-4 flex gap-3.5 overflow-x-auto px-4 pb-1 sm:gap-4">
        {topupGames.map((game) => (
          <div key={game.id} className="w-[170px] shrink-0 sm:w-[200px]">
            <GameTopupCard game={game} />
          </div>
        ))}
      </div>
    </section>
  );
}
