import Link from 'next/link';

export default function StudentDashboardPage() {
  return (
    <div className="p-md md:p-xl">
      <div className="max-w-container-max mx-auto">
        {/* Welcome Section */}
        <header className="mb-xl flex flex-col md:flex-row justify-between items-end gap-md">
          <div>
            <h2 className="font-h1 text-h2 md:text-h1 text-on-surface mb-xs">Welcome back, Julian!</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">You've completed 75% of your weekly goals. Keep up the momentum.</p>
          </div>
          <div className="flex items-center space-x-sm bg-white p-sm rounded-2xl shadow-sm border border-outline-variant/20">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img 
                alt="Student Avatar" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDhSkIJlFXZ_jlLgn-J8XkIT8PgBqrNdUuqVblQswdJzDJo_WeUBOBQVwhqYiKU_58eXC1Hx6h75vm-W-pnceMBbQBwPLlWQMr84Zhs4NhDLZx656p5pDup7YJp0LMNFg3i0fufE9QqvqaxG6U1Qa4dt6sdSZQJuhZCXgzPlta8zJf_Rwg_-c6sESBDZvTGiXFZ82anRsq8UG1js6x3SUR4a3d_E3y3YpBawQsuzYYo-36w2EDW1vofNn8WdGSHaTVMnvrip-jZRk"
              />
            </div>
            <div>
              <p className="font-label-md text-label-md">Julian Thorne</p>
              <p className="text-[12px] text-on-surface-variant">Academic Year 2024</p>
            </div>
          </div>
        </header>

        {/* High-Level Progress Stats (Bento Grid Style) */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-md mb-xl">
          <div className="bg-surface-container-lowest p-md rounded-2xl shadow-md border border-outline-variant/10 flex items-center space-x-md">
            <div className="w-14 h-14 bg-error-container rounded-xl flex items-center justify-center text-error">
              <span className="material-symbols-outlined text-[32px]" data-icon="auto_stories">auto_stories</span>
            </div>
            <div>
              <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">In Progress</p>
              <p className="font-h2 text-h2 text-on-surface">4</p>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-md rounded-2xl shadow-md border border-outline-variant/10 flex items-center space-x-md">
            <div className="w-14 h-14 bg-surface-container-high rounded-xl flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[32px]" data-icon="task_alt">task_alt</span>
            </div>
            <div>
              <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Completed</p>
              <p className="font-h2 text-h2 text-on-surface">12</p>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-md rounded-2xl shadow-md border border-outline-variant/10 flex items-center space-x-md">
            <div className="w-14 h-14 bg-on-secondary-container/10 rounded-xl flex items-center justify-center text-on-secondary-container">
              <span className="material-symbols-outlined text-[32px]" data-icon="workspace_premium">workspace_premium</span>
            </div>
            <div>
              <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Certificates</p>
              <p className="font-h2 text-h2 text-on-surface">8</p>
            </div>
          </div>
        </section>

        {/* Course Grid */}
        <section>
          <div className="flex justify-between items-center mb-md">
            <h3 className="font-h2 text-h3 text-on-surface">Continue Learning</h3>
            <Link className="font-label-md text-error hover:underline" href="/courses">View all courses</Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-lg">
            {/* Course Card 1 */}
            <div className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-md border border-outline-variant/10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative h-48">
                <img 
                  alt="Design Principles" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCO4eznOM8amD3kg09Flak6yD4E1nk9K0DM6O41eZiy2xcyP6ag-vEnDfq6ESldjPBhaxYQ38O60Z0y_etkhQ03Nk8_WR_U2msJH56ZIZvIGg7wKav7ySMafP8SQuGaobbRwo0n5hxmDol0ONaqgqz1Bhj7zKQOAh3GExF8IkOyHOGTAa3pfz1ItacUoJnq6aou4JW2q9sVxbw2ew5aWgqztZmMVtvGkzovZ8cvVzT1D7dHMMFZzddPJSJ9154I_R1xKpXeXmxQv1A"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-sm py-xs rounded-full shadow-sm">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent">Advanced</span>
                </div>
              </div>
              <div className="p-md">
                <h4 className="font-h3 text-[20px] text-on-surface mb-1">Principles of Visual Narrative</h4>
                <p className="font-label-md text-on-surface-variant mb-md">Dr. Elena Rostova</p>
                <div className="space-y-xs mb-md">
                  <div className="flex justify-between text-label-sm text-on-surface-variant">
                    <span>Progress</span>
                    <span className="font-bold">68%</span>
                  </div>
                  <div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden">
                    <div className="h-full bg-brand-accent rounded-full w-[68%]"></div>
                  </div>
                </div>
                <button className="w-full bg-brand-accent hover:bg-brand-accent-hover text-on-primary py-md rounded-xl font-label-md transition-all duration-200 scale-102 active:scale-98">
                  Continue Learning
                </button>
              </div>
            </div>

            {/* Course Card 2 */}
            <div className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-md border border-outline-variant/10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative h-48">
                <img 
                  alt="Quantitative Analysis" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjV-5ZomSh5wO98B-vX-HTSYzR-V9AlPUvW5VEclQ1rst6S2g50uJPmy0zV36nvUugRVc3NpFWOGcYO_rh_6ozjcqsxzh5IwXiDRrqJfg42z20aCb1PAdp6L8q8Cz2dqb8gFL12qkvj-xikipdIanlukdkBiQe5bpx7HQkdTOYVbrldskwXSbyGG7CiXqcKVlBSBpvFNQQRECrLHXvTgL7kk6syZn8Sa3rw-46bvCB7_TKvjOVGv2tCXVdD_riWkSduhKvCSj2KPg"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-sm py-xs rounded-full shadow-sm">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent">Mastery</span>
                </div>
              </div>
              <div className="p-md">
                <h4 className="font-h3 text-[20px] text-on-surface mb-1">Quantitative Financial Theory</h4>
                <p className="font-label-md text-on-surface-variant mb-md">Prof. Marcus Sterling</p>
                <div className="space-y-xs mb-md">
                  <div className="flex justify-between text-label-sm text-on-surface-variant">
                    <span>Progress</span>
                    <span className="font-bold">32%</span>
                  </div>
                  <div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden">
                    <div className="h-full bg-brand-accent rounded-full w-[32%]"></div>
                  </div>
                </div>
                <button className="w-full bg-brand-accent hover:bg-brand-accent-hover text-on-primary py-md rounded-xl font-label-md transition-all duration-200 scale-102 active:scale-98">
                  Continue Learning
                </button>
              </div>
            </div>

            {/* Course Card 3 */}
            <div className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-md border border-outline-variant/10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative h-48">
                <img 
                  alt="Modern Web Arch" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDK7JdiYvCDTo3tumsT9GvhnHfGRtDcLFYotgD6dMRVCJ1Kf0I6pmwZDMi4_4fFxcjikF6iUE-rB3zdanWheLhcrf5sDF8eaMiXcz8-Yu2R0lwFEHjovwe2Qovu1KK_BEV9DzQ2KaNBrd39mxfPm0bCskZhboMz-1gOcrDDq8fFWZY39IeVeQsLLTF1wrk37ddny9W_Rzlme7j6yG6PzjuTq16oEJXAf6MhVzCk1JehVV2XVLAN8r6v-KuCWSS-TY2Db2T78CuUqiU"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-sm py-xs rounded-full shadow-sm">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent">Intermediate</span>
                </div>
              </div>
              <div className="p-md">
                <h4 className="font-h3 text-[20px] text-on-surface mb-1">Modern Web Architecture</h4>
                <p className="font-label-md text-on-surface-variant mb-md">Sarah Jenkins, Senior Eng.</p>
                <div className="space-y-xs mb-md">
                  <div className="flex justify-between text-label-sm text-on-surface-variant">
                    <span>Progress</span>
                    <span className="font-bold">91%</span>
                  </div>
                  <div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden">
                    <div className="h-full bg-brand-accent rounded-full w-[91%]"></div>
                  </div>
                </div>
                <button className="w-full bg-brand-accent hover:bg-brand-accent-hover text-on-primary py-md rounded-xl font-label-md transition-all duration-200 scale-102 active:scale-98">
                  Continue Learning
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
