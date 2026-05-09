import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Camera } from 'lucide-react';
import { BackButton } from '@/components/ui/back-button';

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
    </div>
  );
}
