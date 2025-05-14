"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { Paginator } from "@/shared/interfaces";

/**
 * @description Hook to handle pagination
 * @param {Paginator} pagination - Pagination object
 * @returns {Object} - Pagination object
 */
export function usePagination({ limit, page: currentPage, total }: Paginator) {
  const [page, setPage] = useState(1);

  const router = useRouter();
  const pathname = usePathname();

  const totalPages = Math.ceil(total / limit);
  const isCurrentPage = currentPage === page;
  const isDisabledPrevious = currentPage <= 1;
  const isDisabledNext = currentPage >= totalPages;
  const hasEllipsis = totalPages > 3;
  const isFirstPage = currentPage === 1;

  /**
   * @description Function to navigate between pages
   */
  const handlePagination = (page: number) => {
    const offset = (page - 1) * limit;
    router.push(`${pathname}?skip=${offset}&limit=10`);
    setPage(page);
  };

  return {
    totalPages,
    isFirstPage,
    hasEllipsis,
    currentPage,
    isCurrentPage,
    isDisabledNext,
    handlePagination,
    isDisabledPrevious,
  };
}
