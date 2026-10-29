import {
  Boxes,
  Car,
  Castle,
  Compass,
  Crosshair,
  Flame,
  Gamepad2,
  Gem,
  Landmark,
  Mountain,
  Rocket,
  Shield,
  Sparkles,
  Swords,
  Target,
  Trophy,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  mlbb: Swords,
  valorant: Target,
  pubgm: Crosshair,
  genshin: Gem,
  hsr: Rocket,
  roblox: Boxes,
  freefire: Flame,
  minecraft: Mountain,
  eafc: Trophy,
  steam: Gamepad2,
  "steam-wallet": Wallet,
  eldenring: Castle,
  fortnite: Rocket,
  rdr2: Compass,
  acmirage: Landmark,
  forza: Car,
  horizonfw: Mountain,
  codm: Crosshair,
  coc: Castle,
  emerald: Sparkles,
  lime: Sparkles,
  green: Sparkles,
  mint: Sparkles,
};

const GRADIENTS = [
  "from-green/25 via-surface to-card",
  "from-lime/20 via-surface to-card",
  "from-green-dark/30 via-surface to-card",
  "from-emerald-900/40 via-surface to-card",
];

function hashKey(key: string): number {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash = (hash * 31 + key.charCodeAt(i)) % GRADIENTS.length;
  }
  return Math.abs(hash);
}

type ArtworkProps = {
  art: string;
  className?: string;
  iconClassName?: string;
};

/**
 * Renders a stylized gradient tile with a representative icon as a stand-in
 * for real game/product artwork. Swap this for next/image once real assets
 * land under public/images/**.
 */
export function Artwork({ art, className, iconClassName }: ArtworkProps) {
  const Icon = ICONS[art] ?? Gamepad2;
  const gradient = GRADIENTS[hashKey(art)];

  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden bg-gradient-to-br",
        gradient,
        className
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.18),transparent_60%)]" />
      <Icon
        className={cn("relative text-ink/80", iconClassName ?? "h-10 w-10")}
        strokeWidth={1.5}
      />
      <Shield className="absolute -bottom-3 -right-3 h-16 w-16 text-white/[0.03]" strokeWidth={1} />
    </div>
  );
}
