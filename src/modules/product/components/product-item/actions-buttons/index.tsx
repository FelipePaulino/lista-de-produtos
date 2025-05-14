"use client";

import { Trash, Plus, Minus } from "lucide-react";

import { Button } from "@/shared/components/external";
import { useCounterContext, useRemoveProduct } from "@/modules/product/hooks";

import { ActionsButtonsProps } from "./types";

export function ActionsButtons({ product }: ActionsButtonsProps) {
  const { onDelete, isRemoving } = useRemoveProduct();
  const { totalSelected, incrementTotalSelected, decrementTotalSelected } =
    useCounterContext();

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <Button
        size="icon"
        type="button"
        variant="destructive"
        className="cursor-pointer"
        onClick={() => onDelete(product.id)}
        disabled={isRemoving}
      >
        <Trash />
      </Button>

      <div className="flex items-center gap-2">
        <Button
          size="icon"
          type="button"
          variant="outline"
          className="cursor-pointer"
          onClick={decrementTotalSelected}
          disabled={totalSelected === 0}
        >
          <Minus />
        </Button>

        <Button
          size="icon"
          type="button"
          variant="outline"
          className="cursor-pointer"
          onClick={incrementTotalSelected}
        >
          <Plus />
        </Button>
      </div>
    </div>
  );
}
