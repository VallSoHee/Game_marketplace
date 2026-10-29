/** Merge class name fragments, dropping falsy values. Lightweight stand-in for clsx. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** Format a price in Indonesian Rupiah, matching the brief's "Rp 145.000" style. */
export function formatIDR(value: number): string {
  return `Rp ${Math.round(value).toLocaleString("id-ID")}`;
}

/** Format large counts compactly, e.g. 12400 -> "12.4K". */
export function formatCount(value: number): string {
  if (value >= 1000) {
    return `${(value / 1000).toFixed(value % 1000 === 0 ? 0 : 1)}K`;
  }
  return `${value}`;
}
