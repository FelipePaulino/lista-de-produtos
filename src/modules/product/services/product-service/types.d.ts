import { Product } from "@/generated/prisma";
import { Paginator } from "@/shared/interfaces";

export type GetAllResponse = Paginator & {
  products: Product[];
};

export interface GetAllParams {
  search?: string;
  page?: string;
  sortPrice?: string;
}

export interface CreateParams {
  title: string;
  price: number;
  description: string;
  category: string;
  thumbnail: string;
}
