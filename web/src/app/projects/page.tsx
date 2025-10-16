import { projects } from "@/data/projects";
import ProjectCard from "@/components/project-card";

export const metadata = {
  title: "Projects — Michael Jones",
  description: "A selection of projects built with modern web tools.",
};

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight">Projects</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}

