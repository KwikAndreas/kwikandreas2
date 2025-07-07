import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  GraduationCap,
  Award,
  Mail,
  MapPin,
  Languages,
} from "lucide-react";

const experiences = [
  {
    role: "Game Development",
    company: "BIT Grow",
    period: "Maret 2023",
    desc: "Membuat sebuah Game Car Rush yang akan dipamerkan pada sebuah acara yang berlokasi di Perpustakaan Nasional",
  },
  {
    role: "Game Development",
    company: "Universitas Bunda Mulia",
    period: "Oktober 2023",
    desc: "Merancang antarmuka yang intuitif dan menarik untuk aplikasi mobile dan web.",
  },
];

const educations = [
  {
    school: "Universitas Bunda Mulia",
    degree: "S1 Teknik Informatika",
    period: "2023 - 2027",
  },
  {
    school: "Global Multimedia Creative",
    degree: "SMK Multimedia",
    period: "2020 - 2023",
  },
];

const certifications = [
  {
    name: "KKNI Level 2 pada Kompetensi keahlian Multimedia",
    issuer: "Badan Nasional Sertifikasi Kompetensi (BNSP)",
    year: "2023",
  },
  { name: "Advanced Python (Gold)", issuer: " Samsung Inovation Campus", year: "2024" },
  { name: "Algorithms & Data Structures with Python (Gold)", issuer: " Samsung Inovation Campus", year: "2024" },
  { name: "Algorithms & Data Structures with Python (Gold)", issuer: " Samsung Inovation Campus", year: "2024" },
];

const skills = [
  "TypeScript",
  "Next.js",
  "React",
  "Tailwind CSS",
  "Framer Motion",
  "Shadcn/ui",
  "Node.js",
  "Figma",
  "Flutter",
  "Unity",
  "Unreal Engine",
  "C#",
  "C++",
  "Python",
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Tentang Saya</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Kolom Kiri: Info Dasar */}
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Informasi Dasar</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-orange-500" />{" "}
                <span>kwikandreasjonathan@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-orange-500" />{" "}
                <span>Jakarta Pusat, Indonesia</span>
              </div>
              <div className="flex items-center gap-3">
                <Languages className="h-5 w-5 text-orange-500" />{" "}
                <span>Indonesia, Inggris</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Kemampuan</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm">
                  {skill}
                </Badge>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2 space-y-8">
          {/* Pengalaman */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-6 w-6 text-orange-500" /> Pengalaman
                Kerja
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {experiences.map((exp) => (
                <div key={exp.role}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold">{exp.role}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {exp.period}
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-orange-500">
                    {exp.company}
                  </p>
                  <p className="mt-1 text-slate-600 dark:text-slate-300">
                    {exp.desc}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Edukasi & Sertifikasi */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-6 w-6 text-orange-500" /> Edukasi
                </CardTitle>
              </CardHeader>
              <CardContent>
                {educations.map((edu) => (
                  <div key={edu.school} className="mb-2">
                    <h3 className="font-bold">{edu.school}</h3>
                    <p className="text-sm text-orange-500">{edu.degree}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {edu.period}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-6 w-6 text-orange-500" /> Sertifikasi
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {certifications.map((cert) => (
                  <div key={cert.name}>
                    <h3 className="font-bold">{cert.name}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {cert.issuer} ({cert.year})
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
