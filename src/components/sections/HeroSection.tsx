// components/sections/HeroSection.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import BeamsBackground from "../kokonutui/beams-background";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center bg-white dark:bg-transparent">
      <BeamsBackground className="absolute inset-0 z-0 pointer-events-none" />
      <div className="container mx-auto relative z-10 flex flex-col items-center text-center">
        <motion.p
          className="mb-4 text-lg text-orange-500 font-semibold select-none"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          Halo, saya
        </motion.p>
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_2px_24px_rgba(255,115,0,0.25)] animate-gradient
            dark:drop-shadow-[0_2px_24px_rgba(255,115,0,0.25)]
            light:drop-shadow-[0_2px_24px_rgba(255,115,0,0.15)] select-none
            "
          style={{
            backgroundSize: "200% 200%",
            animation: "gradientMove 4s ease-in-out infinite",
            filter: "drop-shadow(0 4px 32px rgba(255, 115, 0, 0.12))",
          }}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
        >
          Kwik Andreas Jonathan
        </motion.h1>
        <motion.h2
          className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-slate-700 dark:text-slate-300 select-none"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
        >
          Saya seorang <span className="text-orange-500">Web Developer</span>{" "}
          &amp; <span className="text-purple-500">Game Developer</span>.
        </motion.h2>
        <motion.p
          className="mt-6 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 select-none"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.55 }}
        >
          Selalu belajar, beradaptasi, dan berkembang di dunia teknologi
          digital.
        </motion.p>
        <motion.div
          className="mt-8 flex justify-center gap-4"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.7 }}
        >
          <Link href="/proyek">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 text-white shadow-lg shadow-orange-500/10 transition-all duration-200 group
                dark:shadow-orange-500/10
                light:shadow-orange-400/20
                hover:brightness-110 select-none
                "
              style={{
                boxShadow:
                  "0 4px 24px 0 rgba(255, 115, 0, 0.12), 0 1.5px 6px 0 rgba(255, 115, 0, 0.08)",
              }}
            >
              Lihat Proyek Saya
              <motion.span
                className="ml-2 inline-block"
                initial={false}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <ArrowRight className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </motion.span>
            </Button>
          </Link>
          <Link href="/kontak">
            <Button
              size="lg"
              variant="outline"
              className="border-orange-200 dark:border-orange-700 hover:border-orange-500 hover:bg-orange-50/60 dark:hover:bg-orange-900/10 transition-all duration-200
                shadow
                hover:shadow-orange-200/40 select-none
                "
              style={{
                boxShadow:
                  "0 2px 12px 0 rgba(255, 115, 0, 0.07), 0 1px 4px 0 rgba(255, 115, 0, 0.04)",
              }}
            >
              Hubungi Saya
            </Button>
          </Link>
        </motion.div>
      </div>
      <style jsx global>{`
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientMove 4s ease-in-out infinite;
        }
        body:not(.dark) .drop-shadow-\[0_2px_24px_rgba\(255\,115\,0\,0\.25\)\] {
          filter: drop-shadow(0 4px 32px rgba(255, 115, 0, 0.18));
        }
      `}</style>
    </section>
  );
}
