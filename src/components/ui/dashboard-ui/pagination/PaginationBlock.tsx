"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useMemo, useCallback } from "react";

interface Props {
  currentPage: number;
  lastPage: number;
  onChange: (page: number) => void;
}

const getPageRange = (current: number, last: number, delta = 2) => {
  const start = Math.max(1, current - delta);
  const end = Math.min(last, current + delta);

  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
};

export function PaginationNumbers({ currentPage, lastPage, onChange }: Props) {
  const pageNumbers = useMemo(
    () => getPageRange(currentPage, lastPage),
    [currentPage, lastPage]
  );

  const goToPrev = useCallback(
    () => onChange(Math.max(1, currentPage - 1)),
    [currentPage, onChange]
  );

  const goToNext = useCallback(
    () => onChange(Math.min(lastPage, currentPage + 1)),
    [currentPage, lastPage, onChange]
  );

  const handlePageClick = useCallback(
    (page: number) => () => onChange(page),
    [onChange]
  );

  const shouldShowLeftDots = pageNumbers[0] > 2;
  const shouldShowRightDots =
    pageNumbers[pageNumbers.length - 1] < lastPage - 1;

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={goToPrev} />
        </PaginationItem>

        {shouldShowLeftDots && (
          <>
            <PaginationItem>
              <PaginationLink onClick={handlePageClick(1)}>1</PaginationLink>
            </PaginationItem>

            <PaginationItem>
              <PaginationLink className="pointer-events-none opacity-50">
                ...
              </PaginationLink>
            </PaginationItem>
          </>
        )}

        {pageNumbers.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              isActive={page === currentPage}
              onClick={handlePageClick(page)}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {shouldShowRightDots && (
          <>
            <PaginationItem>
              <PaginationLink className="pointer-events-none opacity-50">
                ...
              </PaginationLink>
            </PaginationItem>

            <PaginationItem>
              <PaginationLink onClick={handlePageClick(lastPage)}>
                {lastPage}
              </PaginationLink>
            </PaginationItem>
          </>
        )}

        <PaginationItem>
          <PaginationNext onClick={goToNext} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
