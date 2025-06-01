import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/section-header';
import { TestimonialCard } from '@/components/ui/testimonial-card';
import { TESTIMONIALS } from '@/lib/constants';
import { staggerContainer } from '@/lib/animations';

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-20 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-green-500/5 rounded-full blur-3xl -z-10" />
      
      <div className="container px-4 mx-auto">
        <SectionHeader
          title="User Testimonials"
          subtitle="Hear from professionals who have transformed their workday with LockIn."
          centered
        />
        
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              content={testimonial.content}
              avatar={testimonial.avatar}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}