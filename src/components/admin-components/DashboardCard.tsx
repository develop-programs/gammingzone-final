import React from "react";

export default function DashboardCard({ data }: { data: any }) {
  function CurrencyFormat(
    data: number,
    format: string,
    maximumFractionDigits?: number,
    currenyType?: string
  ) {
    const formattedValue = Intl.NumberFormat(format, {
      style: "currency",
      currency: currenyType,
      maximumFractionDigits: maximumFractionDigits,
    }).format(data);
    return formattedValue;
  }

  return (
    <div
      className="grid gap-4 border border-slate-200 dark:border-slate-600 p-4 rounded-2xl"
      style={{
        boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.20)",
      }}
    >
      <div>{data.icon}</div>
      <div className="grid gap-2">
        <span className="text-2xl font-black">
          {data.title === "Total Balance"
            ? CurrencyFormat(data.value, "en-IN", 2, "INR")
            : data.title === "Total Sales"
            ? CurrencyFormat(data.value, "en-IN", 2, "INR")
            : data.title === "Total Customers"
            ? data.value
            : data.title === "Total Orders"
            ? data.value
            : null}
        </span>
        <span className="text-base text-slate-400">{data.title}</span>
      </div>
    </div>
  );
}
