import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle2, XCircle } from 'lucide-react';
import { BackButton } from '@/components/ui/back-button';
import { SiteHeader } from '@/components/layout/SiteHeader';

export default function SubscriptionsPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Top Navigation Bar */}
      <SiteHeader />

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-16">
        {/* Hero Section */}
        <div className="flex flex-col items-start mb-16">
          <BackButton />
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 tracking-tight mt-6">Elevate Your Intellectual Journey</h1>
          <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">Choose a plan that matches your academic rigor. From individual learners to global institutions, we provide the tools for mastery.</p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
          {/* Basic Plan */}
          <Card className="flex flex-col h-full bg-white dark:bg-zinc-900 border border-primary/10 hover:border-primary/40 rounded-[5px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group overflow-hidden">
            <CardHeader className="p-8">
              <div className="mb-4">
                <Badge variant="secondary" className="bg-primary/5 text-primary border-none uppercase tracking-widest text-[9px] font-bold">Foundation</Badge>
              </div>
              <CardTitle className="text-xl md:text-2xl font-bold tracking-tight">Basic</CardTitle>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-bold">$29</span>
                <span className="text-muted-foreground text-[10px] font-bold uppercase tracking-wider">/month</span>
              </div>
              <CardDescription className="mt-3 text-xs leading-relaxed">Essential tools for individual students starting their academic pursuit.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 px-8 pb-8">
              <ul className="space-y-4 text-xs font-medium">
                {[
                  { label: "Access to 5 Core Courses", included: true },
                  { label: "Personal Study Dashboard", included: true },
                  { label: "Community Forum Access", included: true },
                  { label: "Advanced Certification", included: false },
                ].map((item, i) => (
                  <li key={i} className={`flex items-center gap-3 ${item.included ? 'text-foreground' : 'text-muted-foreground/50'}`}>
                    {item.included ? (
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    ) : (
                      <XCircle className="h-4 w-4 text-muted-foreground/30 shrink-0" />
                    )}
                    <span className={item.included ? '' : 'line-through'}>{item.label}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="p-8 pt-0">
              <Link href="/payment" className="w-full">
                <Button className="w-full rounded-[5px] py-5 text-xs font-bold uppercase tracking-widest bg-primary/5 text-primary border-primary/10 hover:bg-primary hover:text-white transition-all duration-300" variant="outline">
                  Subscribe Now
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Pro Plan */}
          <Card className="flex flex-col h-full relative md:-translate-y-4 bg-white dark:bg-zinc-900 border-2 border-primary/30 hover:border-primary rounded-[5px] shadow-2xl hover:shadow-primary/10 hover:-translate-y-6 transition-all duration-500 group overflow-visible">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-5 py-1.5 rounded-[5px] text-[9px] font-bold uppercase tracking-widest shadow-lg shadow-primary/20 z-20 whitespace-nowrap">
              Most Popular
            </div>
            <CardHeader className="p-8 pt-10">
              <div className="mb-4">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-none uppercase tracking-widest text-[9px] font-bold">Excellence</Badge>
              </div>
              <CardTitle className="text-xl md:text-2xl font-bold tracking-tight">Pro</CardTitle>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-bold">$79</span>
                <span className="text-muted-foreground text-[10px] font-bold uppercase tracking-wider">/month</span>
              </div>
              <CardDescription className="mt-3 text-xs leading-relaxed">Comprehensive resources for dedicated researchers and lifelong learners.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 px-8 pb-8">
              <ul className="space-y-4 text-xs font-medium">
                {[
                  "Unlimited Course Access",
                  "Priority Mentor Support",
                  "Advanced PDF Resources",
                  "Professional Certifications",
                  "Offline Learning Mode"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="p-8 pt-0">
              <Link href="/payment" className="w-full">
                <Button className="w-full rounded-[5px] py-5 text-xs font-bold uppercase tracking-widest bg-primary text-white shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all duration-300">
                  Subscribe Now
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Enterprise Plan */}
          <Card className="flex flex-col h-full bg-white dark:bg-zinc-900 border border-primary/10 hover:border-primary/40 rounded-[5px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group overflow-hidden">
            <CardHeader className="p-8">
              <div className="mb-4">
                <Badge variant="secondary" className="bg-primary/5 text-primary border-none uppercase tracking-widest text-[9px] font-bold">Authority</Badge>
              </div>
              <CardTitle className="text-xl md:text-2xl font-bold tracking-tight">Enterprise</CardTitle>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-bold">$199</span>
                <span className="text-muted-foreground text-[10px] font-bold uppercase tracking-wider">/month</span>
              </div>
              <CardDescription className="mt-3 text-xs leading-relaxed">Scalable solutions for universities and corporate training departments.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 px-8 pb-8">
              <ul className="space-y-4 text-xs font-medium">
                {[
                  "Custom Learning Paths",
                  "Advanced Admin Dashboard",
                  "API Access & Integrations",
                  "Dedicated Success Manager"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="p-8 pt-0">
              <Link href="/payment" className="w-full">
                <Button className="w-full rounded-[5px] py-5 text-xs font-bold uppercase tracking-widest bg-primary/5 text-primary border-primary/10 hover:bg-primary hover:text-white transition-all duration-300" variant="outline">
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
          © 2016 made by Enzira production team. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
