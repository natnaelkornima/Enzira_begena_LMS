import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { GraduationCap, Eye } from 'lucide-react';

export default function SignUpPage() {
  return (
    <>
      <main className="min-h-[calc(100vh-80px)] flex items-center justify-center p-4 md:p-8 bg-muted/20">
        <div className="flex flex-col md:flex-row w-full max-w-5xl bg-card rounded-2xl overflow-hidden shadow-xl border">
          {/* Left Side: Abstract Illustration */}
          <div className="hidden md:flex md:w-1/2 relative bg-zinc-900 overflow-hidden min-h-[600px]">
            <div className="absolute inset-0 z-0">
              <img 
                className="w-full h-full object-cover opacity-80" 
                alt="Abstract education digital art piece"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0lfOFRgf00WTAvBrwdPBPsHdgpisDAe2AfF5XQktzc9a4rED_AuU5ARIEpHnJRIs53jOAq1Qn2n84wCnv2jmhlJ7W2rusnmmXpflSoovva6ZCaYfzVsyUKEQuMqnLmeMItobbfvYenerf1K7ppfhiRGmYzfv26Av87YIUcASDhzBJmXJP6cpOfyY7bifioxqQ4NTedX-2fn5wHWxbWycUU79sn3dmTb87PKQKJvIUkAeEEbxAgxzMg7eLqCW_67cR8iCsuuf9qyA"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent z-10"></div>
            <div className="relative z-20 p-10 flex flex-col justify-end text-white h-full">
              <h2 className="text-4xl font-bold mb-4">Elevate Your Mind.</h2>
              <p className="text-lg text-zinc-300 opacity-90 max-w-md">Join a community of scholars and professionals dedicated to intellectual rigor and digital excellence.</p>
            </div>
          </div>

          {/* Right Side: Sign Up Form */}
          <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center">
            {/* Brand Header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold tracking-tight">Academia LMS</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tight mb-2">Create Account</h1>
              <p className="text-sm text-muted-foreground">Start your learning journey with us today.</p>
            </div>

            {/* Form Fields */}
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="full_name">Full Name</Label>
                <Input id="full_name" placeholder="John Doe" type="text" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" placeholder="name@university.edu" type="email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input id="password" placeholder="••••••••" type="password" />
                  <Eye className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground cursor-pointer hover:text-foreground" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm_password">Confirm Password</Label>
                <Input id="confirm_password" placeholder="••••••••" type="password" />
              </div>

              {/* Terms & Conditions */}
              <div className="flex items-start space-x-2 pt-2">
                <Checkbox id="terms" className="mt-1" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted-foreground"
                >
                  I agree to the <Link href="#" className="text-primary hover:underline font-semibold">Terms of Service</Link> and <Link href="#" className="text-primary hover:underline font-semibold">Privacy Policy</Link>.
                </label>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Button asChild className="w-full h-11 font-semibold uppercase tracking-wider text-xs">
                  <Link href="/login">Create Account</Link>
                </Button>
              </div>
            </form>

            {/* Footer Link */}
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account? 
                <Link href="/login" className="text-primary font-bold hover:underline ml-1">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Global Footer */}
      <footer className="w-full py-8 bg-card border-t">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto gap-4">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-primary" />
            <span className="font-bold text-foreground">Academia LMS</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2024 Academia LMS. Built for Intellectual Rigor.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
