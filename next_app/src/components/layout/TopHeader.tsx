'use client';

import { Bell, Check, CircleAlert, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export function TopHeader() {
  const [unreadCount, setUnreadCount] = useState(3);
  const [showToast, setShowToast] = useState(false);

  const notifications = [
    { id: 1, title: 'Payment Approved', desc: 'Your subscription is now active.', time: '2m ago', icon: CheckCircle2, color: 'text-green-500' },
    { id: 2, title: 'New Course Available', desc: 'Parametric Design 101 has launched.', time: '1h ago', icon: Bell, color: 'text-primary' },
    { id: 3, title: 'Action Required', desc: 'Please update your billing information.', time: '2d ago', icon: CircleAlert, color: 'text-yellow-500' },
  ];

  const handleMarkAllRead = () => {
    setUnreadCount(0);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <>
      <header className="h-16 border-b bg-background/95 backdrop-blur-sm flex items-center justify-between px-6 sticky top-0 z-30">


        <div className="flex items-center gap-4 ml-auto">
          <DropdownMenu>
            <DropdownMenuTrigger render={
              <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-foreground">
                <Bell className="h-5 w-5" />
                {unreadCount > 0 && (
                  <span className="absolute top-2 right-2.5 h-2 w-2 rounded-full bg-primary ring-2 ring-background animate-pulse" />
                )}
              </Button>
            } />
            <DropdownMenuContent align="end" className="w-80 p-0 overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b bg-muted/20">
                <DropdownMenuLabel className="p-0 font-semibold text-base">Notifications</DropdownMenuLabel>
                {unreadCount > 0 && (
                  <Button variant="ghost" size="sm" className="h-auto p-0 text-xs text-primary hover:text-primary/80" onClick={handleMarkAllRead}>
                    <Check className="h-3 w-3 mr-1" /> Mark all read
                  </Button>
                )}
              </div>
              <div className="max-h-[300px] overflow-y-auto p-2">
                {notifications.map((n) => (
                  <DropdownMenuItem key={n.id} className="p-3 cursor-pointer items-start gap-3 rounded-lg mb-1 last:mb-0">
                    <div className={cn("mt-0.5 rounded-full bg-muted/50 p-1.5", n.color)}>
                      <n.icon className="h-4 w-4" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-semibold leading-none">{n.title}</p>
                      <p className="text-xs text-muted-foreground line-clamp-2">{n.desc}</p>
                      <p className="text-[10px] text-muted-foreground/60 font-medium">{n.time}</p>
                    </div>
                  </DropdownMenuItem>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="h-8 w-px bg-border/60 hidden sm:block" />

          <Avatar className="h-8 w-8 cursor-pointer ring-2 ring-transparent hover:ring-primary/20 transition-all border">
            <AvatarFallback className="bg-primary/5 text-primary text-[10px] font-bold">NT</AvatarFallback>
          </Avatar>
        </div>
      </header>

      {/* Simulated Toast Notification */}
      <div className={cn(
        "fixed bottom-6 right-6 bg-card border shadow-lg rounded-xl p-4 flex items-center gap-3 transition-all duration-300 z-50 transform",
        showToast ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95 pointer-events-none"
      )}>
        <div className="h-8 w-8 rounded-full bg-green-500/10 flex items-center justify-center">
          <CheckCircle2 className="h-5 w-5 text-green-600" />
        </div>
        <div>
          <p className="text-sm font-semibold">Notifications Cleared</p>
          <p className="text-xs text-muted-foreground">All unread notifications marked as read.</p>
        </div>
      </div>
    </>
  );
}
