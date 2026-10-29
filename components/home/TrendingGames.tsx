import { trendingGames } from "@/lib/mock-data";
import { GameCard } from "@/components/ui/GameCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function TrendingGames() {
  return (
    <section className="space-y-5">
      <SectionHeader
        title="Trending Games"
        subtitle="Game yang sedang banyak dicari gamer"
        actionLabel="See All"
      />
      <div className="scroll-rail -mx-4 flex gap-3.5 overflow-x-auto px-4 pb-1 sm:gap-4">
        {trendingGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </section>
  );
}
