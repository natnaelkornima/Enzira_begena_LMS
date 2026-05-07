import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="w-full max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[921px] md:min-h-screen overflow-hidden">
      {/* Left Side: Abstract Illustration */}
      <section className="hidden md:flex relative overflow-hidden bg-on-surface">
        <div className="absolute inset-0 opacity-80 mix-blend-overlay">
          <img 
            alt="Abstract educational background" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAz-1YJ3oaZoVnj6z4XMm8OB-BvzSLbgO0pO8-3recuYWi4N8MYOu42rO5s3mSlazjoiws5Si5EeOJEPdTI4K-McVAyls9tTwifty_DmQ3EEmfLXvLwpGetFkA4NRGS19QL-m1N3dg9BJyXG83M3tHfKvoEBhUhehThbQGIC3fCpZz3FOcmFUYVO_YGY0biMpl7ycjCjcACAQCWzvKnCu9oBlz04Tsx0a_in7uGLwbT5PA6FaptBQaJoRNE5nKawSRtA74FyPhqK60"
          />
        </div>
        <div className="relative z-10 flex flex-col justify-end p-xl w-full h-full bg-gradient-to-t from-on-surface/90 to-transparent">
          <h1 className="font-h1 text-h1 text-surface-bright mb-sm">Academia LMS</h1>
          <p className="font-body-lg text-body-lg text-surface-variant max-w-md">Elevate your intellectual rigor with a platform designed for the focused student.</p>
        </div>
      </section>

      {/* Right Side: Login Form */}
      <section className="flex items-center justify-center bg-surface-container-lowest p-md md:p-xl">
        <div className="w-full max-w-[440px] flex flex-col">
          {/* Logo & Header */}
          <div className="mb-xl text-center md:text-left">
            <div className="inline-flex items-center gap-xs mb-sm">
              <span className="material-symbols-outlined text-error text-[36px]" data-icon="school">school</span>
              <span className="font-h3 text-h3 font-bold tracking-tight text-on-surface">Academia LMS</span>
            </div>
            <h2 className="font-h2 text-h2 text-on-surface mt-md">Welcome Back</h2>
            <p className="font-body-md text-on-surface-variant mt-xs">Please enter your credentials to access your portal.</p>
          </div>

          {/* Form */}
          <form className="space-y-md">
            <div className="space-y-xs">
              <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="email">Email Address</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-[20px]">mail</span>
                <input 
                  className="w-full pl-12 pr-4 py-3 bg-white border border-outline-variant rounded-xl focus:ring-2 focus:ring-error focus:border-transparent transition-all outline-none text-on-surface font-body-md" 
                  id="email" 
                  placeholder="student@academia.edu" 
                  required 
                  type="email"
                />
              </div>
            </div>
            <div className="space-y-xs">
              <div className="flex justify-between items-center">
                <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="password">Password</label>
                <Link className="font-label-sm text-label-sm text-error hover:underline" href="#">Forgot Password?</Link>
              </div>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-[20px]">lock</span>
                <input 
                  className="w-full pl-12 pr-4 py-3 bg-white border border-outline-variant rounded-xl focus:ring-2 focus:ring-error focus:border-transparent transition-all outline-none text-on-surface font-body-md" 
                  id="password" 
                  placeholder="••••••••" 
                  required 
                  type="password"
                />
              </div>
            </div>
            <Link href="/student" className="flex items-center justify-center w-full bg-error text-on-primary font-label-md py-4 rounded-xl shadow-md transition-all duration-200 scale-102 scale-98 active:opacity-90 font-semibold tracking-wide">
              Login to Portal
            </Link>
          </form>

          {/* Divider */}
          <div className="relative my-xl">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-outline-variant"></div>
            </div>
            <div className="relative flex justify-center text-label-sm">
              <span className="bg-surface-container-lowest px-4 text-on-surface-variant uppercase tracking-widest">or continue with</span>
            </div>
          </div>

          {/* Social Login */}
          <button className="w-full flex items-center justify-center gap-sm bg-white border border-outline-variant py-3.5 rounded-xl font-label-md text-on-surface-variant hover:bg-surface-container-low transition-colors duration-200 shadow-sm">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335"></path>
            </svg>
            Google Account
          </button>

          {/* Footer Link */}
          <p className="mt-xl text-center font-body-md text-on-surface-variant">
            New to the institution? 
            <Link className="text-error font-semibold hover:underline ml-1" href="/signup">Sign Up</Link>
          </p>
        </div>
      </section>

      {/* Background Decoration for Desktop */}
      <div className="fixed top-0 right-0 w-[50%] h-full bg-surface-container-lowest -z-10 hidden md:block"></div>
      <div className="fixed top-0 left-0 w-[50%] h-full bg-on-surface -z-10 hidden md:block"></div>
    </main>
  );
}
