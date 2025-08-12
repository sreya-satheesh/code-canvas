"use client";

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Menu,
  Play,
  Sparkles,
  PanelLeft,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import useLocalStorage from '@/hooks/use-local-storage';
import { lessons } from '@/lib/lessons';
import type { Progress } from '@/types';
import { Icons } from './icons';
import OutputFrame from './output-frame';
import { ThemeToggle } from './theme-toggle';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import Link from 'next/link';
import { ScrollArea } from './ui/scroll-area';
import { cn } from '@/lib/utils';

function LessonSidebar({ currentLessonIndex, progress, onSelectLesson, className }: { currentLessonIndex: number, progress: Progress, onSelectLesson: (index: number) => void, className?: string }) {
  return (
    <div className={cn("h-full flex flex-col", className)}>
      <h2 className="text-lg font-semibold mb-4 font-headline px-4 flex-shrink-0">Lessons</h2>
       <ScrollArea className="flex-grow">
        <nav className="flex flex-col gap-2 px-4">
          {lessons.map((lesson, index) => (
            <Button
              key={lesson.id}
              variant={currentLessonIndex === index ? 'secondary' : 'ghost'}
              className="justify-start gap-2"
              onClick={() => onSelectLesson(index)}
            >
              {progress.completedLessons.includes(lesson.id) ? (
                <CheckCircle2 className="h-4 w-4 text-green-500" />
              ) : (
                <lesson.icon className="h-4 w-4" />
              )}
              <span>{lesson.title}</span>
            </Button>
          ))}
        </nav>
      </ScrollArea>
    </div>
  )
}

export function CodeCanvas() {
  const { toast } = useToast();
  const [progress, setProgress] = useLocalStorage<Progress>('code-canvas-progress', {
    completedLessons: [],
    userCode: {},
  });

  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  
  const currentLesson = useMemo(() => lessons[currentLessonIndex], [currentLessonIndex]);
  
  const [userCode, setUserCode] = useState('');
  const [outputCode, setOutputCode] = useState('');
  const [runId, setRunId] = useState(0);
  
  const [isClient, setIsClient] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    setIsClient(true);
    const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    setTheme(storedTheme || systemTheme);
  }, []);
  
  useEffect(() => {
    const handler = () => {
       const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
       const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
       setTheme(storedTheme || systemTheme);
    }
    window.addEventListener('storage', handler)
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', handler)

    return () => {
      window.removeEventListener('storage', handler);
      mediaQuery.removeEventListener('change', handler);
    }
  }, []);

  useEffect(() => {
    if (currentLesson) {
      const savedCode = progress.userCode[currentLesson.id];
      const initialCode = savedCode || currentLesson.starterCode;
      setUserCode(initialCode);
      setOutputCode(initialCode);
      setRunId(id => id + 1);
    }
  }, [currentLessonIndex, currentLesson]);

  const handleCodeChange = (newCode: string) => {
    setUserCode(newCode);
    setProgress(prev => ({
      ...prev,
      userCode: { ...prev.userCode, [currentLesson.id]: newCode },
    }));
  };

  const handleRunCode = () => {
    setOutputCode(userCode);
    setRunId(id => id + 1);
    toast({ title: 'Code executed!', description: 'Check the output panel for results.' });
  };
  
  const handleMarkAsComplete = () => {
     setProgress(prev => {
      const newCompleted = [...new Set([...prev.completedLessons, currentLesson.id])];
      return {
        ...prev,
        completedLessons: newCompleted,
      };
    });
     toast({
      title: 'Lesson Complete!',
      description: "Great job! You've marked this lesson as complete.",
      variant: 'default',
    });
    if (currentLessonIndex < lessons.length - 1) {
      goToLesson(currentLessonIndex + 1);
    }
  };


  const goToLesson = (index: number) => {
    if (index >= 0 && index < lessons.length) {
      setCurrentLessonIndex(index);
    }
  };
  
  const handleSelectLesson = (index: number) => {
    goToLesson(index);
    setSidebarOpen(false);
  }

  if (!isClient) {
    return null;
  }

  return (
    <div className="flex flex-col h-screen bg-background">
      <header className="flex h-16 items-center gap-4 px-4 md:px-6 sticky top-0 z-50">
        <Sheet open={isSidebarOpen} onOpenChange={setSidebarOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <PanelLeft className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 pt-6 bg-background/90 backdrop-blur-sm">
             <SheetHeader>
              <SheetTitle>Lessons Menu</SheetTitle>
            </SheetHeader>
            <LessonSidebar currentLessonIndex={currentLessonIndex} progress={progress} onSelectLesson={handleSelectLesson} />
          </SheetContent>
        </Sheet>
        <Link href="/" className="flex items-center gap-3">
          <div className="neumorphic-flat p-2 rounded-lg">
            <Icons.logo className="h-6 w-6 text-primary" />
          </div>
          <h1 className="hidden md:block text-lg font-semibold font-headline">Code Canvas</h1>
        </Link>
        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
        </div>
      </header>
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
        <aside className="hidden lg:block lg:col-span-2 p-4 pt-0 h-full max-h-[calc(100vh-4rem)]">
          <LessonSidebar currentLessonIndex={currentLessonIndex} progress={progress} onSelectLesson={handleSelectLesson} />
        </aside>

        <main className="col-span-1 lg:col-span-10 flex flex-col lg:grid lg:grid-cols-10 h-full max-h-[calc(100vh-4rem)]">
          <div className="lg:col-span-4 p-4 flex flex-col gap-4 overflow-y-auto">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <currentLesson.icon className="h-6 w-6 text-primary" />
                    <CardTitle className="font-headline">{currentLesson.title}</CardTitle>
                  </div>
                  <div className="flex items-center gap-2">
                     <Button variant="outline" size="icon" onClick={() => goToLesson(currentLessonIndex - 1)} disabled={currentLessonIndex === 0}>
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" onClick={() => goToLesson(currentLessonIndex + 1)} disabled={currentLessonIndex === lessons.length - 1}>
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                  </div>
                </div>
                <CardDescription>{`Lesson ${currentLesson.id} of ${lessons.length}`}</CardDescription>
              </CardHeader>
              <CardContent className="prose prose-sm dark:prose-invert max-w-none">
                <p>{currentLesson.introduction}</p>
                <blockquote>{currentLesson.explanation}</blockquote>
                <p>{currentLesson.prompt}</p>
              </CardContent>
            </Card>

            <div className="flex-grow flex flex-col min-h-[300px]">
              <h3 className="font-semibold mb-2 font-headline">Code Editor</h3>
              <Textarea
                value={userCode}
                onChange={(e) => handleCodeChange(e.target.value)}
                placeholder="Write your JavaScript code here..."
                className="flex-grow w-full font-code text-sm !ring-0 !ring-offset-0 focus-visible:!ring-0 resize-none"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={handleRunCode} className="w-full sm:w-auto flex-grow">
                <Play className="mr-2 h-4 w-4" /> Run Code
              </Button>
              <Button onClick={handleMarkAsComplete} className="w-full sm:w-auto flex-grow" variant="secondary">
                <CheckCircle2 className="mr-2 h-4 w-4" /> Mark as Complete & Next
              </Button>
            </div>
          </div>
          <div className="lg:col-span-6 p-4 h-full flex flex-col">
            <h3 className="font-semibold mb-2 font-headline">Output</h3>
            <div className="flex-grow w-full h-full neumorphic">
              <OutputFrame key={runId} code={outputCode} theme={theme} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
