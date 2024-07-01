"use client";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function Categories() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {[
          "/images/computer.png",
          "/images/earphones.png",
          "/images/headset.png",
          "/images/console.png",
          "/images/keyboard.png",
          "/images/phones.png",
          "/images/gamepad.png",
        ].map((item, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 lg:basis-1/4 xl:basis-1/5"
          >
            <div className="size-28 xl:size-32 2xl:size-44 aspect-square grid place-content-center select-none">
              <Image
                src={item}
                alt={item}
                width={300}
                height={300}
                className="w-full"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
