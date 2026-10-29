import Link from "next/link";
import { Instagram, Send, Youtube } from "lucide-react";
import { Logo } from "@/components/layout/Logo";

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Marketplace",
    links: [
      { label: "Top Up", href: "/topup" },
      { label: "Game Keys", href: "#" },
      { label: "Game Accounts", href: "#" },
      { label: "Items", href: "#" },
      { label: "Joki", href: "#" },
      { label: "Boosting", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Refund", href: "#" },
      { label: "Transaction Guide", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Privacy", href: "#" },
    ],
  },
];

const SOCIALS = [
  { label: "Discord", icon: Send },
  { label: "Telegram", icon: Send },
  { label: "Instagram", icon: Instagram },
  { label: "YouTube", icon: Youtube },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-base-secondary">
      <div className="mx-auto max-w-[1280px] px-4 py-12 sm:px-6">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <Logo />
            <p className="mt-4 max-w-[220px] text-sm text-ink-secondary">
              Play. Trade. Boost. Trusted.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {SOCIALS.map(({ label, icon: Icon }) => (
                <Link
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-secondary transition-colors hover:border-green/40 hover:text-green"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-ink">{column.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-secondary transition-colors hover:text-green"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted sm:flex-row">
          <p>&copy; 2026 Trusted Marketplace. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-ink-secondary">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-ink-secondary">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
