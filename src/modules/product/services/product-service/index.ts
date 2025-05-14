import { getBaseUrl } from "@/shared/utils";
import { Product } from "@/generated/prisma";

import { CreateParams, GetAllParams, GetAllResponse } from "./types";

export class ProductService {
  private static readonly baseUrl = getBaseUrl();

  static async getAll({
    page,
    search,
    sortPrice,
  }: GetAllParams): Promise<GetAllResponse> {
    const queryParams = new URLSearchParams({
      page: page ?? "0",
      search: encodeURIComponent(search ?? ""),
      sortPrice: sortPrice ?? "",
    });

    const res = await fetch(
      `${this.baseUrl}/api/products?${queryParams.toString()}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) throw new Error("Erro ao carregar produtos");

    return res.json();
  }

  static async create(data: CreateParams): Promise<Product> {
    const res = await fetch(`${this.baseUrl}/api/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Erro ao criar produto");

    return res.json();
  }

  static async delete(id: number) {
    const res = await fetch(`${this.baseUrl}/api/products?id=${id}`, {
      method: "DELETE",
    });

    if (!res.ok) throw new Error("Erro ao deletar produto");

    return res.json();
  }
}
