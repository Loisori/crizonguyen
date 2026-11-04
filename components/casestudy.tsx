"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  caseStudies,
  type CaseImage,
  type CaseMetric,
  type CaseStudyData,
} from "@/constants/casestudy";

// Note: the site's root font-size is 62.5%, so 1rem = 10px. Sizes below are in px
// to match the design exactly.

export default function CaseStudy() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = caseStudies[activeIndex];

  return (
    <section
      id="case-study"
      className="relative overflow-hidden bg-[#050505] px-[24px] pb-[96px] pt-[120px] font-sf text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-224px] h-[672px] w-[1024px] max-w-[160vw] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(48,109,131,0.42),rgba(48,109,131,0))]"
      />

      <div className="relative mx-auto flex max-w-[1200px] flex-col gap-[56px]">
        <h2 className="m-0 font-heathergreen text-[clamp(72px,9vw,128px)] font-normal leading-[0.94] text-white drop-shadow-[0_0_22px_rgba(255,255,255,0.7)]">
          Case studies
        </h2>

        {/* Client picker */}
        <div
          role="tablist"
          aria-label="Case studies"
          className="grid gap-[16px] [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]"
        >
          {caseStudies.map((study, i) => (
            <ClientButton
              key={study.id}
              study={study}
              active={i === activeIndex}
              onSelect={() => setActiveIndex(i)}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="flex flex-col gap-[56px]"
          >
            <Block
              title="The videos"
              subtitle="Same channel, before and after my edit"
            >
              <div className="grid items-start gap-[20px] [grid-template-columns:repeat(auto-fit,minmax(288px,1fr))]">
                <VideoColumn videos={active.before} tone="before" />
                <VideoColumn videos={active.after} tone="after" />
              </div>
            </Block>

            {active.metrics.length > 0 && (
              <Block
                title="The numbers"
                subtitle="Straight from the channel’s analytics"
              >
                <div className="grid items-start gap-[20px] md:grid-cols-2">
                  {active.metrics.map((metric, i) => (
                    <MetricCard
                      key={metric.img}
                      metric={metric}
                      highlights={i === 0 ? active.highlights : []}
                    />
                  ))}
                </div>
              </Block>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function ClientButton({
  study,
  active,
  onSelect,
}: {
  study: CaseStudyData;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onSelect}
      className={`flex min-h-[44px] cursor-pointer items-center justify-between gap-[16px] rounded-[20px] border-0 px-[22px] py-[20px] text-left transition-colors duration-300 ${
        active
          ? "bg-[rgba(16,34,42,0.9)] text-white shadow-[0_20px_60px_rgba(48,109,131,0.28)]"
          : "bg-white/[0.035] text-[#C9D6DF] hover:bg-white/[0.07]"
      }`}
    >
      <span className="flex min-w-0 flex-col gap-[6px]">
        <span
          className={`flex items-center gap-[8px] text-[13px] font-semibold tracking-[0.06em] ${
            active ? "text-[#C9D6DF]" : "text-[#9AA6AE]"
          }`}
        >
          {study.id}
          {active && (
            <span className="size-[8px] rounded-full bg-[#8EE0EC]" />
          )}
        </span>
        <span
          className={`font-heathergreen text-[32px] font-normal leading-[1.05] tracking-[0.01em] ${
            active ? "text-white" : "text-[#E6EDF2]"
          }`}
        >
          {study.name}
        </span>
        <span className="text-[14px] font-light text-[#C9D6DF]">
          {study.niche}
        </span>
      </span>
      <Image
        src={study.avatar}
        alt={study.name}
        width={144}
        height={144}
        className={`size-[72px] shrink-0 rounded-full object-cover transition duration-300 ${
          active
            ? "shadow-[0_0_0_3px_rgba(142,224,236,0.35)]"
            : "opacity-60 grayscale"
        }`}
      />
    </button>
  );
}

function Block({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex flex-wrap items-baseline justify-between gap-[16px]">
        <h3 className="m-0 font-heathergreen text-[36px] font-normal leading-none">
          {title}
        </h3>
        <span className="text-[14px] font-light text-[#C9D6DF]">
          {subtitle}
        </span>
      </div>
      {children}
    </div>
  );
}

function Badge({ tone, children }: { tone: "before" | "after"; children: React.ReactNode }) {
  return (
    <span
      className={`absolute left-[14px] top-[14px] z-10 rounded-full px-[13px] py-[6px] text-[13px] font-semibold ${
        tone === "after"
          ? "bg-[#8EE0EC] text-[#050505]"
          : "bg-[rgba(5,5,5,0.75)] text-[#C9D6DF] backdrop-blur-sm"
      }`}
    >
      {children}
    </span>
  );
}

function VideoColumn({
  videos,
  tone,
}: {
  videos: CaseImage[];
  tone: "before" | "after";
}) {
  const [selected, setSelected] = useState(0);
  const main = videos[selected] ?? videos[0];
  const isAfter = tone === "after";

  return (
    <div className="flex flex-col gap-[12px]">
      <div
        className={`relative overflow-hidden rounded-[20px] ${
          isAfter
            ? "bg-[linear-gradient(160deg,#16313B,#0C1A20)] shadow-[0_20px_60px_rgba(48,109,131,0.3)]"
            : "bg-[#1A1C1E]"
        }`}
      >
        <Badge tone={tone}>{isAfter ? "After" : "Before"}</Badge>
        <Image
          key={main.img}
          src={main.img}
          alt={main.alt}
          width={main.width}
          height={main.height}
          sizes="(min-width: 1248px) 590px, (min-width: 660px) 50vw, 100vw"
          className="block h-auto w-full"
        />
      </div>

      {videos.length > 1 && (
        <div className="grid grid-cols-4 gap-[10px]">
          {videos.map((video, i) => (
            <button
              key={video.img}
              type="button"
              onClick={() => setSelected(i)}
              aria-label={`Show: ${video.alt}`}
              aria-pressed={i === selected}
              className={`relative cursor-pointer overflow-hidden rounded-[12px] border-0 bg-[#141618] p-0 transition duration-300 ${
                i === selected
                  ? isAfter
                    ? "opacity-100 ring-2 ring-[#8EE0EC]"
                    : "opacity-100 ring-2 ring-[#C9D6DF]"
                  : "opacity-55 hover:opacity-90"
              }`}
            >
              <Image
                src={video.img}
                alt=""
                width={video.width}
                height={video.height}
                sizes="(min-width: 1248px) 140px, 24vw"
                className="block aspect-[4/3] h-auto w-full object-cover object-top"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function MetricCard({
  metric,
  highlights,
}: {
  metric: CaseMetric;
  highlights: string[];
}) {
  return (
    <div className="flex flex-col gap-[12px] rounded-[24px] bg-[rgba(16,34,42,0.55)] p-[16px] backdrop-blur-[20px]">
      <div className="relative overflow-hidden rounded-[16px] bg-[#0C1A20]">
        <Badge tone="after">After</Badge>
        <Image
          src={metric.img}
          alt={metric.alt}
          width={metric.width}
          height={metric.height}
          sizes="(min-width: 1248px) 590px, (min-width: 660px) 50vw, 100vw"
          className="block h-auto w-full"
        />
      </div>
      <div className="flex flex-wrap items-center gap-[8px] px-[4px] pb-[4px]">
        <span className="mr-[4px] text-[14px] font-light text-[#C9D6DF]">
          {metric.label}
        </span>
        {highlights.map((h) => (
          <span
            key={h}
            className="rounded-full bg-[rgba(142,224,236,0.12)] px-[13px] py-[6px] text-[14px] font-semibold text-[#8EE0EC]"
          >
            {h}
          </span>
        ))}
      </div>
    </div>
  );
}
