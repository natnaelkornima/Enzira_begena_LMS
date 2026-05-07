import { AdminSidebar } from "@/components/layout/AdminSidebar";
import { AdminTopAppBar } from "@/components/layout/AdminTopAppBar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-background min-h-screen">
      <AdminSidebar />
      <main className="ml-64 min-h-screen flex-1 bg-background">
        <AdminTopAppBar />
        {children}
      </main>
    </div>
  );
}
