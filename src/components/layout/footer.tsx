import React from 'react';
import { Github, Twitter } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { LockLogo } from '@/components/ui/lock-logo';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-green-950/20">
      <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-8">
            <a href="#" className="flex items-center">
              <LockLogo />
            </a>
            <nav className="flex gap-6">
              <a href="#features" className="text-sm text-muted-foreground hover:text-green-400 transition-colors">
                Features
              </a>
              <a href="#benefits" className="text-sm text-muted-foreground hover:text-green-400 transition-colors">
                Benefits
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-green-400 transition-colors">
                Privacy
              </a>
            </nav>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-green-400 transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-green-400 transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
        
        <Separator className="my-6 bg-green-950/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {currentYear} LockIn. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-green-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-green-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-green-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}