import { Sidebar } from "@/components/layout/Sidebar";
import { MobileNav } from "@/components/layout/MobileNav";
import { TopHeader } from "@/components/layout/TopHeader";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row bg-background min-h-screen">
      <MobileNav />
      <Sidebar />
      <main className="flex-1 bg-background min-w-0 flex flex-col">
        <div className="hidden md:block">
          <TopHeader />
        </div>
        <div className="flex-1 pb-24 md:pb-0">
          {children}
        </div>
        <footer className="border-t py-6 mt-auto">
          <div className="max-w-7xl mx-auto px-6 text-center text-sm text-muted-foreground">
            © 2026 made by Enzira production team. All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  );
}
