"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Footer } from "@/components/layout/Footer";

type ProjectCategory = "website" | "game" | "app";
interface Project {
  title: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  imageUrl: string;
  hasDemo?: boolean;
  demoUrl?: string;
  visitUrl?: string;
}

const allProjects: Project[] = [
  {
    title: "Car Rush",
    description: "Game tanpa akhir dibuat dengan Unity",
    category: "game",
    tags: ["Unity", "C#", "Blender", "Adobe Illustrator"],
    imageUrl: "/images/projects/carrush.webp",
    hasDemo: true,
    demoUrl: "https://bit-grow.itch.io/carrush",
  },
  {
    title: "ASLED",
    description: "Platform sewa peralatan pencahayaan",
    category: "app",
    tags: ["Flutter", "Dart", "Figma"],
    imageUrl: "/images/projects/asled.webp",
    hasDemo: false,
  },
  {
    title: "Dikejar Setan v0.01",
    description: "Aplikasi produktivitas untuk manajemen tugas.",
    category: "game",
    tags: ["Unity", "C#", "Blender"],
    imageUrl: "/images/projects/dsn.webp",
    hasDemo: true,
    demoUrl: "https://bit-grow.itch.io/dikejar-setan",
  },
  {
    title: "UBM CBT",
    description: "Platform ujian berbasis Aplikasi",
    category: "app",
    tags: ["Flutter", "Dart", "Firebase"],
    imageUrl: "/images/projects/logo_ubm.webp",
    hasDemo: false,
    visitUrl: "https://angke5.web.app/",
  },
  {
    title: "Move IT",
    description: "Platform sewa kendaraan",
    category: "app",
    tags: ["Flutter", "Dart", "Firebase"],
    imageUrl: "/images/projects/logo_ubm.webp",
    hasDemo: false,
  },
  {
    title: "Angke5",
    description: "Web untuk booking ruangan Restoran Angke.",
    category: "website",
    tags: ["Flutter", "Dart", "Firebase"],
    imageUrl: "/images/projects/angke5.webp",
    hasDemo: false,
    visitUrl: "https://angke5.web.app/",
  },
  {
    title: "Bobuah",
    description: "Aplikasi untuk pemesanan Teh Boba Buah",
    category: "app",
    tags: ["Flutter", "Dart", "Firebase"],
    imageUrl: "/images/projects/BOBUAH.webp",
    hasDemo: false,
  },
  {
    title: "Waste Sorter",
    description:
      "Game untuk belajar klasifikasi sampah dengan Machine Learning",
    category: "game",
    tags: ["Unity", "C#", "Python", "Tensorflow", "Keras", "Blender"],
    imageUrl: "/images/projects/waste_sorter.webp",
    hasDemo: true,
    demoUrl: "https://bit-grow.itch.io/waste-sorter",
  },
  {
    title: "GKI Cinda",
    description: "Web untuk profiling Gereja Cipinang Indah.",
    category: "website",
    tags: ["React", "Vite", "Typescript", "TailwindCSS", "Supabase", "Next"],
    imageUrl: "/images/projects/gkicinda.webp",
    hasDemo: false,
    visitUrl: "https://gkicinda.vercel.app/",
  },
];

const categories: { id: ProjectCategory | "all"; name: string }[] = [
  { id: "all", name: "Semua" },
  { id: "website", name: "Website" },
  { id: "game", name: "Game" },
  { id: "app", name: "Aplikasi" },
];

function ProjectSkeleton() {
  return (
    <div className="overflow-hidden border border-orange-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-lg animate-pulse shadow-md">
      <div className="w-full h-48 bg-orange-100 dark:bg-zinc-800" />
      <div className="p-6 space-y-3">
        <div className="h-6 bg-orange-200 dark:bg-zinc-700 rounded w-2/3 mb-2" />
        <div className="h-4 bg-orange-100 dark:bg-zinc-800 rounded w-1/2 mb-4" />
        <div className="flex gap-2">
          <div className="h-5 w-16 bg-orange-100 dark:bg-zinc-800 rounded" />
          <div className="h-5 w-12 bg-orange-100 dark:bg-zinc-800 rounded" />
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [filter, setFilter] = useState<"all" | ProjectCategory>("all");
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    filter === "all"
      ? allProjects
      : allProjects.filter((p) => p.category === filter);

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, [filter]);

  return (
    <div className="container mx-auto px-4 py-12 relative">
      <h1 className="text-4xl font-bold mb-2 text-slate-900 dark:text-white">
        Proyek Saya
      </h1>
      <p className="text-slate-600 dark:text-slate-400 mb-8">
        Berikut adalah beberapa pekerjaan yang telah saya buat.
      </p>

      <div className="flex gap-2 mb-8 flex-wrap">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.06 }}
          >
            <Button
              variant={filter === cat.id ? "default" : "outline"}
              onClick={() => setFilter(cat.id)}
              className={
                filter === cat.id
                  ? "bg-orange-500 hover:bg-orange-600 text-white shadow-md"
                  : "hover:border-orange-400 hover:text-orange-500 transition-all"
              }
            >
              {cat.name}
            </Button>
          </motion.div>
        ))}
      </div>

      {/* Blur overlay when modal open */}
      {selectedProject && (
        <div className="fixed inset-0 z-30 bg-black/30 backdrop-blur-sm transition-all duration-300" />
      )}

      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-300 ${
          selectedProject ? "blur-sm pointer-events-none select-none" : ""
        }`}
      >
        {isLoading
          ? Array.from({ length: Math.max(filteredProjects.length, 3) }).map(
              (_, i) => <ProjectSkeleton key={i} />
            )
          : filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 32, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                  delay: idx * 0.08,
                }}
                whileHover={{
                  scale: 1.035,
                  y: -8,
                  boxShadow: "0 12px 40px 0 rgba(255,115,0,0.18)",
                  borderColor: "#fb923c",
                  filter: "brightness(1.03)",
                }}
                className="transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <Card className="overflow-hidden border border-orange-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:shadow-2xl hover:shadow-orange-400/30 dark:hover:shadow-orange-500/20 transition-all duration-300 transform group-hover:border-orange-400 group-hover:ring-2 group-hover:ring-orange-200 dark:group-hover:ring-orange-500/30">
                  <div className="overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ background: "#f8fafc" }}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-slate-900 dark:text-white">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600 dark:text-slate-400">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <Badge
                          key={tag + "-" + i}
                          variant="secondary"
                          className="bg-orange-50 text-orange-700 border-orange-200 dark:bg-zinc-800 dark:text-zinc-200 dark:border-zinc-700 px-2 py-0.5 rounded"
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

      {/* Modal Project Detail */}
      {selectedProject && (
        <div className="fixed inset-0 z-40 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 40 }}
            transition={{ duration: 0.25 }}
            className="bg-white dark:bg-zinc-900 rounded-xl shadow-2xl border border-orange-200 dark:border-zinc-700 max-w-lg w-full mx-4 p-8 relative"
          >
            <button
              className="absolute top-4 right-4 text-slate-400 hover:text-orange-500 text-xl font-bold"
              onClick={() => setSelectedProject(null)}
              aria-label="Tutup"
            >
              ×
            </button>
            <img
              src={selectedProject.imageUrl}
              alt={selectedProject.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">
              {selectedProject.title}
            </h3>
            <p className="mb-4 text-slate-600 dark:text-slate-400">
              {selectedProject.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.tags.map((tag, i) => (
                <Badge
                  key={tag + "-detail-" + i}
                  variant="secondary"
                  className="bg-orange-50 text-orange-700 border-orange-200 dark:bg-zinc-800 dark:text-zinc-200 dark:border-zinc-700 px-2 py-0.5 rounded"
                >
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="flex gap-3">
              {selectedProject.hasDemo && selectedProject.demoUrl ? (
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                    Demo
                  </Button>
                </a>
              ) : !selectedProject.hasDemo && selectedProject.visitUrl ? (
                <a
                  href={selectedProject.visitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                    Visit
                  </Button>
                </a>
              ) : null}
              <Button
                variant="outline"
                onClick={() => setSelectedProject(null)}
                className="border-orange-200 dark:border-orange-700"
              >
                Tutup
              </Button>
            </div>
          </motion.div>
        </div>
      )}

      <Footer />
    </div>
  );
}
