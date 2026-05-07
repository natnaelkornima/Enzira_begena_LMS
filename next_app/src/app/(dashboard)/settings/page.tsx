import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Camera, Download, BadgeCheck } from 'lucide-react';
import { BackButton } from '@/components/ui/back-button';

export default function SettingsPage() {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <header>
        <BackButton />
        <h2 className="text-3xl font-bold tracking-tight mb-2 mt-4">Account Settings</h2>
        <p className="text-muted-foreground">Manage your personal information, subscription, and security preferences.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Profile Section */}
        <section className="lg:col-span-7 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Personal Profile</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Avatar Upload */}
              <div className="flex items-center gap-6 mb-8">
                <div className="relative group cursor-pointer">
                  <Avatar className="h-24 w-24 border-2 border-muted group-hover:opacity-80 transition-opacity">
                    <AvatarImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuBA7EdsA1RBw-3xsF257S-i931n0d1vh82ELtPPn5rKWLXgHgeirENS02j26dCShharU9x6s1PvRYmFgFy05JiT0kf1aSFZJAGXva0Y1F0XZRsfQVvm8SO7O3CLqzy6fwnLUDExyA6OphMzc5crnTqVGekNeA7roa5TH54_QK4KsRH7u975N82uiYkBfM-G1qmunzt5-YC2p8z04ROX03gmfjn9oaZCgx4UVthIuAyS78sJHm0SD2UASSJFDt3uGUtNxytbQQXvGjg" />
                    <AvatarFallback>AS</AvatarFallback>
                  </Avatar>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Camera className="h-6 w-6 text-white drop-shadow-md" />
                  </div>
                </div>
                <div>
                  <Button>Change Avatar</Button>
                  <p className="text-xs text-muted-foreground mt-2">JPG, GIF or PNG. Max size of 800K</p>
                </div>
              </div>

              {/* Profile Form */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input id="fullName" defaultValue="Alexander Sterling" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" defaultValue="alex.sterling@academia.edu" />
                </div>
                <div className="md:col-span-2 pt-4">
                  <Button className="w-full md:w-auto">Save Personal Changes</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security Section */}
          <Card>
            <CardHeader>
              <CardTitle>Security</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input id="currentPassword" type="password" placeholder="••••••••" />
                  </div>
                  <div className="hidden md:block"></div> {/* Spacer */}
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input id="newPassword" type="password" placeholder="Min 8 characters" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input id="confirmPassword" type="password" placeholder="••••••••" />
                  </div>
                </div>
                <div className="pt-2">
                  <Button variant="outline" className="w-full md:w-auto text-primary border-primary hover:bg-primary/5">
                    Update Password
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Sidebar Column: Subscription & Billing */}
        <aside className="lg:col-span-5 space-y-6">
          {/* Subscription Status Card */}
          <Card className="overflow-hidden relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 pointer-events-none"></div>
            <CardContent className="p-6 relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Current Plan</p>
                  <h3 className="text-2xl font-bold text-primary mt-1">Premium Academic</h3>
                </div>
                <span className="bg-primary/10 text-primary px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Active
                </span>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Billing Cycle</span>
                  <span className="font-semibold">Annual</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Next Payment</span>
                  <span className="font-semibold">Sept 12, 2024</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Amount</span>
                  <span className="font-semibold">$249.00</span>
                </div>
              </div>
              <Progress value={75} className="h-2 mb-6" />
              <Button variant="default" className="w-full">Manage Subscription</Button>
            </CardContent>
          </Card>

          {/* Billing History */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Billing History</CardTitle>
              <Button variant="link" className="px-0 h-auto text-primary">View All</Button>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="divide-y">
                {/* Row 1 */}
                <div className="py-4 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-sm">Invoice #INV-2024-001</p>
                    <p className="text-xs text-muted-foreground">Aug 12, 2024</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-sm">$249.00</span>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                {/* Row 2 */}
                <div className="py-4 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-sm">Invoice #INV-2023-001</p>
                    <p className="text-xs text-muted-foreground">Aug 12, 2023</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-sm">$249.00</span>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                {/* Pending Row */}
                <div className="py-4 flex items-center justify-between opacity-60">
                  <div>
                    <p className="font-semibold text-sm">Invoice #INV-2023-000</p>
                    <p className="text-xs text-muted-foreground">Jul 01, 2023</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="bg-muted text-muted-foreground px-2 py-0.5 rounded text-xs font-medium">Refunded</span>
                    <span className="font-semibold text-sm">$20.00</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}
