import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface MatrixBackgroundProps {
  className?: string;
  density?: number;
  speed?: number;
}

export function MatrixBackground({
  className,
  density = 50,
  speed = 1.5,
}: MatrixBackgroundProps) {
  const [characters, setCharacters] = useState<
    Array<{
      id: number;
      char: string;
      x: number;
      y: number;
      opacity: number;
      speed: number;
    }>
  >([]);

  useEffect(() => {
    // Matrix characters
    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789';
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;

    // Create initial characters
    const initialCharacters = Array.from({ length: density }, (_, index) => ({
      id: index,
      char: chars.charAt(Math.floor(Math.random() * chars.length)),
      x: Math.random() * containerWidth,
      y: Math.random() * containerHeight * 2 - containerHeight,
      opacity: Math.random() * 0.5 + 0.1,
      speed: Math.random() * 3 + speed,
    }));

    setCharacters(initialCharacters);

    const interval = setInterval(() => {
      setCharacters((prevChars) =>
        prevChars.map((char) => {
          let newY = char.y + char.speed;
          // Reset position if character goes off-screen
          if (newY > containerHeight) {
            newY = -20;
            return {
              ...char,
              y: newY,
              x: Math.random() * containerWidth,
              char: chars.charAt(Math.floor(Math.random() * chars.length)),
            };
          }
          return {
            ...char,
            y: newY,
          };
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, [density, speed]);

  return (
    <div
      className={cn(
        'fixed inset-0 z-0 overflow-hidden opacity-30 pointer-events-none',
        className
      )}
    >
      {characters.map((char) => (
        <motion.div
          key={char.id}
          className="absolute text-green-400 font-mono text-sm sm:text-base"
          style={{
            left: `${char.x}px`,
            top: `${char.y}px`,
            opacity: char.opacity,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: char.opacity }}
          transition={{ duration: 0.5 }}
        >
          {char.char}
        </motion.div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}