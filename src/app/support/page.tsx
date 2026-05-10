import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CreditCard, BookOpen, Settings, Mail, MessageCircle } from 'lucide-react';
import { SiteHeader } from '@/components/layout/SiteHeader';

export default function SupportPage() {
  return (
    <div className="bg-background min-h-screen flex flex-col font-sans">
      {/* Top Navigation Bar */}
      <SiteHeader />

      <main className="flex-1 pt-32 pb-24 space-y-32">
        
        {/* Centered Help Search Hero */}
        <section className="max-w-3xl mx-auto px-6 text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">How can we help?</h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Find answers to your questions about our platform, billing, and learning experience.
            </p>
          </div>
        </section>

        {/* Symmetric Categories Grid */}
        <section className="max-w-5xl mx-auto px-6 space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">Browse Categories</h2>
            <p className="text-sm text-muted-foreground">Select a category to find specific documentation.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: BookOpen, title: "Course Access", desc: "Troubleshoot video players, quizzes, and missing certificates." },
              { icon: CreditCard, title: "Billing & Payments", desc: "Update payment methods, view invoices, and manage subscriptions." },
              { icon: Settings, title: "Account Settings", desc: "Change passwords, update profile details, and manage notifications." },
              { icon: MessageCircle, title: "Community", desc: "Guidelines, moderation rules, and posting assistance." },
            ].map((cat, i) => (
              <Card key={i} className="p-8 flex items-center gap-6 bg-muted/20 border-border/50 rounded-[5px] hover:border-primary/50 hover:bg-muted/30 transition-all group cursor-pointer">
                <div className="h-14 w-14 shrink-0 rounded-[5px] bg-background border border-border/50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <cat.icon className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold tracking-tight">{cat.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{cat.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Centered Contact Section */}
        <section className="max-w-xl mx-auto px-6">
          <div className="text-center p-12 bg-primary text-primary-foreground rounded-[5px] shadow-xl space-y-6">
            <div className="h-16 w-16 rounded-[5px] bg-white/10 flex items-center justify-center mx-auto">
              <Mail className="h-8 w-8" />
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">Need Direct Support?</h2>
              <p className="text-primary-foreground/80 leading-relaxed">
                Our support team is available 24/7 to assist you with any questions or technical difficulties.
              </p>
            </div>
            <Button size="lg" variant="secondary" className="rounded-[5px] px-10 font-bold hover:scale-105 transition-transform">
              Contact Us
            </Button>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t py-12 bg-background">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Enzira Begena</p>
          <div className="text-xs text-muted-foreground">
            © 2026 made by Enzira production team. Crafted with precision.
          </div>
        </div>
      </footer>
    </div>
  );
}
