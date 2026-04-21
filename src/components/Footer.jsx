import { Link } from "wouter";
import { scrollToSection } from "@/lib/utils";

const navLinks = [
  { name: "Services",    href: "services" },
  // { name: "Departments", href: "departments" },
  { name: "Portfolio",   href: "portfolio" },
  // { name: "Team",        href: "team" },
  // { name: "About",       href: "about" },
  { name: "Contact",     href: "contact" },
];

export function Footer() {
  return (
    <footer className="bg-[#050B14] border-t border-white/5 py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <img src="/logo.webp" alt="Orbeetal Logo" className="w-12 h-12 object-contain" />
              <span className="font-display font-bold text-3xl tracking-tight text-white">Orbeetal</span>
            </Link>
            <p className="text-white/60 max-w-md text-lg">
              Bold, forward-thinking digital transformation. We engineer precision software and design immersive experiences that elevate businesses above the competition.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-6 text-lg">Navigation</h4>
            <ul className="space-y-4">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={`#${item.href}`}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="text-white/60 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-6 text-lg">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/60 hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/60 hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-white/60 hover:text-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* BASIS Member Strip */}
        <div className="mt-12 mb-8 flex justify-center">
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-amber-400/25 bg-amber-400/[0.08]">
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-400/20 border border-amber-400/40 flex-shrink-0">
              <svg className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-amber-300 font-semibold text-sm">Proud Member of BASIS</span>
            <span className="text-amber-400/50 text-xs hidden sm:inline">— Bangladesh Association of Software &amp; Information Services</span>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">© {new Date().getFullYear()} Orbeetal. All rights reserved.</p>
          <p className="text-white/40 text-sm flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 inline-block animate-pulse"></span>
            All systems nominal
          </p>
        </div>
      </div>
    </footer>
  );
}
