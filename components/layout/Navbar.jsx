"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TopBanner } from "@/components/layout/TopBanner";

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

function isLinkActive(pathname, route) {
  if (route === "/") return pathname === "/";
  return pathname === route || pathname.startsWith(`${route}/`);
}

export function Navbar({ navLinks, eventLinks, banner }) {
  const pathname = usePathname();
  const allLinks = [
    ...navLinks,
    ...eventLinks.map((link) => ({ ...link, highlight: true })),
  ];
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const menu = menuRef.current;
    const focusable = menu?.querySelectorAll(FOCUSABLE);
    focusable?.[0]?.focus();

    function handleKeyDown(e) {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !menu) return;

      const items = menu.querySelectorAll(FOCUSABLE);
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-white/5" : "bg-transparent"
      }`}
    >
      <TopBanner banner={banner} />
      <div className={`container mx-auto px-6 md:px-12 flex items-center justify-between transition-all duration-300 ${isScrolled ? "py-4" : "py-6"}`}>
        <Link href="/" className="flex items-center gap-2 z-50">
          <Image src="/brand/logo.webp" alt="Orbeetal Logo" width={48} height={48} className="object-contain" />
          <span className="font-poppins font-semibold text-3xl text-white">Orbeetal</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {allLinks.map((link) => {
              const active = isLinkActive(pathname, link.route);
              return (
              <Link
                key={link.name}
                href={link.route}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "text-lg font-display font-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:rounded-sm",
                  link.highlight
                    ? active
                      ? "text-amber-300 border-b-2 border-amber-400 pb-0.5"
                      : "text-amber-400 hover:text-amber-300"
                    : active
                      ? "text-white border-b-2 border-primary pb-0.5"
                      : "text-body-muted hover:text-white"
                )}
              >
                {link.name}
              </Link>
              );
            })}
          </div>
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground border-none">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          ref={toggleRef}
          className="lg:hidden text-white z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav Overlay */}
        <div
          ref={menuRef}
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className={`fixed h-screen lg:hidden inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-6 transition-all duration-300 ${
            isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          {allLinks.map((link) => {
            const active = isLinkActive(pathname, link.route);
            return (
            <Link
              key={link.name}
              href={link.route}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-current={active ? "page" : undefined}
              className={cn(
                "text-2xl font-display font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:rounded-sm",
                link.highlight
                  ? active
                    ? "text-amber-300"
                    : "text-amber-400 hover:text-amber-300"
                  : active
                    ? "text-primary"
                    : "text-white hover:text-primary"
              )}
            >
              {link.name}
            </Link>
            );
          })}
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground border-none mt-4"
          >
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              Get Started
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
