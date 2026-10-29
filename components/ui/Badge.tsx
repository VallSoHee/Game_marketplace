import { cn } from "@/lib/utils";

type BadgeVariant = "green" | "lime" | "neutral" | "danger" | "outline";

const VARIANT_CLASSES: Record<BadgeVariant, string> = {
  green: "bg-green/15 text-green border border-green/30",
  lime: "bg-lime/15 text-lime border border-lime/30",
  neutral: "bg-surface text-ink-secondary border border-border",
  danger: "bg-danger/15 text-danger border border-danger/30",
  outline: "bg-transparent text-ink-secondary border border-border",
};

type BadgeProps = {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
};

export function Badge({ children, variant = "neutral", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium leading-none",
        VARIANT_CLASSES[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
