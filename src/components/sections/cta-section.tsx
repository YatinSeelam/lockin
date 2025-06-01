import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { fadeIn } from '@/lib/animations';

export function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-green-950/20 to-background -z-10" />
      <div className="absolute top-1/3 right-1/4 w-1/3 h-1/3 bg-green-500/5 rounded-full blur-3xl -z-10" />
      
      <div className="container px-4 mx-auto">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={fadeIn('up')}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Start <span className="text-green-500">Locking In</span> Today
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their productivity and wellbeing with LockIn's AI-powered focus tools.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="gap-2 bg-green-600 hover:bg-green-500">
              <Download className="h-4 w-4" />
              Download for MacOS
            </Button>
            <Button variant="outline" size="lg" className="gap-2 border-green-700 text-green-400 hover:bg-green-950/30">
              Try Web Version
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="relative max-w-lg mx-auto">
            <h3 className="text-lg font-medium mb-4">Get notified about updates</h3>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input 
                className="bg-background border-green-900/50 focus-visible:ring-green-500/30"
                placeholder="Enter your email" 
                type="email"
              />
              <Button className="bg-green-600 hover:bg-green-500">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              We'll never share your email. Unsubscribe anytime.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}