import Cards from "@/components/custom/Cards";
import BannerCarousal from "@/components/custom/Carousal";
import Categories from "@/components/custom/Categories";
import NewsLetter from "@/components/custom/NewsLetter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
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
        <div className="container space-y-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-12">
              <span className="text-2xl font-bold">Best Deals</span>
              <div className="flex items-center gap-2">
                <span>Deals Ends in</span>
                <div className="w-60 h-10 bg-indigo-500"></div>
              </div>
            </div>
            <div>
              <Link href="/" className="text-sm flex items-center gap-2">
                Browse All Products
                <ChevronRightIcon strokeWidth={1.5} className="size-4" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className="hidden xl:block col-span-1 h-full border border-slate-600 rounded-md"></div>
            <div className="col-span-4 xl:col-span-3 grid grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, index) => {
                return <Cards key={index} Image={true} />;
              })}
            </div>
          </div>
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
        <div className="container">
          <div className="flex gap-4">
            <div className="w-80 h-[39rem]">
              <Image
                src="/images/featured_banner.png"
                alt="feature"
                width={312}
                height={716}
                className="w-full h-full aspect-auto"
                loading="lazy"
                decoding="async"
                blurDataURL="/images/featured_banner.png"
              />
            </div>
            <div className="flex-1 w-full h-full">
              <Tabs defaultValue="products" className="w-full">
                <div className="flex justify-between items-center">
                  <div>Feature Products</div>
                  <div className="flex items-center gap-4">
                    <TabsList>
                      <TabsTrigger value="products">All Products</TabsTrigger>
                      <TabsTrigger value="phones">Phones</TabsTrigger>
                      <TabsTrigger value="laptops">Laptops</TabsTrigger>
                      <TabsTrigger value="console">X box</TabsTrigger>
                      <TabsTrigger value="headphone">Headphone</TabsTrigger>
                    </TabsList>
                    <Link href="/" className="text-sm flex items-center gap-2">
                      Browse All Products
                      <ChevronRightIcon strokeWidth={1.5} className="size-4" />
                    </Link>
                  </div>
                </div>
                <TabsContent
                  value="products"
                  className="grid grid-cols-4 gap-4"
                >
                  {Array.from({ length: 8 }).map((_, index) => {
                    return <Cards key={index} Image={true} />;
                  })}
                </TabsContent>
                <TabsContent value="phones" className="grid grid-cols-4 gap-4">
                  {Array.from({ length: 8 }).map((_, index) => {
                    return <Cards key={index} Image={true} />;
                  })}
                </TabsContent>
                <TabsContent value="laptops" className="grid grid-cols-4 gap-4">
                  {Array.from({ length: 8 }).map((_, index) => {
                    return <Cards key={index} Image={true} />;
                  })}
                </TabsContent>
                <TabsContent value="console" className="grid grid-cols-4 gap-4">
                  {Array.from({ length: 8 }).map((_, index) => {
                    return <Cards key={index} Image={true} />;
                  })}
                </TabsContent>
                <TabsContent
                  value="headphone"
                  className="grid grid-cols-4 gap-4"
                >
                  {Array.from({ length: 8 }).map((_, index) => {
                    return <Cards key={index} Image={true} />;
                  })}
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
      <section aria-label="offers">
        <span className="sr-only">offers</span>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2">
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
      <section aria-label="Computer Accessories">
        <span className="sr-only">Computer Accessories</span>
        <div className="container">
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-3 w-full h-full">
              <Tabs defaultValue="products" className="w-full">
                <div className="flex justify-between items-center">
                  <div className="text-2xl font-bold">Computer Accessories</div>
                  <div className="flex items-center gap-4">
                    <TabsList>
                      <TabsTrigger value="products">All Products</TabsTrigger>
                      <TabsTrigger value="phones">Phones</TabsTrigger>
                      <TabsTrigger value="laptops">Laptops</TabsTrigger>
                      <TabsTrigger value="console">X box</TabsTrigger>
                      <TabsTrigger value="headphone">Headphone</TabsTrigger>
                    </TabsList>
                    <Link href="/" className="text-sm flex items-center gap-2">
                      Browse All Products
                      <ChevronRightIcon strokeWidth={1.5} className="size-4" />
                    </Link>
                  </div>
                </div>
                <TabsContent
                  value="products"
                  className="grid grid-cols-4 gap-4"
                >
                  {Array.from({ length: 8 }).map((_, index) => {
                    return <Cards key={index} Image={true} />;
                  })}
                </TabsContent>
                <TabsContent value="phones" className="grid grid-cols-4 gap-4">
                  {Array.from({ length: 8 }).map((_, index) => {
                    return <Cards key={index} Image={true} />;
                  })}
                </TabsContent>
                <TabsContent value="laptops" className="grid grid-cols-4 gap-4">
                  {Array.from({ length: 8 }).map((_, index) => {
                    return <Cards key={index} Image={true} />;
                  })}
                </TabsContent>
                <TabsContent value="console" className="grid grid-cols-4 gap-4">
                  {Array.from({ length: 8 }).map((_, index) => {
                    return <Cards key={index} Image={true} />;
                  })}
                </TabsContent>
                <TabsContent
                  value="headphone"
                  className="grid grid-cols-4 gap-4"
                >
                  {Array.from({ length: 8 }).map((_, index) => {
                    return <Cards key={index} Image={true} />;
                  })}
                </TabsContent>
              </Tabs>
            </div>
            <div className="col-span-1 h-full border border-slate-600 rounded-md"></div>
          </div>
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
      <NewsLetter />
    </section>
  );
}
