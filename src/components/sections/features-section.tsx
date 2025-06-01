import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/section-header';
import { FeatureCard } from '@/components/ui/feature-card';
import { FEATURES } from '@/lib/constants';
import { staggerContainer } from '@/lib/animations';

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-20 overflow-hidden">
      <div className="absolute top-1/3 right-0 w-1/3 h-1/3 bg-green-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-0 w-1/4 h-1/4 bg-green-500/5 rounded-full blur-3xl -z-10" />
      
      <div className="container px-4 mx-auto">
        <SectionHeader
          title="How It Works"
          subtitle="LockIn uses advanced computer vision technology to monitor your focus and well-being, keeping you productive while protecting your health."
          centered
        />
        
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {FEATURES.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}