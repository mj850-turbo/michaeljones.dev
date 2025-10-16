import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { Project } from "@/types/project";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group relative overflow-hidden border-[color:var(--border)] bg-card/80 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-[linear-gradient(var(--secondary),var(--accent))] before:opacity-0 group-hover:before:opacity-100">
      {/* Media */}
      <div className="px-6">
        <div
          className="relative overflow-hidden rounded-xl aspect-[16/9]"
          style={{ background: "linear-gradient(135deg, var(--panel-gradient-start) 0%, var(--panel-gradient-end) 100%)" }}
        >
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          ) : null}
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/20 to-transparent" />
        </div>
      </div>

      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.summary}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <Badge key={s} variant="secondary" className="bg-secondary/20 text-secondary-foreground border border-[color:var(--border)]">
              {s}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-4">
        {project.links.live && (
          <Link className="text-sm underline" href={project.links.live} target="_blank" rel="noreferrer">
            Live
          </Link>
        )}
        {project.links.repo && (
          <Link className="text-sm underline" href={project.links.repo} target="_blank" rel="noreferrer">
            GitHub
          </Link>
        )}
        <Link className="text-sm underline" href={`/projects/${project.slug}`}>
          Details
        </Link>
      </CardFooter>
    </Card>
  );
}
