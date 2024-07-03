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
import { link } from "fs";

export default function BreadcrumbsMain() {
  const pathname = usePathname();

  const crumbs = pathname.split("/").filter((crumb) => crumb !== "");

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className="flex gap-1 items-center">
            <span>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-4"
              >
                <path
                  d="M16.8096 4.30061C16.3428 3.90385 15.6572 3.90385 15.1904 4.30061L5.44044 12.5881C5.16103 12.8256 5 13.1738 5 13.5405V26.5C5 26.7761 5.22386 27 5.5 27H10.5C10.7761 27 11 26.7761 11 26.5V19.5C11 18.1193 12.1193 17 13.5 17H18.5039C19.8846 17 21.0039 18.1193 21.0039 19.5V26.5C21.0039 26.7761 21.2278 27 21.5039 27H26.5C26.7761 27 27 26.7761 27 26.5V13.5405C27 13.1738 26.839 12.8256 26.5596 12.5881L16.8096 4.30061ZM13.8952 2.77673C15.1088 1.74514 16.8912 1.74514 18.1049 2.77673L27.8549 11.0642C28.5813 11.6817 29 12.587 29 13.5405V26.5C29 27.8807 27.8807 29 26.5 29H21.5039C20.1232 29 19.0039 27.8807 19.0039 26.5V19.5C19.0039 19.2239 18.78 19 18.5039 19H13.5C13.2239 19 13 19.2239 13 19.5V26.5C13 27.8807 11.8807 29 10.5 29H5.5C4.11929 29 3 27.8807 3 26.5V13.5405C3 12.587 3.41868 11.6817 4.14515 11.0642L13.8952 2.77673Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span>Home</span>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
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
                  <>
                    <BreadcrumbLink href={crumbPath}>{linkName}</BreadcrumbLink>
                  </>
                )}
              </BreadcrumbItem>
              {pathname.length !== index - 1 && <BreadcrumbSeparator />}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
