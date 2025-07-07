'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

type ProjectCategory = 'website' | 'game' | 'app';
interface Project {
  title: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  imageUrl: string;
}

const allProjects: Project[] = [
  { title: 'Car Rush', description: 'Game tanpa akhir dibuat dengan Unity', category: 'game', tags: ['Unity', 'C#'], imageUrl: '/images/projects/carrush.webp' },
  { title: 'ASLED', description: 'Platform sewa peralatan pencahayaan', category: 'app', tags: ['Flutter', 'Dart'], imageUrl: '/images/projects/asled.webp' },
  { title: 'Dikejar Setan v0.01', description: 'Aplikasi produktivitas untuk manajemen tugas.', category: 'game', tags: ['Unity', 'C#'], imageUrl: '/images/projects/dsn.webp' },
  { title: 'UBM CBT', description: 'Platform ujian berbasis Aplikasi', category: 'app', tags: ['Flutter', 'Dart', 'Firebase'], imageUrl: '/images/projects/logo_ubm.webp' },
  { title: 'Move IT', description: 'Platform sewa kendaraan', category: 'app', tags: ['Flutter', 'Dart', 'Firebase'], imageUrl: '/images/projects/logo_ubm.webp' },
  { title: 'Angke5', description: 'Web untuk booking ruangan Restoran Angke.', category: 'website', tags: ['Flutter', 'Dart', 'Firebase'], imageUrl: '/images/projects/angke5.webp' },
  { title: 'Bobuah', description: 'Aplikasi untuk pemesanan Teh Boba Buah', category: 'app', tags: ['Flutter', 'Dart', 'Firebase`'], imageUrl: '/images/projects/BOBUAH.webp' },
  { title: 'Waste Sorter', description: 'Game untuk belajar klasifikasi sampah dengan Machine Learning', category: 'game', tags: ['Unity', 'C#', 'Python', 'Tensorflow', 'Keras', 'Blender'], imageUrl: '/images/projects/waste_sorter.webp' },
  { title: 'GKI Cinda', description: 'Web untuk profiling Gereja Cipinang Indah.', category: 'website', tags: ['React', 'Vite', 'Typescript', 'TailwindCSS', 'Supabase', 'Next'], imageUrl: '/images/projects/gkicinda.webp' },
];

const categories: { id: ProjectCategory | 'all'; name: string }[] = [
    { id: 'all', name: 'Semua' },
    { id: 'website', name: 'Website' },
    { id: 'game', name: 'Game' },
    { id: 'app', name: 'Aplikasi' },
]

export default function ProjectsPage() {
  const [filter, setFilter] = useState<'all' | ProjectCategory>('all');

  const filteredProjects = filter === 'all'
    ? allProjects
    : allProjects.filter(p => p.category === filter);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2">Proyek Saya</h1>
      <p className="text-slate-600 dark:text-slate-400 mb-8">Berikut adalah beberapa pekerjaan yang telah saya buat.</p>

      <div className="flex gap-2 mb-8">
        {categories.map(cat => (
           <Button
             key={cat.id}
             variant={filter === cat.id ? 'default' : 'outline'}
             onClick={() => setFilter(cat.id)}
             className={filter === cat.id ? 'bg-orange-500 hover:bg-orange-600' : ''}
           >
             {cat.name}
           </Button>
        ))}
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="overflow-hidden hover:shadow-lg hover:shadow-orange-500/10 transition-shadow">
              <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}