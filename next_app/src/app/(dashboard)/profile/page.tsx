import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Camera, Flame, Trophy, Star, CheckCircle } from 'lucide-react';
import { BackButton } from '@/components/ui/back-button';
import { cn } from '@/lib/utils';

export default function ProfilePage() {
  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <header>
        <BackButton />
        <h2 className="text-3xl font-bold tracking-tight mb-2 mt-4">Personal Profile</h2>
        <p className="text-muted-foreground">Manage your public persona and contact information.</p>
      </header>

      <Card>
        <CardContent className="pt-6">
          {/* Avatar Upload */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
            <div className="relative group cursor-pointer">
              <Avatar className="h-28 w-28 border-4 border-background shadow-sm group-hover:opacity-80 transition-opacity">
                <AvatarFallback className="bg-primary/5 text-primary text-2xl font-bold">AS</AvatarFallback>
              </Avatar>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 rounded-full">
                <Camera className="h-8 w-8 text-white drop-shadow-md" />
              </div>
            </div>
            <div className="text-center sm:text-left mt-2">
              <h3 className="font-semibold text-lg">Avatar Picture</h3>
              <p className="text-sm text-muted-foreground mt-1 max-w-xs mb-3">Upload a picture to make your profile stand out. JPG, GIF or PNG. Max size of 800K.</p>
              <Button size="sm" variant="outline">Upload New Avatar</Button>
            </div>
          </div>

          <div className="border-t border-dashed my-8" />

          {/* Profile Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" defaultValue="Alexander" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" defaultValue="Sterling" />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" defaultValue="alex.sterling@enzira.edu" />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="bio">Short Bio</Label>
              <Input id="bio" defaultValue="Architect and Computational Designer" />
              <p className="text-xs text-muted-foreground mt-1">Write a short sentence about yourself.</p>
            </div>
          </div>
          
          <div className="mt-8 flex justify-end">
            <Button>Save Profile</Button>
          </div>
        </CardContent>
      </Card>
      
      {/* Gamification Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="flex flex-col border-primary/20 bg-gradient-to-br from-primary/5 to-transparent hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
          <CardHeader className="pb-2 flex flex-row items-center justify-between">
            <CardTitle className="text-xl tracking-tight">Current Streak</CardTitle>
            <Flame className="h-5 w-5 text-orange-500" />
          </CardHeader>
          <CardContent className="flex items-center gap-6">
            <div className="flex-1">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-orange-500">12</span>
                <span className="text-muted-foreground font-medium">days</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">You're on fire! Keep learning every day to unlock the 30-day badge.</p>
            </div>
            <div className="hidden sm:flex gap-1">
              {[1, 2, 3, 4, 5, 6, 7].map((day, i) => (
                <div key={i} className={cn("w-6 h-8 rounded-md flex flex-col items-center justify-end p-1", i < 5 ? "bg-orange-500/20" : "bg-muted")}>
                  <div className={cn("w-full rounded-sm", i < 5 ? "bg-orange-500 h-3" : "bg-muted-foreground/20 h-1")} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
          <CardHeader className="pb-2 flex flex-row items-center justify-between">
            <CardTitle className="text-xl tracking-tight">Recent Achievements</CardTitle>
            <Button variant="link" className="text-xs h-auto p-0 text-primary">View All</Button>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 mt-2">
              <div className="flex flex-col items-center gap-2 group cursor-pointer">
                <div className="h-14 w-14 rounded-full bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20 group-hover:scale-110 transition-transform">
                  <Trophy className="h-6 w-6 text-yellow-600" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground text-center">Fast Learner</span>
              </div>
              <div className="flex flex-col items-center gap-2 group cursor-pointer">
                <div className="h-14 w-14 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:scale-110 transition-transform">
                  <Star className="h-6 w-6 text-blue-600" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground text-center">Perfect Score</span>
              </div>
              <div className="flex flex-col items-center gap-2 group cursor-pointer opacity-40 grayscale">
                <div className="h-14 w-14 rounded-full bg-muted flex items-center justify-center border border-border">
                  <CheckCircle className="h-6 w-6 text-muted-foreground" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground text-center">30 Day Streak</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
