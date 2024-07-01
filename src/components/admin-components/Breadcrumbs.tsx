"use client";
import React, { Fragment } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const crumbs = pathname.split("/").filter((crumb) => crumb !== "");
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {crumbs.map((crumb: any, index) => {
          const crumbPath = `/${crumbs.slice(0, index + 1).join("/")}`;
          const linkName =
            crumb[0].toUpperCase() + crumb.slice(1, crumb.length);
          const isLastPath: boolean = index === crumbs.length - 1;
          return (
            <Fragment key={index}>
              <BreadcrumbItem>
                {isLastPath ? (
                  <BreadcrumbPage>{linkName}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={crumbPath}>{linkName}</BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {pathname.length !== index + 1 && <BreadcrumbSeparator />}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
