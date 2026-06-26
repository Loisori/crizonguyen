import { afterVideos, beforeVideos } from "@/constants/casestudy";

export default function CaseStudy() {
  return (
    <section
      id="case-study"
      className="relative left-1/2 min-h-[820px] w-screen -translate-x-1/2 overflow-hidden bg-[#0a0a0a] px-4 pb-20 pt-32 text-white sm:px-8 lg:min-h-[980px] lg:px-16"
    >
      <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.12),transparent_34%)]" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.95))]" />

      <div className="relative z-10 mx-auto max-w-[120rem]">
        <div className="text-center">
          <h2 className="text-[clamp(4rem,7vw,9rem)] font-black leading-[0.86] text-white drop-shadow-[0_0_22px_rgba(255,255,255,0.72)]">
            Case Study
          </h2>
          <p className="mt-5 text-[clamp(3.25rem,5vw,6.5rem)] font-black leading-none text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.66)]">
            01
          </p>
        </div>

        <div className="relative mt-8 flex items-center justify-between">
          <p className="text-[clamp(3rem,4.5vw,5.5rem)] font-black text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.75)]">
            Before
          </p>
          <div className="mx-8 h-px flex-1 bg-white/45" />
          <div className="relative mr-8 hidden h-12 w-12 sm:block">
            <div className="absolute left-0 top-1/2 h-px w-full bg-white/70" />
            <div className="absolute right-0 top-1/2 h-8 w-8 -translate-y-1/2 rotate-45 border-r border-t border-white/70" />
          </div>
          <p className="text-[clamp(3rem,4.5vw,5.5rem)] font-black text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.75)]">
            After
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <CasePanel videos={beforeVideos} tone="before" />
          <CasePanel videos={afterVideos} tone="after" />
        </div>
      </div>
    </section>
  );
}

function CasePanel({
  videos,
  tone,
}: {
  videos: { title: string; theme: string; duration: string }[];
  tone: "before" | "after";
}) {
  return (
    <div className="relative overflow-hidden">
      <div
        className={`absolute inset-0 z-10 pointer-events-none ${
          tone === "before"
            ? "bg-[linear-gradient(90deg,rgba(0,0,0,0.84),transparent_30%,transparent_76%,rgba(0,0,0,0.2))]"
            : "bg-[linear-gradient(90deg,rgba(0,0,0,0.2),transparent_24%,transparent_70%,rgba(0,0,0,0.82))]"
        }`}
      />
      <div className="grid gap-4 sm:grid-cols-3">
        {videos.map((video) => (
          <article key={video.title} className="min-w-0">
            <VideoThumb theme={video.theme} duration={video.duration} />
            <div className="mt-3 flex gap-3">
              <div className="min-w-0 flex-1">
                <h3 className="truncate text-sm font-bold text-white">{video.title}</h3>
                <p className="mt-1 text-xs text-white/55">11 N luot xem • 2 tuan truoc</p>
              </div>
              <span className="text-lg leading-none text-white/70">:</span>
            </div>
          </article>
        ))}
      </div>
      <AnalyticsStrip tone={tone} />
    </div>
  );
}

function VideoThumb({ theme, duration }: { theme: string; duration: string }) {
  return (
    <div className="relative aspect-video overflow-hidden rounded-lg bg-zinc-900 shadow-[0_18px_45px_rgba(0,0,0,0.28)]">
      <ThumbArtwork theme={theme} />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(0,0,0,0.58))]" />
      <span className="absolute bottom-2 right-2 rounded bg-black/85 px-1.5 py-0.5 text-[0.68rem] font-bold text-white">
        {duration}
      </span>
    </div>
  );
}

function ThumbArtwork({ theme }: { theme: string }) {
  if (theme === "ui") {
    return (
      <div className="absolute inset-0 bg-zinc-200 p-5">
        <div className="h-full rounded bg-white shadow-lg">
          {[0, 1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="flex items-center justify-between border-b border-zinc-200 px-3 py-2">
              <span className="h-2 w-20 rounded bg-zinc-300" />
              <span className="h-4 w-8 rounded-full bg-blue-500" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (theme === "game" || theme === "factorio") {
    return (
      <div className="absolute inset-0 bg-[#9fcde5] p-6">
        <div className="mx-auto h-full max-w-[75%] rounded border-4 border-[#d8ba73] bg-[#e9f0dd] p-3">
          <div className="mx-auto mb-3 h-8 w-8 rounded-full bg-red-500" />
          <div className="grid grid-cols-6 gap-1">
            {Array.from({ length: 24 }).map((_, index) => (
              <span key={index} className="h-3 rounded bg-[#6d8bb5]" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (theme === "racer") {
    return (
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#081a35,#28a7d9_45%,#b51d33)]">
        <div className="absolute left-[18%] top-[18%] h-[62%] w-[64%] rounded-full border-[18px] border-white/70 bg-black" />
        <div className="absolute left-[29%] top-[28%] h-[26%] w-[42%] rounded-full bg-[#f1c3a4]" />
      </div>
    );
  }

  const palette =
    theme === "briefing"
      ? "from-amber-950 via-amber-700 to-black"
      : theme === "code"
        ? "from-zinc-950 via-zinc-900 to-black"
        : theme === "office"
          ? "from-emerald-950 via-slate-700 to-zinc-900"
          : "from-slate-900 via-zinc-700 to-black";

  return (
    <div className={`absolute inset-0 bg-gradient-to-br ${palette}`}>
      <div className="absolute left-[10%] top-[18%] h-[50%] w-[32%] rounded-full bg-white/22" />
      <div className="absolute right-[12%] top-[20%] h-[48%] w-[30%] rounded-full bg-white/18" />
      <p className="absolute bottom-[16%] left-[8%] max-w-[76%] text-2xl font-black leading-[0.9] text-white/90">
        {theme === "lawyer"
          ? "Capability meets Judgment"
          : theme === "office"
            ? "Reflecting on a year of Claude Code"
            : theme === "profile"
              ? "How Anthropic uses Claude"
              : "The Problem Solvers"}
      </p>
    </div>
  );
}

function AnalyticsStrip({ tone }: { tone: "before" | "after" }) {
  return (
    <div className="mt-5 overflow-hidden rounded-t-xl bg-[#1f1f1f] text-white/80">
      <div className="flex h-10 items-center gap-4 border-b border-white/10 px-5 text-xs">
        <span className="h-4 w-4 rounded-full bg-cyan-300" />
        <span className="h-4 flex-1 rounded-full bg-black/45" />
        <span className="rounded-full bg-white/10 px-3 py-1">Advanced mode</span>
      </div>
      <div className="grid min-h-24 grid-cols-[1fr_13rem] gap-4 p-5">
        <div>
          <p className="text-lg font-black sm:text-2xl">
            {tone === "before"
              ? "Your channel performance needed a clearer story"
              : "Your channel got 18,129 views in the last 28 days"}
          </p>
          <div className="mt-4 h-2 rounded-full bg-white/10">
            <div className={`h-full rounded-full ${tone === "before" ? "w-1/3 bg-zinc-500" : "w-4/5 bg-sky-400"}`} />
          </div>
        </div>
        <div className="hidden rounded-lg bg-black/30 p-3 sm:block">
          <p className="text-sm font-bold">Realtime</p>
          <p className="mt-2 text-xs text-cyan-300">Updating live</p>
        </div>
      </div>
    </div>
  );
}
