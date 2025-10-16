import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { Project } from "@/types/project";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group relative overflow-hidden border-white/10 bg-card/80 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-[linear-gradient(#A77693,#DED1C6)] before:opacity-0 group-hover:before:opacity-100">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.summary}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <Badge key={s} variant="secondary" className="bg-secondary/20 text-secondary-foreground border border-white/10">
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
        {project.links.caseStudy && (
          <Link className="text-sm underline" href={project.links.caseStudy}>
            Case Study
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}
