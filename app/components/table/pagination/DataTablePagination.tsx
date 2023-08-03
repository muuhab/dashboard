"use client"


import { Table } from "@tanstack/react-table"
import { Button } from "../../ui/Button"
import { Icons } from "../../ui/Icons"
import { useEffect, useState } from "react"
import { DOTS, usePagination } from "@/app/hooks/usePagination"
import Pagination from "./Pagination"

interface DataTablePaginationProps<TData> {
  table: Table<TData>
  title: string
  currentPage: number
  totalCount: number
  pageSize: number
}

function DataTablePagination<TData>({
  table,
  title,
  currentPage,
  totalCount,
  pageSize
}: DataTablePaginationProps<TData>) {



  return (
    <div className="flex items-center justify-between px-2">
      <div className="flex-1 text-sm text-muted-foreground">
        Show {table.getState().pagination.pageSize * (table.getState().pagination.pageIndex + 1)} from{" "}
        {table.getFilteredRowModel().rows.length} {title}
      </div>


      <div className="flex items-center space-x-2">

        <Button
          variant="ghost"
          className="h-8 w-8 p-0"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <span className="sr-only">Go to previous page</span>
          <Icons.chevronLeft className="h-4 w-4" />
        </Button>
        <Pagination
          currentPage={currentPage}
          pageSize={pageSize}
          totalCount={totalCount}
          siblingCount={1}
          onPageChange={(page: number) => table.setPageIndex(page - 1)}
        />

        <Button
          variant="ghost"
          className="h-8 w-8 p-0"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <span className="sr-only">Go to next page</span>
          <Icons.chevronRight className="h-4 w-4" />
        </Button>

      </div>
    </div>
  )
}

export default DataTablePagination