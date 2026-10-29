"use client";

import { useMemo, useState } from "react";
import type { TopupGame, TopupNominal } from "@/types/marketplace";
import { GameIdForm } from "@/components/topup/GameIdForm";
import { TopupProductGrid } from "@/components/topup/TopupProductGrid";
import { OrderSummary, SERVICE_FEE } from "@/components/topup/OrderSummary";
import { Button } from "@/components/ui/Button";
import { formatIDR } from "@/lib/utils";

type PurchaseFlowProps = {
  game: TopupGame;
  products: TopupNominal[];
};

export function PurchaseFlow({ game, products }: PurchaseFlowProps) {
  const [userId, setUserId] = useState("");
  const [serverId, setServerId] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedProduct = useMemo(
    () => products.find((product) => product.id === selectedId) ?? null,
    [products, selectedId]
  );

  const canContinue = Boolean(
    userId.trim().length > 0 &&
      (!game.requiresServer || serverId.trim().length > 0) &&
      selectedProduct
  );

  const total = selectedProduct ? selectedProduct.price + SERVICE_FEE : 0;

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_360px] lg:items-start">
      <div className="space-y-6 pb-28 lg:pb-0">
        <GameIdForm
          game={game}
          userId={userId}
          serverId={serverId}
          onUserIdChange={setUserId}
          onServerIdChange={setServerId}
        />
        <TopupProductGrid products={products} selectedId={selectedId} onSelect={setSelectedId} />

        {/* Order summary appears inline after nominal selection on mobile */}
        <div className="lg:hidden">
          <OrderSummary game={game} product={selectedProduct} canContinue={canContinue} />
        </div>
      </div>

      {/* Sticky order summary on desktop */}
      <div className="hidden lg:sticky lg:top-24 lg:block">
        <OrderSummary game={game} product={selectedProduct} canContinue={canContinue} />
      </div>

      {/* Sticky CTA bar on mobile */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-base/95 px-4 py-3 backdrop-blur-md lg:hidden">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4">
          <div>
            <p className="text-[11px] text-muted">Total</p>
            <p className="text-base font-bold text-green">{formatIDR(total)}</p>
          </div>
          <Button size="lg" disabled={!canContinue} className="max-w-[200px] flex-1">
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
