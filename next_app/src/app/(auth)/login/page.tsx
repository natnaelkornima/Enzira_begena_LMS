import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft } from 'lucide-react';

export default function LoginPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-muted/20">
      <Link href="/" className="absolute top-6 left-6 flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group z-10">
        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
        Back to home
      </Link>

      <div className="w-full max-w-[850px] bg-card rounded-[5px] shadow-xl overflow-hidden flex flex-col md:flex-row border border-border/50">
        
        {/* Left Side - Gradient Panel */}
        <div className="hidden md:flex md:w-5/12 p-8 relative overflow-hidden bg-gradient-to-br from-primary via-primary/80 to-primary/40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_50%)]"></div>
          
          <div className="relative z-10 flex flex-col h-full justify-between text-white">
            <div className="text-3xl font-black tracking-tighter">E<span className="text-primary-foreground/70">.</span></div>
            
            <div className="space-y-3">
              <p className="text-primary-foreground/80 text-sm font-medium">Welcome back</p>
              <h2 className="text-2xl font-bold tracking-tight leading-tight">
                Get access to your personal hub for clarity and productivity.
              </h2>
            </div>
          </div>
        </div>

        {/* Right Side - Form Panel */}
        <div className="w-full md:w-7/12 p-6 md:p-10 flex flex-col justify-center bg-background">
          <div className="w-full max-w-[340px] mx-auto">
            {/* Mobile Logo */}
            <div className="text-2xl font-black tracking-tighter text-primary mb-4 md:hidden">E<span className="text-primary/40">.</span></div>
            
            <div className="mb-6">
              <div className="hidden md:block text-xl font-black tracking-tighter text-primary mb-4">E<span className="text-primary/40">.</span></div>
              <h1 className="text-xl font-bold tracking-tight mb-1">Welcome back</h1>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Access your courses, materials, and progress anytime.
              </p>
            </div>

            <form className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-xs font-semibold">Your email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="name@enzira.edu" 
                  className="h-10 rounded-[5px] bg-background border-border focus-visible:ring-1 focus-visible:ring-primary/20" 
                  required 
                />
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <Label htmlFor="password" className="text-xs font-semibold">Password</Label>
                </div>
                <div className="relative">
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="••••••••" 
                    className="h-10 rounded-[5px] bg-background border-border focus-visible:ring-1 focus-visible:ring-primary/20" 
                    required 
                  />
                  <Link href="#" className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-muted-foreground hover:text-primary font-medium">Forgot?</Link>
                </div>
              </div>
              <Button asChild className="w-full h-10 rounded-[5px] font-semibold text-xs mt-2 shadow-sm">
                <Link href="/student">Sign In</Link>
              </Button>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-[10px] font-medium text-muted-foreground">
                <span className="bg-background px-3 uppercase tracking-wider">or</span>
              </div>
            </div>

            {/* Social Login Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="h-10 rounded-[5px] bg-muted/20 border-transparent hover:bg-muted/40 shadow-none">
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335"></path>
                </svg>
              </Button>
              <Button variant="outline" className="h-10 rounded-[5px] bg-muted/20 border-transparent hover:bg-muted/40 shadow-none">
                <svg className="w-4 h-4" fill="#1877F2" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </Button>
            </div>

            {/* Footer Link */}
            <p className="mt-6 text-center text-xs text-muted-foreground font-medium">
              Don't have an account? 
              <Link href="/signup" className="text-primary hover:underline ml-1 font-semibold">Sign up</Link>
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}
