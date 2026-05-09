import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, Play, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="bg-background min-h-screen flex flex-col font-sans selection:bg-primary/10 text-foreground overflow-x-hidden">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">A</div>
            <span className="font-bold text-xl tracking-tight">Academia</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</Link>
            <Link href="/subscriptions" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
            <Link href="/courses/1" className="text-muted-foreground hover:text-foreground transition-colors">Catalog</Link>
            <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
            <Link href="/support" className="text-muted-foreground hover:text-foreground transition-colors">Support</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-semibold hidden md:block hover:text-primary transition-colors">Log in</Link>
            <Button className="rounded-full px-6" asChild>
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow flex flex-col">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden">
          {/* Subtle Ambient Background Glows */}
          <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px] animate-pulse-glow -z-10" />
          <div className="absolute bottom-[0%] right-[-5%] w-[40%] h-[40%] bg-rose-500/5 rounded-full blur-[100px] animate-pulse-glow -z-10" style={{ animationDelay: '-3s' }} />
          
          <div className="max-w-4xl mx-auto px-6 text-center animate-reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-xs font-bold text-primary/80 mb-8 hover:bg-primary/10 transition-colors cursor-pointer group">
              Featured in Fortune · Academia 2.0 <ChevronRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-8 leading-[1.1]">
              Professional Learning,<br />
              <span className="text-primary/90">at Scale</span>
            </h1>
            
            <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
              Trusted by world-class institutions and modern teams for interactive training, 
              curriculum design, and precision analytics.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="rounded-full h-12 px-8 text-sm font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20" asChild>
                <Link href="/subscriptions">Start Your Journey</Link>
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
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 h-auto md:h-[500px]">
              <div className="md:col-span-8 bg-background border border-border/40 rounded-3xl p-10 hover:shadow-xl hover:shadow-primary/5 transition-all group overflow-hidden relative">
                <div className="max-w-sm">
                  <Badge variant="secondary" className="bg-primary/5 text-primary border-none mb-5 uppercase tracking-widest text-[10px]">Curriculum</Badge>
                  <h3 className="text-3xl font-bold text-foreground mb-4 leading-tight">Expertly Crafted Pathways</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Deploy complex learning paths across your organization with surgical precision and ease.
                  </p>
                </div>
                <div className="absolute bottom-[-20px] right-[-20px] w-1/2 h-1/2 bg-gradient-to-tl from-primary/5 to-transparent rounded-tl-3xl p-8 border-t border-l border-primary/10 group-hover:translate-y-[-10px] transition-transform duration-500">
                  <div className="flex flex-col gap-3 opacity-20">
                    <div className="h-3 w-full bg-primary rounded-full" />
                    <div className="h-3 w-4/5 bg-primary rounded-full" />
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-4 bg-background border border-border/40 rounded-3xl p-8 hover:shadow-xl hover:shadow-primary/5 transition-all flex flex-col justify-between">
                <div>
                  <Badge variant="secondary" className="bg-primary/5 text-primary border-none mb-5 uppercase tracking-widest text-[10px]">Analytics</Badge>
                  <h3 className="text-xl font-bold text-foreground mb-3">Real-time Insights</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Track progress and engagement with absolute precision.
                  </p>
                </div>
                <div className="pt-8 flex items-center justify-center">
                  <div className="relative w-24 h-24">
                    <div className="absolute inset-0 border-2 border-primary/10 rounded-full" />
                    <div className="absolute inset-0 border-2 border-primary border-t-transparent border-r-transparent rounded-full rotate-45" />
                  </div>
                </div>
              </div>

              <div className="md:col-span-4 bg-background border border-border/40 rounded-3xl p-8 hover:shadow-xl hover:shadow-primary/5 transition-all">
                <Badge variant="secondary" className="bg-primary/5 text-primary border-none mb-5 uppercase tracking-widest text-[10px]">Security</Badge>
                <h3 className="text-xl font-bold text-foreground mb-3">Enterprise Grade</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  SOC2 compliant and encrypted data at rest and in transit.
                </p>
              </div>

              <div className="md:col-span-8 bg-background border border-border/40 rounded-3xl p-8 hover:shadow-xl hover:shadow-primary/5 transition-all flex items-center gap-10">
                <div className="flex-1">
                  <Badge variant="secondary" className="bg-primary/5 text-primary border-none mb-5 uppercase tracking-widest text-[10px]">Global</Badge>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Scale Globally</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Localized content in 40+ languages with automation.
                  </p>
                </div>
                <div className="flex-1 hidden md:flex items-center gap-2 opacity-30">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full bg-primary/10 animate-pulse-glow" style={{ animationDelay: `${i * 0.5}s` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-8">Start your journey today.</h2>
            <Button size="lg" className="rounded-full h-12 px-10 text-sm font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all" asChild>
              <Link href="/signup">Get Started Free</Link>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-16 border-t border-border/40 bg-background">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex items-center gap-2 opacity-80">
            <div className="w-1.5 h-4 bg-primary rounded-full mr-1" />
            <span className="font-bold tracking-widest text-foreground text-sm">ENZIRA</span>
          </div>
          <div className="flex gap-8 text-[11px] font-bold tracking-tighter text-muted-foreground">
            <Link href="#" className="hover:text-primary transition-colors uppercase">Twitter</Link>
            <Link href="#" className="hover:text-primary transition-colors uppercase">LinkedIn</Link>
            <Link href="#" className="hover:text-primary transition-colors uppercase">Privacy</Link>
            <Link href="#" className="hover:text-primary transition-colors uppercase">Terms</Link>
          </div>
          <p className="text-[10px] font-bold tracking-[0.1em] text-muted-foreground opacity-50 uppercase">© 2024 ENZIRA CORP.</p>
        </div>
      </footer>
    </div>
  );
}
