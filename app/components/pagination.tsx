"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Link } from "next-view-transitions";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  baseUrl: string;
}

export default function Pagination({
  totalPages,
  currentPage,
  baseUrl,
}: PaginationProps) {
  // Don't render pagination if there's only one page
  if (totalPages <= 1) return null;

  // Calculate which page numbers to show
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      // Show all pages if there are fewer than maxPagesToShow
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always include first page
      pageNumbers.push(1);

      // Calculate start and end of page range to show
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);

      // Adjust if at the beginning or end
      if (currentPage <= 2) {
        endPage = 4;
      } else if (currentPage >= totalPages - 1) {
        startPage = totalPages - 3;
      }

      // Add ellipsis after first page if needed
      if (startPage > 2) {
        pageNumbers.push("ellipsis-start");
      }

      // Add middle pages
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      // Add ellipsis before last page if needed
      if (endPage < totalPages - 1) {
        pageNumbers.push("ellipsis-end");
      }

      // Always include last page
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  return (
    <nav
      className="flex items-center justify-center space-x-4 mt-8"
      aria-label="Pagination"
    >
      {/* Previous page button */}
      {currentPage === 1 ? (
        <button
          disabled
          className="h-9 w-9 inline-flex items-center justify-center rounded-md bg-zinc-200 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 opacity-0"
          aria-label="Previous page"
        >
          <ChevronLeftIcon className="h-4 w-4" />
        </button>
      ) : (
        <Link
          href={`${baseUrl}?page=${currentPage - 1}`}
          className="h-9 w-9 inline-flex items-center duration-300 justify-center rounded-md bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 hover:bg-zinc-300 dark:hover:bg-zinc-700/60 transition-colors"
          aria-label="Previous page"
        >
          <ChevronLeftIcon className="h-4 w-4" />
        </Link>
      )}

      {/* Page numbers */}
      <div className="flex items-center space-x-2">
        {pageNumbers.map((page, index) => {
          if (page === "ellipsis-start" || page === "ellipsis-end") {
            return (
              <span
                key={`ellipsis-${index}`}
                className="px-3 py-2 text-zinc-800 dark:text-zinc-200"
              >
                &hellip;
              </span>
            );
          }

          const isCurrentPage = page === currentPage;

          return isCurrentPage ? (
            <span
              key={`page-${page}`}
              aria-current="page"
              className="inline-flex border h-9 min-w-9 items-center justify-center rounded-md text-sm font-medium bg-zinc-200 dark:bg-zinc-800 border-zinc-400/50 dark:border-zinc-700/50 text-zinc-900 dark:text-zinc-100 px-3"
            >
              {page}
            </span>
          ) : (
            <Link
              key={`page-${page}`}
              href={`${baseUrl}?page=${page}`}
              className="inline-flex h-9 min-w-9 items-center justify-center rounded-md text-sm font-medium transition-colors duration-300 bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-800 px-3"
            >
              {page}
            </Link>
          );
        })}
      </div>

      {/* Next page button */}
      {currentPage === totalPages ? (
        <button
          disabled
          className="h-9 w-9 inline-flex items-center justify-center rounded-md bg-zinc-200 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 opacity-0"
          aria-label="Next page"
        >
          <ChevronRightIcon className="h-4 w-4" />
        </button>
      ) : (
        <Link
          href={`${baseUrl}?page=${currentPage + 1}`}
          className="h-9 w-9 inline-flex items-center duration-300 justify-center rounded-md bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 hover:bg-zinc-300 dark:hover:bg-zinc-700/60 transition-colors"
          aria-label="Next page"
        >
          <ChevronRightIcon className="h-4 w-4" />
        </Link>
      )}
    </nav>
  );
}
