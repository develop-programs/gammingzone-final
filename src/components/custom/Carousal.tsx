"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export default function BannerCarousal() {
  return (
    <Carousel
      className="w-[56rem]"
      opts={{ loop: true }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent>
        {[
          "/images/Xbox_console_banner.png",
          "/images/Xbox_controller_banner.png",
          "/images/airPods_banner.png",
        ].map((item, index) => (
          <CarouselItem key={index}>
            <Image
              src={item}
              alt={item}
              width={1200}
              height={720}
              className="w-full aspect-auto"
              decoding="async"
              loading="lazy"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
