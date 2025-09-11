import { useState, useEffect } from 'react'
import { Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function App() { // Don't touch this exporting, Its a named export
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4 overflow-hidden relative">
      <Button 
        onClick={toggleTheme} 
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 text-2xl hover:scale-110 hover:rotate-12 transition-all duration-200 active:scale-90 z-50"
      >
        {isDark ? '☀️' : '🌙'}
      </Button>

      <div className="absolute inset-0 bg-gradient-rainbow opacity-10 dark:opacity-20" />
      
      <div className="text-center space-y-8 relative z-10 animate-fade-in">
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-primary floating">
            <Sparkles className="w-8 h-8 text-white rotating" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-display font-bold text-balance leading-tight">
          Creating your <span className="text-gradient">app</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto text-pretty">
          Your application would be ready soon.
        </p>

        <div className="flex justify-center">
          <Button 
            size="lg"
            className="btn-gradient px-8 py-4 text-lg font-semibold hover:-translate-y-0.5 transition-all duration-200"
          >
            Please wait
          </Button>
        </div>
      </div>

      <footer className="absolute bottom-8 text-center text-muted-foreground/80">
        <p>Powered by Cloudflare</p>
      </footer>
    </main>
  )
}