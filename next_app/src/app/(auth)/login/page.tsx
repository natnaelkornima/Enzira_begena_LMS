import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { GraduationCap, Mail, Lock } from 'lucide-react';

export default function LoginPage() {
  return (
    <main className="w-full max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[900px] md:min-h-screen overflow-hidden bg-background">
      {/* Left Side: Abstract Illustration */}
      <section className="hidden md:flex relative overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 opacity-80 mix-blend-overlay">
          <img 
            alt="Abstract educational background" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAz-1YJ3oaZoVnj6z4XMm8OB-BvzSLbgO0pO8-3recuYWi4N8MYOu42rO5s3mSlazjoiws5Si5EeOJEPdTI4K-McVAyls9tTwifty_DmQ3EEmfLXvLwpGetFkA4NRGS19QL-m1N3dg9BJyXG83M3tHfKvoEBhUhehThbQGIC3fCpZz3FOcmFUYVO_YGY0biMpl7ycjCjcACAQCWzvKnCu9oBlz04Tsx0a_in7uGLwbT5PA6FaptBQaJoRNE5nKawSRtA74FyPhqK60"
          />
        </div>
        <div className="relative z-10 flex flex-col justify-end p-12 w-full h-full bg-gradient-to-t from-zinc-950/90 to-transparent">
          <h1 className="text-4xl font-bold text-white mb-4">Academia LMS</h1>
          <p className="text-lg text-zinc-300 max-w-md">Elevate your intellectual rigor with a platform designed for the focused student.</p>
        </div>
      </section>

      {/* Right Side: Login Form */}
      <section className="flex items-center justify-center bg-card p-6 md:p-12 relative z-10">
        <div className="w-full max-w-[400px] flex flex-col">
          {/* Logo & Header */}
          <div className="mb-8 text-center md:text-left">
            <div className="inline-flex items-center gap-2 mb-4">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold tracking-tight">Academia LMS</span>
            </div>
            <h2 className="text-3xl font-bold mt-2">Welcome Back</h2>
            <p className="text-sm text-muted-foreground mt-2">Please enter your credentials to access your portal.</p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="student@academia.edu" 
                  className="pl-10" 
                  required 
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="password">Password</Label>
                <Link href="#" className="text-xs text-primary font-medium hover:underline">Forgot Password?</Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="••••••••" 
                  className="pl-10" 
                  required 
                />
              </div>
            </div>
            <Button asChild className="w-full h-12 text-base font-semibold">
              <Link href="/student">Login to Portal</Link>
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground tracking-widest">or continue with</span>
            </div>
          </div>

          {/* Social Login */}
          <Button variant="outline" className="w-full h-11 text-muted-foreground font-medium bg-background hover:bg-muted">
            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335"></path>
            </svg>
            Google Account
          </Button>

          {/* Footer Link */}
          <p className="mt-8 text-center text-sm text-muted-foreground">
            New to the institution? 
            <Link href="/signup" className="text-primary font-semibold hover:underline ml-1">Sign Up</Link>
          </p>
        </div>
      </section>
      
      {/* Background Decoration for Desktop */}
      <div className="fixed top-0 right-0 w-[50%] h-full bg-card -z-10 hidden md:block"></div>
      <div className="fixed top-0 left-0 w-[50%] h-full bg-zinc-950 -z-10 hidden md:block"></div>
    </main>
  );
}
