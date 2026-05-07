import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, CheckCircle, Award, ChevronRight } from 'lucide-react';

export default function StudentDashboardPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8">
      {/* Welcome Section */}
      <header className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-2">Welcome back, Julian!</h2>
          <p className="text-muted-foreground">You've completed 75% of your weekly goals. Keep up the momentum.</p>
        </div>
        <Card className="p-4 flex items-center space-x-4 border-muted/50">
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
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="flex items-center p-6 space-x-4">
          <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
            <BookOpen className="h-6 w-6" />
          </div>
          <div>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">In Progress</p>
            <p className="text-2xl font-bold mt-1">4</p>
          </div>
        </Card>
        <Card className="flex items-center p-6 space-x-4">
          <div className="h-12 w-12 bg-green-500/10 rounded-lg flex items-center justify-center text-green-600">
            <CheckCircle className="h-6 w-6" />
          </div>
          <div>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Completed</p>
            <p className="text-2xl font-bold mt-1">12</p>
          </div>
        </Card>
        <Card className="flex items-center p-6 space-x-4">
          <div className="h-12 w-12 bg-yellow-500/10 rounded-lg flex items-center justify-center text-yellow-600">
            <Award className="h-6 w-6" />
          </div>
          <div>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Certificates</p>
            <p className="text-2xl font-bold mt-1">8</p>
          </div>
        </Card>
      </section>

      {/* Course Grid */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">Continue Learning</h3>
          <Button variant="link" asChild className="text-primary px-0">
            <Link href="/courses">View all courses <ChevronRight className="h-4 w-4 ml-1" /></Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {[
            {
              title: "Principles of Visual Narrative",
              instructor: "Dr. Elena Rostova",
              progress: 68,
              level: "Advanced",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCO4eznOM8amD3kg09Flak6yD4E1nk9K0DM6O41eZiy2xcyP6ag-vEnDfq6ESldjPBhaxYQ38O60Z0y_etkhQ03Nk8_WR_U2msJH56ZIZvIGg7wKav7ySMafP8SQuGaobbRwo0n5hxmDol0ONaqgqz1Bhj7zKQOAh3GExF8IkOyHOGTAa3pfz1ItacUoJnq6aou4JW2q9sVxbw2ew5aWgqztZmMVtvGkzovZ8cvVzT1D7dHMMFZzddPJSJ9154I_R1xKpXeXmxQv1A",
            },
            {
              title: "Quantitative Financial Theory",
              instructor: "Prof. Marcus Sterling",
              progress: 32,
              level: "Mastery",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjV-5ZomSh5wO98B-vX-HTSYzR-V9AlPUvW5VEclQ1rst6S2g50uJPmy0zV36nvUugRVc3NpFWOGcYO_rh_6ozjcqsxzh5IwXiDRrqJfg42z20aCb1PAdp6L8q8Cz2dqb8gFL12qkvj-xikipdIanlukdkBiQe5bpx7HQkdTOYVbrldskwXSbyGG7CiXqcKVlBSBpvFNQQRECrLHXvTgL7kk6syZn8Sa3rw-46bvCB7_TKvjOVGv2tCXVdD_riWkSduhKvCSj2KPg",
            },
            {
              title: "Modern Web Architecture",
              instructor: "Sarah Jenkins, Senior Eng.",
              progress: 91,
              level: "Intermediate",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDK7JdiYvCDTo3tumsT9GvhnHfGRtDcLFYotgD6dMRVCJ1Kf0I6pmwZDMi4_4fFxcjikF6iUE-rB3zdanWheLhcrf5sDF8eaMiXcz8-Yu2R0lwFEHjovwe2Qovu1KK_BEV9DzQ2KaNBrd39mxfPm0bCskZhboMz-1gOcrDDq8fFWZY39IeVeQsLLTF1wrk37ddny9W_Rzlme7j6yG6PzjuTq16oEJXAf6MhVzCk1JehVV2XVLAN8r6v-KuCWSS-TY2Db2T78CuUqiU",
            }
          ].map((course, i) => (
            <Card key={i} className="overflow-hidden hover:shadow-lg transition-all duration-300 group flex flex-col">
              <div className="relative h-48">
                <img 
                  alt={course.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  src={course.img}
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm uppercase tracking-widest text-[10px] font-bold text-primary">
                    {course.level}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6 flex-1 flex flex-col">
                <h4 className="text-xl font-semibold mb-1 line-clamp-1">{course.title}</h4>
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
