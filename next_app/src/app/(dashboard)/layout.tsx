import { Sidebar } from "@/components/layout/Sidebar";
import { MobileNav } from "@/components/layout/MobileNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-background min-h-screen">
      <MobileNav />
      <Sidebar />
      <main className="flex-1 bg-background min-w-0 flex flex-col">
        <div className="flex-1">
          {children}
        </div>
        <footer className="border-t py-6 mt-auto">
          <div className="max-w-7xl mx-auto px-6 text-center text-sm text-muted-foreground">
            © 2024 Academia LMS. All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  );
}
