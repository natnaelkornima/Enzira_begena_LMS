'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Building, 
  Shield, 
  Bell, 
  CreditCard, 
  Globe, 
  Save, 
  Lock, 
  Mail, 
  Smartphone,
  Eye,
  Trash2,
  Plus
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function AdminSettingsPage() {
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => setIsSaving(false), 2000);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">System Settings</h1>
          <p className="text-muted-foreground">Manage your institution's global configurations and security.</p>
        </div>
        <Button onClick={handleSave} disabled={isSaving} className="rounded-[5px] h-11 px-8 shadow-lg shadow-primary/20">
          {isSaving ? 'Saving...' : 'Save All Changes'}
          {!isSaving && <Save className="ml-2 h-4 w-4" />}
        </Button>
      </header>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="bg-muted/30 p-1 rounded-[5px] mb-8 border border-border/50">
          <TabsTrigger value="general" className="rounded-[5px] px-6 py-2.5 data-[state=active]:bg-background data-[state=active]:shadow-sm">
            <Building className="h-4 w-4 mr-2" /> General
          </TabsTrigger>
          <TabsTrigger value="security" className="rounded-[5px] px-6 py-2.5 data-[state=active]:bg-background data-[state=active]:shadow-sm">
            <Shield className="h-4 w-4 mr-2" /> Security
          </TabsTrigger>
          <TabsTrigger value="payments" className="rounded-[5px] px-6 py-2.5 data-[state=active]:bg-background data-[state=active]:shadow-sm">
            <CreditCard className="h-4 w-4 mr-2" /> Payments
          </TabsTrigger>
          <TabsTrigger value="notifications" className="rounded-[5px] px-6 py-2.5 data-[state=active]:bg-background data-[state=active]:shadow-sm">
            <Bell className="h-4 w-4 mr-2" /> Notifications
          </TabsTrigger>
        </TabsList>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Settings Sidebar Nav (Internal) */}
          <div className="lg:col-span-1 space-y-2">
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest px-3 mb-4">Quick Navigation</p>
            <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-bold text-primary bg-primary/5 border-l-4 border-primary rounded-r-[5px] transition-all">
              <Building className="h-4 w-4" /> Organization
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted/50 rounded-[5px] transition-all">
              <Globe className="h-4 w-4" /> Domain & SSL
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted/50 rounded-[5px] transition-all">
              <Mail className="h-4 w-4" /> Email Server
            </button>
          </div>

          {/* Settings Content */}
          <div className="lg:col-span-3 space-y-8">
            <TabsContent value="general" className="mt-0 space-y-8">
              {/* Institution Profile */}
              <Card className="rounded-[5px] border-border/50">
                <CardHeader>
                  <CardTitle>Institution Profile</CardTitle>
                  <CardDescription>Visual identity and contact information for your LMS.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-6 pb-6 border-b border-border/40">
                    <div className="h-20 w-20 rounded-[5px] bg-primary/10 border-2 border-dashed border-primary/20 flex items-center justify-center text-primary font-bold text-2xl overflow-hidden relative group cursor-pointer">
                      EB
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Plus className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="font-bold text-sm">Institution Logo</p>
                      <p className="text-xs text-muted-foreground">PNG, JPG or SVG. Max 2MB.</p>
                      <div className="flex gap-2 mt-2">
                        <Button variant="outline" size="sm" className="h-8 rounded-[5px] text-xs">Update</Button>
                        <Button variant="ghost" size="sm" className="h-8 rounded-[5px] text-xs text-destructive">Remove</Button>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Institution Name</Label>
                      <Input defaultValue="Enzira Begena Academic" className="rounded-[5px] h-11 bg-muted/20 border-border/50" />
                    </div>
                    <div className="space-y-2">
                      <Label>Official Support Email</Label>
                      <Input defaultValue="support@enzira.org" className="rounded-[5px] h-11 bg-muted/20 border-border/50" />
                    </div>
                    <div className="col-span-2 space-y-2">
                      <Label>Platform Subtitle</Label>
                      <Input defaultValue="Modern Learning Management System for Academic Excellence" className="rounded-[5px] h-11 bg-muted/20 border-border/50" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Maintenance Mode */}
              <Card className="rounded-[5px] border-border/50 bg-orange-50/30 dark:bg-orange-500/5">
                <CardContent className="p-6 flex items-center justify-between">
                  <div className="space-y-1">
                    <h4 className="font-bold text-sm flex items-center gap-2">
                      <Lock className="h-4 w-4 text-orange-600" /> Maintenance Mode
                    </h4>
                    <p className="text-xs text-muted-foreground">Disable all student access while performing system updates.</p>
                  </div>
                  <Switch />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="mt-0 space-y-8">
              <Card className="rounded-[5px] border-border/50">
                <CardHeader>
                  <CardTitle>Security Configuration</CardTitle>
                  <CardDescription>Manage password policies and administrative access.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between py-4 border-b border-border/40">
                    <div className="space-y-0.5">
                      <p className="text-sm font-bold">Two-Factor Authentication</p>
                      <p className="text-xs text-muted-foreground">Force all admins to use 2FA for account security.</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="space-y-4">
                    <Label>Admin Login Session Timeout</Label>
                    <Select defaultValue="1h">
                      <SelectTrigger className="rounded-[5px] h-11 bg-muted/20 border-border/50">
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30m">30 Minutes</SelectItem>
                        <SelectItem value="1h">1 Hour</SelectItem>
                        <SelectItem value="12h">12 Hours</SelectItem>
                        <SelectItem value="24h">24 Hours</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="pt-4">
                    <h4 className="font-bold text-sm mb-4">Authorized Admin Roles</h4>
                    <div className="space-y-3">
                      {[
                        { role: 'Super Administrator', users: 2, color: 'bg-primary' },
                        { role: 'Content Manager', users: 5, color: 'bg-green-600' },
                        { role: 'Support Agent', users: 12, color: 'bg-blue-600' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-3 border rounded-[5px] bg-muted/10">
                          <div className="flex items-center gap-3">
                            <div className={cn("h-2 w-2 rounded-full", item.color)} />
                            <span className="text-sm font-medium">{item.role}</span>
                          </div>
                          <span className="text-xs text-muted-foreground font-bold">{item.users} Users</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="payments" className="mt-0 space-y-8">
              <Card className="rounded-[5px] border-border/50 overflow-hidden">
                <CardHeader className="bg-muted/20 border-b">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-[5px] bg-background border flex items-center justify-center">
                      <CreditCard className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle>Chapa Integration</CardTitle>
                      <CardDescription>Primary payment gateway for manual and automatic payments.</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-2">
                    <Label className="flex justify-between">
                      Public Key <span className="text-primary text-[10px] cursor-pointer hover:underline">How to find this?</span>
                    </Label>
                    <div className="relative">
                      <Input type="password" value="chap_pub_test_55928302918273" className="rounded-[5px] h-11 bg-muted/20 border-border/50 pr-10" />
                      <button className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                        <Eye className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Secret Key</Label>
                    <div className="relative">
                      <Input type="password" value="chap_sec_test_99203841726534" className="rounded-[5px] h-11 bg-muted/20 border-border/50 pr-10" />
                      <button className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                        <Eye className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-[5px] border border-primary/20 flex gap-4">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Shield className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Your keys are encrypted using AES-256 before being stored in our database. 
                      Enzira employees cannot access these keys.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </div>
  );
}
