import type { TopupGame } from "@/types/marketplace";
import { GameTopupCard } from "@/components/topup/GameTopupCard";

type GameTopupGridProps = {
  games: TopupGame[];
  emptyMessage?: string;
};

export function GameTopupGrid({ games, emptyMessage = "Game tidak ditemukan." }: GameTopupGridProps) {
  if (games.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-1 rounded-2xl border border-dashed border-border py-16 text-center">
        <p className="text-sm text-ink-secondary">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
      {games.map((game) => (
        <GameTopupCard key={game.id} game={game} />
      ))}
    </div>
  );
}
