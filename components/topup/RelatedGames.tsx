import type { TopupGame } from "@/types/marketplace";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GameTopupCard } from "@/components/topup/GameTopupCard";

type RelatedGamesProps = {
  games: TopupGame[];
};

export function RelatedGames({ games }: RelatedGamesProps) {
  if (games.length === 0) {
    return null;
  }

  return (
    <section className="space-y-5">
      <SectionHeader title="Game Lainnya" actionLabel="View All" actionHref="/topup" />
      <div className="scroll-rail -mx-4 flex gap-3.5 overflow-x-auto px-4 pb-1 sm:gap-4">
        {games.map((game) => (
          <div key={game.id} className="w-[170px] shrink-0 sm:w-[200px]">
            <GameTopupCard game={game} />
          </div>
        ))}
      </div>
    </section>
  );
}
