"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Header() {
  const [Toggle, setToggle] = React.useState<boolean>(true);
  return (
    <section
      aria-label="Header Section"
      className={cn("bg-black text-white", Toggle ? "block" : "hidden")}
    >
      <div className="container flex justify-between items-center py-4">
        <div className="flex items-center gap-3">
          <div className="bg-yellow-500 text-black rounded-sm font-bold px-4 py-2 -rotate-6">
            Black
          </div>
          <span className="text-base font-semibold">Friday</span>
        </div>
        <div className="flex items-center gap-1 font-bold">
          upto
          <span className="text-2xl font-black text-yellow-500">60%</span>
          off
        </div>
        <div>
          <Button variant="yellow" className="py-5 flex items-center gap-2">
            Shop Now
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="size-4"
            >
              <path
                d="M3.625 10H17.375"
                stroke="#191C1F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.75 4.375L17.375 10L11.75 15.625"
                stroke="#191C1F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>
        <div className="absolute top-5 right-4">
          <Button
            variant="ghost"
            size="icon"
            className="bg-transparent hover:bg-transparent"
            onClick={() => setToggle(false)}
          >
            ❌
          </Button>
        </div>
      </div>
    </section>
  );
}
