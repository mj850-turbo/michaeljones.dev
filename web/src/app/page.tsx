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
          <Button asChild className="shadow-[0_8px_24px_-8px_#4A7FA7]">
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

      {/* Highlights section */}
      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border bg-muted/40 p-5 ring-1 ring-inset ring-white/5">
          <h3 className="font-semibold mb-1">Frontend & UI</h3>
          <p className="text-sm text-muted-foreground">Accessible, responsive interfaces with React, Next.js and shadcn/ui. Thoughtful motion and a11y-first details.</p>
        </div>
        <div className="rounded-2xl border bg-muted/40 p-5 ring-1 ring-inset ring-white/5">
          <h3 className="font-semibold mb-1">Full‑stack Apps</h3>
          <p className="text-sm text-muted-foreground">Auth, storage and APIs with Supabase. Data-driven pages and clean server components.</p>
        </div>
        <div className="rounded-2xl border bg-muted/40 p-5 ring-1 ring-inset ring-white/5">
          <h3 className="font-semibold mb-1">Performance & SEO</h3>
          <p className="text-sm text-muted-foreground">Fast loads, Lighthouse targets ≥ 90/95/95/95 with solid Core Web Vitals and metadata.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="relative overflow-hidden rounded-2xl border ring-1 ring-inset ring-white/5 p-8 bg-[linear-gradient(135deg,rgba(74,127,167,.25)_0%,rgba(26,61,99,.25)_100%)]">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-semibold tracking-tight">Let’s build something exceptional</h3>
            <p className="mt-2 text-muted-foreground">Have a project in mind or want feedback on an idea? I’m open to roles and collaborations in Northwest Arkansas and remote.</p>
            <div className="mt-4 flex gap-3">
              <Button asChild>
                <Link href="/contact">Get in touch</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/projects">See all projects</Link>
              </Button>
            </div>
          </div>
          <div className="pointer-events-none absolute -right-16 -bottom-16 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,#B3CFE5_0%,transparent_60%)] opacity-20" />
        </div>
      </section>
    </div>
  );
}
