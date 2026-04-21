import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/80 z-10"></div>
        <img src="/hero-bg.png" alt="" className="w-full h-full object-cover opacity-60 mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-20"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Systems Online. Ready for Launch.
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] tracking-tight mb-8"
          >
            Elevate Above the <br className="hidden md:block" />
            <span className="text-gradient">Competition.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-2xl text-white/70 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
          >
            A forward-thinking software company dedicated to building smart, impactful technology — empowering businesses through innovation and intelligent solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-white border-none rounded-sm shadow-[0_0_40px_-10px_rgba(0,112,243,0.5)]"
              onClick={(e) => scrollToSection(e, "contact")}
            >
              Initiate Project <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto h-14 px-8 text-lg border-white/20 hover:bg-white/5 rounded-sm"
              onClick={(e) => scrollToSection(e, "services")}
            >
              Explore Capabilities
            </Button>
          </motion.div>

          {/* BASIS Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-amber-400/30 bg-amber-400/10 backdrop-blur-sm"
          >
            <div className="flex items-center justify-center w-7 h-7 rounded-full bg-amber-400/20 border border-amber-400/40">
              <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="text-left">
              <span className="text-amber-300 font-semibold text-sm tracking-wide">BASIS Member</span>
              <span className="text-amber-400/60 text-xs block leading-none mt-0.5">Bangladesh Association of Software &amp; Information Services</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-grid-pattern opacity-30 z-10"></div>
    </section>
  );
}
