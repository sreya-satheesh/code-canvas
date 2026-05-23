import { Button } from "@/components/ui/button";
import { Code2, PenTool, Sparkles } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="neumorphic-flat p-2 rounded-lg">
            <Code2 className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-xl font-bold font-headline">Code Canvas</h1>
        </div>
        <ThemeToggle />
      </header>
      <main className="flex-1 flex flex-col items-center justify-center text-center p-6">
        <div className="neumorphic p-8 md:p-12 max-w-4xl">
          <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold font-headline mb-4 text-foreground">
            Shape Your Ideas with Code
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Code Canvas is an interactive platform for learning JavaScript. Follow guided lessons, write code in our editor, and get instant results. No setup required—start learning to code right away.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/learn">
                <PenTool className="mr-2" />
                Start Creating
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <footer className="text-center p-4 text-sm text-muted-foreground">
        <p>Created with ❤️ by <a href="https://github.com/sreya-satheesh" target="_blank">Sreya Satheesh</a></p>
      </footer>
    </div>
  );
}
