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


      <main className="flex-grow pt-8 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <BackButton />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Instructional Side Column */}
            <div className="md:col-span-5 flex flex-col space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold tracking-tight">Payment Verification</CardTitle>
                <CardDescription className="text-sm mt-2">
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

            <div className="relative h-48 md:h-64 rounded-xl overflow-hidden shadow-sm border hidden md:flex items-center justify-center bg-gradient-to-br from-primary/10 to-transparent p-6">
                <p className="text-muted-foreground text-sm italic font-medium text-center">"Education is the most powerful weapon which you can use to change the world."</p>
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

    </div>
  );
}
