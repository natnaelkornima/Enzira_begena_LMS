import Link from 'next/link';

export function Sidebar() {
  return (
    <nav className="h-screen w-64 fixed left-0 top-0 hidden md:flex flex-col bg-surface-container-lowest shadow-md py-xl px-md space-y-md z-40">
      <div className="mb-xl px-xs">
        <h1 className="font-h3 text-h3 font-bold text-on-surface">Academia LMS</h1>
        <p className="font-label-md text-label-md text-on-surface-variant opacity-70">Portal</p>
      </div>
      <div className="space-y-xs flex-1">
        <Link href="/student" className="flex items-center space-x-sm px-md py-sm text-on-surface font-semibold border-l-4 border-error bg-surface-container-low transition-all duration-200">
          <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
          <span className="font-label-md text-label-md">Dashboard</span>
        </Link>
        <Link href="/courses" className="flex items-center space-x-sm px-md py-sm text-on-surface-variant hover:bg-surface-container-lowest hover:scale-102 transition-all duration-200">
          <span className="material-symbols-outlined" data-icon="school">school</span>
          <span className="font-label-md text-label-md">My Learning</span>
        </Link>
        <Link href="/payment" className="flex items-center space-x-sm px-md py-sm text-on-surface-variant hover:bg-surface-container-lowest hover:scale-102 transition-all duration-200">
          <span className="material-symbols-outlined" data-icon="payments">payments</span>
          <span className="font-label-md text-label-md">Payments</span>
        </Link>
        <Link href="/settings" className="flex items-center space-x-sm px-md py-sm text-on-surface-variant hover:bg-surface-container-lowest hover:scale-102 transition-all duration-200">
          <span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
          <span className="font-label-md text-label-md">Profile</span>
        </Link>
        <Link href="/settings" className="flex items-center space-x-sm px-md py-sm text-on-surface-variant hover:bg-surface-container-lowest hover:scale-102 transition-all duration-200">
          <span className="material-symbols-outlined" data-icon="settings">settings</span>
          <span className="font-label-md text-label-md">Settings</span>
        </Link>
      </div>
      <div className="pt-xl border-t border-outline-variant/30 space-y-xs">
        <div className="px-md mb-md">
          <button className="w-full bg-brand-accent text-on-primary py-sm rounded-lg font-label-md scale-102 active:opacity-80 transition-all">Enroll Now</button>
        </div>
        <Link href="/help" className="flex items-center space-x-sm px-md py-sm text-on-surface-variant hover:text-error transition-colors">
          <span className="material-symbols-outlined" data-icon="help">help</span>
          <span className="font-label-md text-label-md">Help Center</span>
        </Link>
        <Link href="/login" className="flex items-center space-x-sm px-md py-sm text-on-surface-variant hover:text-error transition-colors">
          <span className="material-symbols-outlined" data-icon="logout">logout</span>
          <span className="font-label-md text-label-md">Logout</span>
        </Link>
      </div>
    </nav>
  );
}
