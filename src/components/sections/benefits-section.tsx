import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/section-header';
import { BenefitItem } from '@/components/ui/benefit-item';
import { BENEFITS } from '@/lib/constants';
import { staggerContainer } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function BenefitsSection() {
  return (
    <section id="benefits" className="relative py-20 overflow-hidden">
      <div className="absolute bottom-0 left-1/3 w-1/3 h-1/3 bg-green-500/5 rounded-full blur-3xl -z-10" />
      
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              title="User Benefits"
              subtitle="Experience a new level of productivity with features designed to help you achieve more while protecting your wellbeing."
            />
            
            <motion.div
              variants={staggerContainer(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="space-y-8"
            >
              {BENEFITS.map((benefit, index) => (
                <BenefitItem
                  key={index}
                  title={benefit.title}
                  description={benefit.description}
                  icon={benefit.icon}
                  index={index}
                />
              ))}
            </motion.div>
            
            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Button size="lg" className="gap-2 bg-green-600 hover:bg-green-500">
                Start Your Free Trial
                <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-xl overflow-hidden border border-green-500/30 shadow-[0_0_50px_rgba(0,255,136,0.1)]">
              <div className="aspect-[4/5] bg-black relative">
                {/* Graph Background */}
                <div className="absolute inset-0 opacity-20">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div 
                      key={i} 
                      className="border-t border-green-500/10" 
                      style={{ top: `${i * 10}%` }}
                    />
                  ))}
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div 
                      key={i} 
                      className="border-l border-green-500/10 absolute top-0 bottom-0" 
                      style={{ left: `${i * 10}%` }}
                    />
                  ))}
                </div>
                
                {/* Productivity Chart */}
                <div className="absolute bottom-4 left-4 right-4 top-4 flex flex-col">
                  <div className="mb-4 text-center">
                    <h3 className="text-lg font-semibold text-green-400">Weekly Focus Report</h3>
                  </div>
                  
                  <div className="flex-grow relative">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <motion.path
                        d="M0,80 C10,75 20,40 30,50 C40,60 50,20 60,30 C70,40 80,15 90,20 L90,100 L0,100 Z"
                        fill="rgba(0, 255, 136, 0.1)"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                      />
                      <motion.path
                        d="M0,80 C10,75 20,40 30,50 C40,60 50,20 60,30 C70,40 80,15 90,20"
                        fill="none"
                        stroke="rgba(0, 255, 136, 0.7)"
                        strokeWidth="0.5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                      />
                      
                      {/* Points on the line */}
                      {[
                        [0, 80],
                        [30, 50],
                        [60, 30],
                        [90, 20]
                      ].map(([x, y], i) => (
                        <motion.circle
                          key={i}
                          cx={x}
                          cy={y}
                          r="1.5"
                          fill="#00FF88"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 + i * 0.2 }}
                        />
                      ))}
                    </svg>
                    
                    <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-neutral-500 px-2">
                      <span>Mon</span>
                      <span>Tue</span>
                      <span>Wed</span>
                      <span>Thu</span>
                      <span>Fri</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <div className="bg-neutral-900/80 rounded-md p-2 text-center">
                      <div className="text-xs text-neutral-500">Focus Time</div>
                      <div className="text-green-400 font-mono">+27%</div>
                    </div>
                    <div className="bg-neutral-900/80 rounded-md p-2 text-center">
                      <div className="text-xs text-neutral-500">Productivity</div>
                      <div className="text-green-400 font-mono">+32%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -top-6 -right-6 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg transform rotate-12">
              Real results
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}