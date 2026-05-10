import { Sidebar } from "@/components/layout/Sidebar";
import { MobileNav } from "@/components/layout/MobileNav";
import { TopHeader } from "@/components/layout/TopHeader";

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
        <TopHeader />
        <div className="flex-1">
          {children}
        </div>
        <footer className="border-t py-6 mt-auto">
          <div className="max-w-7xl mx-auto px-6 text-center text-sm text-muted-foreground">
            © 2016 made by Enzira production team. All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  );
}
