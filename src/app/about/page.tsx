import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { GraduationCap, Users, Globe, BookOpen, Target, Zap } from 'lucide-react';
import { SiteHeader } from '@/components/layout/SiteHeader';

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen flex flex-col font-sans">
      {/* Top Navigation Bar */}
      <SiteHeader />

      <main className="flex-1 pt-32 pb-24 space-y-32">
        
        {/* Centered Hero Section */}
        <section className="max-w-3xl mx-auto px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/10">
            About Enzira Begena
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-foreground">
            Redefining the <span className="text-primary">Academic Standard</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We engineer distraction-free, highly engaging digital ecosystems where knowledge transfers seamlessly. No clutter. Just pure mastery.
          </p>
        </section>

        {/* Symmetric Core Values Grid */}
        <section className="max-w-5xl mx-auto px-6 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Our Foundation</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Built on the principles of speed, quality, and global reach.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center space-y-4 p-8 bg-muted/20 rounded-[5px] border border-border/50">
              <div className="h-12 w-12 rounded-[5px] bg-primary/10 flex items-center justify-center text-primary">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold tracking-tight">Mission</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Designing a platform that feels less like a chore and more like a premium consumer application.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4 p-8 bg-muted/20 rounded-[5px] border border-border/50">
              <div className="h-12 w-12 rounded-[5px] bg-primary/10 flex items-center justify-center text-primary">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold tracking-tight">Velocity</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Infrastructure built for zero-latency video playback and instant student interactions.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4 p-8 bg-muted/20 rounded-[5px] border border-border/50">
              <div className="h-12 w-12 rounded-[5px] bg-primary/10 flex items-center justify-center text-primary">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold tracking-tight">Quality</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Partnering with top-tier educators to ensure every course meets Ivy League standards.
              </p>
            </div>
          </div>
        </section>

        {/* Centered Stats Section */}
        <section className="bg-muted/20 py-24 border-y border-border/50">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              {[
                { label: "Students", value: "50k+" },
                { label: "Courses", value: "120+" },
                { label: "Countries", value: "145" },
                { label: "Certs", value: "85k+" },
              ].map((stat, i) => (
                <div key={i} className="space-y-2">
                  <div className="text-3xl font-bold tracking-tighter text-primary">{stat.value}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Impact - Centered Layout */}
        <section className="max-w-3xl mx-auto px-6 text-center space-y-8">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-[5px] bg-primary text-primary-foreground mx-auto">
            <Globe className="h-8 w-8" />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Global Accessibility</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Education should not be constrained by geography. Our worldwide edge server deployment ensures our platform is equally fast in Tokyo, London, and New York.
            </p>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t py-12 bg-background">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Enzira Begena</p>
          <div className="text-xs text-muted-foreground">
            © 2026 made by Enzira production team. Engineered for excellence.
          </div>
        </div>
      </footer>
    </div>
  );
}
