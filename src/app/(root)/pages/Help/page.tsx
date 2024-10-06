import {Button} from "@/components/ui/button";
import React from "react";
import Link from "next/link";

export default function page() {
    return (
        <section aria-label="Help">
            <div className="w-full h-screen container py-12">
                <div className="grid grid-cols-4 gap-5">
                    {["FAQ", "About Us", "Customer service", "Blog"].map(
                        (item, index) => (
                            <Link href={`/pages/Help/${item == "Customer service" ? "/Support" : item.toLowerCase()}`}
                                  key={index}
                                  passHref legacyBehavior>
                                <Button
                                    variant="ghost"
                                    className="py-12 border text-lg font-semibold hover:text-white rounded-sm border-orange-600 hover:bg-orange-600"
                                >
                                    {item}
                                </Button>
                            </Link>
                        )
                    )}
                </div>
            </div>
        </section>
    );
}
