import BreadcrumbsMain from "@/components/custom/Breadcrumbs-Main";
import { Button } from "@/components/ui/button";
import React from "react";

export default function page() {
  return (
    <section aria-label="FAQ Section">
      <div className="w-full h-screen container">
        <BreadcrumbsMain />
        <div className="grid grid-cols-5 gap-12 py-12">
          <div className="col-span-3">
            <span className="text-2xl font-bold">
              Frequently Asked Questions
            </span>
          </div>
          <div className="col-span-2">
            <div className="grid bg-[#FBF4CE] p-6 gap-4">
              <span className="text-lg font-semibold">
                Don&apos;t find your answer, Ask for support.
              </span>
              <span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur soluta praesentium velit, quia eligendi dolore quod
                fugiat inventore. Nobis, culpa.
              </span>
              <input type="text" placeholder="Enter your email" />
              <input type="text" placeholder="Subject" />
              <textarea placeholder="Message" rows={5} />
              <Button
                variant="orange"
                className="w-44 text-white font-semibold py-5 uppercase text-sm"
              >
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
