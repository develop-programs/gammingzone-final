"use client";
import Image from "next/image";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { MainNavbar } from "@/json/Navbar";
import Cart from "@/components/custom/Cart";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export default function Navigation() {
  return (
    <section aria-label="Navigation Section">
      <NavigationTop />
      <section aria-label="Navbar section 2">
        <span className="sr-only">main navigation</span>
        <div className="container flex justify-between items-center py-2">
          <div className="flex gap-6 items-center">
            <Popover>
              <PopoverTrigger asChild>
                <Button className="bg-orange-700 hover:bg-orange-700/90 rounded-md text-white hover:text-white">
                  All Categories
                  <ChevronDownIcon />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="grid max-w-max">
                {[
                  "Computer Accessories",
                  "Smartphone",
                  "Headphone",
                  "Mobile-Accessories",
                  "Gamirig Console",
                  "Came/a & Photo",
                  "TV & Homes Appliances",
                  "Watchs & Accessories",
                  "GPS & Navigation",
                ].map((item, index) => (
                  <Link
                    href=""
                    key={index}
                    className="text-sm hover:bg-slate-300 p-2 rounded-md font-semibold"
                  >
                    {item}
                  </Link>
                ))}
              </PopoverContent>
            </Popover>
            <div className="flex items-center gap-4">
              {MainNavbar.map((Item: Nav, index: number) => {
                return (
                  <Link
                    href={Item.href}
                    key={index}
                    className="text-sm flex gap-1 items-center hover:bg-slate-300 p-2 rounded-md font-semibold"
                  >
                    {Item.icon}
                    {Item.title}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="size-4"
            >
              <path
                d="M6.5355 2.11647C5.49413 1.85266 4.405 1.96488 3.55107 2.44266C2.6819 2.92896 2.07173 3.79017 2.04162 4.94409C1.99462 6.74543 2.41213 9.16296 4.06821 12.0019C5.70304 14.8045 7.50837 16.4842 9.00566 17.483C9.95165 18.1141 10.9974 18.1308 11.8904 17.7192C12.7694 17.3142 13.4838 16.5057 13.8548 15.5026C14.0415 14.9978 13.9976 14.4365 13.7346 13.9668L12.7811 12.2641C12.1747 11.1813 10.8658 10.7073 9.70667 11.1506L9.04099 11.4053C8.71841 11.5287 8.4217 11.4718 8.2531 11.3062C7.6879 10.7511 7.28413 9.99726 7.10096 9.18524C7.04335 8.92989 7.16036 8.62795 7.44305 8.41461L8.04418 7.96096C9.0494 7.20236 9.33344 5.81448 8.70705 4.72196L7.73519 3.02688C7.47518 2.57339 7.04224 2.24484 6.5355 2.11647ZM3.04128 4.97017C3.06145 4.1971 3.4526 3.64364 4.03934 3.31535C4.64132 2.97855 5.46269 2.87628 6.28993 3.08585C6.53396 3.14767 6.74245 3.30588 6.86766 3.52427L7.83952 5.21935C8.21535 5.87486 8.04493 6.70759 7.4418 7.16275L6.84067 7.6164C6.32147 8.00822 5.962 8.68063 6.12546 9.40528C6.34715 10.388 6.83834 11.3183 7.55239 12.0197C8.07376 12.5317 8.81756 12.5614 9.39825 12.3393L10.0639 12.0846C10.7594 11.8186 11.5448 12.1031 11.9086 12.7527L12.8621 14.4554C12.982 14.6696 13.0021 14.9255 12.9169 15.1557C12.6267 15.9404 12.0826 16.5296 11.4719 16.811C10.8753 17.086 10.2002 17.0778 9.5606 16.6512C8.18982 15.7367 6.49013 14.1691 4.93199 11.4981C3.36858 8.81795 2.99918 6.58367 3.04128 4.97017ZM12.7429 2.06288C12.5015 1.92877 12.1971 2.01574 12.063 2.25713C11.9289 2.49853 12.0158 2.80293 12.2572 2.93703L12.6412 3.15035C15.0762 4.50314 16.6939 6.96317 16.971 9.73491L17.0025 10.0497C17.03 10.3245 17.275 10.525 17.5498 10.4975C17.8246 10.47 18.025 10.225 17.9976 9.9502L17.9661 9.6354C17.6563 6.53758 15.8483 3.78813 13.1268 2.27619L12.7429 2.06288ZM11.5713 4.74272C11.7134 4.50593 12.0205 4.42915 12.2573 4.57122L12.3815 4.64569C14.0145 5.62553 15.1357 7.27226 15.4488 9.1508L15.4933 9.41777C15.5387 9.69016 15.3547 9.94777 15.0823 9.99317C14.8099 10.0386 14.5523 9.85456 14.5069 9.58217L14.4624 9.3152C14.1975 7.72567 13.2488 6.33228 11.867 5.50319L11.7428 5.42872C11.506 5.28664 11.4293 4.97951 11.5713 4.74272Z"
                fill="currentColor"
              />
            </svg>
            <span className="text-sm">+91 123-456-7890</span>
          </div>
        </div>
      </section>
    </section>
  );
}

export function NavigationTop() {
  return (
    <section aria-label="Navbar section 1" className="bg-slateBlue ">
      <span className="sr-only">Navigation Page</span>
      <div className="w-full border-b border-slate-500">
        <div className="container text-white flex justify-between py-3">
          <div className="flex items-center divide-x divide-slate-100">
            {["About Us", "Contact Us", "Help"].map((items, index) => (
              <Link href="" className="text-xs px-2" key={index}>
                {items}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 border-r pe-3">
              <span className="text-sm">Follow Us:</span>
              <div className="flex items-center gap-3">
                {[
                  "/svg/Twitter.svg",
                  "/svg/Facebook.svg",
                  "/svg/Instagram.svg",
                  "/svg/Youtube.svg",
                  "/svg/Pinterest.svg",
                  "/svg/Reddit.svg",
                ].map((items, index) => (
                  <Link href="" className="text-sm" key={index}>
                    <Image
                      src={items}
                      width={20}
                      height={20}
                      className="size-4"
                      alt="social media"
                      loading="lazy"
                      decoding="async"
                    />
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Select>
                <SelectTrigger
                  className="border-none max-w-20"
                  aria-label="select language"
                >
                  <SelectValue placeholder="Eng" />
                </SelectTrigger>
                <SelectContent align="end" sideOffset={5}>
                  <SelectItem value="Eng">English</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger
                  className="border-none max-w-20"
                  aria-label="select currency"
                >
                  <SelectValue placeholder="USD" />
                </SelectTrigger>
                <SelectContent align="end" sideOffset={5}>
                  <SelectItem value="USD">USD</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="container flex items-center justify-between py-4">
          <div className="text-xl font-black text-white">
            <Link href="/">Gamming Zone</Link>
          </div>
          <div className="flex items-center gap-3 bg-white w-96 px-2">
            <input
              type="text"
              placeholder="Search for anything"
              className="w-full text-sm py-2 focus-visible:outline-none"
            />
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
            >
              <path
                d="M5 1C2.79086 1 1 2.79086 1 5C1 7.20914 2.79086 9 5 9C5.92417 9 6.77513 8.68659 7.45241 8.16025L10.1455 10.8533C10.3408 11.0486 10.6574 11.0486 10.8526 10.8533C11.0479 10.6581 11.0479 10.3415 10.8526 10.1462L8.15961 7.45323C8.68633 6.77583 9 5.92454 9 5C9 2.79086 7.20914 1 5 1ZM2 5C2 3.34315 3.34315 2 5 2C6.65685 2 8 3.34315 8 5C8 6.65685 6.65685 8 5 8C3.34315 8 2 6.65685 2 5Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="flex items-center gap-4">
            <Cart />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="bg-transparent hover:bg-transparent"
                  aria-label="User Profile button"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-6"
                  >
                    <path
                      d="M20 21C20 18.2386 16.4183 16 12 16C7.58172 16 4 18.2386 4 21M12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" side="bottom">
                <DropdownMenuLabel>Profile</DropdownMenuLabel>
                <DropdownMenuItem>
                  <Link href="/UserAccount/Dashboard">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/wishlist">WishList</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </section>
  );
}
