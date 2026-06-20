import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NotFoundContent() {
  return (
    <section className="relative flex items-center justify-center min-h-[70vh] py-24 overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] md:text-[20rem] font-display font-bold text-white/[0.03] select-none pointer-events-none">
        404
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <p className="text-primary text-sm font-medium uppercase tracking-widest mb-4">404 Error</p>
        <h1 className="text-hero-page font-display font-bold tracking-tight mb-6">
          Page Not <span className="text-gradient">Found</span>
        </h1>
        <p className="text-body-muted text-lg md:text-xl max-w-lg mx-auto leading-relaxed mb-10">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="h-14 px-10 bg-primary hover:bg-primary/90 text-white border-none shadow-[0_0_40px_-10px_rgba(0,112,243,0.5)]">
            <Link href="/">
              <ArrowLeft className="mr-2 w-5 h-5" />
              Back to Home
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-14 px-10 border-white/20 hover:bg-white/5">
            <Link href="/contact">
              Contact Us <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
