"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { ProductService } from "@/modules/product/services";
import { toast } from "sonner";

export function useRemoveProduct() {
  const [isRemoving, setIsRemoving] = useState(false);

  const router = useRouter();

  /**
   * @description Delete product
   * @param productId - Product id
   * @returns void
   */
  const onDelete = async (productId: number) => {
    try {
      setIsRemoving(true);

      await ProductService.delete(productId);
      router.refresh();
    } catch (error) {
      console.error(error);

      if (error instanceof Error) {
        toast.error(error.message);
      }
    } finally {
      setIsRemoving(false);
    }
  };

  return { onDelete, isRemoving };
}
