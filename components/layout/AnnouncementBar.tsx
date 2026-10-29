import Link from "next/link";
import { Flame } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="w-full bg-base-secondary">
      <div className="mx-auto flex max-w-[1280px] items-center justify-center gap-2 px-4 py-2 text-center sm:justify-between">
        <div className="flex items-center gap-2 text-xs text-ink-secondary sm:text-[13px]">
          <Flame className="h-3.5 w-3.5 shrink-0 text-green" />
          <span>
            Weekend Sale — diskon hingga 70% untuk game pilihan
          </span>
        </div>
        <Link
          href="#flash-deals"
          className="hidden shrink-0 text-xs font-medium text-green hover:text-lime sm:inline"
        >
          View Promo
        </Link>
      </div>
    </div>
  );
}
