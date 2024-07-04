"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  Product_Name: string;
  Product_Price: number;
  Product_category: string;
  Product_Image: string;
  Product_Brand: string;
  Product_id: number;
};

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell({ row }) {
      return (
        <>
          {row.getValue("status") == "pending" ? (
            <span className="text-yellow-600 font-semibold">Pending</span>
          ) : row.getValue("status") == "Shipped" ? (
            <span className="text-green-600 font-semibold">Shipped</span>
          ) : row.getValue("status") == "Cancelled" ? (
            <span className="text-rose-600 font-semibold">Cancelled</span>
          ) : null}
        </>
      );
    },
  },
];
