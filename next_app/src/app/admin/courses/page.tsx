export default function AdminCoursesPage() {
  return (
    <div className="p-lg max-w-container-max mx-auto">
      {/* Section Header & Filter Cluster */}
      <section className="mb-xl flex flex-col md:flex-row md:items-end justify-between gap-md">
        <div>
          <h1 className="font-h2 text-h2 text-on-background mb-xs">Course Management</h1>
          <p className="font-body-md text-body-md text-on-surface-variant">Review, update, and manage the complete academic catalog.</p>
        </div>
        <div className="flex gap-sm">
          <div className="relative group">
            <select className="appearance-none bg-white border border-outline-variant rounded-xl px-md py-3 pr-xl text-label-md font-medium focus:ring-2 focus:ring-[#981C00] transition-all cursor-pointer">
              <option>All Categories</option>
              <option>Mathematics</option>
              <option>Philosophy</option>
              <option>Computer Science</option>
              <option>Fine Arts</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant" data-icon="expand_more">expand_more</span>
          </div>
          <div className="relative group">
            <select className="appearance-none bg-white border border-outline-variant rounded-xl px-md py-3 pr-xl text-label-md font-medium focus:ring-2 focus:ring-[#981C00] transition-all cursor-pointer">
              <option>All Statuses</option>
              <option>Published</option>
              <option>Draft</option>
              <option>Archived</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant" data-icon="filter_list">filter_list</span>
          </div>
        </div>
      </section>

      {/* Bento Grid of Courses */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
        {/* Course Card 1 */}
        <article className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group">
          <div className="relative h-48">
            <img 
              alt="Advanced Topology" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3LmZqF5tJvBVfkNw5gASC3mOX4qZuJDZbhW4yZVQQlQEwOoNsfQ-Z3nPQ3YLSRMoXGwXIPwGDp2-IF4T2ji0Pd5ZPT1zkvoIpjl54cYPwGSWRF8D7weKG3YeDxBTt-Vd03r2wMXTqDanyPq8BOEtKGAFbNWStsWC1qpr0ppPoP0N0wKtOg6ujuPGutYaoZ-_fPL7zG78ODXphLseZWcn8C9VvyGzfnaD3qIMHBulyh84oGL8IQv_iTkEVX_BdsXc26Fy4gZ7d_jk"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-surface/90 backdrop-blur-sm text-brand-accent font-label-sm px-3 py-1 rounded-full border border-brand-accent/20">Published</span>
            </div>
          </div>
          <div className="p-md">
            <div className="flex justify-between items-start mb-sm">
              <h3 className="font-h3 text-h3 text-on-background line-clamp-1">Advanced Topology</h3>
              <div className="flex gap-1">
                <button className="p-2 text-on-surface-variant hover:text-brand-accent transition-colors"><span className="material-symbols-outlined" data-icon="edit">edit</span></button>
                <button className="p-2 text-on-surface-variant hover:text-brand-accent transition-colors"><span className="material-symbols-outlined" data-icon="analytics">analytics</span></button>
              </div>
            </div>
            <p className="font-body-md text-on-surface-variant mb-md flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]" data-icon="person">person</span>
              Dr. Eleanor Vance
            </p>
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-surface-container-low">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[18px]" data-icon="menu_book">menu_book</span>
                  <span className="font-label-md">24 Lessons</span>
                </div>
              </div>
              <button className="text-brand-accent font-label-md flex items-center gap-1 hover:underline">
                View Details
                <span className="material-symbols-outlined text-[16px]" data-icon="chevron_right">chevron_right</span>
              </button>
            </div>
          </div>
        </article>

        {/* Course Card 2 */}
        <article className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group">
          <div className="relative h-48">
            <img 
              alt="Ethics in Artificial Intelligence" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAh8Q8CmPKOqmgoUDd9EWwUSbIS82s7zESC4NPR0zUdjsnbuTY_3bCfjuQ8wF9wRd0RpnDmQRfsHU-q4zKO8MZPUwpc02BMoINPWqqxYByKl89FMHC3K_5NxNbOeMFu_hQ21wuj1Ez5zNPvIvTbu3Sc_5pxk0WfhdHTYg7yZWJkj5oh2Ddt9k2vcGTEIS7_sGaHPzSe1UtzxRmd927e3cGGQ5FvK85bOi97LdqR1K-bof7RQv_ATWcsaLnzpuA5L1nzzCwaYK5Pb7o"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-surface/90 backdrop-blur-sm text-on-surface-variant font-label-sm px-3 py-1 rounded-full border border-outline-variant/30">Draft</span>
            </div>
          </div>
          <div className="p-md">
            <div className="flex justify-between items-start mb-sm">
              <h3 className="font-h3 text-h3 text-on-background line-clamp-1">Ethics in Artificial Intelligence</h3>
              <div className="flex gap-1">
                <button className="p-2 text-on-surface-variant hover:text-brand-accent transition-colors"><span className="material-symbols-outlined" data-icon="edit">edit</span></button>
                <button className="p-2 text-on-surface-variant hover:text-error transition-colors"><span className="material-symbols-outlined" data-icon="delete">delete</span></button>
              </div>
            </div>
            <p className="font-body-md text-on-surface-variant mb-md flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]" data-icon="person">person</span>
              Prof. Marcus Thorne
            </p>
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-surface-container-low">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[18px]" data-icon="menu_book">menu_book</span>
                  <span className="font-label-md">12 Lessons</span>
                </div>
              </div>
              <button className="text-brand-accent font-label-md flex items-center gap-1 hover:underline">
                Continue Editing
                <span className="material-symbols-outlined text-[16px]" data-icon="arrow_forward">arrow_forward</span>
              </button>
            </div>
          </div>
        </article>

        {/* Course Card 3 */}
        <article className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group">
          <div className="relative h-48">
            <img 
              alt="History of Modernist Painting" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_VpdmCUAKyl-oJdtIMRz4l9OucRqJZZlleZKmjUreZ2j9bqBHqOr9azbAVT9LlSK6ehGdOfPkzx-ZpKz1Mk1HcRP4Ta22kAWgVUVjHTqmGDgq9zomp9Z37DRlnd0O3qVMiWuSOMY0uHsyQbdQR3-J4IJPqSzh88-zXB8T83FLf7Cp3oDF2XJXmk4jRi_Xkf1_dS70lQF4pJR33BV2bVNGzhXSr2aCnikCTl7OtVpDiXC1RsuUrIYsjq9xNtMaISDUx968tECnvYc"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-surface/90 backdrop-blur-sm text-brand-accent font-label-sm px-3 py-1 rounded-full border border-brand-accent/20">Published</span>
            </div>
          </div>
          <div className="p-md">
            <div className="flex justify-between items-start mb-sm">
              <h3 className="font-h3 text-h3 text-on-background line-clamp-1">History of Modernist Painting</h3>
              <div className="flex gap-1">
                <button className="p-2 text-on-surface-variant hover:text-brand-accent transition-colors"><span className="material-symbols-outlined" data-icon="edit">edit</span></button>
                <button className="p-2 text-on-surface-variant hover:text-brand-accent transition-colors"><span className="material-symbols-outlined" data-icon="analytics">analytics</span></button>
              </div>
            </div>
            <p className="font-body-md text-on-surface-variant mb-md flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]" data-icon="person">person</span>
              Dr. Sarah Jenkins
            </p>
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-surface-container-low">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[18px]" data-icon="menu_book">menu_book</span>
                  <span className="font-label-md">18 Lessons</span>
                </div>
              </div>
              <button className="text-brand-accent font-label-md flex items-center gap-1 hover:underline">
                View Details
                <span className="material-symbols-outlined text-[16px]" data-icon="chevron_right">chevron_right</span>
              </button>
            </div>
          </div>
        </article>

        {/* Course Card 4 */}
        <article className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group">
          <div className="relative h-48">
            <img 
              alt="Cellular Micro-Biology" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpi-4MQd7GpWlwkypxnL1-mjdbz74LyqXOjMgZFZGH-W8CCm12YkcHYnE0vZN0kBTbzxelz9DzRgCb1Dq5jSsOWx3IH6FAp5k4c9RSaRiqt20z9nQENQVdvvePsCYUtXtzoANG8c5tdRbhwMIjGK-Id4HKzjuZjfhaUCPboH_LL2iYiGisPOJHs4r-EZZbVYG8igfYMVMt_iaNvLXoec_dxfvp5JgwvsC0UWXzqHpUICebzVTjJpBH8Q0mjtQ4jGJv3GS2E7S_PXo"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-surface/90 backdrop-blur-sm text-brand-accent font-label-sm px-3 py-1 rounded-full border border-brand-accent/20">Published</span>
            </div>
          </div>
          <div className="p-md">
            <div className="flex justify-between items-start mb-sm">
              <h3 className="font-h3 text-h3 text-on-background line-clamp-1">Cellular Micro-Biology</h3>
              <div className="flex gap-1">
                <button className="p-2 text-on-surface-variant hover:text-brand-accent transition-colors"><span className="material-symbols-outlined" data-icon="edit">edit</span></button>
                <button className="p-2 text-on-surface-variant hover:text-brand-accent transition-colors"><span className="material-symbols-outlined" data-icon="analytics">analytics</span></button>
              </div>
            </div>
            <p className="font-body-md text-on-surface-variant mb-md flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]" data-icon="person">person</span>
              Prof. Julian Rossi
            </p>
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-surface-container-low">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[18px]" data-icon="menu_book">menu_book</span>
                  <span className="font-label-md">32 Lessons</span>
                </div>
              </div>
              <button className="text-brand-accent font-label-md flex items-center gap-1 hover:underline">
                View Details
                <span className="material-symbols-outlined text-[16px]" data-icon="chevron_right">chevron_right</span>
              </button>
            </div>
          </div>
        </article>

        {/* Course Card 5 (Bento Wide Style) */}
        <article className="lg:col-span-2 bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group flex flex-col md:flex-row">
          <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
            <img 
              alt="Classical Philosophy: The Stoics" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBg6gdfFfADAaldThSX--T7N0HAj2BgDhznUpZqs81A3DrEokImNLpdNEy03xhGhIB8zc-uXYV49AvByIgyd30AS4AkJoijg5JxAurWhOZbUFpETcZ7w8DEGy9SvWd2APD1N1aiDy4bwgVU_JFnUHYkVn530vKQuHkCTfMGzQJyUGpffQG2e7A0iC-sXEtMJHtEK8Kn5a5RoU4dHY1v6TWQgxjjZjFS-98KE8zPxWdaOTm9f3JKjwNi-1oeRhdtPrO_aFqf_DL9G7c"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-surface/90 backdrop-blur-sm text-on-surface-variant font-label-sm px-3 py-1 rounded-full border border-outline-variant/30">Draft</span>
            </div>
          </div>
          <div className="p-lg md:w-1/2 flex flex-col justify-center">
            <div className="flex justify-between items-start mb-md">
              <div>
                <h3 className="font-h3 text-h3 text-on-background mb-1">Classical Philosophy: The Stoics</h3>
                <p className="font-body-md text-on-surface-variant">An in-depth exploration of Marcus Aurelius and Seneca.</p>
              </div>
              <div className="flex gap-1">
                <button className="p-2 text-on-surface-variant hover:text-brand-accent transition-colors"><span className="material-symbols-outlined" data-icon="edit">edit</span></button>
              </div>
            </div>
            <div className="flex flex-wrap gap-md mb-lg">
              <div className="flex items-center gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined" data-icon="person">person</span>
                <span className="font-label-md">Dr. Adrian Miles</span>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined" data-icon="calendar_today">calendar_today</span>
                <span className="font-label-md">Last Edited 2 days ago</span>
              </div>
            </div>
            <div className="mt-auto pt-4 border-t border-surface-container-low flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-32 h-2 bg-surface-container-low rounded-full overflow-hidden">
                  <div className="bg-brand-accent h-full w-[65%]"></div>
                </div>
                <span className="font-label-sm text-on-surface-variant">65% Complete</span>
              </div>
              <button className="bg-brand-accent hover:bg-brand-accent-hover text-white px-6 py-2 rounded-xl font-label-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]">Resume Draft</button>
            </div>
          </div>
        </article>
      </section>

      {/* Pagination / Footer Actions */}
      <footer className="mt-xl flex flex-col sm:flex-row items-center justify-between gap-md py-lg border-t border-outline-variant/20">
        <p className="font-label-md text-on-surface-variant">Showing 5 of 48 total courses</p>
        <div className="flex items-center gap-xs">
          <button className="p-2 rounded-lg border border-outline-variant hover:bg-surface-container-low transition-colors disabled:opacity-30" disabled>
            <span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
          </button>
          <button className="w-10 h-10 rounded-lg bg-surface-container-high text-brand-accent font-bold">1</button>
          <button className="w-10 h-10 rounded-lg hover:bg-surface-container-low transition-colors font-medium">2</button>
          <button className="w-10 h-10 rounded-lg hover:bg-surface-container-low transition-colors font-medium">3</button>
          <span className="px-2">...</span>
          <button className="w-10 h-10 rounded-lg hover:bg-surface-container-low transition-colors font-medium">10</button>
          <button className="p-2 rounded-lg border border-outline-variant hover:bg-surface-container-low transition-colors">
            <span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
          </button>
        </div>
      </footer>
    </div>
  );
}
