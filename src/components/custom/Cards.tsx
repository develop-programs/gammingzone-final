import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function Cards(props: cardProps) {
  if (props.tabs) {
    return (
      <Tabs defaultValue={props.tabs[0]}>
        <div className="flex items-center justify-between pb-4">
          <div className="text-xl font-bold">{props.lable}</div>
          <div className="flex items-center gap-6">
            <TabsList className="">
              {props.tabs.map((tab) => (
                <TabsTrigger key={tab} value={tab}>
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>
            <Link href="" className="text-sm">
              Browse Products
            </Link>
          </div>
        </div>
        {props.tabs.map((tab) => (
          <TabsContent
            key={tab}
            value={tab}
            className="grid grid-cols-4 w-full h-full gap-3"
          >
            {Array.from({ length: 8 }, (_, i) => (
              <Card key={i} className="h-[16rem]">
                <CardContent className="w-full h-full border border-slate-800">
                  {tab}
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    );
  } else {
    return (
      <div className="h-full">
        <div className="h-[30rem] grid grid-cols-8 gap-3">
          <div className="col-span-2 border border-slate-800"></div>
          <div className="col-span-6 grid grid-cols-4 gap-3">
            {Array.from({ length: 8 }, (_, i) => (
              <Card key={i} className="w-full h-full">
                <CardContent className="w-full h-full border border-slate-800"></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
