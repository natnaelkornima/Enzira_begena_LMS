import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle2, XCircle } from 'lucide-react';

export default function SubscriptionsPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Top Navigation Bar */}
      <header className="bg-card shadow-sm fixed w-full top-0 z-50 border-b">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          <div className="text-xl font-bold">Academia LMS</div>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link className="text-foreground border-b-2 border-primary pb-1" href="/pricing">Pricing</Link>
            <Link className="text-muted-foreground hover:text-primary transition-colors" href="/courses">Courses</Link>
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
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Elevate Your Intellectual Journey</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Choose a plan that matches your academic rigor. From individual learners to global institutions, we provide the tools for mastery.</p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Basic Plan */}
          <Card className="flex flex-col h-full hover:shadow-lg transition-all duration-200">
            <CardHeader>
              <div className="mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-full">Foundation</span>
              </div>
              <CardTitle className="text-2xl mt-2">Basic</CardTitle>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold">$29</span>
                <span className="text-muted-foreground text-sm">/month</span>
              </div>
              <CardDescription className="mt-2">Essential tools for individual students starting their academic pursuit.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Access to 5 Core Courses</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Personal Study Dashboard</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Community Forum Access</span>
                </li>
                <li className="flex items-center gap-3 opacity-50">
                  <XCircle className="h-5 w-5 text-muted-foreground" />
                  <span className="line-through">Advanced Certification</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild variant="outline">
                <Link href="/payment">Subscribe Now</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Pro Plan */}
          <Card className="flex flex-col h-full hover:shadow-xl transition-all duration-200 border-2 border-primary relative transform md:-translate-y-4 shadow-md">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm">
              Most Popular
            </div>
            <CardHeader>
              <div className="mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-full">Excellence</span>
              </div>
              <CardTitle className="text-2xl mt-2">Pro</CardTitle>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold">$79</span>
                <span className="text-muted-foreground text-sm">/month</span>
              </div>
              <CardDescription className="mt-2">Comprehensive resources for dedicated researchers and lifelong learners.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-3 text-sm font-medium">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Unlimited Course Access</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Priority Mentor Support</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Advanced PDF Resources</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Professional Certifications</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Offline Learning Mode</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild>
                <Link href="/payment">Subscribe Now</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Enterprise Plan */}
          <Card className="flex flex-col h-full hover:shadow-lg transition-all duration-200">
            <CardHeader>
              <div className="mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-full">Authority</span>
              </div>
              <CardTitle className="text-2xl mt-2">Enterprise</CardTitle>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold">$199</span>
                <span className="text-muted-foreground text-sm">/month</span>
              </div>
              <CardDescription className="mt-2">Scalable solutions for universities and corporate training departments.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Custom Learning Paths</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Advanced Admin Dashboard</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>API Access &amp; Integrations</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Dedicated Success Manager</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild variant="outline">
                <Link href="/payment">Subscribe Now</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Visual Anchor Section */}
        <div className="mt-20 rounded-2xl overflow-hidden relative min-h-[400px] flex items-center p-8 lg:p-12">
          <img 
            alt="Academic Workspace" 
            className="absolute inset-0 w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEF5NIYylwg70UYV13CbHT3PsS-hYfc26Y1N4uzurGmAfweNI6-pAFXXxfTv0BSC8KDQoteXVQWH5AvWZ8zcEWcr_SS2KSY4BRva11Fw8_Frpl0K2TVgKFeH7nb6OYfHPq3XOmFwIeLdeLwbooFDZPEWblzBQ3G_SEPAXNv0X6Rsl-6riDxVGCuIKVr58J1-Zml_DhLyqukmFxoYEQxjer1hPRlGzeFt05fPQ4uhmJ9ya-vI6jUx7CafaTlqRrnGZ-_BL5Faawamc"
          />
          <div className="relative z-10 max-w-xl bg-card/90 backdrop-blur-md p-8 rounded-xl shadow-lg border">
            <h2 className="text-3xl font-bold mb-4">Uncompromising Quality</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">Join over 50,000 intellectuals who have transformed their careers through our rigorous academic ecosystem. Our platform is designed for those who demand more from their digital education.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t w-full py-12 mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center px-6 max-w-7xl mx-auto gap-6">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-lg font-bold">Academia LMS</span>
            <p className="text-muted-foreground text-sm mt-1">© 2024 Academia LMS. Built for Intellectual Rigor.</p>
          </div>
          <div className="flex gap-6 text-sm font-medium text-muted-foreground">
            <Link className="hover:text-primary transition-colors" href="/privacy">Privacy Policy</Link>
            <Link className="hover:text-primary transition-colors" href="/terms">Terms of Service</Link>
            <Link className="hover:text-primary transition-colors" href="/cookies">Cookie Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
