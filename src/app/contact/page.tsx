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
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        className="w-full justify-start gap-3"
                      >
                        <Icon className="h-5 w-5" />
                        <span className="flex-grow text-left">
                          {social.name}
                        </span>
                        <span className="text-slate-500 dark:text-slate-400">
                          {social.user}
                        </span>
                      </Button>
                    </a>
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
