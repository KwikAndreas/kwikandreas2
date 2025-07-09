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

type ProjectCategory = "website" | "game" | "app";
interface Project {
  title: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  imageUrl: string;
}

const allProjects: Project[] = [
  {
    title: "Car Rush",
    description: "Game tanpa akhir dibuat dengan Unity",
    category: "game",
    tags: ["Unity", "C#"],
    imageUrl: "/images/projects/carrush.webp",
  },
  {
    title: "ASLED",
    description: "Platform sewa peralatan pencahayaan",
    category: "app",
    tags: ["Flutter", "Dart"],
    imageUrl: "/images/projects/asled.webp",
  },
  {
    title: "Dikejar Setan v0.01",
    description: "Aplikasi produktivitas untuk manajemen tugas.",
    category: "game",
    tags: ["Unity", "C#"],
    imageUrl: "/images/projects/dsn.webp",
  },
  {
    title: "UBM CBT",
    description: "Platform ujian berbasis Aplikasi",
    category: "app",
    tags: ["Flutter", "Dart", "Firebase"],
    imageUrl: "/images/projects/logo_ubm.webp",
  },
  {
    title: "Move IT",
    description: "Platform sewa kendaraan",
    category: "app",
    tags: ["Flutter", "Dart", "Firebase"],
    imageUrl: "/images/projects/logo_ubm.webp",
  },
  {
    title: "Angke5",
    description: "Web untuk booking ruangan Restoran Angke.",
    category: "website",
    tags: ["Flutter", "Dart", "Firebase"],
    imageUrl: "/images/projects/angke5.webp",
  },
  {
    title: "Bobuah",
    description: "Aplikasi untuk pemesanan Teh Boba Buah",
    category: "app",
    tags: ["Flutter", "Dart", "Firebase`"],
    imageUrl: "/images/projects/BOBUAH.webp",
  },
  {
    title: "Waste Sorter",
    description:
      "Game untuk belajar klasifikasi sampah dengan Machine Learning",
    category: "game",
    tags: ["Unity", "C#", "Python", "Tensorflow", "Keras", "Blender"],
    imageUrl: "/images/projects/waste_sorter.webp",
  },
  {
    title: "GKI Cinda",
    description: "Web untuk profiling Gereja Cipinang Indah.",
    category: "website",
    tags: ["React", "Vite", "Typescript", "TailwindCSS", "Supabase", "Next"],
    imageUrl: "/images/projects/gkicinda.webp",
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
    <div className="container mx-auto px-4 py-12">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  boxShadow: "0 8px 32px 0 rgba(255,115,0,0.13)",
                  borderColor: "#fb923c",
                }}
                className="transition-all duration-300"
              >
                <Card className="overflow-hidden border border-orange-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:shadow-xl hover:shadow-orange-400/20 dark:hover:shadow-orange-500/20 transition-all duration-300 transform">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    style={{ background: "#f8fafc" }}
                  />
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
    </div>
  );
}
