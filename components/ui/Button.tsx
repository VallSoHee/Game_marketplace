import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    "bg-green text-base font-semibold hover:bg-green-dark hover:shadow-[0_0_24px_rgba(34,197,94,0.35)]",
  secondary:
    "bg-surface text-ink border border-border hover:border-green/40 hover:text-green",
  outline: "bg-transparent text-ink border border-border hover:border-green/50 hover:text-green",
  ghost: "bg-transparent text-ink-secondary hover:text-ink hover:bg-surface",
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: "px-3.5 py-2 text-xs rounded-[12px]",
  md: "px-5 py-2.5 text-sm rounded-[14px]",
  lg: "px-7 py-3.5 text-[15px] rounded-[14px]",
};

type ButtonOwnProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children?: React.ReactNode;
};

type ButtonAsButtonProps = ButtonOwnProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonOwnProps> & {
    href?: undefined;
  };

type ButtonAsLinkProps = ButtonOwnProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonOwnProps | "href"> & {
    /** When provided, the button renders as a Next.js `<Link>` instead of a `<button>`. */
    href: string;
  };

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

/**
 * Shared button. Pass `href` to navigate (renders a Next.js `<Link>` under the hood)
 * or omit it for an interactive in-page `<button>`.
 */
export function Button({ variant = "primary", size = "md", className, children, ...props }: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green/60 focus-visible:ring-offset-2 focus-visible:ring-offset-base disabled:opacity-50 disabled:pointer-events-none",
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    className
  );

  if (props.href) {
    const { href, ...anchorProps } = props as ButtonAsLinkProps;
    return (
      <Link href={href} className={classes} {...anchorProps}>
        {children}
      </Link>
    );
  }

  const { href: _href, ...buttonProps } = props as ButtonAsButtonProps;
  void _href;

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
