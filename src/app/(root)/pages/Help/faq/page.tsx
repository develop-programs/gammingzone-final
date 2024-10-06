import BreadcrumbsMain from "@/components/custom/Breadcrumbs-Main";
import {Button} from "@/components/ui/button";
import React from "react";
import {Input} from "@/components/ui/input";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


export default function page() {
    return (
        <section aria-label="FAQ Section">
            <div className="w-full h-screen container py-4">
                <BreadcrumbsMain/>
                <div className="grid grid-cols-5 gap-12 py-12">
                    <div className="col-span-3 space-y-3">
            <span className="text-2xl font-bold">
              Frequently Asked Questions
            </span>
                        <Accordion type="single" collapsible defaultValue="item-1" className="space-y-4">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                    </div>
                    <div className="col-span-2">
                        <div className="grid bg-[#FBF4CE] px-8 py-12 gap-4">
              <span className="text-xl font-bold">
                Don&apos;t find your answer, Ask for support.
              </span>
                            <span className="font-semibold text-base text-muted-foreground">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur soluta praesentium velit, quia eligendi dolore quod
                fugiat inventore. Nobis, culpa.
              </span>
                            <Input
                                className={"w-full bg-white outline-none border-none focus-visible:ring-0 focus-visible:outline-none"}
                                placeholder="Email"/>
                            <Input
                                className={"w-full bg-white outline-none border-none focus-visible:ring-0 focus-visible:outline-none"}
                                placeholder="Subject"/>
                            <textarea placeholder="Message" rows={5}
                                      className="w-full bg-white outline-none border-none focus-visible:ring-0 focus-visible:outline-none p-2 rounded-md placeholder:text-muted-foreground"/>
                            <Button
                                variant="orange"
                                className="w-44 text-white font-semibold py-5 uppercase text-sm"
                            >
                                Send Message
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
