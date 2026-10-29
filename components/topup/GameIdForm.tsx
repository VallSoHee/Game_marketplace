import { Hash, User } from "lucide-react";
import type { TopupGame } from "@/types/marketplace";

type GameIdFormProps = {
  game: TopupGame;
  userId: string;
  serverId: string;
  onUserIdChange: (value: string) => void;
  onServerIdChange: (value: string) => void;
};

export function GameIdForm({ game, userId, serverId, onUserIdChange, onServerIdChange }: GameIdFormProps) {
  return (
    <section className="space-y-4 rounded-[24px] border border-border bg-card p-5 sm:p-6">
      <h2 className="text-base font-semibold text-ink">Masukkan ID Game</h2>

      <div className={game.requiresServer ? "grid gap-3 sm:grid-cols-2" : "grid gap-3"}>
        <label className="block space-y-1.5">
          <span className="text-xs font-medium text-ink-secondary">User ID</span>
          <div className="flex items-center gap-2 rounded-[14px] border border-border bg-surface px-3.5 py-3">
            <User className="h-4 w-4 shrink-0 text-muted" />
            <input
              value={userId}
              onChange={(event) => onUserIdChange(event.target.value)}
              placeholder="Masukkan User ID"
              className="w-full min-w-0 bg-transparent text-sm text-ink placeholder:text-muted outline-none"
            />
          </div>
        </label>

        {game.requiresServer ? (
          <label className="block space-y-1.5">
            <span className="text-xs font-medium text-ink-secondary">Server ID</span>
            <div className="flex items-center gap-2 rounded-[14px] border border-border bg-surface px-3.5 py-3">
              <Hash className="h-4 w-4 shrink-0 text-muted" />
              <input
                value={serverId}
                onChange={(event) => onServerIdChange(event.target.value)}
                placeholder="Masukkan Server ID"
                className="w-full min-w-0 bg-transparent text-sm text-ink placeholder:text-muted outline-none"
              />
            </div>
          </label>
        ) : null}
      </div>
    </section>
  );
}
