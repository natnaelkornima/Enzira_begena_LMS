'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, LayoutDashboard, BookOpen, User, Settings, CreditCard, Bell } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export function MobileNav() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Dashboard', href: '/student', icon: LayoutDashboard },
    { name: 'Courses', href: '/courses/1', icon: BookOpen },
    { name: 'Payment', href: '/payment', icon: CreditCard },
    { name: 'Profile', href: '/profile', icon: User },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  return (
    <>
      {/* Top Bar for Brand Visibility */}
      <header className="md:hidden flex justify-between items-center w-full px-5 h-16 bg-background/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-[5px] bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">E</div>
          <span className="text-sm font-bold tracking-tight uppercase">Enzira Portal</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-2 right-2 h-1.5 w-1.5 bg-primary rounded-full" />
          </Button>
          <Avatar className="h-8 w-8 border">
            <AvatarFallback className="text-[10px] font-bold">NT</AvatarFallback>
          </Avatar>
        </div>
      </header>

      {/* Bottom Floating-style NavBar */}
      <nav className="md:hidden fixed bottom-4 left-4 right-4 bg-background/90 backdrop-blur-md border border-border/50 rounded-[12px] shadow-2xl p-1 flex justify-around items-center z-50 safe-area-bottom">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.name}
              href={item.href} 
              className={cn(
                "flex flex-col items-center justify-center py-2 px-1 rounded-[8px] flex-1 transition-all",
                isActive ? "text-primary bg-primary/5" : "text-muted-foreground hover:text-foreground"
              )}
            >
              <item.icon className={cn("h-5 w-5 mb-1 transition-transform", isActive && "scale-110")} />
              <span className="text-[9px] font-bold uppercase tracking-tighter">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
