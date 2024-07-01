import { Payment, columns } from "@/components/data-table/Orders/column";
import { DataTable } from "@/components/data-table/Orders/data-table";
import axios from "axios";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [];
}

export default async function AdminOrders() {
  const data = await getData();

  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
