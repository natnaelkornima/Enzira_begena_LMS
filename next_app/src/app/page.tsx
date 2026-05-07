import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, Play, BookOpen, ShieldCheck, BarChart3, Users, CheckCircle2 } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="bg-background min-h-screen flex flex-col font-sans">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">A</div>
            <span className="font-bold text-xl tracking-tight">Academia</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</Link>
            <Link href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">Testimonials</Link>
            <Link href="/subscriptions" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
            <Link href="/courses/1" className="text-muted-foreground hover:text-foreground transition-colors">Catalog</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-semibold hidden md:block hover:text-primary transition-colors">Log in</Link>
            <Button className="rounded-full px-6" asChild>
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-6 text-center">
            <Badge variant="secondary" className="mb-6 rounded-full px-4 py-1.5 text-xs font-semibold bg-primary/10 text-primary border-primary/20">
              Introducing Academia 2.0 <ChevronRight className="h-3 w-3 inline ml-1" />
            </Badge>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1] max-w-4xl mx-auto">
              Master Your Craft with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-rose-600">Expert Precision</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              We handle the complex curriculum and interactive learning so you can focus on what matters: accelerating your career.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="rounded-full h-14 px-8 text-base font-semibold w-full sm:w-auto shadow-lg shadow-primary/20" asChild>
                <Link href="/subscriptions">Start Learning Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-base font-semibold w-full sm:w-auto bg-background/50 backdrop-blur-sm" asChild>
                <Link href="/courses/1"><Play className="h-4 w-4 mr-2" /> View Course Demo</Link>
              </Button>
            </div>
            
            {/* Social Proof */}
            <div className="mt-16 flex items-center justify-center gap-4 text-sm text-muted-foreground font-medium">
              <div className="flex -space-x-2">
                <img src="https://i.pravatar.cc/100?img=1" className="w-8 h-8 rounded-full border-2 border-background" alt="User" />
                <img src="https://i.pravatar.cc/100?img=2" className="w-8 h-8 rounded-full border-2 border-background" alt="User" />
                <img src="https://i.pravatar.cc/100?img=3" className="w-8 h-8 rounded-full border-2 border-background" alt="User" />
              </div>
              <p>Trusted by <strong className="text-foreground">12,000+</strong> students globally</p>
            </div>
          </div>
        </section>

        {/* Mockup Section */}
        <section className="max-w-6xl mx-auto px-6 pb-32">
          <div className="relative rounded-2xl md:rounded-[2.5rem] border border-border/50 bg-background/40 backdrop-blur-xl p-2 md:p-4 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-white/0 dark:from-white/5 dark:to-white/0 pointer-events-none" />
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvU-OsDHucqOyvFyMJ2JHqKDd-SOhrMY5_DrzDp41nzwTAmf146tM6M6tmQzjHMUp1iE6oMo1pY_aoJ8cM6koxos9w_9V2upn2tpOTg1gY-1tcSfaopORwt44BopenJO37mXUwRLDd10QTXfiqivO_rX3a_zHOjfE7--0RQ8j3mVcFzPWTZ4IaEJEQuFlgCeyBIJCNe39G9KY8sG0Uld6Ib4mJq1pGUMN-GvjrKdGadVGBMG5OMHPf6f3UI3GcfpIULXXYl7txkh8" 
              alt="Dashboard Preview" 
              className="w-full rounded-xl md:rounded-[2rem] border border-border/50 shadow-sm"
            />
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-muted/30 border-y border-border/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Why Academia?</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Everything you need to master new skills and advance your career, all in one beautifully designed platform.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-background/60 backdrop-blur-sm border-border/50">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">World-Class Curriculum</h3>
                  <p className="text-muted-foreground leading-relaxed">Learn from industry experts with courses designed to take you from beginner to mastery.</p>
                </CardContent>
              </Card>
              <Card className="bg-background/60 backdrop-blur-sm border-border/50">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 bg-green-500/10 text-green-600 rounded-xl flex items-center justify-center mb-6">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Interactive Learning</h3>
                  <p className="text-muted-foreground leading-relaxed">Engage with dynamic video players, instant-feedback quizzes, and downloadable resources.</p>
                </CardContent>
              </Card>
              <Card className="bg-background/60 backdrop-blur-sm border-border/50">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 bg-blue-500/10 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Verified Certificates</h3>
                  <p className="text-muted-foreground leading-relaxed">Earn verified certificates upon completion to showcase your skills to future employers.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5" />
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Ready to scale your knowledge?</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">Join thousands of students who are already advancing their careers with Academia LMS.</p>
            <Button size="lg" className="rounded-full h-14 px-10 text-lg font-semibold shadow-xl shadow-primary/20" asChild>
              <Link href="/subscriptions">Get Started Today</Link>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-background py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-primary flex items-center justify-center text-primary-foreground font-bold text-xs">A</div>
            <span className="font-bold tracking-tight">Academia LMS</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2024 Academia LMS. All rights reserved.</p>
          <div className="flex gap-6 text-sm font-medium text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
