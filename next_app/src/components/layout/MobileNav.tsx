'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, LayoutDashboard, BookOpen, User, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export function MobileNav() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/student', icon: LayoutDashboard },
    { name: 'Learning', href: '/courses/1', icon: BookOpen },
    { name: 'Profile', href: '/settings', icon: User },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  return (
    <>
      {/* TopAppBar (Mobile Only/Global Brand) */}
      <header className="md:hidden flex justify-between items-center w-full px-6 py-4 bg-card border-b sticky top-0 z-50">
        <span className="text-lg font-bold tracking-tight">Academia LMS</span>
        <Button variant="ghost" size="icon" className="-mr-2">
          <Menu className="h-6 w-6" />
        </Button>
      </header>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-card border-t px-2 py-2 flex justify-around items-center z-50 safe-area-bottom">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.name}
              href={item.href} 
              className={cn(
                "flex flex-col items-center p-2 rounded-lg min-w-[64px]",
                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
              )}
            >
              <item.icon className="h-5 w-5 mb-1" />
              <span className="text-[10px] font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
