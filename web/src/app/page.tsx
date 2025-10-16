"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/project-card";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="space-y-14">
      <section className="text-center md:text-left">
        <motion.h1
          className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Michael Jones — <span className="text-gradient-accent">Developer</span>
        </motion.h1>
        <motion.p
          className="mt-4 text-muted-foreground max-w-2xl"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
          Frontend‑leaning full‑stack developer in Fayetteville, AR. I build
          production‑grade web apps with Next.js, TypeScript, and Supabase.
        </motion.p>
        <motion.div
          className="mt-7 flex flex-col sm:flex-row gap-3 justify-center md:justify-start"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          <Button asChild className="shadow-[0_8px_24px_-8px_#A77693]">
            <Link href="/projects" className="group">
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact">Contact Me</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/resume" className="inline-flex items-center gap-2">
              Resume <ExternalLink className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
