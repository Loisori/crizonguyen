import { Reveal } from "@/components/common/reveal";
import { ProjectItem } from "@/constants/project";

export default function Project() {
  return (
    <section
      id="project"
      className="wrapper wrapper--lg relative isolate bg-[#050505] text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -z-10 left-1/2 top-[-220px] h-[640px] w-[1000px] max-w-[160vw] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(48,109,131,0.4),rgba(48,109,131,0))]"
      />
      <Reveal>
        <h2 className="font-heathergreen text-[8rem] text-white drop-shadow-[0_0_22px_rgba(255,255,255,0.7)]">
          Outstanding project
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-x-[2.5rem] gap-y-8 lg:grid-cols-2">
        {ProjectItem.map((project, index) => (
          <article
            key={`${project.title}-${index}`}
            className="group relative rounded-[24px] bg-[linear-gradient(160deg,#16313B,#0C1A20)] p-[16px] shadow-[0_20px_60px_rgba(48,109,131,0.2)]"
          >
            <div className="relative aspect-[1.58/1] overflow-hidden rounded-[16px] bg-[#050505]">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={project.url}
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              <div className="pointer-events-none absolute inset-0 bg-black/35 transition-colors duration-300 group-hover:bg-black/15" />
            </div>

            <div className="font-sf mt-6 space-y-2 px-2 pb-2">
              <h3 className="text-body leading-[1.3] font-medium text-white">
                {project.title}
              </h3>
              <p className="text-small leading-[1.5] text-[#C9D6DF]">
                {project.year}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
