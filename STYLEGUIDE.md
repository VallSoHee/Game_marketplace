# Project Style Guide — Trusted Marketplace

Reference document for keeping new features consistent with the existing codebase.

---

## 1. Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS v4, utility-first, no CSS modules |
| Font | **Sora** via `next/font/google` (variable `--font-sora`) |
| Icons | **lucide-react** (no other icon lib) |
| State | React `useState` / `useMemo` — no external state library |
| Data | Mock data in `lib/mock-data.ts`; types in `types/marketplace.ts` |
| Path alias | `@/*` → project root (e.g. `@/components/ui/Button`) |

---

## 2. Directory Structure

```
app/                        # Next.js App Router pages
  layout.tsx                # Root layout (Sora font, globals.css)
  page.tsx                  # Home — composes layout + home sections
  not-found.tsx             # 404 page
  topup/
    page.tsx                # Top-up listing
    [slug]/page.tsx         # Top-up game detail (dynamic)

components/
  layout/                   # App shell: AnnouncementBar, Navbar, Footer, Logo
  home/                     # Home page sections (one component per section)
  topup/                    # Top-up feature sections
  ui/                       # Shared/reusable primitives (Button, Badge, SectionHeader, Artwork, cards)

lib/
  mock-data.ts              # All mock data (single source of truth)
  utils.ts                  # Pure utility functions (cn, formatIDR, formatCount)
  icon-map.tsx              # Lucide icon registry (string key → LucideIcon)

types/
  marketplace.ts            # All domain types (one file)

public/images/              # Static assets (banners, categories, games, products, sellers)
```

**Conventions:**
- One section component per file in `components/home/` or `components/<feature>/`.
- Reusable UI primitives go in `components/ui/`.
- Feature-specific components go in `components/<feature>/`.
- Pages compose layout components + section components. No business logic in pages.

---

## 3. Page Layout Pattern

Every page follows this structure:

```tsx
export default function SomePage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="mx-auto flex w-full max-w-[1280px] flex-1 flex-col gap-14 px-4 py-8 sm:px-6 sm:py-12 lg:gap-16">
        {/* Section components here */}
      </main>

      <Footer />
    </>
  );
}
```

- `max-w-[1280px]` is the content width cap.
- `px-4 sm:px-6` is the standard horizontal padding.
- `gap-14 lg:gap-16` between major sections (home), `gap-8`–`gap-10` for detail pages.
- Layout shell (`AnnouncementBar`, `Navbar`, `Footer`) is repeated per page (not in `layout.tsx`).

---

## 4. Color System (Design Tokens)

All colors are CSS custom properties in `globals.css`, registered as Tailwind theme tokens via `@theme inline`. Use semantic token names, never raw hex values.

| Token | Tailwind class | Hex | Usage |
|-------|---------------|-----|-------|
| `--color-base` | `bg-base`, `text-base` | `#050505` | Page background, button text on green |
| `--color-base-secondary` | `bg-base-secondary` | `#0a0f0d` | Secondary bg |
| `--color-surface` | `bg-surface` | `#101614` | Cards bg, input fields |
| `--color-card` | `bg-card` | `#121a16` | Card backgrounds |
| `--color-border` | `border-border` | `#1f2a24` | All borders (also `*` default) |
| `--color-green` | `text-green`, `bg-green` | `#22c55e` | Brand primary / CTA |
| `--color-green-dark` | `bg-green-dark` | `#16a34a` | Hover state for green |
| `--color-lime` | `text-lime` | `#84cc16` | Ratings, accent |
| `--color-ink` | `text-ink` | `#f8fafc` | Primary text |
| `--color-ink-secondary` | `text-ink-secondary` | `#94a3b8` | Secondary text |
| `--color-muted` | `text-muted` | `#64748b` | Tertiary text, placeholders |
| `--color-danger` | `text-danger` | `#ef4444` | Error/destructive |
| `--color-warning` | `text-warning` | `#f59e0b` | Warnings |
| `--color-info` | `text-info` | `#38bdf8` | Info accents |

**Dark-only:** `color-scheme: dark` is set on `<html>`. No light mode support.

---

## 5. Typography

- **Font family:** Sora (via CSS variable `--font-display`, mapped to Tailwind `font-sans`).
- **No custom `text-*` sizes defined in config** — uses Tailwind defaults + arbitrary values.

| Element | Classes |
|---------|---------|
| Section heading (h2) | `text-[26px] font-semibold tracking-tight sm:text-[30px]` |
| Page heading (h1) | `text-2xl font-bold sm:text-[28px]` |
| Card title | `text-[15px] font-semibold` |
| Body / subtitle | `text-sm text-ink-secondary sm:text-[15px]` |
| Small labels | `text-xs text-muted` |
| Prices | `text-sm font-semibold text-green` |

---

## 6. Component Conventions

### Naming
- **PascalCase** file and export names: `GameCard.tsx` → `export function GameCard`.
- Named exports only, no default exports (except pages).

### Props
- Props type defined inline above component: `type GameCardProps = { ... }`.
- Accept `className?: string` when the component may need layout overrides.
- Use domain types from `@/types/marketplace` for data props.

### Client vs Server
- Components are **Server Components by default** (no directive).
- Add `"use client"` only when using hooks (`useState`, `useEffect`, event handlers).
- Keep `"use client"` boundary as low as possible (leaf components).

### Pattern for section components (`components/home/*`)

```tsx
import { someData } from "@/lib/mock-data";
import { SomeCard } from "@/components/ui/SomeCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function SomeSection() {
  return (
    <section className="space-y-5">
      <SectionHeader
        title="Section Title"
        subtitle="Subtitle text"
        actionLabel="See All"
      />
      <div className="scroll-rail -mx-4 flex gap-3.5 overflow-x-auto px-4 pb-1 sm:gap-4">
        {someData.map((item) => (
          <SomeCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
```

- Wrap in `<section>` with `space-y-5`.
- Use `SectionHeader` for title/subtitle/action.
- Horizontal scroll rails: `scroll-rail -mx-4 flex gap-3.5 overflow-x-auto px-4 pb-1`.

---

## 7. Shared UI Components

### `Button`
- Variants: `primary`, `secondary`, `ghost`, `outline`.
- Sizes: `sm`, `md`, `lg`.
- Pass `href` to render as `<Link>`, omit for `<button>`.
- Border radius: `rounded-[12px]` (sm) / `rounded-[14px]` (md/lg).

### `Badge`
- Variants: `green`, `lime`, `neutral`, `danger`, `outline`.
- Always `rounded-full`, `text-xs`.

### `SectionHeader`
- Props: `title`, `subtitle?`, `actionLabel?`, `actionHref?`.

### `Artwork`
- Gradient placeholder for game art — maps string key to icon + gradient.
- Will be replaced by `next/image` when real assets arrive.

---

## 8. Styling Patterns

### Cards
```
rounded-[20px] border border-border bg-card p-2.5
hover:-translate-y-1 hover:border-green/40
hover:shadow-[0_12px_32px_-12px_rgba(34,197,94,0.25)]
transition-all duration-200
```

### Border radius scale
- Cards / containers: `rounded-[20px]` or `rounded-2xl`
- Buttons / inputs: `rounded-[14px]` or `rounded-[12px]`
- Badges: `rounded-full`
- Inner images: `rounded-2xl`

### Hover effects
- Cards: lift (`-translate-y-1`) + green border glow + shadow.
- Buttons: `hover:bg-green-dark` + green shadow for primary.
- Links: `transition-colors hover:text-ink` or `hover:text-green`.

### Focus styles
- `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green/60 focus-visible:ring-offset-2 focus-visible:ring-offset-base`

### Transitions
- Standard: `transition-all duration-200` or `transition-colors`.
- Image scale on card hover: `transition-transform duration-500 group-hover:scale-110`.

### Responsive breakpoints (Tailwind defaults)
- `sm:` (640px) — padding/gap adjustments.
- `md:` (768px) — show/hide mobile menu.
- `lg:` (1024px) — multi-column layouts, desktop search.
- `xl:` (1280px) — show desktop nav links.

---

## 9. Data & Types

- All types live in `types/marketplace.ts`.
- All mock data lives in `lib/mock-data.ts`.
- Types are plain `type` aliases (no `interface`, no classes).
- `art` fields are string keys mapped to gradients/icons by `Artwork` component.
- `icon` fields are string keys mapped via `lib/icon-map.tsx` → `getIcon()`.

### Adding a new feature's data
1. Add the type to `types/marketplace.ts`.
2. Add mock data array to `lib/mock-data.ts`.
3. Import data in the section component (not in the page).

---

## 10. Utilities

| Function | File | Purpose |
|----------|------|---------|
| `cn(...classes)` | `lib/utils.ts` | Merge class names, drop falsy. Use instead of template literals. |
| `formatIDR(value)` | `lib/utils.ts` | Format number → `Rp 145.000` |
| `formatCount(value)` | `lib/utils.ts` | Format large numbers → `12.4K` |
| `getIcon(name)` | `lib/icon-map.tsx` | String key → LucideIcon component |

---

## 11. Checklist for Adding a New Feature/Page

1. **Types** — add to `types/marketplace.ts`.
2. **Mock data** — add to `lib/mock-data.ts`.
3. **UI card** (if needed) — `components/ui/NewCard.tsx`.
4. **Section component** — `components/<feature>/NewSection.tsx`.
5. **Page** — `app/<route>/page.tsx`, compose with layout shell + sections.
6. **Use existing patterns:** `SectionHeader`, `Button`, `Badge`, `Artwork`, `cn()`, `formatIDR()`.
7. **No new dependencies** unless absolutely necessary.
8. **Server Component by default**, `"use client"` only for interactivity.
9. **Semantic color tokens only** — never raw hex in components.