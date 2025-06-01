import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, MonitorCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { fadeIn, matrixReveal } from '@/lib/animations';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24">
      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="flex flex-col items-center"
            variants={fadeIn('up')}
            initial="initial"
            animate="animate"
          >
            <div className="flex items-center mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              <p className="text-green-500 font-mono tracking-wider uppercase text-sm">
                AI-powered focus assistant
              </p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className={cn("font-extrabold")}>
                {"Stay focused. Stay productive.".split("").map((char, index) => (
                  <motion.span 
                    key={index} 
                    custom={index}
                    variants={matrixReveal}
                    initial="hidden"
                    animate="visible"
                    className={cn(
                      char === " " ? "mr-2" : "",
                      "inline-block"
                    )}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
              <div className="flex items-center mt-2 justify-center">
                <span className="text-green-500">Let AI keep you locked in</span>
                <motion.span 
                  className="inline-block ml-2 w-2 h-6 bg-green-500"
                  animate={{
                    opacity: [1, 0, 1],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </div>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              LockIn uses AI to monitor your focus, posture, and wellbeing, 
              helping you stay productive and healthy during long work sessions.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="gap-2 bg-green-600 hover:bg-green-500">
                <Download className="h-4 w-4" />
                Download for MacOS
              </Button>
              <Button variant="outline" size="lg" className="gap-2 border-green-700 text-green-400 hover:bg-green-950/30">
                <MonitorCheck className="h-4 w-4" />
                Try Web Version
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}