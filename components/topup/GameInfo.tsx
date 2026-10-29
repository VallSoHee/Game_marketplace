import { Clock3, CreditCard, Gamepad2, Layers, Tag, Zap } from "lucide-react";
import type { TopupGame } from "@/types/marketplace";

type GameInfoProps = {
  game: TopupGame;
};

export function GameInfo({ game }: GameInfoProps) {
  const items = [
    { icon: Gamepad2, label: "Game", value: game.name },
    { icon: Tag, label: "Category", value: game.category },
    { icon: Layers, label: "Platform", value: game.platform.join(" / ") },
    { icon: Zap, label: "Delivery", value: "Instant" },
    { icon: Clock3, label: "Processing", value: "1–10 seconds" },
    { icon: CreditCard, label: "Payment", value: "Multiple payment methods" },
  ];

  return (
    <section aria-label="Game information" className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {items.map(({ icon: Icon, label, value }) => (
        <div key={label} className="rounded-2xl border border-border bg-card p-3.5">
          <Icon className="h-4 w-4 text-green" />
          <p className="mt-2 text-[11px] text-muted">{label}</p>
          <p className="truncate text-sm font-medium text-ink">{value}</p>
        </div>
      ))}
    </section>
  );
}
