import Breadcrumbs from "@/components/admin-components/Breadcrumbs";

export default function AddProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-screen px-12 py-6">
      <div>
        <Breadcrumbs />
      </div>
      {children}
    </main>
  );
}
