"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { Menu, X } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { GlowButton } from "@/components/ui/GlowButton";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/projects", label: "Projects" },
  { href: "/team", label: "Team" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    let lastY = 0;
    const onScroll = () => {
      const y = window.scrollY;
      if (y > lastY && y > 120) setHidden(true);
      if (y < lastY) setHidden(false);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <motion.header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-border-subtle bg-bg-dark/80 backdrop-blur-md"
      )}
      animate={{ y: reduce ? 0 : hidden ? -110 : 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 32 }}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Orbeetal"
            width={140}
            height={40}
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden lg:flex flex-1 justify-center gap-8 xl:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative text-sm font-medium transition-colors",
                isActive(link.href)
                  ? "text-accent"
                  : "text-text-secondary hover:text-text-primary"
              )}
            >
              {link.label}
              {isActive(link.href) ? (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-secondary to-accent" />
              ) : null}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <GlowButton href="/contact">Get a Quote</GlowButton>
        </div>

        <button
          type="button"
          className="lg:hidden rounded-lg border border-border-subtle p-2 text-text-primary"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      <Dialog
        open={open}
        onClose={setOpen}
        transition
        className="relative z-[60] lg:hidden"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/60 backdrop-blur-sm transition duration-200 data-closed:opacity-0"
        />
        <div className="fixed inset-0 flex justify-end">
          <DialogPanel
            transition
            className="h-full w-full max-w-sm border-l border-border-subtle bg-bg-card p-6 shadow-2xl transition duration-300 data-closed:translate-x-full"
          >
            <div className="flex justify-between items-center">
              <span className="font-heading font-bold text-text-primary">Menu</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg border border-border-subtle p-2"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="mt-10 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "text-lg font-medium",
                    isActive(link.href) ? "text-accent" : "text-text-secondary"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-10">
              <GlowButton href="/contact">Get a Quote</GlowButton>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </motion.header>
  );
}
