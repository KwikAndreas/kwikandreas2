// components/layout/Footer.tsx
import { Github, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-zinc-800 mt-12">
      <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-sm text-slate-600 dark:text-slate-400">
          © {new Date().getFullYear()} Kwik Andreas.
        </p>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <a href="#" className="text-slate-500 hover:text-orange-500"><Github /></a>
          <a href="#" className="text-slate-500 hover:text-orange-500"><Linkedin /></a>
          <a href="#" className="text-slate-500 hover:text-orange-500"><Instagram /></a>
        </div>
      </div>
    </footer>
  );
}