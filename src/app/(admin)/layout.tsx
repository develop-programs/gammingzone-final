import AdminNav from "@/components/Navigations/Admin-Nav";
import Breadcrumbs from "@/components/admin-components/Breadcrumbs";
import UserActions from "@/components/admin-components/UserActions";
import { ThemeProvider } from "@/providers/theme-provider";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <main className="relative grid grid-cols-12 h-screen overflow-hidden">
        <div className="col-span-2">
          <AdminNav />
        </div>
        <div className="col-span-10 w-full overflow-y-auto">
          <div className="w-full flex justify-between items-center py-4 px-12">
            <Breadcrumbs />
            <div className=" flex items-center gap-2 rounded-full py-2">
              <input
                type="text"
                placeholder="Search"
                className="w-full p-0.5 bg-transparent outline-none focus-visible:outline-none"
              />
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
              >
                <path
                  d="M23.0251 20.8875L16.8376 15.8625C19.3876 12.375 19.1251 7.38749 15.9376 4.23749C14.2501 2.54999 12.0001 1.61249 9.6001 1.61249C7.2001 1.61249 4.9501 2.54999 3.2626 4.23749C-0.224902 7.72499 -0.224902 13.425 3.2626 16.9125C4.9501 18.6 7.2001 19.5375 9.6001 19.5375C11.8876 19.5375 14.0251 18.675 15.7126 17.1375L21.9751 22.2C22.1251 22.3125 22.3126 22.3875 22.5001 22.3875C22.7626 22.3875 22.9876 22.275 23.1376 22.0875C23.4376 21.7125 23.4001 21.1875 23.0251 20.8875ZM9.6001 17.85C7.6501 17.85 5.8501 17.1 4.4626 15.7125C1.6126 12.8625 1.6126 8.24999 4.4626 5.43749C5.8501 4.04999 7.6501 3.29999 9.6001 3.29999C11.5501 3.29999 13.3501 4.04999 14.7376 5.43749C17.5876 8.28749 17.5876 12.9 14.7376 15.7125C13.3876 17.1 11.5501 17.85 9.6001 17.85Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <UserActions />
          </div>
          <div className="h-[calc(100vh-4.5rem] py-4">{children}</div>
        </div>
      </main>
    </ThemeProvider>
  );
}
