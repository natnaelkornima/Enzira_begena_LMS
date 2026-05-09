import { Bell, HelpCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function AdminTopAppBar() {
  return (
    <header className="sticky top-0 z-40 bg-card border-b flex justify-between items-center px-6 w-full h-14">
      <div className="flex items-center">
        <h2 className="text-lg font-semibold text-foreground hidden sm:block">LMS Admin</h2>
      </div>
      
      <div className="flex items-center gap-4 flex-1 justify-end">

        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <HelpCircle className="h-5 w-5" />
          </Button>
          <Avatar className="h-8 w-8 ml-2 border">
            <AvatarImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVI9N9K17nb55YuFSBsNerSldpqYJ7Afrt-YCYP8f8kQRYHs3Gv5_deCAVf-Nxcmd3iAQETgERrUF23VDtmc8q3zH0UVnIl90Xyq5iGOyp985IxgUWeky3rIcPpG-C6pUmsvMctRC7GeAdr0uT_g4AVm55l8d9AfACZ7fhF_kEaeFR790SKGsPNMjF0moQV5Ue51SciG1BgwN4BInsmZNSqYmA6vKj_3s6gif_Qf2q1hYRNdhuUgJSVJa-gA9DihW9Ve1gVDyoY2M" alt="Administrator" />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
