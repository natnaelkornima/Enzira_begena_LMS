import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { User, Mail, Lock, ArrowLeft } from 'lucide-react';

export default function SignUpPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-muted/20">
      <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group">
        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
        Back to home
      </Link>

      <div className="w-full max-w-[360px] flex flex-col items-center">
        {/* Brand Header */}
        <div className="mb-12 text-center w-full">
          <h1 className="text-3xl font-semibold tracking-tight mb-2">Create Account</h1>
          <p className="text-sm text-muted-foreground font-medium">Join the Enzira Begena community today.</p>
        </div>

        {/* Signup Form */}
        <div className="w-full">
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-muted-foreground">Full Name</Label>
              <Input 
                id="name" 
                placeholder="John Doe" 
                className="h-12 bg-transparent border-t-0 border-x-0 border-b border-border rounded-none focus-visible:ring-0 focus-visible:border-b-primary px-0 shadow-none text-base transition-colors" 
                required 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email address</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="name@enzira.edu" 
                className="h-12 bg-transparent border-t-0 border-x-0 border-b border-border rounded-none focus-visible:ring-0 focus-visible:border-b-primary px-0 shadow-none text-base transition-colors" 
                required 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-muted-foreground">Password</Label>
              <Input 
                id="password" 
                type="password" 
                placeholder="••••••••" 
                className="h-12 bg-transparent border-t-0 border-x-0 border-b border-border rounded-none focus-visible:ring-0 focus-visible:border-b-primary px-0 shadow-none text-base transition-colors" 
                required 
              />
            </div>

            <div className="flex items-start space-x-2 pt-2">
              <Checkbox id="terms" className="mt-1 border-border/50" />
              <label htmlFor="terms" className="text-xs leading-tight text-muted-foreground">
                I agree to the <Link href="#" className="text-primary hover:underline">Terms</Link> and <Link href="#" className="text-primary hover:underline">Privacy Policy</Link>.
              </label>
            </div>

            <Button asChild className="w-full h-12 rounded-full font-medium text-base mt-8 shadow-sm">
              <Link href="/login">Create Account</Link>
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-xs font-medium text-muted-foreground">
              <span className="bg-muted/20 px-4">Or continue with</span>
            </div>
          </div>

          {/* Social Login */}
          <Button variant="outline" className="w-full h-12 rounded-full font-medium bg-transparent border-border hover:bg-background shadow-sm">
            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335"></path>
            </svg>
            Google
          </Button>
        </div>

        {/* Footer Link */}
        <p className="mt-12 text-center text-sm text-muted-foreground font-medium">
          Already have an account? 
          <Link href="/login" className="text-primary hover:underline ml-1.5">Sign In</Link>
        </p>
      </div>
    </main>
  );
}
