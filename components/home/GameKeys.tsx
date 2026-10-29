import { gameKeys } from "@/lib/mock-data";
import { GameKeyCard } from "@/components/ui/GameKeyCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function GameKeys() {
  return (
    <section className="space-y-5">
      <SectionHeader title="Game Keys" subtitle="Original game keys from verified sellers" actionLabel="See All" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {gameKeys.map((gameKey) => (
          <GameKeyCard key={gameKey.id} gameKey={gameKey} />
        ))}
      </div>
    </section>
  );
}
