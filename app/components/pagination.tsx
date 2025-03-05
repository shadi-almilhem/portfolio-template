"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "./Button";

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
  const router = useRouter();

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
      <Button
        size="icon"
        className={`h-9 w-9 ${currentPage === 1 ? "!bg-zinc-800 cursor-not-allowed" : "cursor-pointer"}`}
        disabled={currentPage === 1}
        onClick={() =>
          currentPage > 1 && router.push(`${baseUrl}?page=${currentPage - 1}`)
        }
        aria-label="Previous page"
      >
        <ChevronLeftIcon className="h-4 w-4" />
      </Button>

      {/* Page numbers */}
      <div className="flex items-center space-x-2">
        {pageNumbers.map((page, index) => {
          if (page === "ellipsis-start" || page === "ellipsis-end") {
            return (
              <span key={`ellipsis-${index}`} className="px-3 py-2">
                &hellip;
              </span>
            );
          }

          const isCurrentPage = page === currentPage;

          return (
            <Link
              key={`page-${page}`}
              href={`${baseUrl}?page=${page}`}
              aria-current={isCurrentPage ? "page" : undefined}
              className={`inline-flex h-9 min-w-9 items-center justify-center rounded-md text-sm font-medium transition-colors
                ${
                  isCurrentPage
                    ? "bg-zinc-800 border border-zinc-700  hover:bg-zinc-800/90"
                    : " bg-transparent hover:bg-zinc-800/50 "
                } px-3`}
            >
              {page}
            </Link>
          );
        })}
      </div>

      {/* Next page button */}
      <Button
        size="icon"
        className={`h-9 w-9 ${currentPage === totalPages ? "!bg-zinc-800 cursor-not-allowed" : "cursor-pointer"}`}
        disabled={currentPage === totalPages}
        onClick={() =>
          currentPage < totalPages &&
          router.push(`${baseUrl}?page=${currentPage + 1}`)
        }
        aria-label="Next page"
      >
        <ChevronRightIcon className="h-4 w-4" />
      </Button>
    </nav>
  );
}
