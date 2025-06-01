import React from 'react';
import { Download, Home, User, Briefcase, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavBar } from '@/components/ui/tubelight-navbar';
import { GoogleAuthButton } from '@/components/auth/google-auth-button';
import { LockLogo } from '@/components/ui/lock-logo';

export function Header() {
  const navItems = [
    { name: 'Home', url: '#', icon: Home },
    { name: 'Features', url: '#features', icon: Briefcase },
    { name: 'Benefits', url: '#benefits', icon: User },
    { name: 'Timeline', url: '#timeline', icon: FileText }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between gap-8 py-6">
          <a href="#" className="flex items-center shrink-0">
            <LockLogo />
          </a>

          <NavBar items={navItems} />

          <div className="flex items-center gap-3 shrink-0">
            <GoogleAuthButton />
            <Button size="sm" className="gap-1 bg-green-600 hover:bg-green-500">
              <Download className="h-3.5 w-3.5" />
              Download
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}