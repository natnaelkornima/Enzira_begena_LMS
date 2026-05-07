import Link from 'next/link';

export default function SingleCoursePage() {
  return (
    <div className="bg-background min-h-screen">
      {/* TopAppBar */}
      <header className="bg-surface shadow-md docked full-width top-0 z-50 sticky">
        <div className="flex justify-between items-center w-full px-lg py-md max-w-container-max mx-auto">
          <div className="flex items-center gap-md">
            <span className="font-h3 text-h3 font-bold text-on-surface">Academia LMS</span>
          </div>
          <nav className="hidden md:flex items-center space-x-lg">
            <Link className="text-on-surface-variant font-medium hover:text-error transition-all duration-200" href="/pricing">Pricing</Link>
            <Link className="text-on-surface font-semibold border-b-2 border-error hover:text-error transition-all duration-200" href="/courses">Courses</Link>
            <Link className="text-on-surface-variant font-medium hover:text-error transition-all duration-200" href="/about">About</Link>
            <Link className="text-on-surface-variant font-medium hover:text-error transition-all duration-200" href="/support">Support</Link>
          </nav>
          <div className="flex items-center gap-sm">
            <button className="px-md py-xs rounded-lg text-on-surface-variant font-medium hover:scale-[1.02] transition-all">Login</button>
            <button className="bg-brand-accent text-on-primary px-md py-xs rounded-lg font-semibold hover:bg-brand-accent-hover hover:scale-[1.02] transition-all duration-200 shadow-md">Get Started</button>
          </div>
        </div>
      </header>

      <main className="max-w-container-max mx-auto px-lg py-xl">
        {/* Header Section: Course Identity & Progress */}
        <div className="mb-xl flex flex-col md:flex-row md:items-end justify-between gap-md">
          <div>
            <h1 className="font-h2 text-h2 text-on-surface">Advanced Computational Architecture &amp; Digital Tectonics</h1>
            <p className="text-on-surface-variant mt-xs flex items-center gap-xs">
              <span className="material-symbols-outlined text-[20px]">person</span>
              Instructor: Dr. Helena Vance
            </p>
          </div>
          <div className="w-full md:w-64">
            <div className="flex justify-between items-center mb-xs">
              <span className="font-label-md text-label-md text-on-surface">Course Progress</span>
              <span className="font-label-md text-label-md text-error">64%</span>
            </div>
            <div className="h-2 w-full bg-outline-variant rounded-full overflow-hidden">
              <div className="h-full bg-error w-[64%]"></div>
            </div>
          </div>
        </div>

        {/* Main Content Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg">
          {/* Left Column: Video Player & Tabs */}
          <div className="lg:col-span-8 space-y-lg">
            {/* Video Player Container */}
            <div className="aspect-video bg-on-surface rounded-2xl shadow-md overflow-hidden relative group">
              <img 
                alt="Architectural Course Video Thumbnail" 
                className="w-full h-full object-cover opacity-80" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMUSAgdNfsR_x9kjjSUCzHadPiheR_KwFyRZkwHI55gIkMaT1pKv8iH8ZOJ-DHpcojNCw7bq4JZPLv3LKnazF0DKk8FGDURzH0z0LFZ5Td0Jgx4ERi7lrRrmViEI2C0Yw94Mnm8yDlD6OmVjmJ6sszmiCeTqSliS0mq1RgJ53x-2JIuLoZmldcml2mkrlhI0NoetQFVOseRTRjvEvQsVE37DXZwAt9N3z1OJEK7TyVGLR3c_qyfHSz0n3pK4wsVv6AOC0pOBGeVLw"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-error text-white p-lg rounded-full shadow-xl hover:scale-110 transition-transform active:scale-[0.95]">
                  <span className="material-symbols-outlined text-[48px]" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                </button>
              </div>
              {/* Custom Controls Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-md bg-gradient-to-t from-black/80 to-transparent flex items-center gap-md">
                <span className="material-symbols-outlined text-white">pause</span>
                <div className="flex-grow h-1 bg-white/30 rounded-full relative">
                  <div className="absolute inset-y-0 left-0 w-1/3 bg-error rounded-full"></div>
                </div>
                <span className="text-white text-label-sm">12:45 / 45:00</span>
                <span className="material-symbols-outlined text-white">volume_up</span>
                <span className="material-symbols-outlined text-white">fullscreen</span>
              </div>
            </div>

            {/* Responsive Nav for Player */}
            <div className="flex justify-between items-center bg-surface-container-low p-md rounded-xl border border-outline-variant/30">
              <button className="flex items-center gap-xs text-on-surface-variant font-medium hover:text-error transition-colors">
                <span className="material-symbols-outlined">chevron_left</span>
                Previous Lesson
              </button>
              <span className="font-label-md text-on-surface-variant hidden md:block">Lesson 4 of 12: Parametric Foundations</span>
              <button className="bg-error text-white px-md py-xs rounded-lg font-semibold flex items-center gap-xs hover:bg-[#7A1600] transition-all shadow-md">
                Next Lesson
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>

            {/* Detail Tabs */}
            <div className="bg-surface-container-lowest rounded-2xl shadow-md overflow-hidden">
              <div className="flex border-b border-outline-variant/30">
                <button className="px-lg py-md font-label-md border-b-2 border-brand-accent text-on-surface">Description</button>
                <button className="px-lg py-md font-label-md text-on-surface-variant hover:text-error transition-colors">Resources</button>
                <button className="px-lg py-md font-label-md text-on-surface-variant hover:text-error transition-colors">Discussion</button>
              </div>
              <div className="p-lg space-y-md">
                <h3 className="font-h3 text-h3 text-on-surface">About this Lesson</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  In this section, we delve into the core principles of parametric design. We will explore how algorithmic thinking translates into physical structures and how computational tools allow for unprecedented formal experimentation. This lesson focuses on the relationship between mathematical constraints and aesthetic output.
                </p>
                <div className="bg-surface-container-low p-md rounded-xl flex items-start gap-md">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-outline-variant flex-shrink-0">
                    <img 
                      alt="Instructor Profile" 
                      className="w-full h-full object-cover" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6lFMtygXsJBSM1GSnpiMBNm1AN61R4CDln_sxZM7eAd6ejWLEmAIb1nV59CgPohFDLbxyhUmQ201XYOppinESE8yLgk7D_hsNkq2W1MjqpZQrHElLs_s0EtKCZX5fcH4pe-LnvTK86Ejw1iGI6D4WXsH1dlmb_osQZ_nXHqN5Owof6yl-tNfmcZ4RKq6Kfdds4079PsiC_i0ccsnvLZngS37nmOMuyuXXlJf0IIi_hPAwDpDpFhMpzu6smN6-RNboigAFov7Bqis"
                    />
                  </div>
                  <div>
                    <h4 className="font-label-md text-on-surface">Dr. Helena Vance</h4>
                    <p className="text-label-sm text-on-surface-variant italic">PhD in Computational Design, MIT</p>
                    <p className="text-label-sm text-on-surface-variant mt-xs">Helena is a leading figure in digital fabrication and has consulted for major architectural firms worldwide.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Lesson Accordion */}
          <div className="lg:col-span-4 space-y-md">
            <div className="bg-surface-container-lowest rounded-2xl shadow-md p-md">
              <h3 className="font-h3 text-h3 text-on-surface mb-md px-xs">Course Content</h3>
              <div className="space-y-xs">
                {/* Module 1 */}
                <div className="border border-outline-variant/20 rounded-xl overflow-hidden">
                  <div className="bg-surface-container-high p-md flex justify-between items-center cursor-pointer">
                    <span className="font-label-md text-on-surface">Module 1: Foundations</span>
                    <span className="material-symbols-outlined text-on-surface-variant">expand_more</span>
                  </div>
                  <div className="divide-y divide-outline-variant/10 hidden">
                    <div className="p-md flex items-center gap-sm bg-surface-container-low text-on-primary-container">
                      <span className="material-symbols-outlined text-error" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      <div className="flex-grow">
                        <p className="text-label-md font-semibold">1.1 Introduction to Tectonics</p>
                        <p className="text-label-sm opacity-70">12:30</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Module 2 (Active) */}
                <div className="border border-outline-variant/20 rounded-xl overflow-hidden">
                  <div className="bg-surface-container-high p-md flex justify-between items-center cursor-pointer">
                    <span className="font-label-md text-on-surface">Module 2: Parametric Modeling</span>
                    <span className="material-symbols-outlined text-on-surface">expand_less</span>
                  </div>
                  <div className="divide-y divide-outline-variant/10">
                    <div className="p-md flex items-center gap-sm bg-surface-container-low border-l-4 border-error">
                      <span className="material-symbols-outlined text-error">play_circle</span>
                      <div className="flex-grow">
                        <p className="text-label-md font-bold text-on-surface">2.1 Parametric Foundations</p>
                        <p className="text-label-sm text-on-surface-variant">Currently Watching</p>
                      </div>
                    </div>
                    <div className="p-md flex items-center gap-sm hover:bg-surface-container-low transition-colors cursor-pointer group">
                      <span className="material-symbols-outlined text-on-surface-variant group-hover:text-error transition-colors">lock</span>
                      <div className="flex-grow">
                        <p className="text-label-md font-medium text-on-surface-variant">2.2 Advanced Geometry</p>
                        <p className="text-label-sm text-on-surface-variant">24:40</p>
                      </div>
                    </div>
                    <div className="p-md flex items-center gap-sm hover:bg-surface-container-low transition-colors cursor-pointer group">
                      <span className="material-symbols-outlined text-on-surface-variant group-hover:text-error transition-colors">lock</span>
                      <div className="flex-grow">
                        <p className="text-label-md font-medium text-on-surface-variant">2.3 Algorithmic Workflows</p>
                        <p className="text-label-sm text-on-surface-variant">15:20</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Module 3 */}
                <div className="border border-outline-variant/20 rounded-xl overflow-hidden">
                  <div className="bg-surface-container p-md flex justify-between items-center opacity-60">
                    <span className="font-label-md text-on-surface">Module 3: Physical Output</span>
                    <span className="material-symbols-outlined">lock</span>
                  </div>
                </div>
              </div>

              <div className="mt-lg pt-md border-t border-outline-variant/20">
                <h4 className="font-label-md text-on-surface mb-md">Downloadable Resources</h4>
                <div className="space-y-sm">
                  <div className="flex items-center gap-md p-xs hover:bg-surface-container transition-colors rounded-lg cursor-pointer">
                    <div className="bg-error/10 p-xs rounded-lg">
                      <span className="material-symbols-outlined text-error">picture_as_pdf</span>
                    </div>
                    <div className="flex-grow">
                      <p className="text-label-sm font-semibold text-on-surface">Lecture_Slides_V2.pdf</p>
                      <p className="text-[10px] text-on-surface-variant">4.2 MB</p>
                    </div>
                    <span className="material-symbols-outlined text-on-surface-variant text-sm">download</span>
                  </div>
                  <div className="flex items-center gap-md p-xs hover:bg-surface-container transition-colors rounded-lg cursor-pointer">
                    <div className="bg-error/10 p-xs rounded-lg">
                      <span className="material-symbols-outlined text-error">folder_zip</span>
                    </div>
                    <div className="flex-grow">
                      <p className="text-label-sm font-semibold text-on-surface">Project_Files.zip</p>
                      <p className="text-[10px] text-on-surface-variant">128 MB</p>
                    </div>
                    <span className="material-symbols-outlined text-on-surface-variant text-sm">download</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container w-full py-xl mt-xl">
        <div className="flex flex-col md:flex-row justify-between items-center px-lg max-w-container-max mx-auto gap-md">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-h3 text-h3 font-bold text-on-surface">Academia LMS</span>
            <p className="text-on-surface-variant text-body-md mt-xs">© 2024 Academia LMS. Built for Intellectual Rigor.</p>
          </div>
          <div className="flex gap-lg">
            <Link className="text-on-surface-variant font-medium hover:text-error transition-colors" href="/privacy">Privacy Policy</Link>
            <Link className="text-on-surface-variant font-medium hover:text-error transition-colors" href="/terms">Terms of Service</Link>
            <Link className="text-on-surface-variant font-medium hover:text-error transition-colors" href="/cookies">Cookie Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
