import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { Project } from "@/types/project";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.summary}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <Badge key={s} variant="secondary">
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

