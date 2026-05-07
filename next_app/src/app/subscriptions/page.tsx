import Link from 'next/link';

export default function SubscriptionsPage() {
  return (
    <div className="bg-surface font-body-md text-on-surface min-h-screen">
      {/* Top Navigation Bar */}
      <header className="bg-surface shadow-md fixed w-full top-0 z-50">
        <div className="flex justify-between items-center w-full px-lg py-md max-w-container-max mx-auto">
          <div className="font-h3 text-h3 font-bold text-on-surface">Academia LMS</div>
          <nav className="hidden md:flex items-center space-x-lg">
            <Link className="text-on-surface font-semibold border-b-2 border-error hover:text-error transition-all duration-200" href="/pricing">Pricing</Link>
            <Link className="text-on-surface-variant font-medium hover:text-error transition-all duration-200" href="/courses">Courses</Link>
            <Link className="text-on-surface-variant font-medium hover:text-error transition-all duration-200" href="/about">About</Link>
            <Link className="text-on-surface-variant font-medium hover:text-error transition-all duration-200" href="/support">Support</Link>
          </nav>
          <div className="flex items-center space-x-md">
            <button className="text-on-surface font-semibold hover:text-error">Login</button>
            <button className="bg-brand-accent text-on-primary px-lg py-sm rounded-lg font-semibold hover:scale-[1.02] transition-all duration-200 active:scale-[0.98]">Get Started</button>
          </div>
        </div>
      </header>

      <main className="max-w-container-max mx-auto px-lg pt-[120px] pb-xl">
        {/* Hero Section */}
        <div className="text-center mb-xl">
          <h1 className="font-h1 text-h1 text-on-surface mb-sm">Elevate Your Intellectual Journey</h1>
          <p className="text-on-surface-variant font-body-lg max-w-2xl mx-auto">Choose a plan that matches your academic rigor. From individual learners to global institutions, we provide the tools for mastery.</p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter items-stretch">
          {/* Basic Plan */}
          <div className="bg-surface-container-lowest rounded-2xl shadow-md p-lg flex flex-col transition-all duration-200 hover:shadow-lg border border-outline-variant/10">
            <div className="mb-lg">
              <span className="text-brand-accent font-label-sm uppercase tracking-widest bg-brand-accent/5 px-sm py-xs rounded-full">Foundation</span>
              <h3 className="font-h2 text-h2 mt-sm">Basic</h3>
              <div className="mt-md flex items-baseline">
                <span className="text-h1 font-h1">$29</span>
                <span className="text-on-surface-variant font-body-md ml-xs">/month</span>
              </div>
              <p className="text-on-surface-variant mt-md">Essential tools for individual students starting their academic pursuit.</p>
            </div>
            <ul className="space-y-md mb-xl flex-grow">
              <li className="flex items-center gap-sm">
                <span className="material-symbols-outlined text-brand-accent" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="text-on-surface font-body-md">Access to 5 Core Courses</span>
              </li>
              <li className="flex items-center gap-sm">
                <span className="material-symbols-outlined text-brand-accent" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="text-on-surface font-body-md">Personal Study Dashboard</span>
              </li>
              <li className="flex items-center gap-sm">
                <span className="material-symbols-outlined text-brand-accent" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="text-on-surface font-body-md">Community Forum Access</span>
              </li>
              <li className="flex items-center gap-sm opacity-40">
                <span className="material-symbols-outlined">cancel</span>
                <span className="text-on-surface font-body-md line-through">Advanced Certification</span>
              </li>
            </ul>
            <Link href="/payment" className="block text-center w-full bg-brand-accent text-on-primary py-md rounded-xl font-bold hover:scale-[1.02] transition-all duration-200 active:scale-[0.98]">Subscribe Now</Link>
          </div>

          {/* Pro Plan */}
          <div className="bg-surface-container-lowest rounded-2xl shadow-md p-lg flex flex-col transition-all duration-200 hover:shadow-xl border-2 border-brand-accent relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-accent text-on-primary px-md py-1 rounded-full font-label-sm uppercase tracking-wider">Most Popular</div>
            <div className="mb-lg">
              <span className="text-brand-accent font-label-sm uppercase tracking-widest bg-brand-accent/5 px-sm py-xs rounded-full">Excellence</span>
              <h3 className="font-h2 text-h2 mt-sm">Pro</h3>
              <div className="mt-md flex items-baseline">
                <span className="text-h1 font-h1">$79</span>
                <span className="text-on-surface-variant font-body-md ml-xs">/month</span>
              </div>
              <p className="text-on-surface-variant mt-md">Comprehensive resources for dedicated researchers and lifelong learners.</p>
            </div>
            <ul className="space-y-md mb-xl flex-grow">
              <li className="flex items-center gap-sm">
                <span className="material-symbols-outlined text-brand-accent" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="text-on-surface font-body-md">Unlimited Course Access</span>
              </li>
              <li className="flex items-center gap-sm">
                <span className="material-symbols-outlined text-brand-accent" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="text-on-surface font-body-md">Priority Mentor Support</span>
              </li>
              <li className="flex items-center gap-sm">
                <span className="material-symbols-outlined text-brand-accent" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="text-on-surface font-body-md">Advanced PDF Resources</span>
              </li>
              <li className="flex items-center gap-sm">
                <span className="material-symbols-outlined text-brand-accent" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="text-on-surface font-body-md">Professional Certifications</span>
              </li>
              <li className="flex items-center gap-sm">
                <span className="material-symbols-outlined text-brand-accent" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="text-on-surface font-body-md">Offline Learning Mode</span>
              </li>
            </ul>
            <Link href="/payment" className="block text-center w-full bg-brand-accent text-on-primary py-md rounded-xl font-bold hover:scale-[1.02] transition-all duration-200 active:scale-[0.98]">Subscribe Now</Link>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-surface-container-lowest rounded-2xl shadow-md p-lg flex flex-col transition-all duration-200 hover:shadow-lg border border-outline-variant/10">
            <div className="mb-lg">
              <span className="text-brand-accent font-label-sm uppercase tracking-widest bg-brand-accent/5 px-sm py-xs rounded-full">Authority</span>
              <h3 className="font-h2 text-h2 mt-sm">Enterprise</h3>
              <div className="mt-md flex items-baseline">
                <span className="text-h1 font-h1">$199</span>
                <span className="text-on-surface-variant font-body-md ml-xs">/month</span>
              </div>
              <p className="text-on-surface-variant mt-md">Scalable solutions for universities and corporate training departments.</p>
            </div>
            <ul className="space-y-md mb-xl flex-grow">
              <li className="flex items-center gap-sm">
                <span className="material-symbols-outlined text-brand-accent" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="text-on-surface font-body-md">Custom Learning Paths</span>
              </li>
              <li className="flex items-center gap-sm">
                <span className="material-symbols-outlined text-brand-accent" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="text-on-surface font-body-md">Advanced Admin Dashboard</span>
              </li>
              <li className="flex items-center gap-sm">
                <span className="material-symbols-outlined text-brand-accent" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="text-on-surface font-body-md">API Access &amp; Integrations</span>
              </li>
              <li className="flex items-center gap-sm">
                <span className="material-symbols-outlined text-brand-accent" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="text-on-surface font-body-md">Dedicated Success Manager</span>
              </li>
            </ul>
            <Link href="/payment" className="block text-center w-full bg-brand-accent text-on-primary py-md rounded-xl font-bold hover:scale-[1.02] transition-all duration-200 active:scale-[0.98]">Subscribe Now</Link>
          </div>
        </div>

        {/* Visual Anchor Section */}
        <div className="mt-xl rounded-2xl overflow-hidden relative h-[400px] flex items-center p-lg">
          <img 
            alt="Academic Workspace" 
            className="absolute inset-0 w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEF5NIYylwg70UYV13CbHT3PsS-hYfc26Y1N4uzurGmAfweNI6-pAFXXxfTv0BSC8KDQoteXVQWH5AvWZ8zcEWcr_SS2KSY4BRva11Fw8_Frpl0K2TVgKFeH7nb6OYfHPq3XOmFwIeLdeLwbooFDZPEWblzBQ3G_SEPAXNv0X6Rsl-6riDxVGCuIKVr58J1-Zml_DhLyqukmFxoYEQxjer1hPRlGzeFt05fPQ4uhmJ9ya-vI6jUx7CafaTlqRrnGZ-_BL5Faawamc"
          />
          <div className="relative z-10 max-w-xl bg-surface-container-lowest/90 backdrop-blur-md p-lg rounded-xl shadow-md">
            <h2 className="font-h2 text-h2 mb-sm">Uncompromising Quality</h2>
            <p className="text-on-surface-variant font-body-md">Join over 50,000 intellectuals who have transformed their careers through our rigorous academic ecosystem. Our platform is designed for those who demand more from their digital education.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container w-full py-xl mt-xl">
        <div className="flex flex-col md:flex-row justify-between items-center px-lg max-w-container-max mx-auto">
          <div className="mb-md md:mb-0">
            <div className="font-h3 text-h3 font-bold text-on-surface">Academia LMS</div>
            <p className="text-on-surface-variant font-label-sm mt-xs">© 2024 Academia LMS. Built for Intellectual Rigor.</p>
          </div>
          <div className="flex space-x-lg">
            <Link className="text-on-surface-variant hover:text-error transition-colors font-body-md" href="/privacy">Privacy Policy</Link>
            <Link className="text-on-surface-variant hover:text-error transition-colors font-body-md" href="/terms">Terms of Service</Link>
            <Link className="text-on-surface-variant hover:text-error transition-colors font-body-md" href="/cookies">Cookie Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
