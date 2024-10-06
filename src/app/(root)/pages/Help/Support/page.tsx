import BreadcrumbsMain from "@/components/custom/Breadcrumbs-Main";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {SupportData} from "@/json/Support";
import Image from "next/image";
import React from "react";

export default function page() {
    return (
        <section aria-label="Support">
            <div className="w-full container space-y-12 pb-24">
                <BreadcrumbsMain/>
                <div className="w-full flex justify-between items-center">
                    <div className="grid gap-4">
                        <div className="bg-yellow-400 text-center font-semibold w-32 p-1">
                            Hep Center
                        </div>
                        <span className="text-2xl font-bold">How we can help you</span>
                        <div className="flex items-center gap-4">
                            <svg
                                fill="none"
                                strokeWidth={2}
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5 stroke-orange-600"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                />
                            </svg>
                            <input
                                type="text"
                                placeholder="Enter your query or Keyword"
                                className="focus-visible:outline-none outline-none font-semibold w-96"
                            />
                            <Button
                                variant="orange"
                                className="text-white text-base font-semibold"
                            >
                                Search
                            </Button>
                        </div>
                    </div>
                    <div>
                        <Image
                            src="/images/5114855.jpg"
                            alt=""
                            width={300}
                            height={100}
                            className="w-96 aspect-square"
                        />
                    </div>
                </div>
                <div className="space-y-8 py-8">
                    <p className="w-full text-center text-2xl font-semibold">
                        What can we assist you with today?
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 select-none">
                        {SupportData.map((item: SupportDataProps, index: number) => (
                            <div
                                key={index}
                                className="w-full flex gap-4 items-center py-4 px-2 border-2 hover:border-orange-400 rounded-md"
                            >
                                {item.icon}
                                <p className="text-center">{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="space-y-8 py-8">
                    <p className="w-full text-center text-2xl font-semibold">
                        Popular Topics
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "How do I return my item?",
                            "What are the 'Delivery Timelines'?",
                            "How to cancel Clicon Order.",
                            "What is Clicons Returns Policy?",
                            "What is 'Discover Your Daraz Campaign 2022'?,",
                            "Ask the Digital and Device Community",
                            "How long is the refund process?",
                            "What is the Voucher & Gift Offer in this Campaign?",
                            "How to change my shop name?",
                        ].map((item: string, index: number) => (
                            <div
                                key={index}
                                className="flex items-center text-sm gap-2 px-2 font-medium group/item select-none"
                            >
                                <div className="size-2 rounded-full bg-black group-hover/item:bg-orange-600"/>
                                <span className="group-hover/item:text-orange-600">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="space-y-8 py-8">
                    <div className="w-full flex flex-col items-center gap-6">
                        <Button variant="primary" className="w-32 py-4">
                            Contact Us
                        </Button>
                        <p className="text-center text-2xl font-semibold">
                            Don&apos;t find your answer. <br/>
                            Contact with us
                        </p>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-24">
                        <Card>
                            <CardContent className="flex items-start gap-24">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="48"
                                    height="48"
                                    viewBox="0 0 48 48"
                                    fill="none"
                                >
                                    <path
                                        opacity="0.2"
                                        d="M17.3437 23.3996C18.8873 26.5871 21.4648 29.158 24.6562 30.6933C24.8917 30.8048 25.1521 30.853 25.4118 30.8333C25.6715 30.8136 25.9216 30.7266 26.1375 30.5808L30.825 27.4496C31.0321 27.3091 31.2714 27.2234 31.5206 27.2004C31.7698 27.1775 32.0207 27.2181 32.25 27.3183L41.025 31.0871C41.3249 31.2119 41.5755 31.4318 41.7381 31.7131C41.9007 31.9943 41.9664 32.3211 41.925 32.6433C41.6469 34.8141 40.5873 36.8091 38.9446 38.2551C37.3018 39.7012 35.1885 40.4991 33 40.4996C26.237 40.4996 19.751 37.813 14.9688 33.0308C10.1866 28.2486 7.5 21.7626 7.5 14.9996C7.50049 12.8111 8.2984 10.6977 9.74442 9.05499C11.1904 7.41226 13.1855 6.3527 15.3562 6.07457C15.6784 6.03319 16.0053 6.09886 16.2865 6.26149C16.5677 6.42411 16.7877 6.67467 16.9125 6.97457L20.6812 15.7683C20.7793 15.994 20.8203 16.2403 20.8006 16.4855C20.781 16.7307 20.7014 16.9674 20.5687 17.1746L17.4375 21.9371C17.2981 22.1525 17.2163 22.4 17.1999 22.6561C17.1834 22.9121 17.233 23.1681 17.3437 23.3996Z"
                                        fill="#2DA5F3"
                                    />
                                    <path
                                        d="M17.3437 23.3996C18.8873 26.5871 21.4648 29.158 24.6562 30.6933C24.8917 30.8048 25.1521 30.853 25.4118 30.8333C25.6715 30.8136 25.9216 30.7266 26.1375 30.5808L30.825 27.4496C31.0321 27.3091 31.2714 27.2234 31.5206 27.2004C31.7698 27.1775 32.0207 27.218 32.25 27.3183L41.025 31.0871C41.3249 31.2119 41.5755 31.4318 41.7381 31.713C41.9007 31.9943 41.9664 32.3211 41.925 32.6433C41.6469 34.8141 40.5873 36.8091 38.9446 38.2551C37.3018 39.7012 35.1885 40.4991 33 40.4996C26.237 40.4996 19.751 37.813 14.9688 33.0308C10.1866 28.2486 7.5 21.7626 7.5 14.9996C7.50049 12.8111 8.2984 10.6977 9.74442 9.05499C11.1904 7.41226 13.1855 6.3527 15.3562 6.07457C15.6784 6.03319 16.0053 6.09886 16.2865 6.26149C16.5677 6.42411 16.7877 6.67467 16.9125 6.97457L20.6812 15.7683C20.7793 15.994 20.8203 16.2403 20.8006 16.4855C20.781 16.7307 20.7014 16.9674 20.5687 17.1746L17.4375 21.9371C17.2981 22.1525 17.2163 22.4 17.1999 22.6561C17.1834 22.9121 17.233 23.1681 17.3437 23.3996V23.3996Z"
                                        stroke="#2DA5F3"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M29.8867 7.5C32.431 8.18283 34.7509 9.52285 36.6136 11.3856C38.4764 13.2483 39.8164 15.5682 40.4992 18.1125"
                                        fill="#2DA5F3"
                                    />
                                    <path
                                        d="M29.8867 7.5C32.431 8.18283 34.7509 9.52285 36.6136 11.3856C38.4764 13.2483 39.8164 15.5682 40.4992 18.1125"
                                        stroke="#2DA5F3"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M28.332 13.293C29.8623 13.6994 31.2579 14.5031 32.3774 15.6226C33.4969 16.7421 34.3006 18.1377 34.707 19.668"
                                        fill="#2DA5F3"
                                    />
                                    <path
                                        d="M28.332 13.293C29.8623 13.6994 31.2579 14.5031 32.3774 15.6226C33.4969 16.7421 34.3006 18.1377 34.707 19.668"
                                        stroke="#2DA5F3"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <div className="grid gap-4">
                                    <span className="text-lg font-medium">Call us now</span>
                                    <span className="w-96">
                    we are available online from 9:00 AM to 5:00 PM (GMT95:45)
                    Talk with use now
                  </span>
                                    <span className="text-2xl font-medium">+1-202-555-0126</span>
                                    <Button variant="primary" className="w-52">
                                        Call Now
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="flex items-start gap-24">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="48"
                                    height="48"
                                    viewBox="0 0 48 48"
                                    fill="none"
                                >
                                    <path
                                        opacity="0.2"
                                        d="M8.51301 33.1867C6.27967 29.4187 5.49847 24.9651 6.31608 20.6619C7.13369 16.3588 9.49387 12.5021 12.9535 9.81578C16.4132 7.12949 20.7344 5.79837 25.106 6.07234C29.4775 6.3463 33.5987 8.2065 36.696 11.3037C39.7932 14.4009 41.6534 18.5222 41.9273 22.8937C42.2013 27.2653 40.8702 31.5865 38.1839 35.0461C35.4976 38.5058 31.6409 40.866 27.3377 41.6836C23.0346 42.5012 18.581 41.72 14.813 39.4867L8.58801 41.2492C8.33296 41.3238 8.06255 41.3284 7.80511 41.2625C7.54768 41.1967 7.31269 41.0628 7.1248 40.8749C6.9369 40.687 6.80301 40.452 6.73715 40.1946C6.6713 39.9371 6.67591 39.6667 6.75051 39.4117L8.51301 33.1867Z"
                                        fill="#2DB324"
                                    />
                                    <path
                                        d="M8.51301 33.1867C6.27967 29.4187 5.49847 24.9651 6.31608 20.6619C7.13369 16.3588 9.49387 12.5021 12.9535 9.81578C16.4132 7.12949 20.7344 5.79837 25.106 6.07234C29.4775 6.3463 33.5987 8.2065 36.696 11.3037C39.7932 14.4009 41.6534 18.5222 41.9273 22.8937C42.2013 27.2653 40.8702 31.5865 38.1839 35.0461C35.4976 38.5058 31.6409 40.866 27.3377 41.6836C23.0346 42.5012 18.581 41.72 14.813 39.4867L8.58801 41.2492C8.33296 41.3238 8.06255 41.3284 7.80511 41.2625C7.54768 41.1967 7.31269 41.0628 7.1248 40.8749C6.9369 40.687 6.80301 40.452 6.73715 40.1946C6.6713 39.9371 6.67591 39.6667 6.75051 39.4117L8.51301 33.1867Z"
                                        stroke="#2DB324"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M24 26.25C25.2426 26.25 26.25 25.2426 26.25 24C26.25 22.7574 25.2426 21.75 24 21.75C22.7574 21.75 21.75 22.7574 21.75 24C21.75 25.2426 22.7574 26.25 24 26.25Z"
                                        fill="#2DB324"
                                    />
                                    <path
                                        d="M15 26.25C16.2426 26.25 17.25 25.2426 17.25 24C17.25 22.7574 16.2426 21.75 15 21.75C13.7574 21.75 12.75 22.7574 12.75 24C12.75 25.2426 13.7574 26.25 15 26.25Z"
                                        fill="#2DB324"
                                    />
                                    <path
                                        d="M33 26.25C34.2426 26.25 35.25 25.2426 35.25 24C35.25 22.7574 34.2426 21.75 33 21.75C31.7574 21.75 30.75 22.7574 30.75 24C30.75 25.2426 31.7574 26.25 33 26.25Z"
                                        fill="#2DB324"
                                    />
                                </svg>
                                <div className="grid gap-4">
                                    <span className="text-lg font-medium">Chat with us</span>
                                    <span className="w-96">
                    we are available online from 9:00 AM to 5:00 PM (GMT95:45)
                    Talk with use now
                  </span>
                                    <span className="text-2xl font-medium">
                    Support@clicon.com
                  </span>
                                    <Button className="w-52 bg-green-600 hover:bg-green-600/90 uppercase">
                                        Contact Us
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
