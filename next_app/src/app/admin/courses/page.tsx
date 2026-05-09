import Link from 'next/link';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Edit2, BarChart2, Trash2, User, BookOpen, ChevronRight, ArrowRight, Calendar, PlusSquare } from 'lucide-react';

export default function AdminCoursesPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Section Header & Filter Cluster */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Course Management</h1>
          <p className="text-muted-foreground">Review, update, and manage the complete academic catalog.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <Select defaultValue="all-categories">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-categories">All Categories</SelectItem>
              <SelectItem value="mathematics">Mathematics</SelectItem>
              <SelectItem value="philosophy">Philosophy</SelectItem>
              <SelectItem value="computer-science">Computer Science</SelectItem>
              <SelectItem value="fine-arts">Fine Arts</SelectItem>
            </SelectContent>
          </Select>
          <Button asChild className="rounded-[5px]">
            <Link href="/admin/courses/create">
              <PlusSquare className="h-4 w-4 mr-2" />
              New Course
            </Link>
          </Button>
        </div>
      </section>

      {/* Grid of Courses */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: 'Advanced Topology',
            instructor: 'Dr. Eleanor Vance',
            lessons: 24,
            status: 'Published',
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3LmZqF5tJvBVfkNw5gASC3mOX4qZuJDZbhW4yZVQQlQEwOoNsfQ-Z3nPQ3YLSRMoXGwXIPwGDp2-IF4T2ji0Pd5ZPT1zkvoIpjl54cYPwGSWRF8D7weKG3YeDxBTt-Vd03r2wMXTqDanyPq8BOEtKGAFbNWStsWC1qpr0ppPoP0N0wKtOg6ujuPGutYaoZ-_fPL7zG78ODXphLseZWcn8C9VvyGzfnaD3qIMHBulyh84oGL8IQv_iTkEVX_BdsXc26Fy4gZ7d_jk",
            actions: ['edit', 'analytics'],
            footerAction: 'View Details'
          },
          {
            title: 'Ethics in Artificial Intelligence',
            instructor: 'Prof. Marcus Thorne',
            lessons: 12,
            status: 'Draft',
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAh8Q8CmPKOqmgoUDd9EWwUSbIS82s7zESC4NPR0zUdjsnbuTY_3bCfjuQ8wF9wRd0RpnDmQRfsHU-q4zKO8MZPUwpc02BMoINPWqqxYByKl89FMHC3K_5NxNbOeMFu_hQ21wuj1Ez5zNPvIvTbu3Sc_5pxk0WfhdHTYg7yZWJkj5oh2Ddt9k2vcGTEIS7_sGaHPzSe1UtzxRmd927e3cGGQ5FvK85bOi97LdqR1K-bof7RQv_ATWcsaLnzpuA5L1nzzCwaYK5Pb7o",
            actions: ['edit', 'delete'],
            footerAction: 'Continue Editing'
          },
          {
            title: 'History of Modernist Painting',
            instructor: 'Dr. Sarah Jenkins',
            lessons: 18,
            status: 'Published',
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_VpdmCUAKyl-oJdtIMRz4l9OucRqJZZlleZKmjUreZ2j9bqBHqOr9azbAVT9LlSK6ehGdOfPkzx-ZpKz1Mk1HcRP4Ta22kAWgVUVjHTqmGDgq9zomp9Z37DRlnd0O3qVMiWuSOMY0uHsyQbdQR3-J4IJPqSzh88-zXB8T83FLf7Cp3oDF2XJXmk4jRi_Xkf1_dS70lQF4pJR33BV2bVNGzhXSr2aCnikCTl7OtVpDiXC1RsuUrIYsjq9xNtMaISDUx968tECnvYc",
            actions: ['edit', 'analytics'],
            footerAction: 'View Details'
          },
          {
            title: 'Cellular Micro-Biology',
            instructor: 'Prof. Julian Rossi',
            lessons: 32,
            status: 'Published',
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpi-4MQd7GpWlwkypxnL1-mjdbz74LyqXOjMgZFZGH-W8CCm12YkcHYnE0vZN0kBTbzxelz9DzRgCb1Dq5jSsOWx3IH6FAp5k4c9RSaRiqt20z9nQENQVdvvePsCYUtXtzoANG8c5tdRbhwMIjGK-Id4HKzjuZjfhaUCPboH_LL2iYiGisPOJHs4r-EZZbVYG8igfYMVMt_iaNvLXoec_dxfvp5JgwvsC0UWXzqHpUICebzVTjJpBH8Q0mjtQ4jGJv3GS2E7S_PXo",
            actions: ['edit', 'analytics'],
            footerAction: 'View Details'
          }
        ].map((course, i) => (
          <Card key={i} className="overflow-hidden hover:shadow-lg transition-all duration-300 group flex flex-col">
            <div className="relative h-48 w-full shrink-0">
              <img 
                alt={course.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                src={course.img}
              />
              <div className="absolute top-4 left-4">
                <Badge variant={course.status === 'Published' ? 'default' : 'secondary'} className="backdrop-blur-sm bg-background/80">
                  {course.status}
                </Badge>
              </div>
            </div>
            <CardHeader className="p-4 pb-0 flex flex-row items-start justify-between space-y-0">
              <h3 className="font-semibold text-lg line-clamp-1">{course.title}</h3>
              <div className="flex gap-1 shrink-0">
                {course.actions.includes('edit') && <Button variant="ghost" size="icon" className="h-8 w-8"><Edit2 className="h-4 w-4" /></Button>}
                {course.actions.includes('analytics') && <Button variant="ghost" size="icon" className="h-8 w-8 text-primary"><BarChart2 className="h-4 w-4" /></Button>}
                {course.actions.includes('delete') && <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive"><Trash2 className="h-4 w-4" /></Button>}
              </div>
            </CardHeader>
            <CardContent className="p-4 flex-1">
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <User className="h-4 w-4" />
                {course.instructor}
              </p>
            </CardContent>
            <CardFooter className="p-4 pt-0 border-t mt-4 flex justify-between items-center bg-muted/20">
              <div className="flex items-center gap-2 text-muted-foreground mt-4">
                <BookOpen className="h-4 w-4" />
                <span className="text-sm font-medium">{course.lessons} Lessons</span>
              </div>
              <Button variant="link" className="px-0 mt-4 text-primary">
                {course.footerAction} <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </CardFooter>
          </Card>
        ))}

        {/* Course Card 5 (Bento Wide Style) */}
        <Card className="lg:col-span-2 overflow-hidden hover:shadow-lg transition-all duration-300 group flex flex-col md:flex-row">
          <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden shrink-0">
            <img 
              alt="Classical Philosophy: The Stoics" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBg6gdfFfADAaldThSX--T7N0HAj2BgDhznUpZqs81A3DrEokImNLpdNEy03xhGhIB8zc-uXYV49AvByIgyd30AS4AkJoijg5JxAurWhOZbUFpETcZ7w8DEGy9SvWd2APD1N1aiDy4bwgVU_JFnUHYkVn530vKQuHkCTfMGzQJyUGpffQG2e7A0iC-sXEtMJHtEK8Kn5a5RoU4dHY1v6TWQgxjjZjFS-98KE8zPxWdaOTm9f3JKjwNi-1oeRhdtPrO_aFqf_DL9G7c"
            />
            <div className="absolute top-4 left-4">
              <Badge variant="secondary" className="backdrop-blur-sm bg-background/80">Draft</Badge>
            </div>
          </div>
          <div className="p-6 md:w-1/2 flex flex-col justify-center">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold mb-1">Classical Philosophy: The Stoics</h3>
                <p className="text-sm text-muted-foreground">An in-depth exploration of Marcus Aurelius and Seneca.</p>
              </div>
              <Button variant="ghost" size="icon" className="shrink-0"><Edit2 className="h-4 w-4" /></Button>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <User className="h-4 w-4" />
                <span>Dr. Adrian Miles</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Last Edited 2 days ago</span>
              </div>
            </div>

            <div className="mt-auto pt-4 border-t flex flex-col gap-4 sm:flex-row sm:items-center justify-between">
              <div className="flex items-center gap-2 flex-1">
                <Progress value={65} className="h-2 max-w-[120px]" />
                <span className="text-xs text-muted-foreground font-medium">65% Complete</span>
              </div>
              <Button>Resume Draft</Button>
            </div>
          </div>
        </Card>
      </section>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t">
        <p className="text-sm text-muted-foreground">Showing 5 of 48 total courses</p>
        <div className="flex gap-1">
          <Button variant="outline" size="sm" disabled>Prev</Button>
          <Button variant="default" size="sm">1</Button>
          <Button variant="outline" size="sm">2</Button>
          <Button variant="outline" size="sm">3</Button>
          <span className="px-2">...</span>
          <Button variant="outline" size="sm">10</Button>
          <Button variant="outline" size="sm">Next</Button>
        </div>
      </div>
    </div>
  );
}
