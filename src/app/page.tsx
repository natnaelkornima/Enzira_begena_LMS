import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, Play, CheckCircle2, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { SiteHeader } from '@/components/layout/SiteHeader';

export default function LandingPage() {
  return (
    <div className="bg-background min-h-screen flex flex-col font-sans selection:bg-primary/10 text-foreground overflow-x-hidden">
      {/* Navigation */}
      <SiteHeader />

      <main className="flex-grow flex flex-col">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden">
          {/* Subtle Ambient Background Glows */}
          <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px] animate-pulse-glow -z-10" />
          <div className="absolute bottom-[0%] right-[-5%] w-[40%] h-[40%] bg-rose-500/5 rounded-full blur-[100px] animate-pulse-glow -z-10" style={{ animationDelay: '-3s' }} />
          
          <div className="max-w-4xl mx-auto px-6 text-center animate-reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[5px] bg-primary/5 border border-primary/10 text-xs font-bold text-primary/80 mb-8 hover:bg-primary/10 transition-colors cursor-pointer group">
              Featured in Fortune · Enzira Begena 2.0 <ChevronRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground mb-8 leading-[1.1]">
              Professional Learning,<br className="hidden sm:block" />
              <span className="text-primary/90">at Scale</span>
            </h1>
            
            <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
              Trusted by world-class institutions and modern teams for interactive training, 
              curriculum design, and precision analytics.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="h-12 px-8 text-sm font-bold bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20 group" asChild>
                <Link href="/signup">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Minimalist Corner Markers */}
          <div className="absolute top-[25%] left-[15%] w-1 h-1 bg-primary/20 rounded-full" />
          <div className="absolute top-[25%] right-[15%] w-1 h-1 bg-primary/20 rounded-full" />
          <div className="absolute bottom-[25%] left-[15%] w-1 h-1 bg-primary/20 rounded-full" />
          <div className="absolute bottom-[25%] right-[15%] w-1 h-1 bg-primary/20 rounded-full" />
        </section>

        {/* Simplified Bento Section */}
        <section className="py-24 border-t border-border/40 bg-muted/20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:min-h-[500px]">
              {/* Expertly Crafted Pathways */}
              <div className="md:col-span-8 bg-white dark:bg-zinc-900 border border-primary/10 rounded-[5px] p-10 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/40 transition-all duration-500 group overflow-hidden relative bg-gradient-to-br from-white via-white to-primary/5 dark:from-zinc-900 dark:via-zinc-900 dark:to-primary/10">
                <div className="max-w-sm relative z-10">
                  <Badge variant="secondary" className="bg-primary/5 text-primary border-none mb-5 uppercase tracking-widest text-[10px] font-bold">Curriculum</Badge>
                  <h3 className="text-3xl font-bold text-foreground mb-4 leading-tight">Expertly Crafted Pathways</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Deploy complex learning paths across your organization with surgical precision and ease.
                  </p>
                </div>
                <div className="absolute bottom-[-10px] right-[-10px] w-1/2 h-1/2 bg-gradient-to-tl from-primary/10 to-transparent rounded-tl-2xl p-6 border-t border-l border-primary/20 group-hover:translate-y-[-12px] group-hover:translate-x-[-12px] transition-all duration-700 flex flex-col justify-end gap-3 pointer-events-none">
                  <div className="space-y-1.5">
                    <div className="h-1.5 w-full bg-primary/20 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-primary rounded-full animate-pulse" />
                    </div>
                    <div className="h-1.5 w-4/5 bg-primary/20 rounded-full overflow-hidden">
                      <div className="h-full w-1/2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                    </div>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center text-[9px] font-bold text-primary">01</div>
                    <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center text-[9px] font-bold text-primary">02</div>
                    <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center text-[9px] font-bold text-primary-foreground shadow-lg shadow-primary/20">03</div>
                  </div>
                </div>
              </div>
              
              {/* Real-time Insights */}
              <div className="md:col-span-4 bg-white dark:bg-zinc-900 border border-primary/10 rounded-[5px] p-8 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/40 transition-all duration-500 flex flex-col justify-between group bg-gradient-to-br from-white via-white to-primary/5 dark:from-zinc-900 dark:via-zinc-900 dark:to-primary/10">
                <div>
                  <Badge variant="secondary" className="bg-primary/5 text-primary border-none mb-5 uppercase tracking-widest text-[10px] font-bold">Analytics</Badge>
                  <h3 className="text-xl font-bold text-foreground mb-3">Real-time Insights</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Track progress and engagement with absolute precision.
                  </p>
                </div>
                <div className="pt-8 flex items-center justify-center relative">
                  <div className="relative w-24 h-24 flex items-center justify-center">
                    <div className="absolute inset-0 border-[3px] border-primary/10 rounded-full" />
                    <div className="absolute inset-0 border-[3px] border-primary border-t-transparent border-r-transparent rounded-full rotate-[120deg] group-hover:rotate-[240deg] transition-transform duration-1000" />
                    <span className="text-xl font-bold text-primary group-hover:scale-110 transition-transform">84%</span>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
                </div>
              </div>

              {/* Enterprise Grade */}
              <div className="md:col-span-4 bg-white dark:bg-zinc-900 border border-primary/10 rounded-[5px] p-8 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/40 transition-all duration-500 flex flex-col justify-between group bg-gradient-to-br from-white via-white to-primary/5 dark:from-zinc-900 dark:via-zinc-900 dark:to-primary/10">
                <div>
                  <Badge variant="secondary" className="bg-primary/5 text-primary border-none mb-5 uppercase tracking-widest text-[10px] font-bold">Security</Badge>
                  <h3 className="text-xl font-bold text-foreground mb-3">Enterprise Grade</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    SOC2 compliant and encrypted data at rest and in transit.
                  </p>
                </div>
                <div className="pt-8 flex justify-end">
                  <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm border border-primary/10">
                    <ShieldCheck className="h-7 w-7" />
                  </div>
                </div>
              </div>

              {/* Scale Globally */}
              <div className="md:col-span-8 bg-white dark:bg-zinc-900 border border-primary/10 rounded-[5px] p-8 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/40 transition-all duration-500 flex items-center gap-10 group bg-gradient-to-br from-white via-white to-primary/5 dark:from-zinc-900 dark:via-zinc-900 dark:to-primary/10">
                <div className="flex-1">
                  <Badge variant="secondary" className="bg-primary/5 text-primary border-none mb-5 uppercase tracking-widest text-[10px] font-bold">Global</Badge>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Scale Globally</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Localized content in 40+ languages with automated delivery systems.
                  </p>
                </div>
                <div className="flex-1 hidden md:flex items-center -space-x-3">
                  {[12, 34, 45, 67].map((id, i) => (
                    <div key={id} className="w-12 h-12 rounded-[5px] border-[3px] border-white dark:border-zinc-900 bg-muted-foreground/10 overflow-hidden hover:translate-y-[-4px] transition-transform cursor-pointer relative z-[1] flex items-center justify-center" style={{ transitionDelay: `${i * 100}ms` }}>
                      <span className="text-[10px] font-bold text-muted-foreground/40">U{i+1}</span>
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-[5px] border-[3px] border-white dark:border-zinc-900 bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary relative z-0">
                    +40
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-8">Start your journey today.</h2>
            <Button size="lg" className="h-12 px-10 text-sm font-bold bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all group" asChild>
              <Link href="/signup">
                Get Started Free
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-16 border-t border-border/40 bg-background">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-primary flex items-center justify-center text-primary-foreground font-bold text-[10px]">E</div>
            <span className="font-bold tracking-tight text-foreground text-sm uppercase">Enzira Begena LMS</span>
          </div>
          <div className="flex gap-8 text-[11px] font-bold tracking-tighter text-muted-foreground">
            <Link href="#" className="hover:text-primary transition-colors uppercase">Twitter</Link>
            <Link href="#" className="hover:text-primary transition-colors uppercase">LinkedIn</Link>
            <Link href="#" className="hover:text-primary transition-colors uppercase">Privacy</Link>
            <Link href="#" className="hover:text-primary transition-colors uppercase">Terms</Link>
          </div>
          <p className="text-[10px] font-bold tracking-[0.1em] text-muted-foreground opacity-50 uppercase">© 2024 Enzira Begena LMS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
