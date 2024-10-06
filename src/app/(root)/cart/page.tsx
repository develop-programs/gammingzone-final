import BreadcrumbsMain from "@/components/custom/Breadcrumbs-Main";
import {Button} from "@/components/ui/button";
import {currencyFormater} from "@/functions/CurrencyFormator";
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
        <div className="w-full h-[calc(100vh-11rem)] overflow-auto">
            <div className="container">
                <BreadcrumbsMain/>
                <div className="w-full h-full flex flex-col lg:flex-row gap-12 py-12">
                    <div className="flex-1">
                        <div className="w-full">
                            <span className="text-2xl font-bold">Shopping Card</span>
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
                                                        <circle cx="12" cy="12" r="10"/>
                                                        <path d="m15 9-6 6"/>
                                                        <path d="m9 9 6 6"/>
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
                    </div>
                    <div className=" space-y-12">
                        <div className="space-y-4">
                            <span className="text-2xl font-bold">Cart Total</span>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                  <span className="text-lg font-medium text-slate-500">
                    Sub-total
                  </span>
                                    <div className="">{currencyFormater(10000)}</div>
                                </div>
                                <div className="flex justify-between">
                  <span className="text-lg font-medium text-slate-500">
                    Shipping
                  </span>
                                    <div className="">Free</div>
                                </div>
                                <div className="flex justify-between">
                  <span className="text-lg font-medium text-slate-500">
                    Discount
                  </span>
                                    <div className="">{currencyFormater(10000)}</div>
                                </div>
                                <div className="flex justify-between">
                  <span className="text-lg font-medium text-slate-500">
                    Tax
                  </span>
                                    <div className="">{currencyFormater(10000)}</div>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-lg font-semibold">Total</span>
                                <div className="">{currencyFormater(10000)}</div>
                            </div>
                            <Button
                                className="w-full py-6 text-white uppercase font-bold"
                                variant="orange"
                            >
                                Proceed to CheckOut
                            </Button>
                        </div>
                        <div className="space-y-5">
                            <p className="text-2xl font-bold">Coupon Code</p>
                            <input
                                type="text"
                                className="w-full p-2 outline-none focus-visible:outline-none border-b border-slate-100 focus-visible:border-b-2 focus-visible:border-blue-700"
                                placeholder="Enter your coupon code"
                            />
                            <Button
                                className="py-6 text-white uppercase font-bold"
                                variant="primary"
                            >
                                Apply Coupon
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
