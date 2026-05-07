export default function SettingsPage() {
  return (
    <div className="p-lg max-w-5xl mx-auto">
      <header className="mb-xl">
        <h2 className="font-h2 text-h2 text-on-surface">Account Settings</h2>
        <p className="text-on-surface-variant mt-xs">Manage your personal information, subscription, and security preferences.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg">
        {/* Profile Section */}
        <section className="lg:col-span-7 space-y-lg">
          <div className="bg-surface-container-lowest rounded-2xl shadow-md p-md border border-outline-variant/10">
            <h3 className="font-h3 text-h3 mb-md">Personal Profile</h3>
            {/* Avatar Upload */}
            <div className="flex items-center gap-md mb-lg">
              <div className="relative group">
                <img 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover border-2 border-outline-variant/30 group-hover:opacity-80 transition-opacity cursor-pointer" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBA7EdsA1RBw-3xsF257S-i931n0d1vh82ELtPPn5rKWLXgHgeirENS02j26dCShharU9x6s1PvRYmFgFy05JiT0kf1aSFZJAGXva0Y1F0XZRsfQVvm8SO7O3CLqzy6fwnLUDExyA6OphMzc5crnTqVGekNeA7roa5TH54_QK4KsRH7u975N82uiYkBfM-G1qmunzt5-YC2p8z04ROX03gmfjn9oaZCgx4UVthIuAyS78sJHm0SD2UASSJFDt3uGUtNxytbQQXvGjg"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <span className="material-symbols-outlined text-white">photo_camera</span>
                </div>
              </div>
              <div>
                <button className="bg-brand-accent hover:bg-brand-accent-hover text-white px-md py-xs rounded-lg font-label-md transition-transform hover:scale-[1.02] active:scale-[0.98]">
                  Change Avatar
                </button>
                <p className="text-label-sm text-on-surface-variant mt-xs">JPG, GIF or PNG. Max size of 800K</p>
              </div>
            </div>

            {/* Profile Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
              <div className="space-y-xs">
                <label className="font-label-md text-on-surface">Full Name</label>
                <input className="w-full bg-background border border-outline-variant rounded-lg px-md py-sm focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none" type="text" defaultValue="Alexander Sterling"/>
              </div>
              <div className="space-y-xs">
                <label className="font-label-md text-on-surface">Email Address</label>
                <input className="w-full bg-background border border-outline-variant rounded-lg px-md py-sm focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none" type="email" defaultValue="alex.sterling@academia.edu"/>
              </div>
              <div className="md:col-span-2 pt-md">
                <button className="bg-brand-accent hover:bg-brand-accent-hover text-white px-lg py-md rounded-lg font-label-md transition-transform hover:scale-[1.02] w-full md:w-auto">
                  Save Personal Changes
                </button>
              </div>
            </div>
          </div>

          {/* Security Section */}
          <div className="bg-surface-container-lowest rounded-2xl shadow-md p-md border border-outline-variant/10">
            <h3 className="font-h3 text-h3 mb-md">Security</h3>
            <div className="space-y-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                <div className="space-y-xs">
                  <label className="font-label-md text-on-surface">Current Password</label>
                  <input className="w-full bg-background border border-outline-variant rounded-lg px-md py-sm focus:ring-2 focus:ring-brand-accent outline-none" placeholder="••••••••" type="password"/>
                </div>
                <div></div> {/* Spacer */}
                <div className="space-y-xs">
                  <label className="font-label-md text-on-surface">New Password</label>
                  <input className="w-full bg-background border border-outline-variant rounded-lg px-md py-sm focus:ring-2 focus:ring-brand-accent outline-none" placeholder="Min 8 characters" type="password"/>
                </div>
                <div className="space-y-xs">
                  <label className="font-label-md text-on-surface">Confirm New Password</label>
                  <input className="w-full bg-background border border-outline-variant rounded-lg px-md py-sm focus:ring-2 focus:ring-brand-accent outline-none" placeholder="••••••••" type="password"/>
                </div>
              </div>
              <div className="pt-md">
                <button className="border-2 border-brand-accent text-brand-accent hover:bg-brand-accent/5 px-lg py-md rounded-lg font-label-md transition-all hover:scale-[1.02] w-full md:w-auto">
                  Update Password
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Sidebar Column: Subscription & Billing */}
        <aside className="lg:col-span-5 space-y-lg">
          {/* Subscription Status Card */}
          <div className="bg-surface-container-lowest rounded-2xl shadow-md p-md border border-outline-variant/10 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-accent/5 rounded-full -mr-12 -mt-12"></div>
            <div className="flex justify-between items-start mb-lg relative z-10">
              <div>
                <p className="text-label-sm text-on-surface-variant uppercase tracking-wider">Current Plan</p>
                <h3 className="font-h3 text-h3 text-brand-accent mt-xs">Premium Academic</h3>
              </div>
              <span className="bg-brand-accent/10 text-brand-accent px-sm py-xs rounded-full font-label-sm flex items-center gap-xs">
                <span className="w-2 h-2 rounded-full bg-brand-accent"></span>
                Active
              </span>
            </div>
            <div className="space-y-md mb-lg">
              <div className="flex justify-between text-body-md">
                <span className="text-on-surface-variant">Billing Cycle</span>
                <span className="font-semibold">Annual</span>
              </div>
              <div className="flex justify-between text-body-md">
                <span className="text-on-surface-variant">Next Payment</span>
                <span className="font-semibold">Sept 12, 2024</span>
              </div>
              <div className="flex justify-between text-body-md">
                <span className="text-on-surface-variant">Amount</span>
                <span className="font-semibold">$249.00</span>
              </div>
            </div>
            <div className="w-full bg-surface-container-low h-2 rounded-full overflow-hidden mb-lg">
              <div className="bg-brand-accent h-full w-3/4 rounded-full"></div>
            </div>
            <button className="w-full bg-on-surface text-surface py-md rounded-xl font-label-md hover:opacity-90 transition-opacity">
              Manage Subscription
            </button>
          </div>

          {/* Billing History */}
          <div className="bg-surface-container-lowest rounded-2xl shadow-md p-md border border-outline-variant/10">
            <div className="flex items-center justify-between mb-md">
              <h3 className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant">Billing History</h3>
              <button className="text-brand-accent font-label-md hover:underline">View All</button>
            </div>
            <div className="divide-y divide-outline-variant/20">
              {/* Row 1 */}
              <div className="py-md flex items-center justify-between">
                <div>
                  <p className="font-semibold text-on-surface">Invoice #INV-2024-001</p>
                  <p className="text-label-sm text-on-surface-variant">Aug 12, 2024</p>
                </div>
                <div className="flex items-center gap-md">
                  <span className="font-semibold">$249.00</span>
                  <button className="material-symbols-outlined text-on-surface-variant hover:text-brand-accent transition-colors">download</button>
                </div>
              </div>
              {/* Row 2 */}
              <div className="py-md flex items-center justify-between">
                <div>
                  <p className="font-semibold text-on-surface">Invoice #INV-2023-001</p>
                  <p className="text-label-sm text-on-surface-variant">Aug 12, 2023</p>
                </div>
                <div className="flex items-center gap-md">
                  <span className="font-semibold">$249.00</span>
                  <button className="material-symbols-outlined text-on-surface-variant hover:text-brand-accent transition-colors">download</button>
                </div>
              </div>
              {/* Pending Row */}
              <div className="py-md flex items-center justify-between opacity-60">
                <div>
                  <p className="font-semibold text-on-surface">Invoice #INV-2023-000</p>
                  <p className="text-label-sm text-on-surface-variant">Jul 01, 2023</p>
                </div>
                <div className="flex items-center gap-md">
                  <span className="bg-surface-container-high text-on-surface-variant px-sm py-1 rounded text-label-sm">Refunded</span>
                  <span className="font-semibold">$20.00</span>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
