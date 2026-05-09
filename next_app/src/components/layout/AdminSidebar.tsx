'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { LayoutDashboard, Users, GraduationCap, ClipboardList, Settings, Plus, ChevronLeft, ChevronRight, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';

export function AdminSidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Users', href: '/admin/users', icon: Users },
    { name: 'Courses', href: '/admin/courses', icon: GraduationCap },
    { name: 'Submissions', href: '/admin/subscriptions', icon: ClipboardList },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
  ];

  return (
    <aside 
      className={cn(
        "sticky left-0 top-0 h-screen border-r bg-card flex flex-col z-50 transition-all duration-300 ease-in-out",
        isCollapsed ? "w-20" : "w-64"
      )}
    >
      <div className={cn("flex items-center p-6 min-h-[100px]", isCollapsed ? "justify-center" : "justify-between")}>
        <div className={cn("transition-all duration-300 origin-left overflow-hidden", isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100")}>
          <h1 className="text-xl font-bold text-primary whitespace-nowrap">Admin Portal</h1>
          <p className="text-xs text-muted-foreground mt-1 whitespace-nowrap">Academic Precision</p>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={cn("h-8 w-8 text-muted-foreground shrink-0 transition-transform duration-300", isCollapsed && "mt-0")}
        >
          {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>
      
      <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center px-3 py-2.5 rounded-lg transition-all duration-300 text-sm font-medium relative group",
                isActive 
                  ? "bg-primary/10 text-primary" 
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
                isCollapsed ? "justify-center" : "gap-3"
              )}
            >
              <item.icon className={cn("h-5 w-5 shrink-0 transition-transform duration-300", isActive ? "text-primary" : "text-muted-foreground")} />
              <span className={cn(
                "transition-all duration-300 origin-left overflow-hidden whitespace-nowrap",
                isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"
              )}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t space-y-2">
        <div className={cn("mb-2 transition-all duration-300 overflow-hidden")}>
          <Button className={cn("w-full transition-all duration-300 gap-2", isCollapsed ? "h-12 w-12 p-0 rounded-[5px]" : "h-10")} asChild>
            <Link href="/admin/courses/create" className="flex items-center justify-center">
              <Plus className="h-4 w-4 shrink-0" />
              <span className={cn(
                "transition-all duration-300 origin-left overflow-hidden whitespace-nowrap",
                isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"
              )}>
                Create Course
              </span>
            </Link>
          </Button>
        </div>
        
        <Link 
          href="/login" 
          className={cn(
            "flex items-center px-3 py-2.5 rounded-lg transition-all duration-300 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground",
            isCollapsed ? "justify-center" : "gap-3"
          )}
        >
          <LogOut className="h-5 w-5 shrink-0" />
          <span className={cn(
            "transition-all duration-300 origin-left overflow-hidden whitespace-nowrap",
            isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"
          )}>
            Logout
          </span>
        </Link>
      </div>
    </aside>
  );
}
