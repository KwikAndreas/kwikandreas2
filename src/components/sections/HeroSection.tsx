// components/sections/HeroSection.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="container mx-auto flex min-h-screen items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="mb-4 text-lg text-orange-500 font-semibold">Halo, saya</p>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
          Kwik Andreas Jonathan
        </h1>
        <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-slate-700 dark:text-slate-300">
          Saya seorang Web Developer & Game Developer.
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
          Selalu belajar, beradaptasi, dan berkembang di dunia teknologi
          digital.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/proyek">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              Lihat Proyek Saya <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/kontak">
            <Button size="lg" variant="outline">
              Hubungi Saya
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
