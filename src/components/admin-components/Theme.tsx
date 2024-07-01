"use client";
import React from "react";
import { useTheme } from "next-themes";
import {
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";

export default function Theme() {
  const { setTheme } = useTheme();
  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger className="w-full flex justify-start">
        <div className="flex gap-3 items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="size-5"
          >
            <g clipPath="url(#clip0_310_5826)">
              <path
                d="M19.1623 3.525H18.5623V2.25C18.5623 1.3875 17.8498 0.674999 16.9873 0.674999H2.2498C1.3873 0.637499 0.674805 1.35 0.674805 2.25V6.4875C0.674805 7.35 1.3873 8.0625 2.2498 8.0625H16.9873C17.8498 8.0625 18.5623 7.35 18.5623 6.4875V5.2125H19.1623C20.5498 5.2125 21.6748 6.3375 21.6748 7.725C21.6748 9.1125 20.5498 10.2375 19.1623 10.2375H11.9998C11.0248 10.2375 10.1998 11.0625 10.1998 12.0375V14.0625H9.89981C9.0373 14.0625 8.32481 14.775 8.32481 15.6375V21.75C8.32481 22.6125 9.0373 23.325 9.89981 23.325H12.2248C13.0873 23.325 13.8373 22.6125 13.8373 21.75V15.6C13.8373 14.7375 13.1248 14.025 12.2248 14.025H11.9248V12C11.9248 11.925 11.9623 11.8875 12.0373 11.8875H19.1998C21.5248 11.8875 23.3998 10.0125 23.3998 7.6875C23.3998 5.3625 21.4498 3.525 19.1623 3.525ZM16.8748 6.375H2.3248V2.325H16.8748V6.375ZM12.1123 21.675H9.9748V15.7125H12.1123V21.675Z"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0_310_5826">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Themes
        </div>
      </DropdownMenuSubTrigger>
      <DropdownMenuPortal>
        <DropdownMenuSubContent>
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            system
          </DropdownMenuItem>
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>
  );
}
