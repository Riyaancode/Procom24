import * as React from "react";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  SortingState,
  getPaginationRowModel,
} from "@tanstack/react-table";

const mockData = Array.from({ length: 12 }, (_, i) => ({
  userName: i + 1,
  email: `user${i + 1}@example.com`,
  paymentAmount: `100.${i}`,
  customerAccountNumber: `CUST${i + 1}ACC`,
  merchantAccountNumber: `MERC${i + 1}ACC`,
  bankName: `Bank ${i + 1}`,
  paymentPurpose: `Payment for service ${i + 1}`,
  status: i % 2 === 0 ? "Success" : "Failed",
  qrCode: `QR${i + 1}`,
}));

type Person = {
  userName: number;
  email: string;
  paymentAmount: string;
  customerAccountNumber: string;
  merchantAccountNumber: string;
  bankName: string;
  paymentPurpose: string;
  status: string;
};

const columnHelper = createColumnHelper<Person>();

const columns = [
  columnHelper.accessor("userName", {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("email", {
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Email</span>,
  }),
  columnHelper.accessor("paymentAmount", {
    cell: (info) => info.getValue(),
    header: () => "Payment Amount",
  }),
  columnHelper.accessor("customerAccountNumber", {
    cell: (info) => info.getValue(),
    header: () => "Customer Account Number",
  }),
  columnHelper.accessor("merchantAccountNumber", {
    cell: (info) => info.getValue(),
    header: () => "Merchant Account Number",
  }),
  columnHelper.accessor("bankName", {
    cell: (info) => info.getValue(),
    header: () => "Bank Name",
  }),
  columnHelper.accessor("paymentPurpose", {
    cell: (info) => info.getValue(),
    header: () => "Payment Purpose",
  }),
  columnHelper.accessor("status", {
    cell: (info) => info.getValue(),
    header: () => "Status",
  }),
];

export default function Table({ data }: { data: Person[] }) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    initialState: {
      pagination: {
        pageSize: 12,
      },
    },
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="flex flex-col h-screen mx-auto py-24">
      <table className="border rounded-md">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className="border-b bg-slate-100 text-gray-800 uppercase"
            >
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-4 pr-2 py-4 font-medium text-left"
                >
                  {header.isPlaceholder ? null : (
                    <div
                      {...{
                        className: header.column.getCanSort()
                          ? "cursor-pointer select-none flex min-w-[36px]"
                          : "",
                        onClick: header.column.getToggleSortingHandler(),
                      }}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{
                        asc: <span className="pl-2">↑</span>,
                        desc: <span className="pl-2">↓</span>,
                      }[header.column.getIsSorted() as string] ?? null}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border-b">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-4 pt-[14px] pb-[18px]">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex sm:flex-row flex-col w-full mt-8 pb-10 items-center gap-2 text-xs">
        <div className="sm:mr-auto sm:mb-0 mb-2">
          <span className="mr-2">Items per page</span>
          <select
            className="border p-1 rounded w-16 border-gray-200"
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
          >
            {[2, 4, 6, 8].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
        </div>
        <div className="flex gap-2">
          <button
            className={`${
              !table.getCanPreviousPage()
                ? "bg-gray-100"
                : "hover:bg-gray-200 hover:curstor-pointer bg-gray-100"
            } rounded p-1`}
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="w-5 h-5">{"<<"}</span>
          </button>
          <button
            className={`${
              !table.getCanPreviousPage()
                ? "bg-gray-100"
                : "hover:bg-gray-200 hover:curstor-pointer bg-gray-100"
            } rounded p-1`}
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="w-5 h-5">{"<"}</span>
          </button>
          <span className="flex items-center gap-1">
            <input
              min={1}
              max={table.getPageCount()}
              type="number"
              value={table.getState().pagination.pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                table.setPageIndex(page);
              }}
              className="border p-1 rounded w-10"
            />
            of {table.getPageCount()}
          </span>
          <button
            className={`${
              !table.getCanNextPage()
                ? "bg-gray-100"
                : "hover:bg-gray-200 hover:curstor-pointer bg-gray-100"
            } rounded p-1`}
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="w-5 h-5">{">"}</span>
          </button>
          <button
            className={`${
              !table.getCanNextPage()
                ? "bg-gray-100"
                : "hover:bg-gray-200 hover:curstor-pointer bg-gray-100"
            } rounded p-1`}
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <span className="w-5 h-5">{">>"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
