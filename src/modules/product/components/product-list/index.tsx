import { ProductItem } from "@/modules/product/components";
import { EmptyState } from "@/shared/components/internal";

import { ProductListProps } from "./types";

export function ProductList({ products }: ProductListProps) {
  const hasProducts = !!products?.length;

  if (!hasProducts) return <EmptyState />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mt-8 mb-20">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}
