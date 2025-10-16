import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/project-card";

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
          Michael Jones — Developer
        </h1>
        <p className="mt-3 text-muted-foreground max-w-2xl">
          Frontend‑leaning full‑stack developer in Fayetteville, AR. I build
          production‑grade web apps with Next.js, TypeScript, and Supabase.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
          <Button asChild>
            <Link href="/projects">View Projects</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact">Contact Me</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/resume" className="inline-flex items-center gap-2">
              Resume <ExternalLink className="h-4 w-4" />
            </Link>
          </Button>
        </div>
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
