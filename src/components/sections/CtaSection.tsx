// components/sections/CtaSection.tsx
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

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
          Saya selalu terbuka untuk mendiskusikan proyek baru, ide-ide kreatif, atau peluang untuk menjadi bagian dari visi Anda. Mari wujudkan sesuatu yang hebat bersama.
        </p>
        <div className="mt-8">
          <Link href="/contact">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              Hubungi Saya
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}