import Link from 'next/link';

export default function SignUpPage() {
  return (
    <>
      <main className="min-h-[calc(100vh-100px)] flex items-center justify-center p-sm md:p-lg">
        <div className="flex flex-col md:flex-row w-full max-w-container-max bg-surface-container-lowest rounded-2xl overflow-hidden shadow-md">
          {/* Left Side: Abstract Illustration */}
          <div className="hidden md:flex md:w-1/2 relative bg-surface-container-high overflow-hidden min-h-[600px]">
            <div className="absolute inset-0 z-0">
              <img 
                className="w-full h-full object-cover" 
                alt="Abstract education digital art piece"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0lfOFRgf00WTAvBrwdPBPsHdgpisDAe2AfF5XQktzc9a4rED_AuU5ARIEpHnJRIs53jOAq1Qn2n84wCnv2jmhlJ7W2rusnmmXpflSoovva6ZCaYfzVsyUKEQuMqnLmeMItobbfvYenerf1K7ppfhiRGmYzfv26Av87YIUcASDhzBJmXJP6cpOfyY7bifioxqQ4NTedX-2fn5wHWxbWycUU79sn3dmTb87PKQKJvIUkAeEEbxAgxzMg7eLqCW_67cR8iCsuuf9qyA"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/40 to-transparent z-10"></div>
            <div className="relative z-20 p-xl flex flex-col justify-end text-surface-bright">
              <h2 className="font-h2 text-h2 mb-sm">Elevate Your Mind.</h2>
              <p className="font-body-lg text-body-lg opacity-90 max-w-md">Join a community of scholars and professionals dedicated to intellectual rigor and digital excellence.</p>
            </div>
          </div>

          {/* Right Side: Sign Up Form */}
          <div className="w-full md:w-1/2 p-md md:p-xl flex flex-col justify-center">
            {/* Brand Header */}
            <div className="mb-lg">
              <div className="flex items-center gap-xs mb-sm">
                <span className="material-symbols-outlined text-brand-accent" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
                <span className="font-h3 text-h3 font-bold tracking-tight text-on-surface">Academia LMS</span>
              </div>
              <h1 className="font-h2 text-h2 text-on-surface mb-xs">Create Account</h1>
              <p className="font-body-md text-on-surface-variant">Start your learning journey with us today.</p>
            </div>

            {/* Form Fields */}
            <form className="space-y-md">
              <div className="grid grid-cols-1 gap-md">
                {/* Full Name */}
                <div className="flex flex-col gap-xs">
                  <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="full_name">Full Name</label>
                  <input className="w-full p-sm bg-surface-container-lowest border border-outline-variant rounded-lg font-body-md focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all duration-200" id="full_name" placeholder="John Doe" type="text"/>
                </div>
                {/* Email */}
                <div className="flex flex-col gap-xs">
                  <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="email">Email Address</label>
                  <input className="w-full p-sm bg-surface-container-lowest border border-outline-variant rounded-lg font-body-md focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all duration-200" id="email" placeholder="name@university.edu" type="email"/>
                </div>
                {/* Password */}
                <div className="flex flex-col gap-xs">
                  <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="password">Password</label>
                  <div className="relative">
                    <input className="w-full p-sm bg-surface-container-lowest border border-outline-variant rounded-lg font-body-md focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all duration-200" id="password" placeholder="••••••••" type="password"/>
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant cursor-pointer">visibility</span>
                  </div>
                </div>
                {/* Confirm Password */}
                <div className="flex flex-col gap-xs">
                  <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="confirm_password">Confirm Password</label>
                  <input className="w-full p-sm bg-surface-container-lowest border border-outline-variant rounded-lg font-body-md focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all duration-200" id="confirm_password" placeholder="••••••••" type="password"/>
                </div>
              </div>

              {/* Terms & Conditions */}
              <div className="flex items-start gap-sm mt-sm">
                <div className="flex items-center h-5">
                  <input className="w-4 h-4 text-brand-accent border-outline-variant rounded focus:ring-brand-accent cursor-pointer" id="terms" type="checkbox"/>
                </div>
                <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="terms">
                  I agree to the <Link className="text-brand-accent font-semibold hover:underline" href="#">Terms of Service</Link> and <Link className="text-brand-accent font-semibold hover:underline" href="#">Privacy Policy</Link>.
                </label>
              </div>

              {/* CTA Button */}
              <div className="pt-md">
                <Link href="/login" className="flex items-center justify-center w-full bg-brand-accent text-on-primary font-label-md py-sm rounded-lg shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-widest font-bold">
                  Create Account
                </Link>
              </div>
            </form>

            {/* Footer Link */}
            <div className="mt-lg text-center">
              <p className="font-body-md text-on-surface-variant">
                Already have an account? 
                <Link className="text-brand-accent font-bold hover:underline transition-all ml-1" href="/login">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Global Footer */}
      <footer className="w-full py-xl bg-surface-container">
        <div className="flex flex-col md:flex-row justify-between items-center px-lg max-w-container-max mx-auto gap-md">
          <div className="flex items-center gap-xs">
            <span className="material-symbols-outlined text-brand-accent">school</span>
            <span className="font-h3 text-h3 font-bold text-on-surface">Academia LMS</span>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant">© 2024 Academia LMS. Built for Intellectual Rigor.</p>
          <div className="flex gap-md">
            <Link className="font-body-md text-on-surface-variant hover:text-error transition-colors" href="#">Privacy Policy</Link>
            <Link className="font-body-md text-on-surface-variant hover:text-error transition-colors" href="#">Terms of Service</Link>
            <Link className="font-body-md text-on-surface-variant hover:text-error transition-colors" href="#">Cookie Policy</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
