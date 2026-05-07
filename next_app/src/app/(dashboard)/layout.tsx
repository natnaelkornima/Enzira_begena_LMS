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
        <footer className="bg-card border-t py-12 mt-auto">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div className="md:col-span-2">
                <span className="text-2xl font-bold tracking-tight">Academia LMS</span>
                <p className="text-muted-foreground text-sm mt-2 max-w-sm">
                  Elevate your intellectual rigor with a platform designed for the focused student. Built for mastery and scale.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-foreground">Platform</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="/courses/1" className="hover:text-primary transition-colors">Courses</a></li>
                  <li><a href="/subscriptions" className="hover:text-primary transition-colors">Pricing</a></li>
                  <li><a href="/student" className="hover:text-primary transition-colors">Dashboard</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-foreground">Legal</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-muted-foreground text-sm">© 2024 Academia LMS. All rights reserved.</p>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Twitter</a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">GitHub</a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Discord</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
