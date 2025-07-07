// components/layout/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out",
        scrolled
          ? "bg-slate-50/80 dark:bg-zinc-900/80 backdrop-blur-sm border-b border-slate-200 dark:border-zinc-800"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-bold text-orange-500">
          KwikAndreas.
        </Link>
        <div className="hidden md:flex items-center gap-4">
          <Link href="/" className="hover:text-orange-500 transition-colors">
            Beranda
          </Link>
          <Link
            href="/project"
            className="hover:text-orange-500 transition-colors"
          >
            Project
          </Link>
          <Link
            href="/about"
            className="hover:text-orange-500 transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-orange-500 transition-colors"
          >
            Contact
          </Link>
          <ThemeToggle />
        </div>
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          aria-label="Open menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>
      {mobileOpen && (
        <div className="md:hidden bg-slate-50/95 dark:bg-zinc-900/95 border-b border-slate-200 dark:border-zinc-800 px-4 py-4">
          <div className="flex flex-col gap-4">
            <Link
              href="/proyek"
              className="hover:text-orange-500 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Project
            </Link>
            <Link
              href="/tentang-saya"
              className="hover:text-orange-500 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>
            <Link
              href="/kontak"
              className="hover:text-orange-500 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
}
