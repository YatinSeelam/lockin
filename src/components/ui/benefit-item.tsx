import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { DivideIcon as LucideIcon } from 'lucide-react';
import { fadeIn } from '@/lib/animations';

interface BenefitItemProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

export function BenefitItem({
  title,
  description,
  icon,
  index,
}: BenefitItemProps) {
  // Dynamically get the icon from Lucide
  const IconComponent = (LucideIcons as Record<string, LucideIcon>)[icon] || LucideIcons.CircleHelp;

  return (
    <motion.div
      className="flex items-start"
      variants={fadeIn('up')}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.25 }}
      custom={index * 0.1}
    >
      <div className="mr-4 mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-900/30 text-green-500">
        <IconComponent className="h-5 w-5" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
}