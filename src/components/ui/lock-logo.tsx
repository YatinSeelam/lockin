import React from 'react';
import { Lock } from 'lucide-react';

export function LockLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-green-600 rounded-md grid place-items-center">
        <Lock className="h-4 w-4 text-white" />
      </div>
      <span className="text-xl font-bold text-white">LockIn</span>
    </div>
  );
}