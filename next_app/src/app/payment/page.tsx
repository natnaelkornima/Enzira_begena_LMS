import Link from 'next/link';

export default function SubmitPaymentPage() {
  return (
    <div className="bg-background text-on-surface font-body-md min-h-screen flex flex-col">
      {/* TopAppBar */}
      <header className="bg-surface shadow-md fixed top-0 w-full z-50">
        <div className="flex justify-between items-center w-full px-lg py-md max-w-container-max mx-auto">
          <div className="font-h3 text-h3 font-bold tracking-tight text-on-surface">Academia LMS</div>
          <nav className="hidden md:flex space-x-lg">
            <Link className="text-on-surface-variant font-medium hover:text-error transition-all duration-200" href="/pricing">Pricing</Link>
            <Link className="text-on-surface-variant font-medium hover:text-error transition-all duration-200" href="/courses">Courses</Link>
            <Link className="text-on-surface-variant font-medium hover:text-error transition-all duration-200" href="/about">About</Link>
            <Link className="text-on-surface-variant font-medium hover:text-error transition-all duration-200" href="/support">Support</Link>
          </nav>
          <div className="flex items-center space-x-md">
            <button className="text-on-surface-variant font-medium hover:text-error transition-all duration-200">Login</button>
            <button className="bg-brand-accent text-on-primary px-lg py-sm rounded-full font-semibold hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-md">Get Started</button>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-[100px] pb-xl">
        <div className="max-w-[1000px] mx-auto px-gutter grid grid-cols-1 md:grid-cols-12 gap-xl">
          {/* Instructional Side Column */}
          <div className="md:col-span-4 flex flex-col space-y-md">
            <div className="bg-surface-container-lowest p-lg rounded-2xl shadow-md border border-outline-variant/10">
              <h1 className="font-h2 text-h2 mb-md text-on-surface">Payment Verification</h1>
              <p className="text-on-surface-variant mb-lg font-body-md">Complete your enrollment by submitting your transaction details. Our academic administrators verify all manual transfers within 24 hours.</p>
              
              <div className="space-y-md">
                <div className="flex items-start gap-sm">
                  <span className="material-symbols-outlined text-brand-accent" data-icon="verified_user">verified_user</span>
                  <div>
                    <p className="font-label-md text-on-surface">Secure Processing</p>
                    <p className="text-label-sm text-on-surface-variant">Encrypted document handling for all ID submissions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-sm">
                  <span className="material-symbols-outlined text-brand-accent" data-icon="schedule">schedule</span>
                  <div>
                    <p className="font-label-md text-on-surface">Manual Review</p>
                    <p className="text-label-sm text-on-surface-variant">Approvals typically processed during business hours.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-64 rounded-2xl overflow-hidden shadow-md">
              <img 
                alt="Workspace" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvU-OsDHucqOyvFyMJ2JHqKDd-SOhrMY5_DrzDp41nzwTAmf146tM6M6tmQzjHMUp1iE6oMo1pY_aoJ8cM6koxos9w_9V2upn2tpOTg1gY-1tcSfaopORwt44BopenJO37mXUwRLDd10QTXfiqivO_rX3a_zHOjfE7--0RQ8j3mVcFzPWTZ4IaEJEQuFlgCeyBIJCNe39G9KY8sG0Uld6Ib4mJq1pGUMN-GvjrKdGadVGBMG5OMHPf6f3UI3GcfpIULXXYl7txkh8"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 to-transparent flex items-end p-md">
                <p className="text-white font-label-md italic">"Education is the most powerful weapon which you can use to change the world."</p>
              </div>
            </div>
          </div>

          {/* Payment Form Column */}
          <div className="md:col-span-8">
            <div className="bg-surface-container-lowest p-lg md:p-xl rounded-2xl shadow-md space-y-lg">
              <form className="space-y-lg">
                {/* Text Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                  <div className="flex flex-col space-y-xs">
                    <label className="font-label-md text-on-surface px-xs">Full Name</label>
                    <input className="w-full bg-white border-outline-variant rounded-lg p-md focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all" placeholder="Enter your full name" type="text"/>
                  </div>
                  <div className="flex flex-col space-y-xs">
                    <label className="font-label-md text-on-surface px-xs">Email Address</label>
                    <input className="w-full bg-white border-outline-variant rounded-lg p-md focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all" placeholder="name@university.edu" type="email"/>
                  </div>
                </div>

                <div className="flex flex-col space-y-xs">
                  <label className="font-label-md text-on-surface px-xs">Transaction ID/Reference</label>
                  <input className="w-full bg-white border-outline-variant rounded-lg p-md focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all" placeholder="TXN-98234-X" type="text"/>
                </div>

                {/* Drag & Drop Zone */}
                <div className="flex flex-col space-y-xs">
                  <label className="font-label-md text-on-surface px-xs">Payment Screenshot</label>
                  <div className="border-2 border-dashed border-outline-variant rounded-2xl p-xl flex flex-col items-center justify-center bg-surface-container-low/30 hover:bg-surface-container-low transition-colors cursor-pointer group">
                    <span className="material-symbols-outlined text-[48px] text-on-surface-variant group-hover:text-brand-accent transition-colors mb-md" data-icon="cloud_upload">cloud_upload</span>
                    <p className="font-label-md text-on-surface">Drag and drop your receipt here</p>
                    <p className="text-label-sm text-on-surface-variant mt-xs">PNG, JPG or PDF up to 10MB</p>
                    <button className="mt-md text-brand-accent font-semibold hover:underline" type="button">Or browse files</button>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-md border-t border-outline-variant/20">
                  <Link href="/pending" className="w-full bg-brand-accent text-on-primary font-h3 text-h3 py-md rounded-xl shadow-md hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-md transition-transform">
                    <span>Submit Payment Proof</span>
                    <span className="material-symbols-outlined" data-icon="send">send</span>
                  </Link>
                  <div className="mt-lg p-md bg-brand-accent/10 rounded-lg flex items-center gap-md">
                    <span className="material-symbols-outlined text-brand-accent" data-icon="info" style={{ fontVariationSettings: "'FILL' 1" }}>info</span>
                    <p className="text-label-md text-on-surface-variant">
                      <span className="font-semibold text-on-surface">Status note:</span> Your subscription will be activated after admin approval
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container w-full py-xl mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center px-lg max-w-container-max mx-auto space-y-md md:space-y-0">
          <div className="font-h3 text-h3 font-bold text-on-surface">Academia LMS</div>
          <p className="text-body-md text-on-surface-variant">© 2024 Academia LMS. Built for Intellectual Rigor.</p>
          <div className="flex gap-lg">
            <Link className="text-on-surface-variant font-body-md hover:text-error transition-colors" href="/privacy">Privacy Policy</Link>
            <Link className="text-on-surface-variant font-body-md hover:text-error transition-colors" href="/terms">Terms of Service</Link>
            <Link className="text-on-surface-variant font-body-md hover:text-error transition-colors" href="/cookies">Cookie Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
