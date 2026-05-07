export default function AdminDashboardPage() {
  return (
    <div className="p-lg max-w-container-max mx-auto">
      {/* Stats Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-xl">
        {/* Total Users */}
        <div className="bg-surface-container-lowest p-md rounded-2xl shadow-md border-l-4 border-brand-accent hover:scale-102 transition-transform duration-200">
          <div className="flex justify-between items-start mb-2">
            <p className="font-label-md text-on-surface-variant">Total Users</p>
            <span className="material-symbols-outlined text-brand-accent" data-icon="person">person</span>
          </div>
          <h3 className="font-h2 text-h2 text-on-surface">1,240</h3>
          <div className="mt-2 flex items-center text-label-sm text-green-600">
            <span className="material-symbols-outlined text-[16px] mr-1" data-icon="trending_up">trending_up</span>
            12% from last month
          </div>
        </div>

        {/* Active Students */}
        <div className="bg-surface-container-lowest p-md rounded-2xl shadow-md border-l-4 border-brand-accent hover:scale-102 transition-transform duration-200">
          <div className="flex justify-between items-start mb-2">
            <p className="font-label-md text-on-surface-variant">Active Students</p>
            <span className="material-symbols-outlined text-brand-accent" data-icon="school">school</span>
          </div>
          <h3 className="font-h2 text-h2 text-on-surface">856</h3>
          <div className="mt-2 flex items-center text-label-sm text-green-600">
            <span className="material-symbols-outlined text-[16px] mr-1" data-icon="trending_up">trending_up</span>
            5% increase
          </div>
        </div>

        {/* Revenue */}
        <div className="bg-surface-container-lowest p-md rounded-2xl shadow-md border-l-4 border-brand-accent hover:scale-102 transition-transform duration-200">
          <div className="flex justify-between items-start mb-2">
            <p className="font-label-md text-on-surface-variant">Revenue</p>
            <span className="material-symbols-outlined text-brand-accent" data-icon="payments">payments</span>
          </div>
          <h3 className="font-h2 text-h2 text-on-surface">$12,450</h3>
          <div className="mt-2 flex items-center text-label-sm text-green-600">
            <span className="material-symbols-outlined text-[16px] mr-1" data-icon="trending_up">trending_up</span>
            $2.4k this week
          </div>
        </div>

        {/* Pending Approvals */}
        <div className="bg-surface-container-lowest p-md rounded-2xl shadow-md border-l-4 border-brand-accent hover:scale-102 transition-transform duration-200">
          <div className="flex justify-between items-start mb-2">
            <p className="font-label-md text-on-surface-variant">Pending Approvals</p>
            <span className="material-symbols-outlined text-brand-accent" data-icon="pending_actions">pending_actions</span>
          </div>
          <h3 className="font-h2 text-h2 text-on-surface">18</h3>
          <div className="mt-2 flex items-center text-label-sm text-brand-accent">
            <span className="material-symbols-outlined text-[16px] mr-1" data-icon="warning">warning</span>
            Requires attention
          </div>
        </div>
      </section>

      {/* Main Insights Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
        {/* Revenue Growth (Asymmetric Layout) */}
        <section className="lg:col-span-2 space-y-gutter">
          <div className="bg-surface-container-lowest p-lg rounded-2xl shadow-md h-full min-h-[400px] flex flex-col">
            <div className="flex justify-between items-center mb-lg">
              <div>
                <h3 className="font-h3 text-h3 text-on-surface">Revenue Growth</h3>
                <p className="font-body-md text-on-surface-variant">Annual institutional earnings overview</p>
              </div>
              <div className="flex gap-2">
                <span className="px-3 py-1 rounded-full bg-surface-container-low text-label-sm text-on-surface-variant border border-outline-variant">Yearly</span>
                <span className="px-3 py-1 rounded-full bg-brand-accent text-white text-label-sm">Monthly</span>
              </div>
            </div>

            {/* Sparkline/Chart Placeholder */}
            <div className="flex-grow relative flex items-end gap-4 px-2 pb-4">
              <div className="w-full h-32 bg-surface-container-low rounded-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-accent/10 to-transparent"></div>
                {/* Mock SVG Chart */}
                <svg className="absolute bottom-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 100">
                  <path d="M0,80 Q50,60 100,70 T200,40 T300,50 T400,20 L400,100 L0,100 Z" fill="#981C00" fillOpacity="0.1"></path>
                  <path d="M0,80 Q50,60 100,70 T200,40 T300,50 T400,20" fill="none" stroke="#981C00" strokeLinecap="round" strokeWidth="3"></path>
                </svg>
                {/* Interactive Dots */}
                <div className="absolute bottom-[20%] left-[100%] -translate-x-full h-3 w-3 bg-brand-accent rounded-full ring-4 ring-white shadow-md"></div>
              </div>
            </div>

            <div className="grid grid-cols-4 mt-lg border-t border-surface-container-high pt-lg">
              <div className="text-center">
                <p className="font-label-sm text-on-surface-variant">Projected</p>
                <p className="font-h3 text-brand-accent">$15.2k</p>
              </div>
              <div className="text-center">
                <p className="font-label-sm text-on-surface-variant">Avg/Course</p>
                <p className="font-h3 text-on-surface">$420</p>
              </div>
              <div className="text-center">
                <p className="font-label-sm text-on-surface-variant">Retention</p>
                <p className="font-h3 text-on-surface">94%</p>
              </div>
              <div className="text-center">
                <p className="font-label-sm text-on-surface-variant">New Enroll</p>
                <p className="font-h3 text-on-surface">242</p>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Activity */}
        <section className="lg:col-span-1">
          <div className="bg-surface-container-lowest p-lg rounded-2xl shadow-md h-full">
            <div className="flex items-center justify-between mb-lg">
              <h3 className="font-h3 text-h3 text-on-surface">Recent Activity</h3>
              <button className="text-brand-accent font-label-md hover:underline">View All</button>
            </div>
            <div className="space-y-md">
              {/* Registration Item */}
              <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-surface-container-low transition-colors group">
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 shrink-0">
                  <span className="material-symbols-outlined" data-icon="person_add">person_add</span>
                </div>
                <div className="flex-grow">
                  <p className="font-label-md text-on-surface">Sarah Jenkins <span className="font-normal text-on-surface-variant">joined</span></p>
                  <p className="font-label-sm text-on-surface-variant">Medical Sciences • 2m ago</p>
                </div>
              </div>
              {/* Enrollment Item */}
              <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-surface-container-low transition-colors group">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 shrink-0">
                  <span className="material-symbols-outlined" data-icon="auto_stories">auto_stories</span>
                </div>
                <div className="flex-grow">
                  <p className="font-label-md text-on-surface">David Miller <span className="font-normal text-on-surface-variant">enrolled in</span></p>
                  <p className="font-label-sm text-on-surface-variant">Advanced Calculus • 15m ago</p>
                </div>
              </div>
              {/* Approval Item */}
              <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-surface-container-low transition-colors group">
                <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-700 shrink-0">
                  <span className="material-symbols-outlined" data-icon="verified">verified</span>
                </div>
                <div className="flex-grow">
                  <p className="font-label-md text-on-surface">Ethics 101 <span className="font-normal text-on-surface-variant">was approved</span></p>
                  <p className="font-label-sm text-on-surface-variant">Curriculum Review • 1h ago</p>
                </div>
              </div>
              {/* New Course Item */}
              <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-surface-container-low transition-colors group">
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 shrink-0">
                  <span className="material-symbols-outlined" data-icon="add_box">add_box</span>
                </div>
                <div className="flex-grow">
                  <p className="font-label-md text-on-surface">Prof. Watson <span className="font-normal text-on-surface-variant">created</span></p>
                  <p className="font-label-sm text-on-surface-variant">Organic Chemistry • 3h ago</p>
                </div>
              </div>
              {/* Registration Item */}
              <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-surface-container-low transition-colors group">
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 shrink-0">
                  <span className="material-symbols-outlined" data-icon="person_add">person_add</span>
                </div>
                <div className="flex-grow">
                  <p className="font-label-md text-on-surface">Elena Rodriguez <span className="font-normal text-on-surface-variant">joined</span></p>
                  <p className="font-label-sm text-on-surface-variant">Modern History • 5h ago</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Detailed Table Section (Full Width) */}
      <section className="mt-xl">
        <div className="bg-surface-container-lowest rounded-2xl shadow-md overflow-hidden">
          <div className="p-lg flex justify-between items-center border-b border-surface-container-high">
            <h3 className="font-h3 text-h3 text-on-surface">Institutional Enrollment Queue</h3>
            <div className="flex gap-2">
              <button className="px-4 py-2 border border-outline-variant rounded-xl font-label-md hover:bg-surface-container-low transition-colors">Export CSV</button>
              <button className="px-4 py-2 bg-brand-accent text-white rounded-xl font-label-md hover:bg-brand-accent-hover transition-all">Bulk Approve</button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low text-on-surface-variant font-label-md">
                  <th className="px-lg py-md">Full Name</th>
                  <th className="px-lg py-md">Course Program</th>
                  <th className="px-lg py-md">Registration Date</th>
                  <th className="px-lg py-md">Status</th>
                  <th className="px-lg py-md text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container-high">
                {/* Table Row 1 */}
                <tr className="hover:bg-surface-container-lowest transition-colors">
                  <td className="px-lg py-md">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-surface-container-high flex items-center justify-center font-bold text-brand-accent">AW</div>
                      <span className="font-label-md text-on-surface">Arthur Wright</span>
                    </div>
                  </td>
                  <td className="px-lg py-md font-body-md text-on-surface-variant">Computer Science Honors</td>
                  <td className="px-lg py-md font-body-md text-on-surface-variant">Oct 24, 2023</td>
                  <td className="px-lg py-md">
                    <span className="px-3 py-1 rounded-full bg-green-100 text-green-800 text-[12px] font-bold">Approved</span>
                  </td>
                  <td className="px-lg py-md text-right">
                    <button className="text-on-surface-variant hover:text-brand-accent">
                      <span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
                    </button>
                  </td>
                </tr>
                {/* Table Row 2 */}
                <tr className="hover:bg-surface-container-lowest transition-colors">
                  <td className="px-lg py-md">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-surface-container-high flex items-center justify-center font-bold text-brand-accent">MB</div>
                      <span className="font-label-md text-on-surface">Marcus Bennett</span>
                    </div>
                  </td>
                  <td className="px-lg py-md font-body-md text-on-surface-variant">Applied Economics</td>
                  <td className="px-lg py-md font-body-md text-on-surface-variant">Oct 24, 2023</td>
                  <td className="px-lg py-md">
                    <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-[12px] font-bold">Pending</span>
                  </td>
                  <td className="px-lg py-md text-right">
                    <button className="text-on-surface-variant hover:text-brand-accent">
                      <span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
                    </button>
                  </td>
                </tr>
                {/* Table Row 3 */}
                <tr className="hover:bg-surface-container-lowest transition-colors">
                  <td className="px-lg py-md">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-surface-container-high flex items-center justify-center font-bold text-brand-accent">CH</div>
                      <span className="font-label-md text-on-surface">Catherine Hill</span>
                    </div>
                  </td>
                  <td className="px-lg py-md font-body-md text-on-surface-variant">Political Philosophy</td>
                  <td className="px-lg py-md font-body-md text-on-surface-variant">Oct 23, 2023</td>
                  <td className="px-lg py-md">
                    <span className="px-3 py-1 rounded-full bg-green-100 text-green-800 text-[12px] font-bold">Approved</span>
                  </td>
                  <td className="px-lg py-md text-right">
                    <button className="text-on-surface-variant hover:text-brand-accent">
                      <span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
                    </button>
                  </td>
                </tr>
                {/* Table Row 4 */}
                <tr className="hover:bg-surface-container-lowest transition-colors">
                  <td className="px-lg py-md">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-surface-container-high flex items-center justify-center font-bold text-brand-accent">LS</div>
                      <span className="font-label-md text-on-surface">Linda Sullivan</span>
                    </div>
                  </td>
                  <td className="px-lg py-md font-body-md text-on-surface-variant">Biochemistry Research</td>
                  <td className="px-lg py-md font-body-md text-on-surface-variant">Oct 23, 2023</td>
                  <td className="px-lg py-md">
                    <span className="px-3 py-1 rounded-full bg-red-100 text-red-800 text-[12px] font-bold">Flagged</span>
                  </td>
                  <td className="px-lg py-md text-right">
                    <button className="text-on-surface-variant hover:text-brand-accent">
                      <span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
                    </button>
                  </td>
                </tr>
                {/* Table Row 5 */}
                <tr className="hover:bg-surface-container-lowest transition-colors">
                  <td className="px-lg py-md">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-surface-container-high flex items-center justify-center font-bold text-brand-accent">JK</div>
                      <span className="font-label-md text-on-surface">Julian King</span>
                    </div>
                  </td>
                  <td className="px-lg py-md font-body-md text-on-surface-variant">Modern Architecture</td>
                  <td className="px-lg py-md font-body-md text-on-surface-variant">Oct 22, 2023</td>
                  <td className="px-lg py-md">
                    <span className="px-3 py-1 rounded-full bg-green-100 text-green-800 text-[12px] font-bold">Approved</span>
                  </td>
                  <td className="px-lg py-md text-right">
                    <button className="text-on-surface-variant hover:text-brand-accent">
                      <span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
