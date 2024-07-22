"use client";
import * as React from "react";
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
      className="w-full md:w-[45rem] lg:w-[60rem] xl:w-full"
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
            className="md:basis-1/3 lg:basis-1/4 xl:basis-1/6"
          >
            <div className="size-32 aspect-square grid place-content-center select-none">
              <Image
                src={item}
                alt={item}
                width={300}
                height={300}
                className="w-full aspect-auto"
                decoding="async"
                loading="lazy"
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
