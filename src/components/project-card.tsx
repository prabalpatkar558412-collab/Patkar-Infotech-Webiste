import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Atom,
  Code2,
  Database,
  Network,
  Server,
  Smartphone,
  Wind,
  type LucideIcon,
} from "lucide-react";
import type { ProjectItem } from "@/lib/projects";

const technologyIconAssets: Record<string, string> = {
  TypeScript: "/images/technologies/typescript.svg",
  JavaScript: "/images/technologies/javascript.svg",
  Python: "/images/technologies/python.svg",
  PHP: "/images/technologies/php.svg",
  Java: "/images/technologies/java.svg",
  Go: "/images/technologies/go.svg",
  "C#": "/images/technologies/csharp.svg",
  "C++": "/images/technologies/cpp.svg",
};

const technologyIcons: Record<string, LucideIcon> = {
  "Next.js": Code2,
  React: Atom,
  "Tailwind CSS": Wind,
  "REST APIs": Network,
  "Node.js": Server,
  PostgreSQL: Database,
  Supabase: Database,
  "React Native": Smartphone,
};

function TechnologyTag({ technology }: { technology: string }) {
  const Icon = technologyIcons[technology] ?? Code2;
  const asset = technologyIconAssets[technology];

  return (
    <span className="tech-tag">
      {asset ? (
        <Image src={asset} alt="" aria-hidden="true" width={14} height={14} />
      ) : (
        <Icon size={14} aria-hidden="true" strokeWidth={2} />
      )}
      <span>{technology}</span>
    </span>
  );
}

export function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <article className={`project-card ${project.isClientWork ? "is-client-featured" : ""}`}>
      <div className="project-preview-frame">
        <Image
          src={project.previewImage}
          alt={`Preview of ${project.title}`}
          width={720}
          height={450}
          sizes="(max-width: 680px) 100vw, 50vw"
          className="project-svg-image"
        />
        <span className="project-category-badge">{project.category}</span>
        <span className={`project-status-badge ${project.isClientWork ? "is-client" : "is-concept"}`}>
          {project.isClientWork ? "Client project" : "Concept project"}
        </span>
      </div>

      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.shortDescription}</p>

        {project.isClientWork && (
          <div className="project-client-info">
            <h4>Client Website Details</h4>
            <p><strong>{project.clientOrBrand}</strong></p>
            {project.clientDetails && <p>{project.clientDetails}</p>}
          </div>
        )}

        <div className="project-tools">
          <h4>Tools Used</h4>
          {project.techStack.length ? (
            <div className="project-tech-tags" aria-label="Tools used">
              {project.techStack.map((technology) => (
                <TechnologyTag key={technology} technology={technology} />
              ))}
            </div>
          ) : (
            <p className="project-tools-pending">Tools to be confirmed</p>
          )}
        </div>
        <div className="project-footer">
          <div className="project-action-links">
            <Link href={`/projects/${project.slug}`} className="button button-blue button-sm project-view-link">
              View Project <ArrowRight size={15} aria-hidden="true" />
            </Link>
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="button button-outline button-sm project-live-link">
                Live Preview <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
