import BreadcrumbsMain from "@/components/custom/Breadcrumbs-Main";
import { Button } from "@/components/ui/button";
import { currencyFormater } from "@/functions/CurrencyFormator";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function page() {
  return (
    <div className="w-full h-[calc(100vh-15rem)] container py-12">
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow className="uppercase">
            <TableHead className="w-[30rem]">Products</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="text-center">Quantity</TableHead>
            <TableHead className="text-right">SubTotal</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="group/selected-item">
            <TableCell>
              <div className="flex">
                <Button variant="ghost" size={"icon"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-4 stroke-slate-400 group-hover/selected-item:stroke-red-600"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m15 9-6 6" />
                    <path d="m9 9 6 6" />
                  </svg>
                </Button>
              </div>
            </TableCell>
            <TableCell>{currencyFormater(250)}</TableCell>
            <TableCell>
              <div className="flex justify-between items-center">
                <Button variant="ghost" size="icon">
                  -
                </Button>
                <span className="text-base font-bold">01</span>
                <Button variant="ghost" size="icon">
                  +
                </Button>
              </div>
            </TableCell>
            <TableCell className="text-right">
              {currencyFormater(250)}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
