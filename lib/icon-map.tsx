import {
  BadgeCheck,
  CircleDollarSign,
  Coins,
  Crown,
  Gamepad2,
  Gift,
  Headset,
  KeyRound,
  Rocket,
  Shuffle,
  ShieldCheck,
  Swords,
  Ticket,
  TrendingUp,
  UserRound,
  Zap,
  type LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Coins,
  KeyRound,
  UserRound,
  Swords,
  Ticket,
  Gamepad2,
  Rocket,
  TrendingUp,
  Gift,
  Crown,
  Shuffle,
  CircleDollarSign,
  ShieldCheck,
  BadgeCheck,
  Zap,
  Headset,
};

export function getIcon(name: string): LucideIcon {
  return ICON_MAP[name] ?? Gamepad2;
}
