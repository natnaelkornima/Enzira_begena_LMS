import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ShieldCheck, Clock, UploadCloud, Send, Info } from 'lucide-react';
import { BackButton } from '@/components/ui/back-button';

export default function SubmitPaymentPage() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      {/* TopAppBar */}
      <header className="bg-card shadow-sm fixed top-0 w-full z-50 border-b">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          <div className="text-xl font-bold tracking-tight">Academia LMS</div>
          <nav className="hidden md:flex space-x-6 text-sm font-medium">
            <Link className="text-muted-foreground hover:text-primary transition-colors" href="/subscriptions">Pricing</Link>
            <Link className="text-muted-foreground hover:text-primary transition-colors" href="/courses/1">Courses</Link>
            <Link className="text-muted-foreground hover:text-primary transition-colors" href="#">About</Link>
            <Link className="text-muted-foreground hover:text-primary transition-colors" href="#">Support</Link>
          </nav>
          <div className="flex items-center space-x-2">
            <Button variant="ghost">Login</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-[100px] pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <BackButton />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Instructional Side Column */}
            <div className="md:col-span-5 flex flex-col space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">Payment Verification</CardTitle>
                <CardDescription className="text-base mt-2">
                  Complete your enrollment by submitting your transaction details. Our academic administrators verify all manual transfers within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <ShieldCheck className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <p className="font-semibold text-sm">Secure Processing</p>
                    <p className="text-xs text-muted-foreground mt-1">Encrypted document handling for all ID submissions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <p className="font-semibold text-sm">Manual Review</p>
                    <p className="text-xs text-muted-foreground mt-1">Approvals typically processed during business hours.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="relative h-48 md:h-64 rounded-xl overflow-hidden shadow-sm border hidden md:block">
              <img 
                alt="Workspace" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvU-OsDHucqOyvFyMJ2JHqKDd-SOhrMY5_DrzDp41nzwTAmf146tM6M6tmQzjHMUp1iE6oMo1pY_aoJ8cM6koxos9w_9V2upn2tpOTg1gY-1tcSfaopORwt44BopenJO37mXUwRLDd10QTXfiqivO_rX3a_zHOjfE7--0RQ8j3mVcFzPWTZ4IaEJEQuFlgCeyBIJCNe39G9KY8sG0Uld6Ib4mJq1pGUMN-GvjrKdGadVGBMG5OMHPf6f3UI3GcfpIULXXYl7txkh8"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <p className="text-white text-sm italic font-medium">"Education is the most powerful weapon which you can use to change the world."</p>
              </div>
            </div>
          </div>

          {/* Payment Form Column */}
          <div className="md:col-span-7">
            <Card>
              <CardContent className="p-6 sm:p-8 space-y-6">
                <form className="space-y-6">
                  {/* Text Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input id="fullName" placeholder="Enter your full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="name@university.edu" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="txnId">Transaction ID/Reference</Label>
                    <Input id="txnId" placeholder="TXN-98234-X" />
                  </div>

                  {/* Drag & Drop Zone */}
                  <div className="space-y-2">
                    <Label>Payment Screenshot</Label>
                    <div className="border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center bg-muted/20 hover:bg-muted/50 transition-colors cursor-pointer group">
                      <UploadCloud className="h-12 w-12 text-muted-foreground group-hover:text-primary transition-colors mb-4" />
                      <p className="text-sm font-medium">Drag and drop your receipt here</p>
                      <p className="text-xs text-muted-foreground mt-1">PNG, JPG or PDF up to 10MB</p>
                      <Button variant="link" type="button" className="mt-2 text-primary">Or browse files</Button>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4 border-t">
                    <Button className="w-full h-12 text-base font-semibold gap-2" asChild>
                      <Link href="/pending">
                        Submit Payment Proof
                        <Send className="h-4 w-4" />
                      </Link>
                    </Button>
                    
                    <div className="mt-6 p-4 bg-primary/10 rounded-lg flex items-start gap-3 border border-primary/20">
                      <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">Status note:</span> Your subscription will be activated after admin approval.
                      </p>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-muted-foreground">
          © 2024 Academia LMS. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
