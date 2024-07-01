import { Button } from "@/components/ui/button";
import { Payment, columns } from "./(data-table)/column";
import { DataTable } from "./(data-table)/data-table";
import Link from "next/link";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [];
}

export default async function page() {
  const data = await getData();

  if (data.length == 0) {
    return (
      <div className="w-full h-[calc(100vh-7rem)] px-12">
        <div className="w-full h-full border-2 border-dashed border-slate-950 grid place-content-center">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-3xl font-black">You have no products</h1>
            <p className="text-base">
              You can start selling as soon as you add a product.
            </p>
            <Button asChild>
              <Link href="/AddProducts">Add Products</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="pt-6 px-12">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
