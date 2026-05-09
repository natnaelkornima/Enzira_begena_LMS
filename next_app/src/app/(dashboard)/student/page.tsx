import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, CheckCircle, Award, ChevronRight, Flame, Trophy, Star, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { BackButton } from '@/components/ui/back-button';

export default function StudentDashboardPage() {
  return (
    <div className="p-8 md:p-12 max-w-7xl mx-auto space-y-10 animate-in fade-in duration-500">
      {/* Welcome Section */}
      <header className="flex flex-col md:flex-row justify-between items-end gap-8">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Welcome back, Natnael.</h1>
          <p className="text-muted-foreground mt-2 text-lg">You're making great progress. Keep it up!</p>
        </div>
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search courses..." 
            className="pl-10 h-11 bg-muted/20 border-border/50 focus-visible:ring-1 focus-visible:ring-primary/20 rounded-[5px]" 
          />
        </div>
      </header>

      {/* High-Level Progress Stats */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="p-5 flex flex-row items-center gap-5 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-primary/10 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden">
          <div className="absolute -right-4 -top-4 h-24 w-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
          <div className="flex items-center justify-center h-14 w-14 shrink-0 rounded-2xl bg-background/50 backdrop-blur-sm shadow-sm border border-primary/20 text-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 z-10">
            <BookOpen className="h-6 w-6" />
          </div>
          <div className="flex flex-col justify-center z-10">
            <p className="text-sm font-semibold text-muted-foreground mb-1">Enrolled Courses</p>
            <h3 className="text-3xl font-extrabold tracking-tight leading-none text-foreground">4</h3>
          </div>
        </Card>
        
        <Card className="p-5 flex flex-row items-center gap-5 bg-gradient-to-br from-green-500/10 via-green-500/5 to-transparent border-green-500/10 hover:border-green-500/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden">
          <div className="absolute -right-4 -top-4 h-24 w-24 bg-green-500/5 rounded-full blur-2xl group-hover:bg-green-500/10 transition-colors"></div>
          <div className="flex items-center justify-center h-14 w-14 shrink-0 rounded-2xl bg-background/50 backdrop-blur-sm shadow-sm border border-green-500/20 text-green-600 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 z-10">
            <CheckCircle className="h-6 w-6" />
          </div>
          <div className="flex flex-col justify-center z-10">
            <p className="text-sm font-semibold text-muted-foreground mb-1">Completed Lessons</p>
            <h3 className="text-3xl font-extrabold tracking-tight leading-none text-foreground">28</h3>
          </div>
        </Card>
        
        <Card className="p-5 flex flex-row items-center gap-5 bg-gradient-to-br from-yellow-500/10 via-yellow-500/5 to-transparent border-yellow-500/10 hover:border-yellow-500/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden">
          <div className="absolute -right-4 -top-4 h-24 w-24 bg-yellow-500/5 rounded-full blur-2xl group-hover:bg-yellow-500/10 transition-colors"></div>
          <div className="flex items-center justify-center h-14 w-14 shrink-0 rounded-2xl bg-background/50 backdrop-blur-sm shadow-sm border border-yellow-500/20 text-yellow-600 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 z-10">
            <Award className="h-6 w-6" />
          </div>
          <div className="flex flex-col justify-center z-10">
            <p className="text-sm font-semibold text-muted-foreground mb-1">Certificates</p>
            <h3 className="text-3xl font-extrabold tracking-tight leading-none text-foreground">1</h3>
          </div>
        </Card>
      </section>



      {/* Courses Grid */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold tracking-tight">In Progress</h2>
          <Button variant="ghost" className="text-sm text-primary">View all <ChevronRight className="h-4 w-4 ml-1" /></Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Principles of Visual Narrative",
              instructor: "Dr. Elena Rostova",
              progress: 68,
              level: "Advanced",
              color: "from-blue-500/20 to-indigo-500/20",
            },
            {
              title: "Quantitative Financial Theory",
              instructor: "Prof. Marcus Sterling",
              progress: 32,
              level: "Mastery",
              color: "from-emerald-500/20 to-teal-500/20",
            },
            {
              title: "Modern Web Architecture",
              instructor: "Sarah Jenkins, Senior Eng.",
              progress: 91,
              level: "Intermediate",
              color: "from-orange-500/20 to-rose-500/20",
            }
          ].map((course, i) => (
            <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group flex flex-col">
              <div className={cn("relative h-40 bg-gradient-to-br", course.color)}>
                <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:scale-110 transition-transform duration-500">
                  <BookOpen className="h-12 w-12" />
                </div>
                <div className="absolute top-3 left-3">
                  <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm uppercase tracking-widest text-[10px] font-bold text-primary">
                    {course.level}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-5 flex-1 flex flex-col">
                <h4 className="text-lg font-semibold mb-1 line-clamp-1">{course.title}</h4>
                <p className="text-sm text-muted-foreground mb-6">{course.instructor}</p>
                
                <div className="mt-auto space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-bold">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </div>
                
                <Button className="w-full" asChild>
                  <Link href={`/courses/${i + 1}`}>Continue Learning</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
