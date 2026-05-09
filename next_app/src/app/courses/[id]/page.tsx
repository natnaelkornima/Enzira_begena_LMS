import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Play, Pause, Volume2, Maximize, ChevronLeft, ChevronRight, CheckCircle2, PlayCircle, Lock, FileText, Download, User } from 'lucide-react';
import { BackButton } from '@/components/ui/back-button';

export default function SingleCoursePage() {
  return (
    <div className="bg-background min-h-screen">
      {/* TopAppBar */}
      <header className="bg-card border-b sticky top-0 z-50">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">Academia LMS</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link className="text-muted-foreground hover:text-primary transition-colors" href="/subscriptions">Pricing</Link>
            <Link className="text-foreground border-b-2 border-primary" href="/courses/1">Courses</Link>
            <Link className="text-muted-foreground hover:text-primary transition-colors" href="/about">About</Link>
            <Link className="text-muted-foreground hover:text-primary transition-colors" href="/support">Support</Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost">Login</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-6"><BackButton /></div>
        {/* Header Section: Course Identity & Progress */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Advanced Computational Architecture &amp; Digital Tectonics</h1>
            <p className="text-muted-foreground mt-2 flex items-center gap-2">
              <User className="h-4 w-4" />
              Instructor: Dr. Helena Vance
            </p>
          </div>
          <div className="w-full md:w-64">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Course Progress</span>
              <span className="text-sm font-bold text-primary">64%</span>
            </div>
            <Progress value={64} className="h-2 w-full" />
          </div>
        </div>

        {/* Main Content Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Video Player & Tabs */}
          <div className="lg:col-span-8 space-y-6">
            {/* Video Player Container */}
            <div className="aspect-video bg-black rounded-lg overflow-hidden relative group border">
              <img 
                alt="Architectural Course Video Thumbnail" 
                className="w-full h-full object-cover opacity-80" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMUSAgdNfsR_x9kjjSUCzHadPiheR_KwFyRZkwHI55gIkMaT1pKv8iH8ZOJ-DHpcojNCw7bq4JZPLv3LKnazF0DKk8FGDURzH0z0LFZ5Td0Jgx4ERi7lrRrmViEI2C0Yw94Mnm8yDlD6OmVjmJ6sszmiCeTqSliS0mq1RgJ53x-2JIuLoZmldcml2mkrlhI0NoetQFVOseRTRjvEvQsVE37DXZwAt9N3z1OJEK7TyVGLR3c_qyfHSz0n3pK4wsVv6AOC0pOBGeVLw"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button size="icon" className="h-16 w-16 rounded-full shadow-2xl scale-110 hover:scale-125 transition-transform bg-primary hover:bg-primary">
                  <Play className="h-8 w-8 fill-current ml-1" />
                </Button>
              </div>
              {/* Custom Controls Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex items-center gap-4 text-white">
                <Pause className="h-5 w-5 cursor-pointer" />
                <div className="flex-grow h-1 bg-white/30 rounded-full relative cursor-pointer">
                  <div className="absolute inset-y-0 left-0 w-1/3 bg-primary rounded-full"></div>
                </div>
                <span className="text-xs font-medium">12:45 / 45:00</span>
                <Volume2 className="h-5 w-5 cursor-pointer" />
                <Maximize className="h-5 w-5 cursor-pointer" />
              </div>
            </div>

            {/* Responsive Nav for Player */}
            <div className="flex justify-between items-center bg-card p-4 rounded-lg border">
              <Button variant="ghost" className="gap-2 text-muted-foreground">
                <ChevronLeft className="h-4 w-4" />
                Previous Lesson
              </Button>
              <span className="text-sm font-medium hidden md:block">Lesson 4 of 12: Parametric Foundations</span>
              <Button className="gap-2">
                Next Lesson
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Detail Tabs */}
            <Tabs defaultValue="description" className="w-full">
              <div className="w-full overflow-x-auto pb-2 scrollbar-hide">
                <TabsList className="inline-flex w-max justify-start p-1 bg-muted/30 rounded-full h-auto gap-1 border border-black/5 dark:border-white/5">
                  <TabsTrigger value="description" className="rounded-full px-6 py-2.5 text-sm font-semibold data-[state=active]:bg-background data-[state=active]:shadow-sm data-[state=active]:text-primary transition-all duration-300">Description</TabsTrigger>
                  <TabsTrigger value="resources" className="rounded-full px-6 py-2.5 text-sm font-semibold data-[state=active]:bg-background data-[state=active]:shadow-sm data-[state=active]:text-primary transition-all duration-300">Resources</TabsTrigger>
                  <TabsTrigger value="quiz" className="rounded-full px-6 py-2.5 text-sm font-semibold data-[state=active]:bg-background data-[state=active]:shadow-sm data-[state=active]:text-primary transition-all duration-300">Knowledge Check</TabsTrigger>
                  <TabsTrigger value="discussion" className="rounded-full px-6 py-2.5 text-sm font-semibold data-[state=active]:bg-background data-[state=active]:shadow-sm data-[state=active]:text-primary transition-all duration-300">Discussion</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="description" className="mt-8 space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-3">About this Lesson</h3>
                  <p className="text-muted-foreground leading-loose text-[15px]">
                    In this section, we delve into the core principles of parametric design. We will explore how algorithmic thinking translates into physical structures and how computational tools allow for unprecedented formal experimentation. This lesson focuses on the relationship between mathematical constraints and aesthetic output.
                  </p>
                </div>
                
                <Card className="bg-gradient-to-br from-primary/5 to-transparent border-black/5 dark:border-white/5 rounded-[1.25rem] shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6 flex items-start gap-5">
                    <Avatar className="h-16 w-16 border-2 border-background shadow-sm">
                      <AvatarImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6lFMtygXsJBSM1GSnpiMBNm1AN61R4CDln_sxZM7eAd6ejWLEmAIb1nV59CgPohFDLbxyhUmQ201XYOppinESE8yLgk7D_hsNkq2W1MjqpZQrHElLs_s0EtKCZX5fcH4pe-LnvTK86Ejw1iGI6D4WXsH1dlmb_osQZ_nXHqN5Owof6yl-tNfmcZ4RKq6Kfdds4079PsiC_i0ccsnvLZngS37nmOMuyuXXlJf0IIi_hPAwDpDpFhMpzu6smN6-RNboigAFov7Bqis" />
                      <AvatarFallback>HV</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold text-lg tracking-tight">Dr. Helena Vance</h4>
                      <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">PhD in Computational Design, MIT</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">Helena is a leading figure in digital fabrication and has consulted for major architectural firms worldwide. Her work bridges the gap between complex algorithms and physical material constraints.</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="resources" className="mt-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-6">Downloadable Resources</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="group flex items-center gap-4 p-4 rounded-2xl border border-black/5 dark:border-white/5 bg-gradient-to-br from-primary/5 to-transparent hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:border-primary/20 transition-all duration-300 cursor-pointer">
                    <div className="bg-background shadow-sm border border-black/5 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300 text-primary">
                      <FileText className="h-6 w-6" />
                    </div>
                    <div className="flex-grow">
                      <h5 className="font-bold text-sm tracking-tight text-foreground mb-0.5">Lecture_Slides_V2.pdf</h5>
                      <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest">4.2 MB • PDF Document</p>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <Download className="h-4 w-4" />
                    </div>
                  </div>
                  
                  <div className="group flex items-center gap-4 p-4 rounded-2xl border border-black/5 dark:border-white/5 bg-gradient-to-br from-blue-500/5 to-transparent hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:border-blue-500/20 transition-all duration-300 cursor-pointer">
                    <div className="bg-background shadow-sm border border-black/5 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300 text-blue-600">
                      <FileText className="h-6 w-6" />
                    </div>
                    <div className="flex-grow">
                      <h5 className="font-bold text-sm tracking-tight text-foreground mb-0.5">Project_Files.zip</h5>
                      <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest">128 MB • ZIP Archive</p>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <Download className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="quiz" className="mt-6">
                <Card className="border-primary/20 shadow-md">
                  <CardContent className="p-8">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-2xl font-bold tracking-tight">Module 2 Assessment</h3>
                      <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">3 Questions</span>
                    </div>
                    <p className="text-muted-foreground mb-8">Test your understanding of parametric foundations before moving to the next module.</p>
                    
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <p className="font-semibold text-lg">1. Which of the following best describes 'algorithmic thinking' in design?</p>
                        <div className="grid grid-cols-1 gap-3">
                          <label className="flex items-center p-4 border rounded-xl cursor-pointer hover:bg-muted/50 transition-colors">
                            <input type="radio" name="q1" className="mr-4 h-4 w-4 accent-primary" />
                            <span>Creating manual drawings based on algorithms.</span>
                          </label>
                          <label className="flex items-center p-4 border-2 border-primary bg-primary/5 rounded-xl cursor-pointer transition-colors">
                            <input type="radio" name="q1" defaultChecked className="mr-4 h-4 w-4 accent-primary" />
                            <span className="font-medium text-primary">Defining rules and constraints to generate forms.</span>
                          </label>
                          <label className="flex items-center p-4 border rounded-xl cursor-pointer hover:bg-muted/50 transition-colors">
                            <input type="radio" name="q1" className="mr-4 h-4 w-4 accent-primary" />
                            <span>Using software to render final images.</span>
                          </label>
                        </div>
                      </div>
                      
                      <div className="pt-6 border-t flex justify-end">
                        <Button size="lg" className="px-8 shadow-md">Submit Answer</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="discussion" className="mt-6">
                <div className="text-center py-10 text-muted-foreground">
                  Discussion forum loading...
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column: Lesson Accordion */}
          <div className="lg:col-span-4">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Course Content</h3>
                <Accordion defaultValue={["module-2"]} className="space-y-3">
                  
                  {/* Module 1 */}
                  <AccordionItem value="module-1" className="border rounded-lg px-2">
                    <AccordionTrigger className="hover:no-underline py-3">
                      <span className="text-sm font-medium">Module 1: Foundations</span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-3 space-y-1">
                      <div className="p-2 flex items-center gap-3 bg-muted/50 rounded-md">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        <div className="flex-grow">
                          <p className="text-sm font-semibold">1.1 Introduction to Tectonics</p>
                          <p className="text-xs text-muted-foreground">12:30</p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Module 2 (Active) */}
                  <AccordionItem value="module-2" className="border rounded-lg px-2">
                    <AccordionTrigger className="hover:no-underline py-3">
                      <span className="text-sm font-medium">Module 2: Parametric Modeling</span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-3 space-y-1">
                      <div className="p-2 flex items-center gap-3 bg-primary/5 border-l-4 border-primary rounded-r-md">
                        <PlayCircle className="h-4 w-4 text-primary" />
                        <div className="flex-grow">
                          <p className="text-sm font-bold text-foreground">2.1 Parametric Foundations</p>
                          <p className="text-xs text-muted-foreground">Currently Watching</p>
                        </div>
                      </div>
                      <div className="p-2 flex items-center gap-3 hover:bg-muted transition-colors rounded-md cursor-pointer group">
                        <Lock className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        <div className="flex-grow">
                          <p className="text-sm font-medium text-muted-foreground">2.2 Advanced Geometry</p>
                          <p className="text-xs text-muted-foreground">24:40</p>
                        </div>
                      </div>
                      <div className="p-2 flex items-center gap-3 hover:bg-muted transition-colors rounded-md cursor-pointer group">
                        <Lock className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        <div className="flex-grow">
                          <p className="text-sm font-medium text-muted-foreground">2.3 Algorithmic Workflows</p>
                          <p className="text-xs text-muted-foreground">15:20</p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Module 3 */}
                  <AccordionItem value="module-3" className="border rounded-lg px-2 opacity-60">
                    <AccordionTrigger className="hover:no-underline py-3" disabled>
                      <span className="text-sm font-medium flex items-center justify-between w-full pr-4">
                        Module 3: Physical Output
                        <Lock className="h-4 w-4" />
                      </span>
                    </AccordionTrigger>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 mt-12">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-muted-foreground">
          © 2024 Academia LMS. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
