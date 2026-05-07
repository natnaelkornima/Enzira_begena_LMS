import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LayoutDashboard, Users, GraduationCap, ClipboardList, Settings, Plus } from 'lucide-react';

export function AdminSidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 border-r bg-card flex flex-col z-50">
      <div className="p-6">
        <h1 className="text-xl font-bold text-primary">Admin Portal</h1>
        <p className="text-sm text-muted-foreground mt-1">Academic Precision</p>
      </div>
      
      <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
        <Link href="/admin" className="flex items-center gap-3 px-3 py-2 rounded-md bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-colors">
          <LayoutDashboard className="h-5 w-5" />
          Dashboard
        </Link>
        <Link href="/admin/users" className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
          <Users className="h-5 w-5" />
          Users
        </Link>
        <Link href="/admin/courses" className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
          <GraduationCap className="h-5 w-5" />
          Courses
        </Link>
        <Link href="/admin/subscriptions" className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
          <ClipboardList className="h-5 w-5" />
          Submissions
        </Link>
        <Link href="/settings" className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
          <Settings className="h-5 w-5" />
          Settings
        </Link>
      </nav>

      <div className="p-4 border-t">
        <Button className="w-full gap-2">
          <Plus className="h-4 w-4" />
          Create Course
        </Button>
      </div>
    </aside>
  );
}
