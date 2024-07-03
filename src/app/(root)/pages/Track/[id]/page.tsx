import BreadcrumbsMain from "@/components/custom/Breadcrumbs-Main";
import { currencyFormater } from "@/functions/CurrencyFormator";
import { cn } from "@/lib/utils";
import React from "react";

export default function page({ params }: { params: { id: string } }) {
  return (
    <div className="w-full h-[calc(100vh-15rem)] container">
      <BreadcrumbsMain />
      <div className="w-full flex justify-center py-12">
        <div className="flex flex-col items-center gap-6">
          <div className="w-[50rem] flex justify-between">
            <div className="grid gap-2">
              <span>{params.id}</span>
              <span className="text-sm">
                4 Products.Order Placed in 17 Jan, 2021 at 7:32 PM
              </span>
            </div>
            <div className="h-full grid place-content-center">
              <span className="text-2xl font-bold">
                {currencyFormater(10000)}
              </span>
            </div>
          </div>
          <div className="w-[50rem] flex gap-8 flex-col justify-start">
            <div className="text-sm">
              <span>Order expected arrival 23 Jan, 2021</span>
            </div>
            <div className="flex items-center justify-center">
              {[
                {
                  step: 1,
                  completed: true,
                },
                {
                  step: 2,
                  completed: false,
                },
                {
                  step: 3,
                  completed: false,
                },
                {
                  step: 4,
                  completed: false,
                },
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="size-6 rounded-full bg-orange-600"></div>
                  <div
                    className={cn(
                      index < 4 - 1 && "w-32 h-1 bg-slate-400",
                      item.completed && "bg-orange-600"
                    )}
                  />
                </div>
              ))}
              <div>
                {[].map((item, index) => (
                  <div key={index}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
