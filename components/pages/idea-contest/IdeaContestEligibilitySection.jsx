"use client";

import { m } from "framer-motion";
import { Users } from "lucide-react";

export function IdeaContestEligibilitySection() {
  return (
    <section className="py-24 border-b border-white/5">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <m.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-primary text-sm font-medium uppercase tracking-widest mb-4"
        >
          Eligibility
        </m.p>
        <m.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-5xl font-display font-bold mb-12"
        >
          Who Can <span className="text-gradient">Participate?</span>
        </m.h2>
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass-panel border border-primary/20 rounded-2xl p-12 max-w-xl mx-auto"
        >
          <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
            <Users className="w-10 h-10 text-primary" />
          </div>
          <h3 className="text-3xl font-display font-bold text-white mb-3">All RUET Students</h3>
          <p className="text-white/60 leading-relaxed">
            Open to all students of Rajshahi University of Engineering &amp; Technology (RUET). Individual
            or team participation is welcome.
          </p>
        </m.div>
      </div>
    </section>
  );
}
