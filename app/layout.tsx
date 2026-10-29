import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Trusted Marketplace — Play. Trade. Boost. Trusted.",
  description:
    "A digital gaming marketplace for top ups, game keys, accounts, items and boosting services from verified sellers.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sora.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-base text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
