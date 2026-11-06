import { Container, GitBranch, Server, ShieldCheck } from "lucide-react";

// couverture générique pour les projets sans capture d'écran publique
export default function ProjectCover({ project, className = "" }) {
  return (
    <div
      role="img"
      aria-label={project.alt}
      className={`flex flex-col items-center justify-center gap-4 border border-gray-700 bg-[#131726] px-6 text-center ${className}`}
    >
      <div className="flex items-center gap-3 text-[#e63946]">
        <GitBranch size={26} />
        <Container size={26} />
        <Server size={26} />
        <ShieldCheck size={26} />
      </div>
      <span className="about-title-sour-gummy text-3xl text-[#f8e7cc]">
        {project.title}
      </span>
      {project.category ? (
        <span className="text-xs uppercase tracking-[0.2em] text-gray-400">
          {project.category}
        </span>
      ) : null}
    </div>
  );
}
