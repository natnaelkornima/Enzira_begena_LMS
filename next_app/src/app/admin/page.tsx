"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, GraduationCap, DollarSign, AlertCircle, ArrowUpRight, MoreVertical, UserPlus, BookOpen, CheckCircle, PlusSquare } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export default function AdminDashboardPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Stats Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Users</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,240</div>
            <p className="text-xs text-green-600 flex items-center mt-1">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              12% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Students</CardTitle>
            <GraduationCap className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">856</div>
            <p className="text-xs text-green-600 flex items-center mt-1">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              5% increase
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,450</div>
            <p className="text-xs text-green-600 flex items-center mt-1">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              $2.4k this week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Pending Approvals</CardTitle>
            <AlertCircle className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-primary flex items-center mt-1">
              Requires attention
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Main Insights Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Growth */}
        <Card className="lg:col-span-2 flex flex-col">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Revenue Growth</CardTitle>
              <CardDescription>Annual institutional earnings overview</CardDescription>
            </div>
            <div className="flex gap-2">
              <Badge variant="outline">Yearly</Badge>
              <Badge>Monthly</Badge>
            </div>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col justify-end">
            <div className="w-full h-48 bg-background border rounded-xl relative overflow-hidden mb-6 p-4 flex items-end justify-between gap-2 group">
              {/* Interactive Bar Chart using standard Tailwind */}
              {[40, 60, 45, 80, 55, 90, 75, 100, 65, 85, 70, 95].map((val, i) => (
                <div key={i} className="relative flex-1 flex flex-col justify-end h-full group/bar">
                  {/* Tooltip */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity z-10 pointer-events-none whitespace-nowrap">
                    ${(val * 120).toLocaleString()}
                  </div>
                  {/* Bar */}
                  <div 
                    className="w-full bg-primary/20 hover:bg-primary transition-colors rounded-t-sm" 
                    style={{ height: `${val}%` }} 
                  />
                </div>
              ))}
            </div>
            <div className="grid grid-cols-4 pt-4 border-t">
              <div className="text-center">
                <p className="text-xs text-muted-foreground">Projected</p>
                <p className="text-lg font-bold text-primary">$15.2k</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-muted-foreground">Avg/Course</p>
                <p className="text-lg font-bold">$420</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-muted-foreground">Retention</p>
                <p className="text-lg font-bold">94%</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-muted-foreground">New Enroll</p>
                <p className="text-lg font-bold">242</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="lg:col-span-1">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Activity</CardTitle>
            <Button variant="link" className="px-0 h-auto text-primary">View All</Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { icon: UserPlus, title: 'Sarah Jenkins', action: 'joined', desc: 'Medical Sciences • 2m ago', color: 'text-green-600', bg: 'bg-green-100' },
              { icon: BookOpen, title: 'David Miller', action: 'enrolled in', desc: 'Advanced Calculus • 15m ago', color: 'text-blue-600', bg: 'bg-blue-100' },
              { icon: CheckCircle, title: 'Ethics 101', action: 'was approved', desc: 'Curriculum Review • 1h ago', color: 'text-yellow-600', bg: 'bg-yellow-100' },
              { icon: PlusSquare, title: 'Prof. Watson', action: 'created', desc: 'Organic Chemistry • 3h ago', color: 'text-purple-600', bg: 'bg-purple-100' },
              { icon: UserPlus, title: 'Elena Rodriguez', action: 'joined', desc: 'Modern History • 5h ago', color: 'text-green-600', bg: 'bg-green-100' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 ${item.bg} ${item.color}`}>
                  <item.icon className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">
                    {item.title} <span className="font-normal text-muted-foreground">{item.action}</span>
                  </p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Detailed Table Section */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between border-b pb-4">
          <CardTitle>Institutional Enrollment Queue</CardTitle>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => alert('Downloading CSV...')}>Export CSV</Button>
            <Button>Bulk Approve</Button>
          </div>
        </CardHeader>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Full Name</TableHead>
              <TableHead>Course Program</TableHead>
              <TableHead>Registration Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              { init: 'AW', name: 'Arthur Wright', course: 'Computer Science Honors', date: 'Oct 24, 2023', status: 'Approved', badge: 'bg-green-100 text-green-800 hover:bg-green-100/80' },
              { init: 'MB', name: 'Marcus Bennett', course: 'Applied Economics', date: 'Oct 24, 2023', status: 'Pending', badge: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100/80' },
              { init: 'CH', name: 'Catherine Hill', course: 'Political Philosophy', date: 'Oct 23, 2023', status: 'Approved', badge: 'bg-green-100 text-green-800 hover:bg-green-100/80' },
              { init: 'LS', name: 'Linda Sullivan', course: 'Biochemistry Research', date: 'Oct 23, 2023', status: 'Flagged', badge: 'bg-red-100 text-red-800 hover:bg-red-100/80' },
              { init: 'JK', name: 'Julian King', course: 'Modern Architecture', date: 'Oct 22, 2023', status: 'Approved', badge: 'bg-green-100 text-green-800 hover:bg-green-100/80' },
            ].map((row, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold text-xs">{row.init}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{row.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-muted-foreground">{row.course}</TableCell>
                <TableCell className="text-muted-foreground">{row.date}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className={row.badge}>{row.status}</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
