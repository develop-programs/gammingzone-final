import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Icon } from "@radix-ui/react-select";

export default function NewsCard() {
  return (
    <Card>
      <CardContent className="grid gap-3">
        <Image
          src="/images/news.png"
          alt="news"
          width={400}
          height={200}
          className="w-full"
        />
        <div className="w-full flex items-center gap-4">
          {[
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="stroke-orange-500"
                >
                  <path
                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 15C14.0711 15 15.75 13.3211 15.75 11.25C15.75 9.17893 14.0711 7.5 12 7.5C9.92893 7.5 8.25 9.17893 8.25 11.25C8.25 13.3211 9.92893 15 12 15Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.98126 18.6938C6.54555 17.5824 7.4066 16.6488 8.46896 15.9968C9.53132 15.3447 10.7535 14.9995 12 14.9995C13.2465 14.9995 14.4687 15.3447 15.5311 15.9968C16.5934 16.6488 17.4545 17.5824 18.0188 18.6938"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
              value: "Kristin",
            },
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="stroke-orange-500"
                >
                  <path
                    d="M19.5 3.75H4.5C4.08579 3.75 3.75 4.08579 3.75 4.5V19.5C3.75 19.9142 4.08579 20.25 4.5 20.25H19.5C19.9142 20.25 20.25 19.9142 20.25 19.5V4.5C20.25 4.08579 19.9142 3.75 19.5 3.75Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.5 2.25V5.25"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.5 2.25V5.25"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.75 8.25H20.25"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
              value: "19Dec, 2013",
            },
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="stroke-orange-500"
                >
                  <path
                    d="M4.25626 16.5938C3.13959 14.7098 2.74899 12.483 3.1578 10.3315C3.5666 8.17989 4.74669 6.25153 6.47652 4.90838C8.20636 3.56523 10.367 2.89967 12.5527 3.03666C14.7385 3.17364 16.7991 4.10374 18.3477 5.65235C19.8963 7.20095 20.8264 9.26157 20.9634 11.4473C21.1004 13.6331 20.4349 15.7937 19.0917 17.5236C17.7486 19.2534 15.8202 20.4335 13.6686 20.8423C11.5171 21.2511 9.29025 20.8605 7.40626 19.7438L4.29376 20.6251C4.16624 20.6624 4.03103 20.6647 3.90231 20.6317C3.77359 20.5988 3.6561 20.5319 3.56215 20.4379C3.4682 20.344 3.40126 20.2265 3.36833 20.0978C3.33541 19.969 3.33771 19.8338 3.37501 19.7063L4.25626 16.5938Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M12 13.125C12.6213 13.125 13.125 12.6213 13.125 12C13.125 11.3787 12.6213 10.875 12 10.875C11.3787 10.875 10.875 11.3787 10.875 12C10.875 12.6213 11.3787 13.125 12 13.125Z" />
                  <path d="M7.5 13.125C8.12132 13.125 8.625 12.6213 8.625 12C8.625 11.3787 8.12132 10.875 7.5 10.875C6.87868 10.875 6.375 11.3787 6.375 12C6.375 12.6213 6.87868 13.125 7.5 13.125Z" />
                  <path d="M16.5 13.125C17.1213 13.125 17.625 12.6213 17.625 12C17.625 11.3787 17.1213 10.875 16.5 10.875C15.8787 10.875 15.375 11.3787 15.375 12C15.375 12.6213 15.8787 13.125 16.5 13.125Z" />
                </svg>
              ),
              value: "453",
            },
          ].map((item, index) => (
            <div key={index} className="flex gap-2 items-center">
              {item.icon} {item.value}
            </div>
          ))}
        </div>
        <span className="max-w-full text-base font-bold">
          Cras nisl dolor, accumsan et metus sit amet, vulputate condimentum
          dolor.
        </span>
        <span className="max-w-full text-sm text-muted-foreground leading-6">
          Maecenas scelerisque, arcu quis tempus egestas, ligula diam molestie
          lectus, tincidunt malesuada arcu metus posuere metus.
        </span>
      </CardContent>
      <CardFooter>
        <Link href="" className="text-orange-500">
          Read More
        </Link>
      </CardFooter>
    </Card>
  );
}
