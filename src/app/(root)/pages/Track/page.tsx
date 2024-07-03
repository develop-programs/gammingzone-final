import BreadcrumbsMain from "@/components/custom/Breadcrumbs-Main";
import { Button } from "@/components/ui/button";
import React from "react";

export default function page() {
  return (
    <section aria-label="Track Order">
      <div className="container h-[calc(100vh-16rem)] space-y-32">
        <BreadcrumbsMain />
        <div className="w-[50rem] grid gap-6">
          <span className="text-2xl font-semibold">Track Order</span>
          <span className="text-base text-slate-500">
            To track your order please enter your order ID in the input field
            below and press the “Track Order” button. this was given to you on
            your receipt and in the confirmation email you should have received.
          </span>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <span className="text-sm font-semibold">Order ID</span>
              <input
                type="text"
                placeholder="ID..."
                className="w-full outline-none focus-visible:outline-none p-1 border-b focus-visible:border-orange-600"
              />
            </div>
            <div className="grid gap-2">
              <span className="text-sm font-semibold">Billing Email</span>
              <input
                type="text"
                placeholder="Email address"
                className="w-full outline-none focus-visible:outline-none p-1 border-b focus-visible:border-orange-600"
              />
            </div>
          </div>
          <Button variant="orange" className="w-44 text-white">
            Track Order
          </Button>
        </div>
      </div>
    </section>
  );
}
