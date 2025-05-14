import { Fragment } from "react";

import { ProductService } from "@/modules/product/services";

import {
  Filters,
  ProductList,
  DialogAddProduct,
} from "@/modules/product/components";
import { PaginationTable } from "@/shared/components/internal";

export default async function Home(props: {
  searchParams: Promise<{
    search: string;
    page: string;
    sortPrice: string;
  }>;
}) {
  const params = await props.searchParams;
  const productResponse = await ProductService.getAll({
    page: params.page,
    search: params.search,
    sortPrice: params.sortPrice,
  });

  return (
    <Fragment>
      <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
        <Filters />

        <DialogAddProduct />
      </div>

      <ProductList products={productResponse.products || []} />

      <PaginationTable
        isEmpty={productResponse.products.length === 0}
        metadata={productResponse.metadata}
        currentSearchParams={params}
      />
    </Fragment>
  );
}
