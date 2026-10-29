import { Headset, ShieldCheck, Sparkles, Zap } from "lucide-react";

const FEATURES = [
  { icon: ShieldCheck, label: "Secure Transaction" },
  { icon: Zap, label: "Instant Delivery" },
  { icon: Sparkles, label: "Verified Products" },
  { icon: Headset, label: "24/7 Support" },
];

export function TrustFeatures() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {FEATURES.map(({ icon: Icon, label }) => (
        <div
          key={label}
          className="flex items-center gap-2.5 rounded-2xl border border-border bg-card px-3.5 py-3"
        >
          <Icon className="h-4 w-4 shrink-0 text-green" />
          <span className="text-xs font-medium text-ink-secondary sm:text-sm">{label}</span>
        </div>
      ))}
    </div>
  );
}
