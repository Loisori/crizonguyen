import { Reveal } from "@/components/common/reveal";
import { ProjectItem } from "@/constants/project";

export default function Project() {
  return (
    <section
      id="project"
      className="wrapper wrapper--lg bg-[#111111] text-white"
    >
      <Reveal>
        <h2 className="font-heathergreen text-[8rem] text-white drop-shadow-[0_0_22px_rgba(255,255,255,0.7)]">
          Outstanding project
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-x-[2.5rem] gap-y-8 lg:grid-cols-2">
        {ProjectItem.map((project, index) => (
          <article key={`${project.title}-${index}`} className="group">
            <div className="relative aspect-[1.58/1] overflow-hidden bg-zinc-900">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={project.url}
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              <div className="pointer-events-none absolute inset-0 bg-black/35 transition-colors duration-300 group-hover:bg-black/15" />
            </div>

            <div className="font-sf mt-8 space-y-4">
              <h3 className="text-body leading-[1.3] font-medium text-white">
                {project.title}
              </h3>
              <p className="text-small leading-[1.5] text-[#C5C5C5]">
                {project.year}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
