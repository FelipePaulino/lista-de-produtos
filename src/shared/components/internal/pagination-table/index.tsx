import {
  Pagination,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationContent,
  PaginationPrevious,
} from "@/shared/components/external";

import { cn } from "@/shared/lib";

import { PaginationTableProps } from "./types";

export function PaginationTable({
  metadata,
  isEmpty,
  currentSearchParams,
}: PaginationTableProps) {
  if (!metadata.totalElements || isEmpty) return;

  const getPageHref = (page: number) => {
    const params = new URLSearchParams(
      currentSearchParams as Record<string, string>
    );
    params.set("page", String(page));
    return `/?${params.toString()}`;
  };

  return (
    <Pagination className="mt-8 mb-20">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className={cn(
              metadata.isDisabledPrevious && "opacity-50 cursor-not-allowed"
            )}
            href={
              metadata.isDisabledPrevious
                ? undefined
                : getPageHref(metadata.page - 1)
            }
          >
            Voltar
          </PaginationPrevious>
        </PaginationItem>

        <PaginationItem>
          <PaginationLink href={getPageHref(metadata.page)}>
            {metadata.page + 1}
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationNext
            className={cn(
              metadata.isDisabledNext && "opacity-50 cursor-not-allowed"
            )}
            href={
              metadata.isDisabledNext
                ? undefined
                : getPageHref(metadata.page + 1)
            }
          >
            Próximo
          </PaginationNext>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
