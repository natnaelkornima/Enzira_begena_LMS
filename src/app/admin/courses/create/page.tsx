'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ChevronLeft, Plus, Image as ImageIcon, Video, FileText, Save, Play } from 'lucide-react';
import Link from 'next/link';

export default function CreateCoursePage() {
  const [modules, setModules] = useState([{ id: 1, title: '', duration: '' }]);

  const addModule = () => {
    setModules([...modules, { id: modules.length + 1, title: '', duration: '' }]);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="flex items-center justify-between">
        <div className="space-y-1">
          <Link href="/admin/courses" className="text-sm font-medium text-primary flex items-center hover:underline mb-2">
            <ChevronLeft className="h-4 w-4 mr-1" /> Back to Courses
          </Link>
          <h1 className="text-3xl font-extrabold tracking-tight">Create New Course</h1>
          <p className="text-muted-foreground">Draft your curriculum and set up course parameters.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="rounded-[5px]">Save Draft</Button>
          <Button className="rounded-[5px] gap-2">
            <Save className="h-4 w-4" />
            Publish Course
          </Button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-8">
          <Card className="rounded-[5px] border-border/50">
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>Global settings for your course identity.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Course Title</Label>
                <Input id="title" placeholder="e.g. Advanced Computational Architecture" className="rounded-[5px] bg-muted/20 border-border/50 h-11" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Short Description</Label>
                <Textarea id="description" placeholder="Briefly describe what students will learn..." className="rounded-[5px] bg-muted/20 border-border/50 min-h-[100px]" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Category</Label>
                  <Select>
                    <SelectTrigger className="rounded-[5px] bg-muted/20 border-border/50 h-11">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="tech">Technology</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Difficulty</Label>
                  <Select>
                    <SelectTrigger className="rounded-[5px] bg-muted/20 border-border/50 h-11">
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[5px] border-border/50">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Curriculum Structure</CardTitle>
                <CardDescription>Organize your lessons into logical modules.</CardDescription>
              </div>
              <Button variant="outline" size="sm" onClick={addModule} className="rounded-[5px] gap-2">
                <Plus className="h-4 w-4" /> Add Module
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {modules.map((module, i) => (
                <div key={module.id} className="p-4 border rounded-[5px] bg-muted/10 space-y-4 group relative">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-[5px] bg-primary/10 flex items-center justify-center text-primary font-bold">
                      {i + 1}
                    </div>
                    <Input placeholder="Module Title" className="bg-background border-border/50" />
                    <Input placeholder="Duration (min)" className="w-32 bg-background border-border/50" />
                  </div>
                  <div className="flex gap-2 pl-14">
                    <Button variant="ghost" size="sm" className="h-8 gap-2 text-xs">
                      <Video className="h-3 w-3" /> Add Video
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 gap-2 text-xs">
                      <FileText className="h-3 w-3" /> Add Material
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Settings */}
        <div className="space-y-8">
          <Card className="rounded-[5px] border-border/50 overflow-hidden">
            <CardHeader>
              <CardTitle>Course Thumbnail</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted/30 border-2 border-dashed border-border/50 rounded-[5px] flex flex-col items-center justify-center text-muted-foreground hover:bg-muted/50 transition-colors cursor-pointer group">
                <ImageIcon className="h-10 w-10 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-medium">Click to upload image</span>
                <span className="text-[10px] mt-1">16:9 ratio recommended</span>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[5px] border-border/50">
            <CardHeader>
              <CardTitle>Pricing & Access</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Price (USD)</Label>
                <Input type="number" placeholder="0.00" className="rounded-[5px] bg-muted/20 border-border/50 h-11" />
              </div>
              <div className="flex items-center justify-between p-3 border rounded-[5px] bg-primary/5 border-primary/20">
                <div className="space-y-0.5">
                  <p className="text-sm font-bold">Certificate Included</p>
                  <p className="text-[10px] text-muted-foreground">Issue certificate on completion</p>
                </div>
                <div className="h-6 w-10 bg-primary rounded-full relative p-1 cursor-pointer">
                  <div className="h-4 w-4 bg-white rounded-full ml-auto shadow-sm" />
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="p-6 bg-gradient-to-br from-primary/10 to-transparent rounded-[5px] border border-primary/10">
            <h4 className="font-bold text-sm mb-2 flex items-center gap-2">
              <Play className="h-4 w-4 text-primary" /> Preview Mode
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed mb-4">
              See how your course will look to students before publishing.
            </p>
            <Button variant="outline" className="w-full bg-background/50 backdrop-blur-sm border-primary/20 hover:bg-primary/5">
              Live Preview
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
