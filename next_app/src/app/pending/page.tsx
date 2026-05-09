import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Info, ArrowRight, Headset, Lock, ShieldCheck, Timer } from 'lucide-react';
import { BackButton } from '@/components/ui/back-button';

export default function PendingApprovalPage() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <header className="bg-card shadow-sm fixed top-0 w-full z-50 border-b">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          <div className="text-xl font-bold">Enzira Begena LMS</div>
          <nav className="hidden md:flex space-x-6 text-sm font-medium">
            <Link className="text-muted-foreground hover:text-primary transition-colors" href="/subscriptions">Pricing</Link>
            <Link className="text-muted-foreground hover:text-primary transition-colors" href="/courses/1">Courses</Link>
            <Link className="text-muted-foreground hover:text-primary transition-colors" href="#">About</Link>
            <Link className="text-muted-foreground hover:text-primary transition-colors" href="#">Support</Link>
          </nav>
          <div className="flex items-center space-x-2">
            <Button variant="ghost">Login</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center p-6 pt-32 pb-16">
        <div className="max-w-xl w-full">
          <BackButton />
          <Card className="text-center">
            <CardContent className="pt-10 pb-8 px-6 sm:px-10 flex flex-col items-center space-y-6">
              <div className="w-20 h-20 bg-primary/10 flex items-center justify-center rounded-full">
                <Clock className="h-10 w-10 text-primary" />
              </div>
              <div className="space-y-2">
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Payment Pending</h1>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Your payment is under review. This usually takes between 2 to 4 hours. We will notify you via email as soon as it's processed.
                </p>
              </div>
              
              <div className="w-full bg-muted/50 rounded-lg p-4 flex items-start space-x-3 text-left border">
                <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">Transaction ID: #LMS-88294-XP</p>
                  <p className="text-xs text-muted-foreground mt-1">Course: Advanced Digital Architecture Portfolio Masterclass</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full pt-4">
                <Button className="flex-1 gap-2" asChild>
                  <Link href="/student">
                    Go to Dashboard
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" className="flex-1 gap-2">
                  <Headset className="h-4 w-4" />
                  Contact Support
                </Button>
              </div>
              <p className="text-xs text-muted-foreground pt-2">
                Questions? Check our <Link className="text-primary font-semibold hover:underline" href="/support">Help Center</Link>.
              </p>
            </CardContent>
          </Card>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-muted/50 border-none shadow-none">
              <CardContent className="p-4 flex items-center space-x-3">
                <Lock className="h-5 w-5 text-muted-foreground" />
                <span className="text-xs font-medium text-muted-foreground">Secure SSL Encryption</span>
              </CardContent>
            </Card>
            <Card className="bg-muted/50 border-none shadow-none">
              <CardContent className="p-4 flex items-center space-x-3">
                <ShieldCheck className="h-5 w-5 text-muted-foreground" />
                <span className="text-xs font-medium text-muted-foreground">Verified Partner</span>
              </CardContent>
            </Card>
            <Card className="bg-muted/50 border-none shadow-none">
              <CardContent className="p-4 flex items-center space-x-3">
                <Timer className="h-5 w-5 text-muted-foreground" />
                <span className="text-xs font-medium text-muted-foreground">24/7 Priority Review</span>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-muted-foreground">
          © 2024 Enzira Begena LMS. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
