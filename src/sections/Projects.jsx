import { ArrowUpRight, Github, ExternalLink, Lock } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import {
  featuredProjects,
  moreProjects,
  githubUrl,
  GITHUB_USER,
} from "@/data/projects";

const ProjectLinks = ({ project, compact = false }) => {
  const size = compact ? "w-3.5 h-3.5" : "w-4 h-4";
  const linkClass =
    "inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors";

  return (
    <div className="flex flex-wrap items-center gap-4">
      {project.repo && project.isPublic && (
        <a
          href={githubUrl(project.repo)}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          <Github className={size} /> Code
        </a>
      )}
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          <ExternalLink className={size} /> {project.demoLabel || "Live"}
        </a>
      )}
      {!project.isPublic && !project.demo && (
        <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground/80">
          <Lock className="w-3.5 h-3.5" /> Private repo · demo on request
        </span>
      )}
    </div>
  );
};

const Tags = ({ tags }) => (
  <div className="flex flex-wrap gap-2">
    {tags.map((tag) => (
      <span
        key={tag}
        className="px-3 py-1 rounded-full bg-surface text-xs font-medium text-muted-foreground"
      >
        {tag}
      </span>
    ))}
  </div>
);

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-200 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-foreground">
              {" "}
              solve real problems.
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything I've built, in one place. I build with AI coding agents
            like Claude Code (and a little of my own knowledge): I decide what
            to build, write the plan, review what the AI produces, and test it
            before it ships.
          </p>
        </div>

        {/* Featured grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project, idx) => (
            <article
              key={project.title}
              className={`group glass rounded-2xl p-6 md:p-8 flex flex-col gap-5 border border-transparent hover:border-primary/40 transition-all duration-500 animate-fade-in ${
                idx === 0 ? "md:col-span-2" : ""
              }`}
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <project.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
              <div className="mt-auto space-y-4">
                <Tags tags={project.tags} />
                <ProjectLinks project={project} />
              </div>
            </article>
          ))}
        </div>

        {/* More builds */}
        <div className="mt-24 space-y-14">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary-foreground">
              More{" "}
              <span className="font-serif italic font-normal text-foreground">
                builds
              </span>
            </h3>
          </div>
          {moreProjects.map((group) => (
            <div key={group.category}>
              <h4 className="text-sm font-medium tracking-wider uppercase text-muted-foreground mb-5">
                {group.category}
              </h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {group.items.map((project) => (
                  <article
                    key={project.title}
                    className="glass rounded-xl p-5 flex flex-col gap-3 hover:border-primary/40 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <project.icon className="w-5 h-5 text-primary shrink-0" />
                      <h5 className="font-semibold">{project.title}</h5>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="mt-auto space-y-3">
                      <Tags tags={project.tags} />
                      <ProjectLinks project={project} compact />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-16 animate-fade-in animation-delay-1000">
          <a
            href={`https://github.com/${GITHUB_USER}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AnimatedBorderButton>
              See everything on GitHub
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};
