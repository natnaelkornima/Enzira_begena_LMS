export default function AdminUsersPage() {
  return (
    <div className="p-lg max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="mb-xl">
        <h2 className="font-h2 text-h2 text-on-surface mb-xs">User Management</h2>
        <p className="text-on-surface-variant font-body-md">Monitor student activity, subscription statuses, and account access.</p>
      </div>

      {/* Stats Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-md mb-xl">
        <div className="bg-white p-md rounded-2xl shadow-md border border-outline-variant/30 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="font-label-md text-on-surface-variant">Total Students</span>
            <div className="p-2 bg-surface-container-high rounded-lg">
              <span className="material-symbols-outlined text-primary">group</span>
            </div>
          </div>
          <div className="mt-md">
            <p className="text-[32px] font-bold text-on-surface">1,240</p>
            <p className="text-label-sm text-[#981C00]">+5% from last month</p>
          </div>
        </div>
        
        <div className="bg-white p-md rounded-2xl shadow-md border border-outline-variant/30 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="font-label-md text-on-surface-variant">Active Subscriptions</span>
            <div className="p-2 bg-surface-container-high rounded-lg">
              <span className="material-symbols-outlined text-primary">verified</span>
            </div>
          </div>
          <div className="mt-md">
            <p className="text-[32px] font-bold text-on-surface">856</p>
            <p className="text-label-sm text-green-600">69% retention rate</p>
          </div>
        </div>
        
        <div className="bg-white p-md rounded-2xl shadow-md border border-outline-variant/30 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="font-label-md text-on-surface-variant">New This Month</span>
            <div className="p-2 bg-surface-container-high rounded-lg">
              <span className="material-symbols-outlined text-primary">person_add</span>
            </div>
          </div>
          <div className="mt-md">
            <p className="text-[32px] font-bold text-on-surface">+42</p>
            <p className="text-label-sm text-on-surface-variant">Awaiting orientation</p>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white p-md rounded-2xl shadow-md border border-outline-variant/30 mb-md flex flex-col md:flex-row gap-md items-center justify-between">
        <div className="flex flex-col md:flex-row gap-md w-full md:w-auto">
          <div className="relative w-full md:w-80">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
            <input className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl pl-10 pr-4 py-2 text-label-md focus:ring-2 focus:ring-[#981C00] transition-all outline-none" placeholder="Search by name or email..." type="text"/>
          </div>
          <select className="bg-surface-container-lowest border border-outline-variant rounded-xl px-4 py-2 text-label-md focus:ring-2 focus:ring-[#981C00] min-w-[150px] outline-none cursor-pointer">
            <option>All Statuses</option>
            <option>Active</option>
            <option>Inactive</option>
            <option>Pending</option>
          </select>
        </div>
        <button className="w-full md:w-auto bg-surface-container-low text-on-surface-variant border border-outline-variant font-label-md px-lg py-2 rounded-xl hover:bg-surface-container-high transition-colors flex items-center justify-center gap-xs">
          <span className="material-symbols-outlined text-[20px]">download</span>
          Export CSV
        </button>
      </div>

      {/* Data Table Container */}
      <div className="bg-white rounded-2xl shadow-md border border-outline-variant/30 overflow-hidden mb-lg">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-lowest border-b border-outline-variant">
                <th className="px-md py-4 font-label-md text-on-surface-variant">User</th>
                <th className="px-md py-4 font-label-md text-on-surface-variant">Registration Date</th>
                <th className="px-md py-4 font-label-md text-on-surface-variant">Subscription Plan</th>
                <th className="px-md py-4 font-label-md text-on-surface-variant">Status</th>
                <th className="px-md py-4 font-label-md text-on-surface-variant text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/30">
              {/* Row 1 */}
              <tr className="hover:bg-surface-container-lowest transition-colors group">
                <td className="px-md py-4">
                  <div className="flex items-center gap-md">
                    <div className="h-10 w-10 rounded-full overflow-hidden bg-surface-container-high border border-outline-variant">
                      <img 
                        alt="John Smith" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBz1Gtj9mbJ1THpmLM9b8yYv96priseLqZewmJJCbxdfdZZM8zc7bRicAmZ3LySs0quRDWQ2qZzbDnpMIwIm1z9OMfNyWbndQUN0MlZIlWj85jqdVZO2AIF2ur263t39fVPKm9jV0xuA5lfaQvSZWmarp6LPBpN0Cae2dNjyXg9RIYKg3VrhK0UoPf1uwQbxAY4D9plBwZ0ErP2bW5OIr7_unXE5UkgpEJCOwRcqhzYbfnsp2jC5Q1e5hxnI3ymCXLfdjyRsmNR-qU"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-label-md text-on-surface font-bold">John Smith</p>
                      <p className="text-label-sm text-on-surface-variant">john.smith@university.edu</p>
                    </div>
                  </div>
                </td>
                <td className="px-md py-4 text-on-surface-variant text-label-md">Oct 12, 2023</td>
                <td className="px-md py-4">
                  <span className="px-3 py-1 bg-[#981C00]/10 text-[#981C00] rounded-full text-label-sm font-semibold">Pro</span>
                </td>
                <td className="px-md py-4">
                  <div className="flex items-center gap-xs">
                    <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    <span className="text-label-md text-on-surface">Active</span>
                  </div>
                </td>
                <td className="px-md py-4 text-right">
                  <div className="flex items-center justify-end gap-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="text-on-surface-variant hover:text-[#981C00] transition-colors"><span className="material-symbols-outlined text-[20px]">visibility</span></button>
                    <button className="text-on-surface-variant hover:text-[#981C00] transition-colors"><span className="material-symbols-outlined text-[20px]">edit</span></button>
                    <button className="text-on-surface-variant hover:text-error transition-colors"><span class="material-symbols-outlined text-[20px]">block</span></button>
                  </div>
                </td>
              </tr>
              
              {/* Row 2 */}
              <tr className="hover:bg-surface-container-lowest transition-colors group">
                <td className="px-md py-4">
                  <div className="flex items-center gap-md">
                    <div className="h-10 w-10 rounded-full overflow-hidden bg-surface-container-high border border-outline-variant">
                      <img 
                        alt="Sarah Davis" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuABHWWc2-QkndxJe2R0q92NrxNk0OZJ0gjXZJx52Kkf7FDGaogdRzTeMcafpqk1wScSqycYc-Oj_HXLzUDQ9DZZEVjeqZ_Zr5t6RB3_ppWANaIgCJz9h4kRS-w7ONqPMx_BycqDWSY7W-GSvVCGK565ec7dZu4P_4xVnSuWxEcDiWQh4dyBZOHaafS8bt6-DDONd5Tag9PNvyvpM3ZonEfVl0J1593rzr0XtrlH1ZLr8CqptbVtRFD_ZqSZI488dBokwhYRZxMPysI"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-label-md text-on-surface font-bold">Sarah Davis</p>
                      <p className="text-label-sm text-on-surface-variant">s.davis@gradschool.com</p>
                    </div>
                  </div>
                </td>
                <td className="px-md py-4 text-on-surface-variant text-label-md">Nov 05, 2023</td>
                <td className="px-md py-4">
                  <span className="px-3 py-1 bg-surface-container-high text-on-surface-variant rounded-full text-label-sm font-semibold">Basic</span>
                </td>
                <td className="px-md py-4">
                  <div className="flex items-center gap-xs">
                    <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                    <span className="text-label-md text-on-surface">Inactive</span>
                  </div>
                </td>
                <td className="px-md py-4 text-right">
                  <div className="flex items-center justify-end gap-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="text-on-surface-variant hover:text-[#981C00] transition-colors"><span className="material-symbols-outlined text-[20px]">visibility</span></button>
                    <button className="text-on-surface-variant hover:text-[#981C00] transition-colors"><span className="material-symbols-outlined text-[20px]">edit</span></button>
                    <button className="text-on-surface-variant hover:text-green-600 transition-colors"><span className="material-symbols-outlined text-[20px]">toggle_on</span></button>
                  </div>
                </td>
              </tr>
              
              {/* Row 3 */}
              <tr className="hover:bg-surface-container-lowest transition-colors group">
                <td className="px-md py-4">
                  <div className="flex items-center gap-md">
                    <div className="h-10 w-10 rounded-full overflow-hidden bg-surface-container-high border border-outline-variant">
                      <img 
                        alt="Marcus Rodriguez" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDk00sdZjH36e6jVEgcuXuqFaEO0RTSRzR71kbI8qXSsf7NUYu4y8ZBUhNZQ8ZivyswZSaez9bkZ8LCfGMcudsuxthqgO2273N5tYJgtbV3lm9r3tRX2XO9PiZKaCqZzgOJZgJ84whrPXD1Katr7Dbn4Dto7YLXEm5Hnn5-KNwpbTt4sWgNDsaHrtL4ZDQ7I5DkfJZhvRjmXkVi73vhdxIdM9XhUXBmiKx4AXwN4Trp5V6DWv6sA8UXX2soPor_0eo2NTQn1pU2q3M"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-label-md text-on-surface font-bold">Marcus Rodriguez</p>
                      <p className="text-label-sm text-on-surface-variant">m.rodriguez@techinst.edu</p>
                    </div>
                  </div>
                </td>
                <td className="px-md py-4 text-on-surface-variant text-label-md">Dec 01, 2023</td>
                <td className="px-md py-4">
                  <span className="px-3 py-1 bg-[#981C00]/10 text-[#981C00] rounded-full text-label-sm font-semibold">Pro</span>
                </td>
                <td className="px-md py-4">
                  <div className="flex items-center gap-xs">
                    <span className="h-2 w-2 rounded-full bg-error"></span>
                    <span className="text-label-md text-on-surface">Flagged</span>
                  </div>
                </td>
                <td className="px-md py-4 text-right">
                  <div className="flex items-center justify-end gap-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="text-on-surface-variant hover:text-[#981C00] transition-colors"><span className="material-symbols-outlined text-[20px]">visibility</span></button>
                    <button className="text-on-surface-variant hover:text-[#981C00] transition-colors"><span className="material-symbols-outlined text-[20px]">edit</span></button>
                    <button className="text-on-surface-variant hover:text-error transition-colors"><span className="material-symbols-outlined text-[20px]">warning</span></button>
                  </div>
                </td>
              </tr>
              
              {/* Row 4 */}
              <tr className="hover:bg-surface-container-lowest transition-colors group">
                <td className="px-md py-4">
                  <div className="flex items-center gap-md">
                    <div className="h-10 w-10 rounded-full overflow-hidden bg-surface-container-high border border-outline-variant">
                      <img 
                        alt="Linda Lee" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuALD6x2jpI679MrIxLK0XS_S6DCjm7EoROq9GoP4ah2uiXs5PaUT7UmYswlDZ6KmUyjVtgii3TpLGyp9-lSh0t7Z_odliU3Fm-FUvMIGg01aIGLGiVZMFYWrRMjZiyi5Bn0s1APXUWRxiGyhtPBEEw95prb8F5vm_NA2drVRjOOQV4I_jgw90ZiEASypWxz3iYHuseVhhTi2SX2XF0K7jOIGbelPRRASEnr3ao8pWxwS9yMOiGOmtbgiyn2z4S4V5x6sfJ6PSBdX-c"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-label-md text-on-surface font-bold">Linda Lee</p>
                      <p className="text-label-sm text-on-surface-variant">linda.lee@university.edu</p>
                    </div>
                  </div>
                </td>
                <td className="px-md py-4 text-on-surface-variant text-label-md">Dec 15, 2023</td>
                <td className="px-md py-4">
                  <span className="px-3 py-1 bg-surface-container-high text-on-surface-variant rounded-full text-label-sm font-semibold">None</span>
                </td>
                <td className="px-md py-4">
                  <div className="flex items-center gap-xs">
                    <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    <span className="text-label-md text-on-surface">Active</span>
                  </div>
                </td>
                <td className="px-md py-4 text-right">
                  <div className="flex items-center justify-end gap-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="text-on-surface-variant hover:text-[#981C00] transition-colors"><span className="material-symbols-outlined text-[20px]">visibility</span></button>
                    <button className="text-on-surface-variant hover:text-[#981C00] transition-colors"><span className="material-symbols-outlined text-[20px]">edit</span></button>
                    <button className="text-on-surface-variant hover:text-error transition-colors"><span className="material-symbols-outlined text-[20px]">block</span></button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-md py-4 flex flex-col md:flex-row items-center justify-between gap-md bg-surface-container-lowest border-t border-outline-variant">
          <p className="text-label-md text-on-surface-variant">Showing 10 of 1,240 students</p>
          <div className="flex items-center gap-xs">
            <button className="p-2 border border-outline-variant rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors disabled:opacity-50" disabled>
              <span className="material-symbols-outlined text-[20px]">chevron_left</span>
            </button>
            <button className="px-4 py-2 bg-[#981C00] text-white rounded-lg text-label-sm font-bold">1</button>
            <button className="px-4 py-2 border border-outline-variant rounded-lg text-label-sm font-medium hover:bg-surface-container-low transition-colors">2</button>
            <button className="px-4 py-2 border border-outline-variant rounded-lg text-label-sm font-medium hover:bg-surface-container-low transition-colors">3</button>
            <span className="text-on-surface-variant px-2">...</span>
            <button className="px-4 py-2 border border-outline-variant rounded-lg text-label-sm font-medium hover:bg-surface-container-low transition-colors">124</button>
            <button className="p-2 border border-outline-variant rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined text-[20px]">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
