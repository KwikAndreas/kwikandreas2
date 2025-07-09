"use client";

import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const featuredProjects = [
  {
    title: "Car Rush",
    description: "Game balapan mobil yang dibangun dengan Unity.",
    tags: ["Unity", "C#", "Blender"],
    imageUrl: "/images/projects/carrush.webp",
  },
  {
    title: "GKI Cinda",
    description: "Web untuk profiling Gereja Cipinang Indah.",
    tags: ["React", "Vite", "Typescript", "TailwindCSS", "Supabase", "Next"],
    imageUrl: "/images/projects/gkicinda.webp",
  },
  {
    title: "Bobuah",
    description: "Aplikasi untuk pemesanan Teh Boba Buah",
    tags: ["Flutter", "Dart", "Firebase"],
    imageUrl: "/images/projects/bobuah.webp",
  },
];

export function FeaturedProjectsSection() {
  return (
    <section className="py-20 sm:py-32 bg-slate-50 dark:bg-zinc-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center">
            Proyek Unggulan
          </h2>
          <p className="mt-4 text-center max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
            Beberapa contoh pekerjaan yang menunjukkan keahlian saya dalam
            teknologi dan pengembangan.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="h-full flex flex-col overflow-hidden border border-orange-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:shadow-xl 
              hover:shadow-orange-400/30 dark:hover:shadow-orange-500/20 transition-all duration-300 transform hover:-translate-y-1 group-hover:border-orange-400 group-hover:ring-2 group-hover:ring-orange-200 dark:group-hover:ring-orange-500/30"
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-slate-900 dark:text-white">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-end">
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-orange-50 text-orange-700 border-orange-200 dark:bg-zinc-800 dark:text-zinc-200 dark:border-zinc-700"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/project">
            <Button
              size="lg"
              variant="outline"
              className="border-orange-200 dark:border-orange-700 hover:border-orange-500 hover:bg-orange-50/60 dark:hover:bg-orange-900/10 transition-all duration-200 shadow hover:shadow-orange-200/40"
            >
              Lihat Semua Proyek <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
