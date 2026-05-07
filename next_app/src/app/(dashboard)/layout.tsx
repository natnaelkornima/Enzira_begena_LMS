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
      <main className="flex-1 md:ml-64 bg-background">
        {children}
        <footer className="w-full py-xl bg-surface-container border-t border-outline-variant/20 mt-auto">
          <div className="flex flex-col md:flex-row justify-between items-center px-lg max-w-container-max mx-auto gap-md">
            <div className="flex flex-col items-center md:items-start">
              <span className="font-h3 text-h3 font-bold text-on-surface mb-1">Academia LMS</span>
              <p className="font-body-md text-body-md text-on-surface-variant">© 2024 Academia LMS. Built for Intellectual Rigor.</p>
            </div>
            <div className="flex space-x-lg">
              <a href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-error transition-colors">Privacy Policy</a>
              <a href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-error transition-colors">Terms of Service</a>
              <a href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-error transition-colors">Cookie Policy</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
