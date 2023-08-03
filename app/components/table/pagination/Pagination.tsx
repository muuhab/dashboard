import React from "react";
import { DOTS, usePagination } from "@/app/hooks/usePagination";
import { Button } from "../../ui/Button";
import clsx from "clsx";

interface PaginationProps {
    currentPage: number;
    totalCount: number;
    siblingCount?: number;
    pageSize: number;
    onPageChange: (page: number) => void;
}

const Pagination = (props: PaginationProps) => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    if (currentPage === 0 || paginationRange?.length! < 2) {
        return null;
    }



    return (
        <>

            {paginationRange?.map((pageNumber: number | string, i: number) => {
                if (pageNumber === DOTS) {
                    return <span key={i}>&#8230;</span>;
                }

                return (
                    <Button
                        key={i}
                        variant="ghost"
                        className={
                            clsx(
                                "h-6 w-6 p-0 regular-text-12-semibold rounded-sm disabled:opacity-100",
                                pageNumber === currentPage ? "bg-purple-light-main  !text-purple-main" : "!text-dark-2"
                            )
                        }
                        onClick={() => onPageChange(pageNumber as number)}
                        disabled={pageNumber === currentPage}
                    >
                        {pageNumber}
                    </Button>

                );
            })}

        </>
    );
};

export default Pagination;
