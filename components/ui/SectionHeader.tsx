import Link from "next/link";
import { ChevronRight } from "lucide-react";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  actionLabel?: string;
  actionHref?: string;
};

export function SectionHeader({ title, subtitle, actionLabel, actionHref = "#" }: SectionHeaderProps) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        <h2 className="text-[26px] font-semibold tracking-tight text-ink sm:text-[30px]">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-1.5 text-sm text-ink-secondary sm:text-[15px]">{subtitle}</p>
        ) : null}
      </div>
      {actionLabel ? (
        <Link
          href={actionHref}
          className="group flex shrink-0 items-center gap-1 text-sm font-medium text-ink-secondary transition-colors hover:text-green"
        >
          {actionLabel}
          <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      ) : null}
    </div>
  );
}
