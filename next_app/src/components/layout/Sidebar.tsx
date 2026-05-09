'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { LayoutDashboard, BookOpen, CreditCard, User, Settings, HelpCircle, LogOut, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems = [
    { name: 'Dashboard', href: '/student', icon: LayoutDashboard },
    { name: 'My Learning', href: '/courses/1', icon: BookOpen },
    { name: 'Payments', href: '/payment', icon: CreditCard },
    { name: 'Profile', href: '/profile', icon: User },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  return (
    <nav 
      className={cn(
        "h-screen sticky top-0 hidden md:flex flex-col bg-card border-r z-40 transition-all duration-300",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      <div className={cn("flex items-center justify-between p-4", isCollapsed ? "justify-center" : "")}>
        {!isCollapsed && (
          <div>
            <h1 className="text-xl font-bold tracking-tight">Enzira Begena</h1>
            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mt-1">Portal</p>
          </div>
        )}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={cn("h-8 w-8 text-muted-foreground", isCollapsed && "mt-2")}
        >
          {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>
      
      <div className="flex-1 px-3 space-y-1 overflow-y-auto mt-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              title={isCollapsed ? item.name : undefined}
              className={cn(
                "flex items-center px-3 py-2.5 rounded-lg transition-colors text-sm font-medium",
                isActive 
                  ? "bg-primary/10 text-primary" 
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
                isCollapsed ? "justify-center" : "space-x-3"
              )}
            >
              <item.icon className={cn("h-5 w-5 shrink-0", isActive ? "text-primary" : "text-muted-foreground")} />
              {!isCollapsed && <span>{item.name}</span>}
            </Link>
          );
        })}
      </div>

      <div className="p-3 border-t space-y-1">
        {!isCollapsed ? (
          <div className="mb-4">
            <Button className="w-full" asChild>
              <Link href="/subscriptions">Enroll Now</Link>
            </Button>
          </div>
        ) : (
          <div className="mb-4 flex justify-center">
            <Button size="icon" asChild title="Enroll Now">
              <Link href="/subscriptions"><CreditCard className="h-4 w-4" /></Link>
            </Button>
          </div>
        )}
        <Link 
          href="#" 
          title={isCollapsed ? "Help Center" : undefined}
          className={cn(
            "flex items-center px-3 py-2.5 rounded-lg transition-colors text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground",
            isCollapsed ? "justify-center" : "space-x-3"
          )}
        >
          <HelpCircle className="h-5 w-5 shrink-0" />
          {!isCollapsed && <span>Help Center</span>}
        </Link>
        <Link 
          href="/login" 
          title={isCollapsed ? "Logout" : undefined}
          className={cn(
            "flex items-center px-3 py-2.5 rounded-lg transition-colors text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground",
            isCollapsed ? "justify-center" : "space-x-3"
          )}
        >
          <LogOut className="h-5 w-5 shrink-0" />
          {!isCollapsed && <span>Logout</span>}
        </Link>
      </div>
    </nav>
  );
}
