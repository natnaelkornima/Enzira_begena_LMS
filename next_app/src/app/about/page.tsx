import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { GraduationCap, Users, Globe, BookOpen, Sparkles, Target, Zap } from 'lucide-react';
import { BackButton } from '@/components/ui/back-button';

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen flex flex-col font-sans overflow-hidden">
      {/* Top Navigation Bar */}
      <header className="bg-card/80 backdrop-blur-md shadow-sm fixed w-full top-0 z-50 border-b">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          <Link href="/" className="text-xl font-bold tracking-tight">Enzira Begena LMS</Link>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <Link className="text-muted-foreground hover:text-primary transition-colors" href="/subscriptions">Pricing</Link>
            <Link className="text-foreground border-b-2 border-primary pb-1" href="/about">About</Link>
            <Link className="text-muted-foreground hover:text-primary transition-colors" href="/support">Support</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost">Login</Button>
            <Button className="rounded-full px-6">Get Started</Button>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-32 pb-24 relative">
        {/* Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

        {/* Hero Section */}
        <section className="max-w-5xl mx-auto px-6 mb-24 mt-12">
          <BackButton />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest mb-6 border border-primary/10">
            <Sparkles className="h-4 w-4" /> The Future of Learning
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Redefining the <br /> <span className="text-primary/90">Academic Standard</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            We engineer distraction-free, highly engaging digital ecosystems where knowledge transfers seamlessly. No clutter. Just pure mastery.
          </p>
        </section>

        {/* Bento Box Core Values Grid (Replaces the Image Section) */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Massive Mission Card */}
            <Card className="md:col-span-2 p-10 md:p-14 bg-gradient-to-br from-zinc-100 to-transparent dark:from-zinc-900 border-black/5 dark:border-white/5 shadow-sm rounded-[2rem] hover:shadow-xl transition-all duration-500 group relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-700"></div>
              <Target className="h-10 w-10 text-primary mb-8" />
              <h2 className="text-4xl font-extrabold tracking-tight mb-6">Our Mission</h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Founded in 2024, Enzira Begena LMS started as a research project at a leading university. Frustrated by clunky interfaces, we set out to design a platform that feels less like a chore and more like a premium consumer application.
              </p>
            </Card>

            {/* Velocity Card */}
            <Card className="p-10 bg-gradient-to-br from-blue-500/5 to-transparent border-blue-500/10 shadow-sm rounded-[2rem] hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group">
              <div className="h-14 w-14 rounded-2xl bg-background shadow-sm flex items-center justify-center text-blue-600 mb-8 border border-blue-500/10 group-hover:scale-110 transition-transform">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-4">Velocity</h3>
              <p className="text-muted-foreground leading-relaxed">
                Speed of thought matters. Our infrastructure is built for zero-latency video playback and instant interactions.
              </p>
            </Card>

            {/* Quality Card */}
            <Card className="p-10 bg-gradient-to-br from-rose-500/5 to-transparent border-rose-500/10 shadow-sm rounded-[2rem] hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group">
              <div className="h-14 w-14 rounded-2xl bg-background shadow-sm flex items-center justify-center text-rose-600 mb-8 border border-rose-500/10 group-hover:scale-110 transition-transform">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-4">Curation</h3>
              <p className="text-muted-foreground leading-relaxed">
                We partner exclusively with top-tier educators to ensure every course meets Ivy League standards.
              </p>
            </Card>

            {/* Global Reach Card */}
            <Card className="md:col-span-2 p-10 bg-gradient-to-br from-emerald-500/5 to-transparent border-emerald-500/10 shadow-sm rounded-[2rem] hover:shadow-xl transition-all duration-500 group relative overflow-hidden flex flex-col justify-center items-start">
               <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-colors duration-700"></div>
               <Globe className="h-10 w-10 text-emerald-600 mb-8 relative z-10" />
               <h3 className="text-3xl font-extrabold tracking-tight mb-4 relative z-10">Global Accessibility</h3>
               <p className="text-lg text-muted-foreground leading-relaxed max-w-xl relative z-10">
                 Education should not be constrained by geography. We've deployed edge servers worldwide to ensure our platform is equally fast in Tokyo, London, and New York.
               </p>
            </Card>

          </div>
        </section>

        {/* Stats Grid */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Users, label: "Active Students", value: "50k+" },
              { icon: BookOpen, label: "Masterclasses", value: "120+" },
              { icon: Globe, label: "Countries", value: "145" },
              { icon: GraduationCap, label: "Certifications", value: "85k+" },
            ].map((stat, i) => (
              <Card key={i} className="p-6 flex flex-col items-center text-center bg-transparent border-border/40 rounded-3xl hover:bg-muted/30 transition-colors duration-300">
                <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-1">{stat.value}</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</p>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 mt-auto bg-muted/20">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-muted-foreground">
          © 2026 Enzira LMS. Engineered for excellence.
        </div>
      </footer>
    </div>
  );
}
