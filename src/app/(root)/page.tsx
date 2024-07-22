import Cards from "@/components/custom/Cards";
import BannerCarousal from "@/components/custom/Carousal";
import Categories from "@/components/custom/Categories";
import NewsCard from "@/components/custom/NewsCard";
import NewsLetter from "@/components/custom/NewsLetter";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <section aria-label="Home Section" className="space-y-12">
      <section aria-label="promotion">
        <span className="sr-only">Promotion</span>
        <div className="container space-y-2">
          <div className="flex items-center gap-6">
            <BannerCarousal />
            <div className="max-w-5xl">
              {[
                "/images/flipbuds_banner.png",
                "/images/iphone14_banner.png",
              ].map((item, index) => (
                <Image
                  src={item}
                  alt={item}
                  width={1200}
                  height={720}
                  key={index}
                  className="w-[30rem] aspect-video"
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
          </div>
          <Image
            src="/images/Features.png"
            alt="features"
            width={1920}
            height={1080}
            className="w-full"
          />
        </div>
      </section>
      <section aria-label="deals">
        <span className="sr-only">Deals</span>
        <div className="container">
          <Cards lable="Best Deals" />
        </div>
      </section>
      <section aria-label="Categories">
        <div className="container">
          <div className="grid gap-3">
            <div className="text-center">
              <span className="text-2xl font-bold">Shop with Categorys</span>
            </div>
            <Categories />
          </div>
        </div>
      </section>
      <section aria-label="Feature Products">
        <span className="sr-only">Featured Products</span>
        <div className="container grid grid-cols-8 gap-3 h-[35rem]">
          <div className="hidden lg:block col-span-2 h-full border border-slate-900"></div>
          <div className="col-span-8 lg:col-span-6">
            <Cards
              lable="Featured Products"
              tabs={["All", "Smartphones", "Laptops"]}
            />
          </div>
        </div>
      </section>
      <section aria-label="offers">
        <span className="sr-only">offers</span>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {["/images/Banner.png", "/images/Frame 14.png"].map(
              (item, index) => (
                <Image
                  src={item}
                  alt="offers"
                  key={index}
                  width={1920}
                  height={1080}
                  className="w-full h-[40vh] shadow-lg aspect-video"
                  priority
                  decoding="async"
                />
              )
            )}
          </div>
        </div>
      </section>
      <section aria-label="Gamming Accessories">
        <div className="container grid grid-cols-8 gap-3 h-[35rem]">
          <div className="col-span-8 lg:col-span-6">
            <Cards
              lable="Gamming Accessories"
              tabs={["All", "Smartphones", "Laptops"]}
            />
          </div>
          <div className="hidden lg:block col-span-2 h-full border border-slate-900"></div>
        </div>
      </section>
      <section aria-label="promotion">
        <span className="sr-only">promotion</span>
        <div className="container">
          <Image
            src="/images/macBook_banner.png"
            alt="promotion"
            width={1400}
            height={900}
            className="w-full"
            decoding="async"
            priority
          />
        </div>
      </section>
      <section aria-label="news">
        <div className="container space-y-12">
          <p className="text-2xl font-bold w-full text-center">Latest News</p>
          <div className="grid lg:grid-cols-3 gap-3">
            {Array.from({ length: 3 }, (_, i) => (
              <NewsCard key={i} />
            ))}
          </div>
        </div>
      </section>
      <NewsLetter />
    </section>
  );
}
