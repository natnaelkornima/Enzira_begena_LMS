import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Flame, Trophy, Star, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ProfilePage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-6 space-y-16 animate-in fade-in duration-700">
      
      {/* Header Profile Section */}
      <section className="flex flex-col items-center text-center space-y-6">
        <div className="relative group cursor-pointer">
          <Avatar className="h-32 w-32 shadow-sm transition-transform duration-300 group-hover:scale-105 border border-primary/10">
            <AvatarFallback className="bg-primary/5 text-primary text-3xl font-light">NK</AvatarFallback>
          </Avatar>
          <div className="absolute inset-0 bg-black/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
             <span className="text-xs font-medium text-black/70 bg-white/80 px-2 py-1 rounded-md backdrop-blur-sm shadow-sm">Change</span>
          </div>
        </div>
        
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">Natnael Kornima</h1>
          <p className="text-muted-foreground mt-1 font-medium">Student</p>
        </div>
      </section>

      <div className="h-px w-full bg-border/50"></div>

      {/* Profile Details Form */}
      <section className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold tracking-tight">Personal Information</h2>
          <p className="text-sm text-muted-foreground">Update your details and public profile.</p>
        </div>

        <div className="grid gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <Label htmlFor="firstName" className="text-sm text-muted-foreground font-medium">First name</Label>
              <Input id="firstName" defaultValue="Natnael" className="h-12 bg-transparent border-t-0 border-x-0 border-b-border rounded-none focus-visible:ring-0 focus-visible:border-b-primary px-0 shadow-none text-base transition-colors" />
            </div>
            <div className="space-y-3">
              <Label htmlFor="lastName" className="text-sm text-muted-foreground font-medium">Last name</Label>
              <Input id="lastName" defaultValue="Kornima" className="h-12 bg-transparent border-t-0 border-x-0 border-b-border rounded-none focus-visible:ring-0 focus-visible:border-b-primary px-0 shadow-none text-base transition-colors" />
            </div>
          </div>

          <div className="space-y-3">
            <Label htmlFor="email" className="text-sm text-muted-foreground font-medium">Email address</Label>
            <Input id="email" type="email" defaultValue="natnael.k@enzira.edu" className="h-12 bg-transparent border-t-0 border-x-0 border-b-border rounded-none focus-visible:ring-0 focus-visible:border-b-primary px-0 shadow-none text-base transition-colors" />
          </div>

          <div className="space-y-3">
            <Label htmlFor="bio" className="text-sm text-muted-foreground font-medium">Bio</Label>
            <Input id="bio" defaultValue="Computer Science Student and Aspiring Designer" className="h-12 bg-transparent border-t-0 border-x-0 border-b-border rounded-none focus-visible:ring-0 focus-visible:border-b-primary px-0 shadow-none text-base transition-colors" />
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <Button className="rounded-full px-8 font-medium">Save Changes</Button>
        </div>
      </section>

      <div className="h-px w-full bg-border/50"></div>

      {/* Gamification Section */}
      <section className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold tracking-tight">Your Progress</h2>
          <p className="text-sm text-muted-foreground">Keep up the good work to unlock more achievements.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-border shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="font-medium text-muted-foreground">Current Streak</span>
                <Flame className="h-5 w-5 text-orange-500" />
              </div>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-semibold text-foreground">12</span>
                <span className="text-sm text-muted-foreground">days</span>
              </div>
              <div className="flex gap-1.5 w-full">
                {[1, 2, 3, 4, 5, 6, 7].map((day, i) => (
                  <div key={i} className={cn("flex-1 h-2 rounded-full", i < 5 ? "bg-orange-500" : "bg-muted")} />
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <span className="font-medium text-muted-foreground">Recent Badges</span>
                <Button variant="ghost" size="sm" className="h-auto p-0 text-primary font-medium hover:bg-transparent hover:text-primary/80">View all</Button>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-2xl bg-yellow-50 flex items-center justify-center border border-yellow-100">
                  <Trophy className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="h-14 w-14 rounded-2xl bg-blue-50 flex items-center justify-center border border-blue-100">
                  <Star className="h-6 w-6 text-blue-600" />
                </div>
                <div className="h-14 w-14 rounded-2xl bg-muted/30 flex items-center justify-center border border-dashed border-border">
                  <CheckCircle className="h-6 w-6 text-muted-foreground/30" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

    </div>
  );
}
