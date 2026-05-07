import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Search, CreditCard, BookOpen, Settings, Mail, MessageCircle } from 'lucide-react';
import { BackButton } from '@/components/ui/back-button';

export default function SupportPage() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      {/* Top Navigation Bar */}
      <header className="bg-card/80 backdrop-blur-md shadow-sm fixed w-full top-0 z-50 border-b">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          <Link href="/" className="text-xl font-bold tracking-tight">Academia LMS</Link>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <Link className="text-muted-foreground hover:text-primary transition-colors" href="/subscriptions">Pricing</Link>
            <Link className="text-muted-foreground hover:text-primary transition-colors" href="/courses/1">Courses</Link>
            <Link className="text-muted-foreground hover:text-primary transition-colors" href="/about">About</Link>
            <Link className="text-foreground border-b-2 border-primary pb-1" href="/support">Support</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost">Login</Button>
            <Button className="rounded-full px-6">Get Started</Button>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-32 pb-24">
        {/* Hero Section */}
        <section className="max-w-3xl mx-auto px-6 mb-20 text-center">
          <div className="flex justify-center mb-8"><BackButton /></div>
          <h1 className="text-5xl font-extrabold tracking-tight mb-6">How can we help you?</h1>
          <p className="text-lg text-muted-foreground mb-10">Search our knowledge base or browse categories below to find exactly what you need.</p>
          
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-6 w-6 text-muted-foreground" />
            </div>
            <input 
              type="text" 
              className="w-full pl-14 pr-6 py-5 text-lg rounded-2xl border-2 border-black/10 dark:border-white/10 bg-background shadow-lg focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all placeholder:text-muted-foreground/60" 
              placeholder="Search for articles, guides, or troubleshooting..."
            />
          </div>
        </section>

        {/* Categories Grid */}
        <section className="max-w-5xl mx-auto px-6 mb-24">
          <h2 className="text-2xl font-bold tracking-tight mb-8 text-center">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: BookOpen, title: "Course Access", desc: "Troubleshoot video players, quizzes, and missing certificates." },
              { icon: CreditCard, title: "Billing & Payments", desc: "Update payment methods, view invoices, and manage subscriptions." },
              { icon: Settings, title: "Account Settings", desc: "Change passwords, update profile details, and manage notifications." },
              { icon: MessageCircle, title: "Community Forums", desc: "Guidelines, moderation rules, and posting assistance." },
            ].map((cat, i) => (
              <Card key={i} className="p-6 flex items-start gap-6 bg-gradient-to-br from-zinc-100 to-transparent dark:from-zinc-900 border-black/5 dark:border-white/5 shadow-sm rounded-[1.5rem] hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-pointer group">
                <div className="h-14 w-14 shrink-0 rounded-2xl bg-background shadow-sm flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 border border-black/5">
                  <cat.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight mb-2">{cat.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cat.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-4xl mx-auto px-6">
          <Card className="p-10 md:p-12 text-center bg-primary text-primary-foreground rounded-[2rem] border-none shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent opacity-50"></div>
            <div className="relative z-10">
              <Mail className="h-12 w-12 mx-auto mb-6 opacity-80" />
              <h2 className="text-3xl font-extrabold tracking-tight mb-4">Still need assistance?</h2>
              <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
                Our academic support team is available 24/7 to help you resolve any issues that aren't covered in our knowledge base.
              </p>
              <Button size="lg" variant="secondary" className="rounded-full px-8 text-primary font-bold hover:scale-105 transition-transform shadow-lg">
                Contact Support
              </Button>
            </div>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 mt-auto bg-muted/20">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-muted-foreground">
          © 2024 Academia LMS. Crafted with precision.
        </div>
      </footer>
    </div>
  );
}
