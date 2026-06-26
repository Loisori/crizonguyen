import { ProjectItem } from "@/constants/project";

export default function Project() {
  return (
    <section id="project" className="bg-black px-5 py-16 text-white sm:px-8 lg:px-16">
      <h2 className="max-w-4xl text-[clamp(3.5rem,7vw,7.5rem)] font-black leading-[0.85] text-white drop-shadow-[0_0_22px_rgba(255,255,255,0.7)]">
        Outstanding project
      </h2>

      <div className="mt-16 grid gap-x-8 gap-y-12 lg:grid-cols-2">
        {ProjectItem.map((project, index) => (
          <article key={`${project.title}-${index}`} className="group">
            <div className="relative aspect-[1.58/1] overflow-hidden bg-zinc-900">
              {project.variant === "brand" ? <BrandBrainArtwork /> : <TravelArtwork />}
              <div className="absolute inset-0 bg-black/35 transition-colors duration-300 group-hover:bg-black/15" />
            </div>

            <div className="mt-8 space-y-4">
              <h3 className="text-2xl font-semibold leading-none text-white sm:text-3xl">
                Channel name
              </h3>
              <p className="text-xl leading-none text-zinc-500 sm:text-2xl">{project.year}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function BrandBrainArtwork() {
  return (
    <div className="absolute inset-0 bg-[#d7d8d0]">
      <p className="absolute -left-4 top-2 text-[clamp(5rem,13vw,15rem)] font-black leading-none text-[#0b1d1c]">
        BrandBrain
      </p>
      <div className="absolute bottom-0 left-[41%] h-[73%] w-[22%] rounded-t-full bg-[#1559a8]" />
      <div className="absolute bottom-0 left-[46%] h-[66%] w-[14%] bg-[#101418]" />
      <div className="absolute bottom-[19%] left-[27%] h-[9%] w-[27%] rotate-[-18deg] rounded-sm bg-[#a56f35]" />
      <div className="absolute bottom-[24%] left-[31%] h-[6%] w-[31%] rotate-[-18deg] rounded-sm bg-[#d3b88a]" />
      <div className="absolute left-[4%] top-[37%] h-[14%] w-[7%] rounded bg-[#244b7a]" />
      <div className="absolute left-[10%] top-[42%] h-[13%] w-[8%] rounded bg-[#a6be62]" />
      <div className="absolute left-[17%] top-[36%] h-[15%] w-[13%] rounded bg-[#52798a]" />
      <div className="absolute left-[26%] top-[43%] h-[15%] w-[13%] rounded-lg border-4 border-[#6e6749] bg-[#b5b171]" />
      <div className="absolute left-[43%] top-[47%] h-[13%] w-[12%] bg-[#6198a4]" />
      <div className="absolute bottom-[8%] right-[4%] h-[27%] w-[22%] rounded-2xl bg-[#c083c3]" />
      <div className="absolute bottom-[10%] right-[14%] h-[18%] w-[15%] rounded-lg bg-[#8ba96a]" />
      <div className="absolute bottom-[8%] right-[25%] h-[18%] w-[13%] rounded-lg bg-white/60 shadow-2xl" />
    </div>
  );
}

function TravelArtwork() {
  return (
    <div className="absolute inset-0 grid grid-cols-4">
      <div className="relative overflow-hidden bg-sky-400">
        <div className="absolute inset-x-0 top-0 h-1/2 bg-sky-300" />
        <div className="absolute bottom-0 h-1/2 w-full bg-cyan-800" />
        <div className="absolute bottom-[34%] left-[40%] h-[42%] w-[18%] bg-zinc-200" />
        <div className="absolute bottom-[27%] left-[33%] h-[10%] w-[32%] bg-zinc-100" />
      </div>
      <div className="relative overflow-hidden bg-[#bda676]">
        <div className="absolute inset-x-[17%] top-0 h-full rounded-b-full bg-[#6f84a0]" />
        <div className="absolute inset-y-0 left-0 w-1/5 bg-[#d4b36e]" />
        <div className="absolute inset-y-0 right-0 w-1/5 bg-[#d4b36e]" />
      </div>
      <div className="relative overflow-hidden bg-[#8e7255]">
        <div className="absolute bottom-0 left-[28%] h-[55%] w-[30%] rounded-t-full bg-[#151515]" />
        <div className="absolute bottom-0 left-[33%] h-[70%] w-[22%] rounded-t-full bg-[#1f1f1f]" />
        <div className="absolute bottom-0 left-[22%] h-[38%] w-[46%] bg-[#8b9194]" />
      </div>
      <div className="relative overflow-hidden bg-[#d1c6b8]">
        <div className="absolute bottom-[8%] left-[22%] h-[48%] w-[52%] rounded-full bg-[#b88942]" />
        <div className="absolute bottom-[43%] left-[34%] h-[34%] w-[30%] rounded-full bg-white" />
        <div className="absolute inset-y-0 right-0 w-[28%] bg-[#603422]" />
      </div>
      <p className="absolute left-[13%] top-[13%] text-2xl font-semibold uppercase tracking-[0.18em] text-lime-200 sm:text-3xl">
        Travel Vlog
      </p>
      <p className="absolute bottom-[17%] left-[14%] text-[clamp(4.5rem,11vw,12rem)] font-black leading-none text-lime-200">
        Thailand
      </p>
      <p className="absolute bottom-[9%] left-[1%] text-xl font-semibold uppercase tracking-[0.35em] text-lime-200">
        Episode 2
      </p>
    </div>
  );
}
