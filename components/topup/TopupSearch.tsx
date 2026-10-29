import { Search, SlidersHorizontal, X } from "lucide-react";

type TopupSearchProps = {
  value: string;
  onChange: (value: string) => void;
};

export function TopupSearch({ value, onChange }: TopupSearchProps) {
  return (
    <div className="flex items-center gap-2 rounded-[16px] border border-border bg-surface px-4 py-3.5">
      <Search className="h-5 w-5 shrink-0 text-muted" />
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search game untuk top up..."
        aria-label="Search game untuk top up"
        className="w-full min-w-0 bg-transparent text-sm text-ink placeholder:text-muted outline-none sm:text-[15px]"
      />
      {value ? (
        <button
          type="button"
          aria-label="Clear search"
          onClick={() => onChange("")}
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-muted transition-colors hover:bg-card hover:text-ink"
        >
          <X className="h-4 w-4" />
        </button>
      ) : null}
      <span className="hidden h-5 w-px shrink-0 bg-border sm:block" aria-hidden />
      <button
        type="button"
        aria-label="Filter"
        className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full text-ink-secondary transition-colors hover:bg-card hover:text-green sm:flex"
      >
        <SlidersHorizontal className="h-4 w-4" />
      </button>
    </div>
  );
}
