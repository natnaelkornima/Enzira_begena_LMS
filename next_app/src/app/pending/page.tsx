import Link from 'next/link';

export default function PendingApprovalPage() {
  return (
    <div className="bg-surface text-on-surface font-body-md min-h-screen flex flex-col">
      <header className="bg-surface shadow-md docked full-width top-0 z-50">
        <div className="flex justify-between items-center w-full px-lg py-md max-w-container-max mx-auto">
          <div className="font-h3 text-h3 font-bold text-on-surface">Academia LMS</div>
          <nav className="hidden md:flex space-x-lg">
            <Link className="text-on-surface-variant font-medium hover:text-error transition-all duration-200 hover:scale-[1.02]" href="/pricing">Pricing</Link>
            <Link className="text-on-surface-variant font-medium hover:text-error transition-all duration-200 hover:scale-[1.02]" href="/courses">Courses</Link>
            <Link className="text-on-surface-variant font-medium hover:text-error transition-all duration-200 hover:scale-[1.02]" href="/about">About</Link>
            <Link className="text-on-surface-variant font-medium hover:text-error transition-all duration-200 hover:scale-[1.02]" href="/support">Support</Link>
          </nav>
          <div className="flex items-center space-x-sm">
            <button className="px-md py-xs font-label-md text-on-surface-variant hover:text-error transition-all">Login</button>
            <button className="bg-brand-accent text-white px-lg py-xs rounded-lg font-label-md active:scale-[0.98] transition-transform">Get Started</button>
          </div>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center p-md">
        <div className="max-w-xl w-full">
          <div className="bg-surface-container-lowest rounded-2xl shadow-md p-lg text-center flex flex-col items-center space-y-md">
            <div className="w-16 h-16 bg-error-container flex items-center justify-center rounded-full mb-xs">
              <span className="material-symbols-outlined text-error text-[40px]" data-icon="schedule" style={{ fontVariationSettings: "'FILL' 0" }}>schedule</span>
            </div>
            <div className="space-y-xs">
              <h1 className="font-h2 text-h2 text-on-surface">Payment Pending</h1>
              <p className="font-body-lg text-on-surface-variant max-w-md mx-auto">
                Your payment is under review. This usually takes between 2 to 4 hours. We will notify you via email as soon as it's processed.
              </p>
            </div>
            
            <div className="w-full bg-surface-container-low rounded-xl p-md flex items-start space-x-md text-left">
              <span className="material-symbols-outlined text-error mt-1" data-icon="info">info</span>
              <div>
                <p className="font-label-md text-on-surface font-semibold">Transaction ID: #LMS-88294-XP</p>
                <p className="font-label-sm text-on-surface-variant">Course: Advanced Digital Architecture Portfolio Masterclass</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-md w-full pt-md">
              <Link href="/student" className="bg-brand-accent hover:bg-brand-accent-hover text-white flex-1 py-md rounded-xl font-label-md active:scale-[0.98] transition-all flex items-center justify-center space-x-xs">
                <span>Go to Dashboard</span>
                <span className="material-symbols-outlined text-[18px]" data-icon="arrow_forward">arrow_forward</span>
              </Link>
              <button className="border border-outline-variant bg-white text-on-surface hover:bg-surface flex-1 py-md rounded-xl font-label-md active:scale-[0.98] transition-all flex items-center justify-center space-x-xs">
                <span className="material-symbols-outlined text-[18px]" data-icon="support_agent">support_agent</span>
                <span>Contact Support</span>
              </button>
            </div>
            <p className="font-label-sm text-on-surface-variant pt-xs">
              Questions? Check our <Link className="text-error font-semibold hover:underline" href="/support">Help Center</Link>.
            </p>
          </div>

          <div className="mt-lg grid grid-cols-1 md:grid-cols-3 gap-md">
            <div className="bg-surface-container rounded-xl p-md flex items-center space-x-sm">
              <span className="material-symbols-outlined text-on-primary-container" data-icon="lock">lock</span>
              <span className="font-label-sm text-on-surface-variant leading-tight">Secure SSL Encryption</span>
            </div>
            <div className="bg-surface-container rounded-xl p-md flex items-center space-x-sm">
              <span className="material-symbols-outlined text-on-primary-container" data-icon="verified_user">verified_user</span>
              <span className="font-label-sm text-on-surface-variant leading-tight">Verified Academic Partner</span>
            </div>
            <div className="bg-surface-container rounded-xl p-md flex items-center space-x-sm">
              <span className="material-symbols-outlined text-on-primary-container" data-icon="schedule">schedule</span>
              <span className="font-label-sm text-on-surface-variant leading-tight">24/7 Priority Review</span>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-surface-container w-full py-xl mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center px-lg max-w-container-max mx-auto space-y-md md:space-y-0">
          <div className="font-h3 text-h3 font-bold text-on-surface">Academia LMS</div>
          <div className="text-on-surface-variant font-body-md text-center md:text-left">
            © 2024 Academia LMS. Built for Intellectual Rigor.
          </div>
          <div className="flex space-x-lg">
            <Link className="text-on-surface-variant font-medium hover:text-error transition-colors" href="/privacy">Privacy Policy</Link>
            <Link className="text-on-surface-variant font-medium hover:text-error transition-colors" href="/terms">Terms of Service</Link>
            <Link className="text-on-surface-variant font-medium hover:text-error transition-colors" href="/cookies">Cookie Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
