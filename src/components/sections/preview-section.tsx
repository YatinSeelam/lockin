import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/section-header';
import { Badge } from '@/components/ui/badge';
import { Activity, CheckCircle, Clock, EyeOff } from 'lucide-react';
import { fadeIn, pulseAnimation } from '@/lib/animations';

export function PreviewSection() {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container px-4 mx-auto">
        <SectionHeader
          title="Live Focus Monitoring"
          subtitle="See how LockIn helps you stay focused and productive throughout your workday."
          centered
        />

        <div className="relative max-w-5xl mx-auto">
          {/* Main preview window */}
          <motion.div
            variants={fadeIn('up')}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.25 }}
            className="rounded-xl overflow-hidden border border-green-500/30 shadow-[0_0_50px_rgba(0,255,136,0.1)] bg-black/80 backdrop-blur-sm"
          >
            <div className="h-10 bg-neutral-900 flex items-center px-4 gap-2 border-b border-neutral-800">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="mx-auto text-xs text-neutral-400 font-mono">
                LockIn - Focus Session
              </div>
            </div>

            <div className="grid md:grid-cols-5 p-4 gap-4">
              {/* Webcam view */}
              <div className="md:col-span-3 aspect-video bg-neutral-950 rounded-lg border border-neutral-800 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="relative"
                    variants={pulseAnimation}
                    initial="initial"
                    animate="animate"
                  >
                    {/* Face outline */}
                    <div className="w-32 h-32 border-2 border-dashed border-green-500/50 rounded-full"></div>

                    {/* Eye tracking */}
                    <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 w-6 h-6">
                      <motion.div 
                        className="w-full h-full rounded-full border border-green-500"
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      />
                    </div>

                    <div className="absolute top-1/3 right-0 transform -translate-x-1/2 w-6 h-6">
                      <motion.div 
                        className="w-full h-full rounded-full border border-green-500"
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "reverse",
                          delay: 0.5,
                        }}
                      />
                    </div>

                    {/* Status badge */}
                    <Badge className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-green-600">
                      Tracking Active
                    </Badge>
                  </motion.div>
                </div>

                {/* Overlay metrics */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                  <div className="bg-black/70 px-3 py-1.5 rounded-md flex items-center gap-1.5 text-xs border border-green-900/50">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-green-400 font-mono">FOCUSED</span>
                  </div>

                  <div className="bg-black/70 px-3 py-1.5 rounded-md flex items-center gap-1.5 text-xs border border-green-900/50">
                    <EyeOff className="w-3 h-3 text-yellow-500" />
                    <span className="text-yellow-400 font-mono">BLINK SOON</span>
                  </div>
                </div>
              </div>

              {/* Stats panel */}
              <div className="md:col-span-2 rounded-lg border border-neutral-800 bg-neutral-950/50 p-4 flex flex-col">
                <h3 className="text-sm font-medium mb-4 text-neutral-300">Session Stats</h3>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-neutral-900 rounded-md p-3">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Clock className="w-4 h-4 text-green-500" />
                      <span className="text-xs text-neutral-400">Focus Time</span>
                    </div>
                    <p className="text-xl font-mono text-white">01:24:37</p>
                  </div>

                  <div className="bg-neutral-900 rounded-md p-3">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Activity className="w-4 h-4 text-green-500" />
                      <span className="text-xs text-neutral-400">Productivity</span>
                    </div>
                    <p className="text-xl font-mono text-white">87%</p>
                  </div>
                  
                  <div className="bg-neutral-900 rounded-md p-3">
                    <div className="flex items-center gap-2 mb-1.5">
                      <EyeOff className="w-4 h-4 text-green-500" />
                      <span className="text-xs text-neutral-400">Breaks Taken</span>
                    </div>
                    <p className="text-xl font-mono text-white">3 / 5</p>
                  </div>

                  <div className="bg-neutral-900 rounded-md p-3">
                    <div className="flex items-center gap-2 mb-1.5">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-xs text-neutral-400">Posture Alerts</span>
                    </div>
                    <p className="text-xl font-mono text-white">2</p>
                  </div>
                </div>

                <div className="mt-auto pt-4">
                  <div className="text-xs text-neutral-500 mb-1.5">Focus Level</div>
                  <div className="h-2 w-full bg-neutral-800 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-green-500 rounded-full"
                      initial={{ width: "70%" }}
                      animate={{ width: ["70%", "90%", "65%", "85%", "75%"] }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}