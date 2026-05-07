export function AdminTopAppBar() {
  return (
    <header className="sticky top-0 z-40 bg-surface shadow-md flex justify-between items-center px-gutter w-full h-16">
      <div className="flex items-center">
        <h2 className="font-h3 text-h3 font-bold text-brand-accent">LMS Admin</h2>
      </div>
      <div className="flex items-center gap-gutter">
        <div className="relative hidden md:block">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
          <input className="pl-10 pr-4 py-2 bg-background border-none rounded-full w-64 focus:ring-2 focus:ring-brand-accent font-label-md" placeholder="Search records..." type="text"/>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-on-surface-variant hover:text-brand-accent transition-colors">
            <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
          </button>
          <button className="text-on-surface-variant hover:text-brand-accent transition-colors">
            <span className="material-symbols-outlined" data-icon="help">help</span>
          </button>
          <div className="h-10 w-10 rounded-full bg-surface-container-highest overflow-hidden border border-outline-variant">
            <img 
              alt="Administrator Avatar" 
              className="h-full w-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVI9N9K17nb55YuFSBsNerSldpqYJ7Afrt-YCYP8f8kQRYHs3Gv5_deCAVf-Nxcmd3iAQETgERrUF23VDtmc8q3zH0UVnIl90Xyq5iGOyp985IxgUWeky3rIcPpG-C6pUmsvMctRC7GeAdr0uT_g4AVm55l8d9AfACZ7fhF_kEaeFR790SKGsPNMjF0moQV5Ue51SciG1BgwN4BInsmZNSqYmA6vKj_3s6gif_Qf2q1hYRNdhuUgJSVJa-gA9DihW9Ve1gVDyoY2M"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
