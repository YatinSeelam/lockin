import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { DivideIcon as LucideIcon } from 'lucide-react';
import { cardHover } from '@/lib/animations';
import * as LucideIcons from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
  className?: string;
}

export function FeatureCard({
  title,
  description,
  icon,
  index,
  className,
}: FeatureCardProps) {
  // Dynamically get the icon from Lucide
  const IconComponent = (LucideIcons as Record<string, LucideIcon>)[icon] || LucideIcons.CircleHelp;
  
  return (
    <motion.div
      className={cn('h-full', className)}
      {...cardHover(index * 0.1)}
      viewport={{ once: true, amount: 0.25 }}
    >
      <Card className="h-full border border-muted/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-green-500/40 hover:shadow-[0_0_30px_rgba(0,255,136,0.1)]">
        <CardHeader className="pb-2">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
            <IconComponent className="h-6 w-6 text-green-500" />
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}