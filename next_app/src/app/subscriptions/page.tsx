import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle2, XCircle } from 'lucide-react';
import { BackButton } from '@/components/ui/back-button';

export default function SubscriptionsPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Top Navigation Bar */}
      <header className="bg-card shadow-sm fixed w-full top-0 z-50 border-b">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          <div className="text-xl font-bold">Academia LMS</div>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link className="text-foreground border-b-2 border-primary pb-1" href="/subscriptions">Pricing</Link>
            <Link className="text-muted-foreground hover:text-primary transition-colors" href="/courses/1">Courses</Link>
            <Link className="text-muted-foreground hover:text-primary transition-colors" href="/about">About</Link>
            <Link className="text-muted-foreground hover:text-primary transition-colors" href="/support">Support</Link>
          </nav>
          <div className="flex items-center space-x-2">
            <Button variant="ghost">Login</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-16">
        {/* Hero Section */}
        <BackButton />
        <div className="mb-16">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">Elevate Your Intellectual Journey</h1>
          <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">Choose a plan that matches your academic rigor. From individual learners to global institutions, we provide the tools for mastery.</p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
          {/* Basic Plan */}
          <Card className="flex flex-col h-full bg-gradient-to-br from-zinc-100 to-transparent dark:from-zinc-900 border-black/5 dark:border-white/5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 rounded-[1.5rem] overflow-hidden group">
            <CardHeader>
              <div className="mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-full">Foundation</span>
              </div>
              <CardTitle className="text-3xl mt-2 tracking-tight">Basic</CardTitle>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold">$29</span>
                <span className="text-muted-foreground text-sm">/month</span>
              </div>
              <CardDescription className="mt-2">Essential tools for individual students starting their academic pursuit.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 px-8">
              <ul className="space-y-4 text-sm font-medium">
                <li className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span>Access to 5 Core Courses</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span>Personal Study Dashboard</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span>Community Forum Access</span>
                </li>
                <li className="flex items-center gap-3 opacity-40">
                  <div className="p-1 rounded-full bg-muted text-muted-foreground">
                    <XCircle className="h-4 w-4" />
                  </div>
                  <span className="line-through decoration-muted-foreground">Advanced Certification</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="p-8 pt-0">
              <Link href="/payment" className="w-full block">
                <Button className="w-full rounded-xl py-6 text-base shadow-sm group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300" variant="outline">
                  Subscribe Now
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Pro Plan */}
          <Card className="flex flex-col h-full relative transform md:-translate-y-6 shadow-2xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:-translate-y-8 transition-all duration-500 rounded-[1.5rem] !overflow-visible border border-primary/20 bg-gradient-to-b from-primary/10 via-background to-background group">
            <div className="absolute top-0 inset-x-0 h-1 rounded-t-[1.5rem] bg-gradient-to-r from-primary/40 via-primary to-primary/40"></div>
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-md whitespace-nowrap z-10">
              Most Popular
            </div>
            <CardHeader className="pt-10 px-8">
              <div className="mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1.5 rounded-full">Excellence</span>
              </div>
              <CardTitle className="text-3xl mt-2 tracking-tight">Pro</CardTitle>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold">$79</span>
                <span className="text-muted-foreground text-sm">/month</span>
              </div>
              <CardDescription className="mt-2">Comprehensive resources for dedicated researchers and lifelong learners.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 px-8">
              <ul className="space-y-4 text-sm font-medium">
                <li className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span>Unlimited Course Access</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span>Priority Mentor Support</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span>Advanced PDF Resources</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span>Professional Certifications</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span>Offline Learning Mode</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="p-8 pt-0">
              <Link href="/payment" className="w-full block">
                <Button className="w-full rounded-xl py-6 text-base shadow-md hover:scale-[1.02] transition-transform duration-300">
                  Subscribe Now
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Enterprise Plan */}
          <Card className="flex flex-col h-full bg-gradient-to-br from-zinc-100 to-transparent dark:from-zinc-900 border-black/5 dark:border-white/5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 rounded-[1.5rem] overflow-hidden group">
            <CardHeader className="px-8 pt-8">
              <div className="mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-full">Authority</span>
              </div>
              <CardTitle className="text-3xl mt-2 tracking-tight">Enterprise</CardTitle>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold">$199</span>
                <span className="text-muted-foreground text-sm">/month</span>
              </div>
              <CardDescription className="mt-2">Scalable solutions for universities and corporate training departments.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 px-8">
              <ul className="space-y-4 text-sm font-medium">
                <li className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span>Custom Learning Paths</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span>Advanced Admin Dashboard</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span>API Access &amp; Integrations</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span>Dedicated Success Manager</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="p-8 pt-0">
              <Link href="/payment" className="w-full block">
                <Button className="w-full rounded-xl py-6 text-base shadow-sm group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300" variant="outline">
                  Subscribe Now
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-muted-foreground">
          © 2024 Academia LMS. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
