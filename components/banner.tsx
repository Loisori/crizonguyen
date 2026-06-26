import { bannerClients, bannerStats, bannerTools } from "@/constants/banner";

export default function Banner() {
  return (
    <section className="relative left-1/2 min-h-[780px] w-screen -translate-x-1/2 overflow-hidden border-b border-white/20 bg-[#08090d] px-5 pb-12 pt-32 text-white sm:px-10 lg:min-h-[980px] lg:px-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_70%,rgba(18,76,255,0.9),transparent_28%),radial-gradient(circle_at_95%_6%,rgba(17,64,132,0.75),transparent_34%),linear-gradient(115deg,#07080d_0%,#101010_54%,#071932_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.2)_58%,rgba(0,0,0,0.86)_100%)]" />

      <DecorativeShapes />

      <p className="pointer-events-none absolute left-6 top-[12%] select-none text-[clamp(7rem,21vw,27rem)] font-black leading-none tracking-normal text-white/[0.11] drop-shadow-[0_0_18px_rgba(255,255,255,0.22)] sm:left-16">
        Video Editor
      </p>
      <p className="pointer-events-none absolute left-[34%] top-[13%] hidden -rotate-12 select-none text-5xl font-light italic text-white/35 lg:block">
        Vietnamese
      </p>

      <div className="relative z-10 mx-auto flex min-h-[620px] max-w-[108rem] flex-col justify-end gap-10 lg:min-h-[780px]">
        <div className="absolute bottom-0 left-1/2 hidden h-[76%] w-[30rem] -translate-x-1/2 lg:block">
          <PortraitVisual />
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div className="max-w-[42rem]">
            <h1 className="text-[clamp(4rem,6vw,7.5rem)] font-black leading-[0.85] text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.72)]">
              Hi, I&apos;m Nam Nguyen
            </h1>
            <p className="mt-8 max-w-[42rem] text-lg leading-8 text-white sm:text-2xl">
              I help content creators and agencies craft high-engaging videos
              that reflect their values and connect deeply with their audience
            </p>

            <div className="mt-9 flex gap-3 sm:gap-4">
              {bannerTools.map((tool) => (
                <div
                  key={tool.label}
                  className={`flex h-20 w-20 items-center justify-center rounded-2xl border-4 text-4xl font-black shadow-[0_0_24px_rgba(255,255,255,0.18)] sm:h-24 sm:w-24 sm:text-5xl ${tool.className}`}
                  aria-label={tool.label}
                >
                  {tool.label}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-12 lg:items-end">
            <div className="grid w-full grid-cols-3 gap-5 lg:max-w-[40rem]">
              {bannerStats.map((stat) => (
                <article key={stat.label} className="text-center lg:text-left">
                  <p className="text-[clamp(3.25rem,5vw,6rem)] font-black leading-none text-white drop-shadow-[0_0_14px_rgba(255,255,255,0.5)]">
                    {stat.value}
                  </p>
                  <p className="mt-4 text-sm text-white/85 sm:text-xl">{stat.label}</p>
                </article>
              ))}
            </div>

            <div className="grid w-full grid-cols-5 gap-3 lg:max-w-[44rem] lg:gap-8">
              {bannerClients.map((client) => (
                <div
                  key={client}
                  className="flex aspect-square items-center justify-center rounded-full bg-white/55 text-sm font-black text-black shadow-[inset_0_18px_35px_rgba(255,255,255,0.35),0_20px_60px_rgba(0,0,0,0.35)] grayscale sm:text-xl"
                >
                  {client}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PortraitVisual() {
  return (
    <div className="absolute inset-x-0 bottom-0 h-full">
      <div className="absolute left-[36%] top-[11%] h-[24%] w-[32%] rounded-full bg-zinc-900 shadow-[0_0_70px_rgba(255,255,255,0.18)]" />
      <div className="absolute left-[32%] top-[20%] h-[30%] w-[38%] rounded-[48%] bg-[#d9d9d9]" />
      <div className="absolute left-[31%] top-[12%] h-[17%] w-[40%] rounded-[50%_50%_40%_35%] bg-[#090909]" />
      <div className="absolute left-[29%] top-[16%] h-[18%] w-[44%] -rotate-6 rounded-[60%_45%_45%_35%] bg-[#0b0b0b]" />
      <div className="absolute left-[41%] top-[32%] h-[7%] w-[16%] rounded-full bg-[#bfbfbf]" />
      <div className="absolute left-[42%] top-[28%] h-3 w-3 rounded-full bg-black" />
      <div className="absolute left-[56%] top-[29%] h-3 w-3 rounded-full bg-black" />
      <div className="absolute left-[46%] top-[36%] h-[2%] w-[14%] rounded-full bg-black/55" />
      <div className="absolute bottom-0 left-[21%] h-[55%] w-[62%] rounded-t-[45%] bg-[#0b0b0d]" />
      <div className="absolute bottom-0 left-[33%] h-[37%] w-[56%] rounded-t-[35%] bg-[#111113]" />
      <div className="absolute inset-x-0 bottom-0 h-[36%] bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.92))]" />
    </div>
  );
}

function DecorativeShapes() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="absolute left-[7%] top-[9%] h-32 w-32 border-8 border-white/20" />
      <div className="absolute left-[14%] top-[14%] h-72 w-20 -rotate-3 bg-white/20 blur-[1px]" />
      <div className="absolute left-[18%] top-[14%] h-72 w-20 rotate-3 bg-white/20 blur-[1px]" />
      <div className="absolute left-[18%] top-[26%] h-16 w-16 bg-white/20" />
      <div className="absolute right-[6%] top-[17%] h-56 w-56 border border-white/10" />
      <div className="absolute right-[7%] top-[18%] h-3 w-3 bg-white/10" />
      <div className="absolute right-[16%] top-[39%] h-3 w-3 bg-white/10" />
      <div className="absolute left-[3%] top-[47%] h-24 w-24 rotate-12 bg-blue-200/20 [clip-path:polygon(45%_0,57%_0,57%_35%,88%_18%,96%_28%,67%_50%,96%_72%,88%_82%,57%_65%,57%_100%,45%_100%,45%_65%,12%_82%,4%_72%,33%_50%,4%_28%,12%_18%,45%_35%)]" />
      <div className="absolute left-[32%] top-[11%] h-20 w-20 bg-white/15 [clip-path:polygon(50%_0,61%_36%,100%_36%,68%_58%,80%_96%,50%_73%,20%_96%,32%_58%,0_36%,39%_36%)]" />
    </div>
  );
}
