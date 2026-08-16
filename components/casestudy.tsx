"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { caseStudies, type VideoItem, type CaseStudyData } from "@/constants/casestudy";

export default function CaseStudy() {
  const [activeStudy, setActiveStudy] = useState<CaseStudyData>(caseStudies[0]);

  return (
    <section
      id="case-study"
      className="
      wrapper wrapper--lg
      relative min-h-[820px] w-screen  overflow-hidden pb-20 pt-32 text-white sm:px-8 lg:min-h-[980px]"
    >
      {/* <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.12),transparent_34%)]" /> */}
      {/* <div className="absolute inset-x-0 bottom-0 h-56 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.95))]" /> */}

      <div className="relative z-10 mx-auto max-w-[120rem]">
        <div className="text-center">
          <h2 className="text-[clamp(4rem,7vw,9rem)] font-black leading-[0.86] text-white drop-shadow-[0_0_22px_rgba(255,255,255,0.72)]">
            Case Study
          </h2>
          <p className="mt-5 text-[clamp(3.25rem,5vw,6.5rem)] font-black leading-none text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.66)]">
            {activeStudy.id}
          </p>
          <p className="mt-4 text-xl font-medium text-white/60 tracking-wider uppercase">
            {activeStudy.title}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="mt-12 flex justify-center">
          <div className="flex gap-2 rounded-full border border-white/10 bg-zinc-900/60 p-1.5 backdrop-blur-md">
            {caseStudies.map((study) => {
              const isActive = activeStudy.id === study.id;
              return (
                <button
                  key={study.id}
                  onClick={() => setActiveStudy(study)}
                  className={`relative rounded-full px-8 py-3 text-sm font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                    isActive ? "text-black font-extrabold" : "text-white/60 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-tab-bg"
                      className="absolute inset-0 rounded-full bg-white"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{study.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative mt-16 flex items-center justify-between">
          <p className="text-[clamp(3rem,4.5vw,5.5rem)] font-black text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.75)]">
            Before
          </p>
          <div className="mx-8 h-px flex-1 bg-white/45" />
          {/* <div className="relative mr-8 hidden h-12 w-12 sm:block">
            <div className="absolute left-0 top-1/2 h-px w-full bg-white/70" />
            <div className="absolute right-0 top-1/2 h-8 w-8 -translate-y-1/2 rotate-45 border-r border-t border-white/70" />
          </div> */}
          <p className="text-[clamp(3rem,4.5vw,5.5rem)] font-black text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.75)]">
            After
          </p>
        </div>

        {/* Animated case study panels */}
        <div className="relative mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStudy.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid gap-8 lg:grid-cols-2"
            >
              <CasePanel videos={activeStudy.before} tone="before"/>
              <CasePanel videos={activeStudy.after} tone="after" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function CasePanel({
  videos,
  tone,
}: {
  videos: VideoItem[];
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
      <div className="flex flex-col gap-4">
        {videos.map((video) => (
          <article
            key={video.title}
            className="group flex flex-col sm:flex-row gap-5 rounded-xl border border-white/5 bg-[#151515]/40 p-4 transition-all duration-300 hover:border-white/10 hover:bg-[#1f1f1f]/50 cursor-pointer"
          >
            {/* Thumbnail */}
            <div className="relative w-full shrink-0">
              <VideoThumb img={video.img} />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function VideoThumb({ img }: { img: string;}) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-zinc-900 shadow-[0_18px_45px_rgba(0,0,0,0.28)] border border-white/5 w-full">
      <Image
        alt="Video thumbnail"
        src={img}
        fill
        sizes="(max-width: 640px) 100vw, 176px"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  );
}