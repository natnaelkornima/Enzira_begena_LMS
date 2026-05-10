'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-[5px] bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">E</div>
            <span className="font-bold text-xl tracking-tight hidden sm:block">Enzira Begena</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</Link>
            <Link href="/subscriptions" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
            <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
            <Link href="/support" className="text-muted-foreground hover:text-foreground transition-colors">Support</Link>
          </nav>
          
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-semibold hidden md:block hover:text-primary transition-colors">Log in</Link>
            <Button className="px-6 hidden md:flex rounded-[5px]" asChild>
              <Link href="/signup">Get Started</Link>
            </Button>
            
            {/* Mobile Menu Toggle */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden rounded-[5px]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-20 z-40 bg-background/95 backdrop-blur-sm md:hidden animate-in fade-in slide-in-from-top-4 duration-300 overflow-y-auto">
          <nav className="flex flex-col p-6 gap-6 h-full border-t border-border/40">
            <Link 
              href="/#features" 
              className="text-xl font-semibold text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="/subscriptions" 
              className="text-xl font-semibold text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              href="/about" 
              className="text-xl font-semibold text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/support" 
              className="text-xl font-semibold text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Support
            </Link>
            
            <div className="h-px bg-border my-2" />
            
            <Link 
              href="/login" 
              className="text-xl font-semibold text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Log in
            </Link>
            <Button className="w-full h-12 text-lg rounded-[5px] mt-2" asChild>
              <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)}>Get Started Free</Link>
            </Button>
          </nav>
        </div>
      )}
    </>
  );
}
