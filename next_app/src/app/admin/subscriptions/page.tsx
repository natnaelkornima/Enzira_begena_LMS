import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Calendar, Download, Eye, CheckCircle, XCircle, Clock, DollarSign, X } from 'lucide-react';

export default function AdminSubscriptionsPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Page Header & Filters */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-2">Subscription Approvals</h2>
          <p className="text-muted-foreground">Manage and verify manual payment submissions for student enrollments.</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Select defaultValue="pending">
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pending">Status: Pending</SelectItem>
              <SelectItem value="approved">Status: Approved</SelectItem>
              <SelectItem value="rejected">Status: Rejected</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="gap-2 font-normal justify-start text-muted-foreground w-[220px]">
            <Calendar className="h-4 w-4" />
            Oct 01 - Oct 31, 2023
          </Button>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export CSV
          </Button>
        </div>
      </div>

      {/* Dashboard Analytics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Pending</CardTitle>
            <Clock className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">128</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Today's Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2,450.00</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Avg. Approval Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.2 hrs</div>
          </CardContent>
        </Card>
      </div>

      {/* Data Table Card */}
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Transaction ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              { init: 'JD', name: 'Julianne Devis', email: 'j.devis@university.edu', txn: 'TXN-882910394', date: 'Oct 24, 2023', amt: '$199.00', status: 'Pending' },
              { init: 'MK', name: 'Marcus Knight', email: 'm.knight@enzira.org', txn: 'TXN-773821094', date: 'Oct 23, 2023', amt: '$49.00', status: 'Pending' },
              { init: 'SL', name: 'Sarah Lopez', email: 's.lopez@edu.net', txn: 'TXN-112093485', date: 'Oct 23, 2023', amt: '$129.00', status: 'Pending' },
            ].map((row, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-primary/10 text-primary text-xs">{row.init}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{row.name}</p>
                      <p className="text-xs text-muted-foreground">{row.email}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="font-mono text-xs text-muted-foreground">{row.txn}</TableCell>
                <TableCell className="text-muted-foreground">{row.date}</TableCell>
                <TableCell className="font-bold">{row.amt}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                    {row.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-1">
                    <Button variant="ghost" size="icon" title="View Receipt">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-green-600 hover:text-green-700 hover:bg-green-50" title="Approve">
                      <CheckCircle className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive hover:bg-destructive/10" title="Reject">
                      <XCircle className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="p-4 border-t flex items-center justify-between">
          <p className="text-sm text-muted-foreground">Showing 3 of 128 submissions</p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled>Previous</Button>
            <Button size="sm">Next</Button>
          </div>
        </div>
      </Card>
      
      {/* Receipt Preview Floating Card (Visual Mockup of a Modal/Preview) */}
      <Card className="fixed bottom-6 right-6 w-80 shadow-2xl z-50 p-4 border-muted">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h4 className="font-semibold text-sm">Receipt Preview</h4>
            <p className="text-xs text-muted-foreground">TXN-882910394</p>
          </div>
          <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full">
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="aspect-[3/4] bg-muted rounded-md overflow-hidden mb-4 border">
          <img 
            alt="Payment Receipt" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIWkVt08yWgSDe1ykwKK5l3HqoBtR56XuqUc_i6i0r2GrnmUIE4xLGQIQ9Bnz9aTUbQATTDsTB9PtCAyxNlLnOIqiLZUZn46h4w3P2Xa6wMf9zkl1hxTIB292bkqLgzfU4K8amxRcuVpi7hehxiKBYBvDy4GHqJkeHByUK29lsW-ykEeIuYMk-V7LaHdoHg8CahTqMaZ7ca0r8jUUEVcTou6DxBJYD67nziH_RvMiC1Nqrz8aesbg8PekX2J5jmlbLkLuKbxYMrBs"
          />
        </div>
        <div className="space-y-2">
          <Button className="w-full">Approve Transaction</Button>
          <Button variant="outline" className="w-full text-destructive hover:bg-destructive/10">Reject Transaction</Button>
        </div>
      </Card>
    </div>
  );
}
