import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Search, Download, Users, Verified, UserPlus, MoreVertical, Eye, Edit, Ban, CheckCircle } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function AdminUsersPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="mb-6">
        <h2 className="text-3xl font-bold tracking-tight mb-2">User Management</h2>
        <p className="text-muted-foreground">Monitor student activity, subscription statuses, and account access.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Students</CardTitle>
            <div className="p-2 bg-primary/10 rounded-md">
              <Users className="h-4 w-4 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,240</div>
            <p className="text-xs text-green-600 mt-1">+5% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Subscriptions</CardTitle>
            <div className="p-2 bg-primary/10 rounded-md">
              <Verified className="h-4 w-4 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">856</div>
            <p className="text-xs text-green-600 mt-1">69% retention rate</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">New This Month</CardTitle>
            <div className="p-2 bg-primary/10 rounded-md">
              <UserPlus className="h-4 w-4 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+42</div>
            <p className="text-xs text-muted-foreground mt-1">Awaiting orientation</p>
          </CardContent>
        </Card>
      </div>

      {/* Filter Bar */}
      <Card className="p-4 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              type="search" 
              placeholder="Search by name or email..." 
              className="pl-9 w-full bg-muted/50"
            />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="All Statuses" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button variant="outline" className="w-full md:w-auto gap-2">
          <Download className="h-4 w-4" />
          Export CSV
        </Button>
      </Card>

      {/* Data Table */}
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Registration Date</TableHead>
              <TableHead>Subscription Plan</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              { name: 'John Smith', email: 'john.smith@university.edu', date: 'Oct 12, 2023', plan: 'Pro', status: 'Active', img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBz1Gtj9mbJ1THpmLM9b8yYv96priseLqZewmJJCbxdfdZZM8zc7bRicAmZ3LySs0quRDWQ2qZzbDnpMIwIm1z9OMfNyWbndQUN0MlZIlWj85jqdVZO2AIF2ur263t39fVPKm9jV0xuA5lfaQvSZWmarp6LPBpN0Cae2dNjyXg9RIYKg3VrhK0UoPf1uwQbxAY4D9plBwZ0ErP2bW5OIr7_unXE5UkgpEJCOwRcqhzYbfnsp2jC5Q1e5hxnI3ymCXLfdjyRsmNR-qU" },
              { name: 'Sarah Davis', email: 's.davis@gradschool.com', date: 'Nov 05, 2023', plan: 'Basic', status: 'Inactive', img: "https://lh3.googleusercontent.com/aida-public/AB6AXuABHWWc2-QkndxJe2R0q92NrxNk0OZJ0gjXZJx52Kkf7FDGaogdRzTeMcafpqk1wScSqycYc-Oj_HXLzUDQ9DZZEVjeqZ_Zr5t6RB3_ppWANaIgCJz9h4kRS-w7ONqPMx_BycqDWSY7W-GSvVCGK565ec7dZu4P_4xVnSuWxEcDiWQh4dyBZOHaafS8bt6-DDONd5Tag9PNvyvpM3ZonEfVl0J1593rzr0XtrlH1ZLr8CqptbVtRFD_ZqSZI488dBokwhYRZxMPysI" },
              { name: 'Marcus Rodriguez', email: 'm.rodriguez@techinst.edu', date: 'Dec 01, 2023', plan: 'Pro', status: 'Flagged', img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDk00sdZjH36e6jVEgcuXuqFaEO0RTSRzR71kbI8qXSsf7NUYu4y8ZBUhNZQ8ZivyswZSaez9bkZ8LCfGMcudsuxthqgO2273N5tYJgtbV3lm9r3tRX2XO9PiZKaCqZzgOJZgJ84whrPXD1Katr7Dbn4Dto7YLXEm5Hnn5-KNwpbTt4sWgNDsaHrtL4ZDQ7I5DkfJZhvRjmXkVi73vhdxIdM9XhUXBmiKx4AXwN4Trp5V6DWv6sA8UXX2soPor_0eo2NTQn1pU2q3M" },
              { name: 'Linda Lee', email: 'linda.lee@university.edu', date: 'Dec 15, 2023', plan: 'None', status: 'Active', img: "https://lh3.googleusercontent.com/aida-public/AB6AXuALD6x2jpI679MrIxLK0XS_S6DCjm7EoROq9GoP4ah2uiXs5PaUT7UmYswlDZ6KmUyjVtgii3TpLGyp9-lSh0t7Z_odliU3Fm-FUvMIGg01aIGLGiVZMFYWrRMjZiyi5Bn0s1APXUWRxiGyhtPBEEw95prb8F5vm_NA2drVRjOOQV4I_jgw90ZiEASypWxz3iYHuseVhhTi2SX2XF0K7jOIGbelPRRASEnr3ao8pWxwS9yMOiGOmtbgiyn2z4S4V5x6sfJ6PSBdX-c" },
            ].map((user, i) => (
              <TableRow key={i} className="group">
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={user.img} alt={user.name} />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-xs text-muted-foreground">{user.email}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-muted-foreground">{user.date}</TableCell>
                <TableCell>
                  <Badge variant={user.plan === 'Pro' ? 'default' : 'secondary'}>{user.plan}</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span className={`h-2 w-2 rounded-full ${user.status === 'Active' ? 'bg-green-500' : user.status === 'Inactive' ? 'bg-slate-400' : 'bg-red-500'}`}></span>
                    <span>{user.status}</span>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger render={<Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity" />}>
                      <MoreVertical className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem><Eye className="h-4 w-4 mr-2" /> View Details</DropdownMenuItem>
                      <DropdownMenuItem><Edit className="h-4 w-4 mr-2" /> Edit User</DropdownMenuItem>
                      {user.status === 'Inactive' ? (
                        <DropdownMenuItem className="text-green-600"><CheckCircle className="h-4 w-4 mr-2" /> Activate</DropdownMenuItem>
                      ) : (
                        <DropdownMenuItem className="text-destructive"><Ban className="h-4 w-4 mr-2" /> Suspend</DropdownMenuItem>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination */}
        <div className="p-4 flex items-center justify-between border-t">
          <p className="text-sm text-muted-foreground">Showing 4 of 1,240 students</p>
          <div className="flex gap-1">
            <Button variant="outline" size="sm" disabled>Prev</Button>
            <Button variant="default" size="sm">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">3</Button>
            <span className="px-2">...</span>
            <Button variant="outline" size="sm">124</Button>
            <Button variant="outline" size="sm">Next</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
