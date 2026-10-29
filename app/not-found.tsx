import { Compass } from "lucide-react";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="mx-auto flex w-full max-w-[1280px] flex-1 flex-col items-center justify-center gap-4 px-4 py-24 text-center sm:px-6">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-surface text-green">
          <Compass className="h-8 w-8" strokeWidth={1.5} />
        </span>
        <h1 className="text-2xl font-bold text-ink sm:text-[28px]">Page not found</h1>
        <p className="max-w-sm text-sm text-ink-secondary">
          We couldn&apos;t find the page you&apos;re looking for. It may have been moved or doesn&apos;t
          exist.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Button href="/" size="lg">
            Back to Home
          </Button>
          <Button href="/topup" variant="outline" size="lg">
            Browse Top Up
          </Button>
        </div>
      </main>

      <Footer />
    </>
  );
}
