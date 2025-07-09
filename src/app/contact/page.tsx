"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Instagram,
  Gamepad2,
} from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/kwik-jonathan/",
    user: "kwik-jonathan",
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/KwikAndreas",
    user: "KwikAndreas",
  },
  {
    name: "Itch.io",
    icon: Gamepad2,
    url: "https://bit-grow.itch.io/",
    user: "BIT Grow",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/kwik_andreas_jonathan/",
    user: "@kwik_andreas_jonathan",
  },
];

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 min-h-[calc(100vh-8rem)] flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <motion.h1
          className="text-4xl font-bold mb-2 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Hubungi Saya
        </motion.h1>
        <motion.p
          className="text-slate-600 dark:text-slate-400 mb-8 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Jangan ragu untuk terhubung. Saya selalu terbuka untuk diskusi,
          kolaborasi, atau peluang baru.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Card>
            <CardContent className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-8 w-8 text-orange-500 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg">Email</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      kwikandreasjonathan@gmail.com
                    </p>
                    <a
                      href="mailto:kwikandreasjonathan@gmail.com"
                      className="text-sm text-orange-500 hover:underline"
                    >
                      Kirim Email
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-8 w-8 text-orange-500 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg">Nomor Handphone</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      +62 8129 2698 237
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {socialLinks.map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: i * 0.08,
                        ease: "easeOut",
                      }}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.98 }}
                      className="block"
                    >
                      <Button
                        variant="outline"
                        className="w-full justify-start gap-3 border-slate-200 dark:border-zinc-700 hover:border-orange-400 hover:bg-orange-50/40 dark:hover:bg-orange-900/10 transition-all duration-200 shadow-sm hover:shadow-lg group"
                      >
                        <Icon className="h-5 w-5 text-orange-500 group-hover:scale-110 transition-transform duration-200" />
                        <span className="flex-grow text-left font-semibold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent group-hover:brightness-125 transition-all duration-200">
                          {social.name}
                        </span>
                        <span className="text-slate-500 dark:text-slate-400 group-hover:text-orange-500 transition-colors duration-200">
                          {social.user}
                        </span>
                      </Button>
                    </motion.a>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
