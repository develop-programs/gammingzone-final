"use client";
import AdminOrders from "@/components/admin-components/Admin-Orders";
import DashboardCard from "@/components/admin-components/DashboardCard";
import AdminChart from "@/components/charts/AdminChart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

const DashboardCardData: { title: string; value: string; icon: JSX.Element }[] =
  [
    {
      title: "Total Balance",
      value: "1000",
      icon: (
        <svg
          fill="none"
          strokeWidth={1.5}
          stroke="#5f77f6"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      ),
    },
    {
      title: "Total Sales",
      value: "10",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="size-8"
        >
          <path
            d="M21.825 4.16245C21.375 3.59995 20.7375 3.29995 20.025 3.29995H6.97499L6.89999 1.87495C6.86249 1.19995 6.29999 0.637451 5.62499 0.637451H2.51249C2.06249 0.637451 1.64999 1.01245 1.64999 1.49995C1.64999 1.98745 2.02499 2.36245 2.51249 2.36245H5.24999L6.03749 15.4875C6.07499 16.425 6.86249 17.1375 7.76249 17.1375H20.0625C20.5125 17.1375 20.925 16.7625 20.925 16.275C20.925 15.7875 20.55 15.4125 20.0625 15.4125H7.76249C7.72499 15.4125 7.68749 15.375 7.68749 15.3375L7.53749 13.05H18.8625C19.95 13.05 20.8875 12.3 21.1125 11.25L22.2375 6.07495C22.425 5.43745 22.2375 4.72495 21.825 4.16245ZM20.625 5.73745L19.5 10.9125C19.425 11.175 19.2 11.4 18.9 11.4H7.46249L7.08749 4.98745H20.025C20.2875 4.98745 20.4375 5.13745 20.5125 5.21245C20.55 5.32495 20.6625 5.51245 20.625 5.73745Z"
            fill="#5f77f6"
          />
          <path
            d="M17.4375 18C15.975 18 14.775 19.2 14.775 20.6625C14.775 22.125 15.975 23.325 17.4375 23.325C18.9 23.325 20.1 22.125 20.1 20.6625C20.1 19.2 18.9375 18 17.4375 18ZM17.4375 21.675C16.9125 21.675 16.4625 21.225 16.4625 20.7C16.4625 20.175 16.9125 19.725 17.4375 19.725C17.9625 19.725 18.4125 20.175 18.4125 20.7C18.4125 21.225 18 21.675 17.4375 21.675Z"
            fill="#5f77f6"
          />
          <path
            d="M9.18749 18C7.72499 18 6.52499 19.2 6.52499 20.6625C6.52499 22.125 7.72499 23.325 9.18749 23.325C10.65 23.325 11.85 22.125 11.85 20.6625C11.85 19.2 10.65 18 9.18749 18ZM9.18749 21.675C8.66249 21.675 8.21249 21.225 8.21249 20.7C8.21249 20.175 8.66249 19.725 9.18749 19.725C9.71249 19.725 10.1625 20.175 10.1625 20.7C10.1625 21.225 9.71249 21.675 9.18749 21.675Z"
            fill="#5f77f6"
          />
        </svg>
      ),
    },
    {
      title: "Total Customers",
      value: "10",
      icon: (
        <svg
          fill="none"
          strokeWidth={1.5}
          stroke="#5f77f6"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
      ),
    },
    {
      title: "Total Orders",
      value: "10",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="size-8"
        >
          <path
            d="M22.3875 5.58748C22.3875 5.54998 22.35 5.54998 22.35 5.51248C22.0875 5.13748 21.7125 4.79998 21.2625 4.61248L13.1625 0.899976C12.4125 0.562476 11.5875 0.562476 10.8375 0.899976L2.775 4.61248C2.325 4.79998 1.9875 5.13748 1.6875 5.47498C1.65 5.51248 1.6125 5.54998 1.575 5.58748C1.575 5.62498 1.5375 5.62498 1.5375 5.66248C1.275 6.11248 1.125 6.59998 1.125 7.12498V16.5C1.125 17.55 1.725 18.525 2.6625 18.975L10.725 23.025C11.1 23.2125 11.55 23.325 11.9625 23.325C12.375 23.325 12.825 23.2125 13.2 23.025L21.2625 18.975C22.2 18.4875 22.8 17.55 22.8 16.5V7.12498C22.875 6.56248 22.6875 6.03748 22.3875 5.58748ZM11.55 2.43748C11.7 2.36248 11.85 2.32498 12 2.32498C12.15 2.32498 12.3 2.36248 12.45 2.43748L20.025 5.92498L17.025 7.38748L9.2625 3.48748L11.55 2.43748ZM12 9.86248L3.975 5.92498L7.3125 4.38748L15.15 8.32498L12 9.86248ZM3.4125 17.475C3.0375 17.2875 2.8125 16.9125 2.8125 16.5V7.23748L11.1375 11.325V21.375L3.4125 17.475ZM20.5875 17.475L12.825 21.375V11.325L16.125 9.71248V12.75C16.125 13.2 16.5 13.575 16.95 13.575C17.4 13.575 17.775 13.2 17.775 12.75V8.88748L21.1125 7.23748V16.5C21.1875 16.9125 20.925 17.2875 20.5875 17.475Z"
            fill="#5f77f6"
          />
        </svg>
      ),
    },
  ];

export default function page() {
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
    <section className="space-y-8 px-12">
      <div className="w-full grid grid-cols-4 gap-6">
        {DashboardCardData.map((data, index) => {
          return <DashboardCard key={index} data={data} />;
        })}
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3 space-y-10">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-xl">
              {CurrencyFormat(10000, "en-IN", 2, "INR")}
            </span>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Monthly" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Monthly">Monthly</SelectItem>
                <SelectItem value="Yearly">yearly</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <AdminChart
            series={[
              {
                name: "series1",
                data: [31, 40, 28, 51, 42, 109, 100],
              },
              {
                name: "series2",
                data: [11, 32, 45, 32, 34, 52, 41],
              },
            ]}
          />
        </div>
        <div className="col-span-1">
          <div className="w-full h-full">
            <div className="grid gap-1">
              <span className="text-xl font-bold">Messages</span>
              <span className="text-sm text-slate-500">
                recent queries of customers
              </span>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="space-y-12 pt-2">
        <div className="grid gap-1">
          <span className="text-2xl font-bold">Recent Orders</span>
          <span className="text-sm">View your recent order for delivery</span>
        </div>
        <div>
          <AdminOrders />
        </div>
      </div>
    </section>
  );
}
