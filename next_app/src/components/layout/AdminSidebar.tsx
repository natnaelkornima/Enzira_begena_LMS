import Link from 'next/link';

export function AdminSidebar() {
  return (
    <aside className="h-screen w-64 fixed left-0 top-0 rounded-r-2xl bg-surface shadow-md flex flex-col py-lg px-xs gap-y-xs z-50">
      <div className="px-md mb-lg">
        <h1 className="font-h3 text-h3 font-bold text-brand-accent">Admin Portal</h1>
        <p className="font-label-md text-on-surface-variant">Academic Precision</p>
      </div>
      <nav className="flex-grow space-y-1">
        <Link href="/admin" className="flex items-center gap-x-3 text-brand-accent font-semibold bg-surface-container-high rounded-xl px-4 py-3 transition-all duration-200 scale-102">
          <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
          <span className="font-label-md">Dashboard</span>
        </Link>
        <Link href="/admin/users" className="flex items-center gap-x-3 text-on-surface-variant font-medium px-4 py-3 hover:bg-surface-container-low transition-colors duration-200">
          <span className="material-symbols-outlined" data-icon="group">group</span>
          <span className="font-label-md">Users</span>
        </Link>
        <Link href="/admin/courses" className="flex items-center gap-x-3 text-on-surface-variant font-medium px-4 py-3 hover:bg-surface-container-low transition-colors duration-200">
          <span className="material-symbols-outlined" data-icon="school">school</span>
          <span className="font-label-md">Courses</span>
        </Link>
        <Link href="/admin/subscriptions" className="flex items-center gap-x-3 text-on-surface-variant font-medium px-4 py-3 hover:bg-surface-container-low transition-colors duration-200">
          <span className="material-symbols-outlined" data-icon="assignment">assignment</span>
          <span className="font-label-md">Submissions</span>
        </Link>
        <Link href="/settings" className="flex items-center gap-x-3 text-on-surface-variant font-medium px-4 py-3 hover:bg-surface-container-low transition-colors duration-200">
          <span className="material-symbols-outlined" data-icon="settings">settings</span>
          <span className="font-label-md">Settings</span>
        </Link>
      </nav>
      <div className="mt-auto px-xs">
        <button className="w-full bg-brand-accent text-white py-3 rounded-xl font-label-md hover:scale-102 hover:bg-brand-accent-hover transition-all duration-200 flex items-center justify-center gap-2">
          <span className="material-symbols-outlined" data-icon="add">add</span>
          Create Course
        </button>
      </div>
    </aside>
  );
}
