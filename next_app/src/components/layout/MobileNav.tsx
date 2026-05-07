import Link from 'next/link';

export function MobileNav() {
  return (
    <>
      {/* TopAppBar (Mobile Only/Global Brand) */}
      <header className="md:hidden flex justify-between items-center w-full px-lg py-md bg-surface shadow-md sticky top-0 z-50">
        <span className="font-h3 text-h3 font-bold text-on-surface">Academia LMS</span>
        <button className="material-symbols-outlined text-on-surface">menu</button>
      </header>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-surface shadow-[0_-4px_12px_rgba(0,0,0,0.05)] px-md py-sm flex justify-around items-center z-50">
        <Link href="/student" className="flex flex-col items-center text-error">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
          <span className="text-[10px] font-bold mt-1">Home</span>
        </Link>
        <Link href="/courses" className="flex flex-col items-center text-on-surface-variant">
          <span className="material-symbols-outlined">school</span>
          <span className="text-[10px] font-medium mt-1">Learning</span>
        </Link>
        <Link href="/settings" className="flex flex-col items-center text-on-surface-variant">
          <span className="material-symbols-outlined">account_circle</span>
          <span className="text-[10px] font-medium mt-1">Profile</span>
        </Link>
        <Link href="/settings" className="flex flex-col items-center text-on-surface-variant">
          <span className="material-symbols-outlined">settings</span>
          <span className="text-[10px] font-medium mt-1">Settings</span>
        </Link>
      </nav>
    </>
  );
}
