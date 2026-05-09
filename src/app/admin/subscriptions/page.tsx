'use client';

import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Calendar, Download, Eye, CheckCircle, XCircle, Clock, DollarSign, ChevronRight, FileText, ExternalLink, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function AdminSubscriptionsPage() {
  const [selectedId, setSelectedId] = useState(0);

  const submissions = [
    { id: 0, init: 'JD', name: 'Julianne Devis', email: 'j.devis@university.edu', txn: 'TXN-882910394', date: 'Oct 24, 2023', amt: '$199.00', status: 'Pending', img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIWkVt08yWgSDe1ykwKK5l3HqoBtR56XuqUc_i6i0r2GrnmUIE4xLGQIQ9Bnz9aTUbQATTDsTB9PtCAyxNlLnOIqiLZUZn46h4w3P2Xa6wMf9zkl1hxTIB292bkqLgzfU4K8amxRcuVpi7hehxiKBYBvDy4GHqJkeHByUK29lsW-ykEeIuYMk-V7LaHdoHg8CahTqMaZ7ca0r8jUUEVcTou6DxBJYD67nziH_RvMiC1Nqrz8aesbg8PekX2J5jmlbLkLuKbxYMrBs" },
    { id: 1, init: 'MK', name: 'Marcus Knight', email: 'm.knight@enzira.org', txn: 'TXN-773821094', date: 'Oct 23, 2023', amt: '$49.00', status: 'Pending', img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAh8Q8CmPKOqmgoUDd9EWwUSbIS82s7zESC4NPR0zUdjsnbuTY_3bCfjuQ8wF9wRd0RpnDmQRfsHU-q4zKO8MZPUwpc02BMoINPWqqxYByKl89FMHC3K_5NxNbOeMFu_hQ21wuj1Ez5zNPvIvTbu3Sc_5pxk0WfhdHTYg7yZWJkj5oh2Ddt9k2vcGTEIS7_sGaHPzSe1UtzxRmd927e3cGGQ5FvK85bOi97LdqR1K-bof7RQv_ATWcsaLnzpuA5L1nzzCwaYK5Pb7o" },
    { id: 2, init: 'SL', name: 'Sarah Lopez', email: 's.lopez@edu.net', txn: 'TXN-112093485', date: 'Oct 23, 2023', amt: '$129.00', status: 'Pending', img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_VpdmCUAKyl-oJdtIMRz4l9OucRqJZZlleZKmjUreZ2j9bqBHqOr9azbAVT9LlSK6ehGdOfPkzx-ZpKz1Mk1HcRP4Ta22kAWgVUVjHTqmGDgq9zomp9Z37DRlnd0O3qVMiWuSOMY0uHsyQbdQR3-J4IJPqSzh88-zXB8T83FLf7Cp3oDF2XJXmk4jRi_Xkf1_dS70lQF4pJR33BV2bVNGzhXSr2aCnikCTl7OtVpDiXC1RsuUrIYsjq9xNtMaISDUx968tECnvYc" },
  ];

  const current = submissions[selectedId];

  return (
    <div className="p-6 max-w-[1600px] mx-auto space-y-8 animate-in fade-in duration-700">
      {/* Dynamic Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="space-y-1">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground">Submission Queue</h2>
          <p className="text-muted-foreground">Verify manual payments and student enrollments.</p>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 bg-muted/30 p-1 rounded-[5px] border border-border/50">
            <Button variant="ghost" size="sm" className="h-8 rounded-[5px] px-4 font-bold text-xs bg-background shadow-sm">Pending</Button>
            <Button variant="ghost" size="sm" className="h-8 rounded-[5px] px-4 font-bold text-xs text-muted-foreground hover:text-foreground">Approved</Button>
            <Button variant="ghost" size="sm" className="h-8 rounded-[5px] px-4 font-bold text-xs text-muted-foreground hover:text-foreground">Rejected</Button>
          </div>
          <Button variant="outline" className="rounded-[5px] border-border/50 gap-2 h-10 px-4">
            <Calendar className="h-4 w-4 text-primary" />
            <span className="text-sm">Filter by Date</span>
          </Button>
          <Button variant="outline" className="rounded-[5px] border-border/50 h-10 px-4">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Modern High-Impact Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Pending Approvals', value: '128', icon: Clock, color: 'text-primary', bg: 'bg-primary/5' },
          { label: 'Revenue Today', value: '$2,450', icon: DollarSign, color: 'text-green-600', bg: 'bg-green-50' },
          { label: 'Verified Subs', value: '1.2k', icon: ShieldCheck, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'Avg. Time', value: '4.2h', icon: Clock, color: 'text-orange-600', bg: 'bg-orange-50' },
        ].map((stat, i) => (
          <Card key={i} className="rounded-[5px] border-border/50 hover:border-primary/20 transition-colors">
            <CardContent className="p-5 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                <p className="text-2xl font-extrabold mt-1">{stat.value}</p>
              </div>
              <div className={cn("h-12 w-12 rounded-[5px] flex items-center justify-center", stat.bg, stat.color)}>
                <stat.icon className="h-6 w-6" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Compact Table */}
        <div className="lg:col-span-8">
          <Card className="rounded-[5px] border-border/50 overflow-hidden shadow-sm h-full">
            <Table>
              <TableHeader className="bg-muted/30">
                <TableRow>
                  <TableHead className="font-bold">Student</TableHead>
                  <TableHead className="font-bold">Transaction</TableHead>
                  <TableHead className="font-bold">Date</TableHead>
                  <TableHead className="font-bold">Amount</TableHead>
                  <TableHead className="text-right font-bold">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {submissions.map((row, i) => (
                  <TableRow 
                    key={i} 
                    className={cn(
                      "group cursor-pointer transition-colors",
                      selectedId === i ? "bg-primary/5" : "hover:bg-muted/30"
                    )}
                    onClick={() => setSelectedId(i)}
                  >
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-9 w-9 border">
                          <AvatarFallback className="bg-primary/5 text-primary font-bold text-xs">{row.init}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-bold text-sm">{row.name}</p>
                          <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{row.email}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="font-mono text-[11px] text-muted-foreground">{row.txn}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">{row.date}</TableCell>
                    <TableCell className="font-extrabold text-sm text-primary">{row.amt}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon" className={cn(
                        "h-8 w-8 rounded-[5px] transition-all",
                        selectedId === i ? "bg-primary text-white" : "text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                      )}>
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="p-4 border-t flex items-center justify-between bg-muted/10">
              <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">Page 1 of 12</p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="h-8 rounded-[5px] text-xs font-bold" disabled>Prev</Button>
                <Button variant="outline" size="sm" className="h-8 rounded-[5px] text-xs font-bold">Next</Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column: Dynamic Detail Pane */}
        <div className="lg:col-span-4 space-y-6">
          <Card className="rounded-[5px] border-border/40 sticky top-24 overflow-hidden bg-card shadow-sm">
            <div className="p-6 space-y-8">
              {/* Sleek Header */}
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold tracking-tight text-foreground">Transaction Detail</h3>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{current.txn}</p>
                </div>
                <Badge className="rounded-[5px] bg-primary/10 text-primary border-none text-[10px] px-2 py-0.5 font-bold">
                  {current.status}
                </Badge>
              </div>

              {/* Minimalist Image Preview */}
              <div className="group relative aspect-[4/5] rounded-[5px] overflow-hidden bg-muted/30 border border-border/50">
                <img 
                  alt="Receipt" 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500" 
                  src={current.img}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <Button variant="secondary" size="sm" className="w-full rounded-[5px] text-[10px] font-bold h-8">
                    <ExternalLink className="h-3 w-3 mr-2" /> View Full Receipt
                  </Button>
                </div>
              </div>

              {/* Info List */}
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-border/40">
                  <span className="text-xs text-muted-foreground font-medium">Payment Amount</span>
                  <span className="text-sm font-extrabold text-primary">{current.amt}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/40">
                  <span className="text-xs text-muted-foreground font-medium">Submission Date</span>
                  <span className="text-sm font-bold">{current.date}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 pt-2">
                <Button className="w-full rounded-[5px] h-12 font-bold shadow-lg shadow-primary/10">
                  Approve Subscription
                </Button>
                <Button variant="ghost" className="w-full rounded-[5px] h-12 text-destructive hover:bg-destructive/5 font-bold text-xs">
                  Reject Submission
                </Button>
              </div>
            </div>
          </Card>

          {/* Verification Helper */}
          <div className="p-6 bg-primary rounded-[5px] text-primary-foreground space-y-4 shadow-xl">
            <div className="h-10 w-10 rounded-[5px] bg-white/20 flex items-center justify-center">
              <FileText className="h-5 w-5 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-sm">Need verification?</h4>
              <p className="text-[11px] text-primary-foreground/70 leading-relaxed mt-1">
                All manual submissions are cross-referenced with bank statements every 24 hours.
              </p>
            </div>
            <Button variant="secondary" size="sm" className="w-full rounded-[5px] font-bold text-xs gap-2">
              <ExternalLink className="h-3 w-3" /> View Bank Records
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
