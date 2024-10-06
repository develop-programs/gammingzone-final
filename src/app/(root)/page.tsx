import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";

const BannerCarousal = dynamic(() => import("@/components/custom/Carousal"));
const Cards = dynamic(() => import("@/components/custom/Cards"));
const Categories = dynamic(() => import("@/components/custom/Categories"));
const NewsCard = dynamic(() => import("@/components/custom/NewsCard"));
const NewsLetter = dynamic(() => import("@/components/custom/NewsLetter"));

export default function page() {
    return (
        <section aria-label="Home Section" className="space-y-12">
            <section aria-label="promotion">
                <span className="sr-only">Promotion</span>
                <div className="container space-y-2">
                    <div className="flex items-center gap-6">
                        <React.Suspense fallback={<>
                            loading...
                        </>}>
                            <BannerCarousal/>
                        </React.Suspense>
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
            {/*deals section*/}
            <section aria-label="deals">
                <span className="sr-only">Deals</span>
                <div className="container">
                    <React.Suspense fallback={<>Loading...</>}>
                        <Cards lable="Best Deals"/>
                    </React.Suspense>
                </div>
            </section>
            {/*categories section*/}
            <section aria-label="Categories">
                <div className="container">
                    <div className="grid gap-3">
                        <div className="text-center">
                            <span className="text-2xl font-bold">Shop with Category</span>
                        </div>
                        <React.Suspense fallback={<>Loading...</>}>
                            <Categories/>
                        </React.Suspense>
                    </div>
                </div>
            </section>
            {/*Products*/}
            <section aria-label="Feature Products">
                <span className="sr-only">Featured Products</span>
                <div className="container grid grid-cols-8 gap-3 h-[35rem]">
                    <div className="hidden lg:block col-span-2 h-full border border-slate-900"></div>
                    <div className="col-span-8 lg:col-span-6">
                        <React.Suspense fallback={<>Loading...</>}>
                            <Cards
                                lable="Featured Products"
                                tabs={["All", "Smartphones", "Laptops"]}
                            />
                        </React.Suspense>
                    </div>
                </div>
            </section>
            {/*Offers*/}
            <section aria-label="offers">
                <span className="sr-only">offers</span>
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {["/images/Banner.png", "/images/Frame 14.png"].map(
                            (item, index) => (
                                <Image
                                    src={item}
                                    alt="offers"
                                    key={index}
                                    width={1920}
                                    height={1080}
                                    className="w-full h-[35vh] shadow-lg aspect-video"
                                    priority
                                    decoding="async"
                                />
                            )
                        )}
                    </div>
                </div>
            </section>
            {/*Accessories*/}
            <section aria-label="Gamming Accessories">
                <div className="container grid grid-cols-8 gap-3 h-[35rem]">
                    <div className="col-span-8 lg:col-span-6">
                        <React.Suspense fallback={<>Loading...</>}>
                            <Cards
                                lable="Gamming Accessories"
                                tabs={["All", "Smartphones", "Laptops"]}
                            />
                        </React.Suspense>
                    </div>
                    <div className="hidden lg:block col-span-2 h-full border border-slate-900"></div>
                </div>
            </section>
            {/*Promotion*/}
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
            {/*news*/}
            <section aria-label="news">
                <div className="container space-y-12">
                    <p className="text-2xl font-bold w-full text-center">Latest News</p>
                    <div className="grid lg:grid-cols-3 gap-3">
                        {Array.from({length: 3}, (_, i) => (
                            <NewsCard key={i}/>
                        ))}
                    </div>
                </div>
            </section>
            {/*NewsLetter*/}
            <NewsLetter/>
        </section>
    );
}
