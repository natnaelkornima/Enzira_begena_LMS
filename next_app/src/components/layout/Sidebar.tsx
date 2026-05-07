'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { LayoutDashboard, BookOpen, CreditCard, User, Settings, HelpCircle, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Dashboard', href: '/student', icon: LayoutDashboard },
    { name: 'My Learning', href: '/courses/1', icon: BookOpen },
    { name: 'Payments', href: '/payment', icon: CreditCard },
    { name: 'Profile', href: '/settings', icon: User },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  return (
    <nav className="h-screen w-64 fixed left-0 top-0 hidden md:flex flex-col bg-card border-r z-40">
      <div className="p-6">
        <h1 className="text-xl font-bold tracking-tight">Academia LMS</h1>
        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mt-1">Portal</p>
      </div>
      
      <div className="flex-1 px-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium",
                isActive 
                  ? "bg-primary/10 text-primary" 
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <item.icon className={cn("h-4 w-4", isActive ? "text-primary" : "text-muted-foreground")} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </div>

      <div className="p-4 border-t space-y-1">
        <div className="mb-4">
          <Button className="w-full" asChild>
            <Link href="/subscriptions">Enroll Now</Link>
          </Button>
        </div>
        <Link 
          href="#" 
          className="flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          <HelpCircle className="h-4 w-4" />
          <span>Help Center</span>
        </Link>
        <Link 
          href="/login" 
          className="flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          <LogOut className="h-4 w-4" />
          <span>Logout</span>
        </Link>
      </div>
    </nav>
  );
}
