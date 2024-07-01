import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function NewsLetter() {
  return (
    <section
      aria-label="NewsLetter Section"
      className="w-full py-12 bg-slateBlue text-white"
    >
      <div className="container max-w-2xl">
        <div className="grid place-content-center text-center gap-4">
          <h1 className="text-4xl font-bold">Subscribe to our newsletter</h1>
          <span>
            Praesent fringilla erat a lacinia egestas. Donec vehicula tempor
            libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.
          </span>
          <div className="bg-white flex items-center gap-3 p-2 rounded-sm">
            <input
              type="text"
              placeholder="Enter your email"
              className="border-none w-full text-black outline-none px-2 py-1"
            />
            <Button
              variant="orange"
              size="lg"
              className="rounded-sm text-sm uppercase text-white flex justify-center gap-3"
            >
              Subscribe
              <svg
                fill="none"
                strokeWidth={2}
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </Button>
          </div>
          <div className="flex justify-center items-center gap-6">
            {[
              "/svg/google.svg",
              "/svg/amazon.svg",
              "/svg/philips.svg",
              "/svg/toshiba.svg",
              "/svg/samsung.svg",
            ].map((item, index) => (
              <Image
                key={index}
                src={item}
                alt="logo"
                width={100}
                height={100}
                className="size-20"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
