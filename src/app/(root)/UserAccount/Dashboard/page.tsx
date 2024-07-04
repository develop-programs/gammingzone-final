import BreadcrumbsMain from "@/components/custom/Breadcrumbs-Main";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <section aria-label="dashboard">
      <div className="w-full container">
        <BreadcrumbsMain />
        <div className="w-full grid grid-cols-4">
          <div className="col-span-1 grid">
            {[
              {
                name: "Profile",
                link: "/UserAccount/Profile",
              },
            ].map((item, index) => (
              <Button asChild variant="orange" key={index}>
                <Link href={item.link}>{item.name}</Link>
              </Button>
            ))}
          </div>
          <div className="col-span-3"></div>
        </div>
      </div>
    </section>
  );
}
