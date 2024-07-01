"use client";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { Options } from "@/json/Options";
import dynamic from "next/dynamic";

export default function AdminChart({ series }: { series: any }) {
  return (
    <Chart
      options={Options as any}
      series={series}
      type="area"
      width="100%"
      height={400}
    />
  );
}
