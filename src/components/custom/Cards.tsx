"use client";
import { cn } from "@/lib/utils";
import React from "react";
export default function Cards({
  isLarge,
  isTag,
  Image,
}: {
  isLarge?: boolean;
  isTag?: boolean;
  Image?: boolean;
}) {
  const [Hovered, setHovered] = React.useState(false);
  return (
    <div
      className={cn(
        isLarge ? "h-[calc(12rem * 2)]" : "h-72",
        "relative w-full border border-slate-600 rounded-md"
      )}
    >
      {Image && (
        <div
          className={cn(isLarge ? "h-80" : "h-44", "w-full bg-slate-700")}
        ></div>
      )}
      <div
        className={cn(
          isTag ? "block" : "hidden",
          "absolute top-1 left-1 bg-rose-500 text-white px-6 py-3 text-base font-bold rounded-md"
        )}
      >
        Hot
      </div>
    </div>
  );
}
