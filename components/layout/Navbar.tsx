"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bell,
  Menu,
  MessageCircle,
  Search,
  ShoppingCart,
  Heart,
  X,
} from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { categories } from "@/lib/mock-data";

const ICON_ITEMS = [
  { icon: Heart, label: "Wishlist", href: "/wishlist" },
  { icon: ShoppingCart, label: "Cart", href: "/cart", badge: 2 },
  { icon: Bell, label: "Notifications", href: "/notifications", badge: 5 },
  { icon: MessageCircle, label: "Chat", href: "/chat" },
];

const NAV_LINKS = [
  { label: "Top Up", href: "/topup" },
  { label: "Game Keys", href: "/game-keys" },
  { label: "Game Accounts", href: "/game-accounts" },
  { label: "Boosting", href: "/boosting" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-base/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1280px] items-center gap-4 px-4 py-3 sm:px-6">
        <Logo />

        {/* Quick nav links — desktop */}
        <nav aria-label="Primary" className="hidden shrink-0 items-center gap-5 xl:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "text-sm font-medium transition-colors",
                  isActive ? "text-green" : "text-ink-secondary hover:text-ink"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Search — desktop */}
        <div className="hidden flex-1 items-center gap-2 rounded-[14px] border border-border bg-surface px-2 py-1.5 lg:flex">
          <select
            aria-label="Search category"
            className="shrink-0 rounded-lg bg-transparent py-1.5 pl-2 pr-1 text-sm text-ink-secondary outline-none"
            defaultValue="all"
          >
            <option value="all">All Categories</option>
            {categories.map((category) => (
              <option key={category.id} value={category.slug}>
                {category.label}
              </option>
            ))}
          </select>
          <span className="h-5 w-px bg-border" aria-hidden />
          <Search className="h-4 w-4 shrink-0 text-muted" />
          <input
            type="search"
            placeholder="Search game, top up, account, item, voucher..."
            className="w-full bg-transparent px-1 py-1.5 text-sm text-ink placeholder:text-muted outline-none"
          />
        </div>

        <div className="ml-auto flex items-center gap-1 sm:gap-2">
          <nav className="hidden items-center gap-1 md:flex">
            {ICON_ITEMS.map(({ icon: Icon, label, href, badge }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="relative flex h-10 w-10 items-center justify-center rounded-full text-ink-secondary transition-colors hover:bg-surface hover:text-ink"
              >
                <Icon className="h-5 w-5" />
                {badge ? (
                  <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-green px-1 text-[10px] font-semibold text-base">
                    {badge}
                  </span>
                ) : null}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 pl-2 md:flex">
            <Button variant="ghost" size="sm">
              Log In
            </Button>
            <Button variant="primary" size="sm">
              Register
            </Button>
          </div>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink hover:bg-surface md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Search — mobile, always visible under the top row */}
      <div className="flex items-center gap-2 border-t border-border px-4 py-2.5 lg:hidden">
        <div className="flex flex-1 items-center gap-2 rounded-[14px] border border-border bg-surface px-3 py-2">
          <Search className="h-4 w-4 shrink-0 text-muted" />
          <input
            type="search"
            placeholder="Search game, top up, account..."
            className="w-full bg-transparent text-sm text-ink placeholder:text-muted outline-none"
          />
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-border px-4 py-4 md:hidden">
          <div className="grid grid-cols-2 gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "rounded-2xl border border-border bg-surface px-3 py-2.5 text-sm font-medium",
                    isActive ? "text-green" : "text-ink-secondary hover:text-ink"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <div className="mt-3 grid grid-cols-4 gap-2">
            {ICON_ITEMS.map(({ icon: Icon, label, href, badge }) => (
              <Link
                key={label}
                href={href}
                className="relative flex flex-col items-center gap-1.5 rounded-2xl border border-border bg-surface py-3 text-ink-secondary hover:text-ink"
              >
                <Icon className="h-5 w-5" />
                <span className="text-[11px]">{label}</span>
                {badge ? (
                  <span className="absolute right-2 top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-green px-1 text-[10px] font-semibold text-base">
                    {badge}
                  </span>
                ) : null}
              </Link>
            ))}
          </div>
          <div className="mt-3 flex items-center gap-2">
            <Button variant="secondary" size="md" className="w-full">
              Log In
            </Button>
            <Button variant="primary" size="md" className="w-full">
              Register
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
