// components/sections/CtaSection.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function CtaSection() {
  return (
    <section className="py-20 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold">
          Tertarik untuk Berkolaborasi?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
          Saya selalu terbuka untuk mendiskusikan proyek baru, ide-ide kreatif,
          atau peluang untuk menjadi bagian dari visi Anda. Mari wujudkan
          sesuatu yang hebat bersama.
        </p>
        <div className="mt-8 select-none">
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 text-white shadow-lg shadow-orange-400/20 transition-all duration-200 group hover:brightness-110"
              style={{
                boxShadow:
                  "0 4px 24px 0 rgba(255, 115, 0, 0.12), 0 1.5px 6px 0 rgba(255, 115, 0, 0.08)",
              }}
            >
              Hubungi Saya
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
