"use client";

import { ShoppingBag } from "lucide-react";

import { Badge } from "@/shared/components/external";
import { useCounterContext } from "@/modules/product/hooks";

export function CountProducts() {
  const { totalSelected } = useCounterContext();

  return (
    <Badge className="bg-green-500 text-white text-lg">
      <ShoppingBag /> {totalSelected}
    </Badge>
  );
}
