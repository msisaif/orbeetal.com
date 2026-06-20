import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";

export function PageLayout({ children, className }) {
  return (
    <div
      className={cn(
        "min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary/30 selection:text-white",
        className
      )}
    >
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
