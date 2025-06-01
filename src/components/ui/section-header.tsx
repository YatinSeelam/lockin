import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { fadeIn } from '@/lib/animations';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  centered = false,
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeIn('up')}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.25 }}
      className={cn(
        'mb-12',
        centered ? 'text-center mx-auto max-w-2xl' : '',
        className
      )}
    >
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-3xl">
          {subtitle}
        </p>
      )}
      <div className="h-1 w-20 bg-green-500 mt-4 mb-4 rounded-full"></div>
    </motion.div>
  );
}