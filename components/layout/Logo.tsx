import Link from "next/link";
import { Gamepad2, Shield } from "lucide-react";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="Trusted Marketplace home">
      <span className="relative flex h-9 w-9 items-center justify-center">
        <Shield className="h-9 w-9 text-green" strokeWidth={1.5} fill="none" />
        <Gamepad2 className="absolute h-4 w-4 text-green" strokeWidth={2} />
      </span>
      <span className="hidden text-[17px] font-bold leading-none tracking-tight text-ink sm:inline">
        Trusted<span className="text-green">Marketplace</span>
      </span>
    </Link>
  );
}
