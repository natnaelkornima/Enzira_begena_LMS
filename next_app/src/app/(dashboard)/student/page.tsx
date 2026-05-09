import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, CheckCircle, Award, ChevronRight, Flame, Trophy, Star } from 'lucide-react';
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
        <Card className="p-4 flex items-center space-x-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDhSkIJlFXZ_jlLgn-J8XkIT8PgBqrNdUuqVblQswdJzDJo_WeUBOBQVwhqYiKU_58eXC1Hx6h75vm-W-pnceMBbQBwPLlWQMr84Zhs4NhDLZx656p5pDup7YJp0LMNFg3i0fufE9QqvqaxG6U1Qa4dt6sdSZQJuhZCXgzPlta8zJf_Rwg_-c6sESBDZvTGiXFZ82anRsq8UG1js6x3SUR4a3d_E3y3YpBawQsuzYYo-36w2EDW1vofNn8WdGSHaTVMnvrip-jZRk" />
            <AvatarFallback>JT</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-sm">Julian Thorne</p>
            <p className="text-xs text-muted-foreground">Academic Year 2024</p>
          </div>
        </Card>
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

      {/* Gamification Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="flex flex-col border-primary/20 bg-gradient-to-br from-primary/5 to-transparent hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
          <CardHeader className="pb-2 flex flex-row items-center justify-between">
            <CardTitle className="text-xl tracking-tight">Current Streak</CardTitle>
            <Flame className="h-5 w-5 text-orange-500" />
          </CardHeader>
          <CardContent className="flex items-center gap-6">
            <div className="flex-1">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-orange-500">12</span>
                <span className="text-muted-foreground font-medium">days</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">You're on fire! Keep learning every day to unlock the 30-day badge.</p>
            </div>
            <div className="hidden sm:flex gap-1">
              {[1, 2, 3, 4, 5, 6, 7].map((day, i) => (
                <div key={i} className={cn("w-6 h-8 rounded-md flex flex-col items-center justify-end p-1", i < 5 ? "bg-orange-500/20" : "bg-muted")}>
                  <div className={cn("w-full rounded-sm", i < 5 ? "bg-orange-500 h-3" : "bg-muted-foreground/20 h-1")} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
          <CardHeader className="pb-2 flex flex-row items-center justify-between">
            <CardTitle className="text-xl tracking-tight">Recent Achievements</CardTitle>
            <Button variant="link" className="text-xs h-auto p-0">View All</Button>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 mt-2">
              <div className="flex flex-col items-center gap-2 group cursor-pointer">
                <div className="h-14 w-14 rounded-full bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20 group-hover:scale-110 transition-transform">
                  <Trophy className="h-6 w-6 text-yellow-600" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground text-center">Fast Learner</span>
              </div>
              <div className="flex flex-col items-center gap-2 group cursor-pointer">
                <div className="h-14 w-14 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:scale-110 transition-transform">
                  <Star className="h-6 w-6 text-blue-600" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground text-center">Perfect Score</span>
              </div>
              <div className="flex flex-col items-center gap-2 group cursor-pointer opacity-40 grayscale">
                <div className="h-14 w-14 rounded-full bg-muted flex items-center justify-center border border-border">
                  <CheckCircle className="h-6 w-6 text-muted-foreground" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground text-center">30 Day Streak</span>
              </div>
            </div>
          </CardContent>
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
