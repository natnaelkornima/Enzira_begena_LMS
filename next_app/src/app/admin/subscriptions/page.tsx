export default function AdminSubscriptionsPage() {
  return (
    <div className="p-gutter lg:p-xl space-y-gutter">
      {/* Page Header & Filters */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-md">
        <div className="space-y-1">
          <h3 className="font-h2 text-h2 text-on-surface">Subscription Approvals</h3>
          <p className="font-body-md text-on-surface-variant">Manage and verify manual payment submissions for student enrollments.</p>
        </div>
        <div className="flex flex-wrap items-center gap-sm">
          <div className="flex items-center bg-surface border border-outline-variant rounded-lg px-3 py-2 text-label-md">
            <span className="material-symbols-outlined mr-2 text-sm" data-icon="filter_list">filter_list</span>
            <select className="bg-transparent border-none p-0 focus:ring-0 text-label-md outline-none">
              <option>Status: Pending</option>
              <option>Status: Approved</option>
              <option>Status: Rejected</option>
            </select>
          </div>
          <div className="flex items-center bg-surface border border-outline-variant rounded-lg px-3 py-2 text-label-md">
            <span className="material-symbols-outlined mr-2 text-sm" data-icon="calendar_month">calendar_month</span>
            <span>Oct 01 - Oct 31, 2023</span>
          </div>
          <button className="bg-surface-container-high text-on-surface border border-outline-variant rounded-lg px-4 py-2 text-label-md font-semibold hover:bg-surface-container-highest transition-colors">
            Export CSV
          </button>
        </div>
      </div>

      {/* Dashboard Analytics Mini-Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        <div className="bg-surface p-md rounded-2xl shadow-md border border-surface-container flex justify-between items-center">
          <div>
            <p className="text-label-md text-on-surface-variant mb-1">Total Pending</p>
            <p className="text-h3 font-bold text-brand-accent">128</p>
          </div>
          <div className="p-3 bg-brand-accent/5 rounded-xl">
            <span className="material-symbols-outlined text-brand-accent" data-icon="pending_actions">pending_actions</span>
          </div>
        </div>
        <div className="bg-surface p-md rounded-2xl shadow-md border border-surface-container flex justify-between items-center">
          <div>
            <p className="text-label-md text-on-surface-variant mb-1">Today's Revenue</p>
            <p className="text-h3 font-bold text-on-surface">$2,450.00</p>
          </div>
          <div className="p-3 bg-surface-container-low rounded-xl">
            <span className="material-symbols-outlined text-primary" data-icon="payments">payments</span>
          </div>
        </div>
        <div className="bg-surface p-md rounded-2xl shadow-md border border-surface-container flex justify-between items-center">
          <div>
            <p className="text-label-md text-on-surface-variant mb-1">Avg. Approval Time</p>
            <p className="text-h3 font-bold text-on-surface">4.2 hrs</p>
          </div>
          <div className="p-3 bg-surface-container-low rounded-xl">
            <span className="material-symbols-outlined text-primary" data-icon="schedule">schedule</span>
          </div>
        </div>
      </div>

      {/* Data Table Card */}
      <div className="bg-surface rounded-2xl shadow-md border border-surface-container overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low border-b border-surface-container">
                <th className="px-gutter py-4 font-label-md text-on-secondary-fixed-variant uppercase tracking-wider">User Name</th>
                <th className="px-gutter py-4 font-label-md text-on-secondary-fixed-variant uppercase tracking-wider">Email</th>
                <th className="px-gutter py-4 font-label-md text-on-secondary-fixed-variant uppercase tracking-wider">Transaction ID</th>
                <th className="px-gutter py-4 font-label-md text-on-secondary-fixed-variant uppercase tracking-wider">Date</th>
                <th className="px-gutter py-4 font-label-md text-on-secondary-fixed-variant uppercase tracking-wider">Amount</th>
                <th className="px-gutter py-4 font-label-md text-on-secondary-fixed-variant uppercase tracking-wider">Status</th>
                <th className="px-gutter py-4 font-label-md text-on-secondary-fixed-variant uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container">
              {/* Row 1 */}
              <tr className="hover:bg-surface-container-lowest transition-colors group">
                <td className="px-gutter py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-label-sm">JD</div>
                    <span className="font-label-md font-semibold text-on-surface">Julianne Devis</span>
                  </div>
                </td>
                <td className="px-gutter py-5 font-body-md text-on-surface-variant">j.devis@university.edu</td>
                <td className="px-gutter py-5 font-body-md text-on-surface-variant font-mono text-sm">TXN-882910394</td>
                <td className="px-gutter py-5 font-body-md text-on-surface-variant">Oct 24, 2023</td>
                <td className="px-gutter py-5 font-label-md font-bold text-on-surface">$199.00</td>
                <td className="px-gutter py-5">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-label-sm font-semibold bg-brand-accent/10 text-brand-accent">
                    Pending
                  </span>
                </td>
                <td className="px-gutter py-5 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-2 text-primary hover:bg-surface-container-low rounded-lg transition-all" title="View Receipt">
                      <span className="material-symbols-outlined" data-icon="visibility">visibility</span>
                    </button>
                    <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-all" title="Approve">
                      <span className="material-symbols-outlined" data-icon="check_circle">check_circle</span>
                    </button>
                    <button className="p-2 text-error hover:bg-error-container rounded-lg transition-all" title="Reject">
                      <span className="material-symbols-outlined" data-icon="cancel">cancel</span>
                    </button>
                  </div>
                </td>
              </tr>
              {/* Row 2 */}
              <tr className="hover:bg-surface-container-lowest transition-colors group">
                <td className="px-gutter py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-label-sm">MK</div>
                    <span className="font-label-md font-semibold text-on-surface">Marcus Knight</span>
                  </div>
                </td>
                <td className="px-gutter py-5 font-body-md text-on-surface-variant">m.knight@academy.org</td>
                <td className="px-gutter py-5 font-body-md text-on-surface-variant font-mono text-sm">TXN-773821094</td>
                <td className="px-gutter py-5 font-body-md text-on-surface-variant">Oct 23, 2023</td>
                <td className="px-gutter py-5 font-label-md font-bold text-on-surface">$49.00</td>
                <td className="px-gutter py-5">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-label-sm font-semibold bg-brand-accent/10 text-brand-accent">
                    Pending
                  </span>
                </td>
                <td className="px-gutter py-5 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-2 text-primary hover:bg-surface-container-low rounded-lg transition-all" title="View Receipt">
                      <span className="material-symbols-outlined" data-icon="visibility">visibility</span>
                    </button>
                    <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-all" title="Approve">
                      <span className="material-symbols-outlined" data-icon="check_circle">check_circle</span>
                    </button>
                    <button className="p-2 text-error hover:bg-error-container rounded-lg transition-all" title="Reject">
                      <span className="material-symbols-outlined" data-icon="cancel">cancel</span>
                    </button>
                  </div>
                </td>
              </tr>
              {/* Row 3 */}
              <tr className="hover:bg-surface-container-lowest transition-colors group">
                <td className="px-gutter py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-label-sm">SL</div>
                    <span className="font-label-md font-semibold text-on-surface">Sarah Lopez</span>
                  </div>
                </td>
                <td className="px-gutter py-5 font-body-md text-on-surface-variant">s.lopez@edu.net</td>
                <td className="px-gutter py-5 font-body-md text-on-surface-variant font-mono text-sm">TXN-112093485</td>
                <td className="px-gutter py-5 font-body-md text-on-surface-variant">Oct 23, 2023</td>
                <td className="px-gutter py-5 font-label-md font-bold text-on-surface">$129.00</td>
                <td className="px-gutter py-5">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-label-sm font-semibold bg-brand-accent/10 text-brand-accent">
                    Pending
                  </span>
                </td>
                <td className="px-gutter py-5 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-2 text-primary hover:bg-surface-container-low rounded-lg transition-all" title="View Receipt">
                      <span className="material-symbols-outlined" data-icon="visibility">visibility</span>
                    </button>
                    <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-all" title="Approve">
                      <span className="material-symbols-outlined" data-icon="check_circle">check_circle</span>
                    </button>
                    <button className="p-2 text-error hover:bg-error-container rounded-lg transition-all" title="Reject">
                      <span className="material-symbols-outlined" data-icon="cancel">cancel</span>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="p-gutter bg-surface-container-low flex items-center justify-between border-t border-surface-container">
          <p className="font-label-md text-on-surface-variant">Showing 3 of 128 submissions</p>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 bg-surface text-on-surface-variant border border-outline-variant rounded-lg text-label-md hover:bg-surface-container-low disabled:opacity-50" disabled>Previous</button>
            <button className="px-4 py-2 bg-brand-accent text-white rounded-lg text-label-md hover:opacity-90">Next</button>
          </div>
        </div>
      </div>
      
      {/* Receipt Preview Floating Card (Visual Mockup of a Modal/Preview) */}
      <div className="fixed bottom-gutter right-gutter w-80 bg-surface rounded-2xl shadow-xl border border-surface-container p-gutter z-50">
        <div className="flex justify-between items-start mb-md">
          <div>
            <h4 className="font-label-md font-bold text-on-surface">Receipt Preview</h4>
            <p className="text-label-sm text-on-surface-variant">TXN-882910394</p>
          </div>
          <button className="p-1 hover:bg-surface-container-low rounded-full">
            <span className="material-symbols-outlined text-sm" data-icon="close">close</span>
          </button>
        </div>
        <div className="aspect-[3/4] bg-surface-container-high rounded-xl overflow-hidden mb-md border border-surface-container">
          <img 
            alt="Payment Receipt" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIWkVt08yWgSDe1ykwKK5l3HqoBtR56XuqUc_i6i0r2GrnmUIE4xLGQIQ9Bnz9aTUbQATTDsTB9PtCAyxNlLnOIqiLZUZn46h4w3P2Xa6wMf9zkl1hxTIB292bkqLgzfU4K8amxRcuVpi7hehxiKBYBvDy4GHqJkeHByUK29lsW-ykEeIuYMk-V7LaHdoHg8CahTqMaZ7ca0r8jUUEVcTou6DxBJYD67nziH_RvMiC1Nqrz8aesbg8PekX2J5jmlbLkLuKbxYMrBs"
          />
        </div>
        <div className="space-y-sm">
          <button className="w-full py-2 bg-brand-accent text-white font-label-md rounded-lg shadow-sm hover:scale-[1.02] transition-transform">
            Approve Transaction
          </button>
          <button className="w-full py-2 bg-surface border border-error text-error font-label-md rounded-lg hover:bg-error/5 transition-colors">
            Reject Transaction
          </button>
        </div>
      </div>
    </div>
  );
}
