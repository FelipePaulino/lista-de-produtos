import { Paginator } from "@/shared/interfaces";

export interface PaginationTableProps {
  metadata: Paginator["metadata"];
  isEmpty: boolean;
  currentSearchParams: { [key: string]: string | undefined };
}
