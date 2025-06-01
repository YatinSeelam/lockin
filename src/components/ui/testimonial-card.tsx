import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cardHover } from '@/lib/animations';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
  index: number;
}

export function TestimonialCard({
  name,
  role,
  content,
  avatar,
  index,
}: TestimonialCardProps) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <motion.div
      className="h-full"
      {...cardHover(index * 0.1)}
      viewport={{ once: true, amount: 0.25 }}
    >
      <Card className="h-full border border-muted/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-green-500/40 hover:shadow-[0_0_30px_rgba(0,255,136,0.1)]">
        <CardContent className="p-6">
          <div className="flex flex-col h-full">
            <blockquote className="mb-6 flex-grow text-muted-foreground">
              "{content}"
            </blockquote>
            <div className="flex items-center">
              <Avatar className="h-10 w-10 mr-3 border-2 border-green-500/20">
                <AvatarImage src={avatar} alt={name} />
                <AvatarFallback className="bg-muted text-foreground">
                  {initials}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{name}</p>
                <p className="text-sm text-muted-foreground">{role}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}