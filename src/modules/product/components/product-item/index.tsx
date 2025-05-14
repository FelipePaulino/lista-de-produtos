import Image from "next/image";
import { X } from "lucide-react";

import { formatCurrency } from "@/shared/utils";

import { ProductItemProps } from "./types";
import { ActionsButtons } from "./actions-buttons";

export function ProductItem({ product }: ProductItemProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 space-y-2">
      <div className="relative w-full h-60 overflow-hidden flex items-center justify-center">
        {product.thumbnail ? (
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            className="object-cover rounded-lg"
          />
        ) : (
          <div className="flex flex-col space-x-4 items-center">
            <span>Sem imagem</span>

            <X className="w-24 h-24 text-green-500" />
          </div>
        )}
      </div>

      <h2 className="text-lg font-bold line-clamp-2 h-16">
        {product.title || "Sem título"}
      </h2>

      <p className="text-sm text-gray-500 line-clamp-3">
        {product.description || "Sem descrição"}
      </p>

      <div className="flex items-center justify-between gap-4 flex-wrap">
        <p className="text-md text-slate-500 font-bold">
          {formatCurrency(product.price)}
        </p>
        <ActionsButtons product={product} />
      </div>
    </div>
  );
}
