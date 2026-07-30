"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

import { bannerClients, bannerStats, bannerTools } from "@/constants/banner";

const bannerTransition = {
  duration: 1,
  ease: [0.25, 1, 0.5, 1] as const,
  type: "tween" as const,
};

const bannerSectionVariants: Variants = {
  idle: {},
  hover: {},
};

const backgroundTextVariants: Variants = {
  idle: { opacity: 0, y: -100, scale: 0.5 },
  hover: { opacity: 1, y: 0, scale: 1, transition: bannerTransition },
};

const centerImageVariants: Variants = {
  idle: { opacity: 0, y: 150, scale: 0.5 },
  hover: { opacity: 1, y: 0, scale: 1, transition: bannerTransition },
};

const leftContentVariants: Variants = {
  idle: { opacity: 0, x: -100 },
  hover: { opacity: 1, x: 0, transition: bannerTransition },
};

const rightContentVariants: Variants = {
  idle: { opacity: 0, x: 100 },
  hover: { opacity: 1, x: 0, transition: bannerTransition },
};

export default function Banner() {
  return (
    <motion.section
      aria-labelledby="banner-heading"
      className="group relative left-1/2 h-screen w-screen -translate-x-1/2 overflow-hidden border-b border-white/20 bg-[#111111] px-5 pb-0! pt-32 text-white sm:px-10 lg:px-20"
      initial="idle"
      animate="idle"
      whileHover="hover"
      variants={bannerSectionVariants}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_70%,rgba(18,76,255,0.9),transparent_28%),radial-gradient(circle_at_95%_6%,rgba(17,64,132,0.75),transparent_34%),linear-gradient(115deg,#07080d_0%,#101010_54%,#071932_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.2)_58%,rgba(0,0,0,0.86)_100%)]" />

      <DecorativeShapes />

      <motion.p
        aria-hidden="true"
        // bg-gradient-to-b from-[#FFFFFF] to-transparent bg-clip-text text-transparent
        className="font-heathergreen text-[58rem] pointer-events-none absolute top-[12%] whitespace-nowrap select-none leading-none text-white/11 drop-shadow-[0_0_18px_rgba(255,255,255,0.22)]"
        variants={backgroundTextVariants}
      >
        Video Editor
      </motion.p>
      <p className="font-1k-reey text-[4rem] pointer-events-none absolute left-[34%] top-[13%] hidden -rotate-12 select-none text-5xl font-light italic text-white/35 lg:block">
        Vietnamese
      </p>

      <div className="relative z-10 mx-auto flex h-full flex-col justify-end gap-10">
        <motion.div
          className="absolute bottom-0 left-1/2 hidden h-[92vh] w-[50rem] -translate-x-1/2 lg:block"
          variants={centerImageVariants}
        >
          <PortraitVisual />
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end pb-[10rem]">
          <motion.article className="max-w-2xl" variants={leftContentVariants}>
            <h1
              id="banner-heading"
              className="font-heathergreen text-[12rem] tracking-[1%] whitespace-nowrap text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.72)]"
            >
              Hi, I&apos;m Nam Nguyen
            </h1>
            <p className="font-sf mt-1 max-w-2xl text-small leading-[150%] text-white">
              I help content creators and agencies craft high-engaging videos
              that reflect their values and connect deeply with their audience
            </p>

            <div className="mt-6 flex gap-2" aria-label="Software tools">
              {bannerTools.map((tool) => (
                <div
                  key={tool.label}
                  aria-label={tool.label}
                  className="flex size-15 items-center justify-center overflow-hidden"
                >
                  <Image
                    alt={tool.alt}
                    src={tool.src}
                    width={96}
                    height={96}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.article>

          <motion.aside
            className="flex flex-col gap-12 lg:items-end"
            variants={rightContentVariants}
          >
            <div className="grid w-full grid-cols-3 gap-5 lg:max-w-160">
              {bannerStats.map((stat) => (
                <article key={stat.label} className="text-center lg:text-left">
                  <p className="font-heathergreen text-[8rem] tracking-[1%] font-black leading-none text-white drop-shadow-[0_0_14px_rgba(255,255,255,0.5)]">
                    {stat.value}
                  </p>
                  <p className="font-sf mt-4 text-sm text-white/85 sm:text-xl">
                    {stat.label}
                  </p>
                </article>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-7 lg:gap-5">
              {bannerClients.map((brand) => (
                <div
                  key={brand.src}
                  className="flex aspect-square items-center justify-center overflow-hidden rounded-full grayscale"
                >
                  <Image
                    alt={brand.alt}
                    src={brand.src}
                    width={100}
                    height={100}
                    className="size-full object-contain"
                  />
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>
    </motion.section>
  );
}

function PortraitVisual() {
  return (
    <div className="relative h-full w-full">
      <Image
        alt="Nam Nguyen portrait"
        src="/imgs/banner.png"
        fill
        priority
        sizes="(min-width: 1024px) 50rem, 100vw"
        className="object-contain object-bottom drop-shadow-[0_30px_90px_rgba(0,0,0,0.65)]"
      />
    </div>
  );
}

function DecorativeShapes() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="absolute left-[7%] top-[9%] h-32 w-32 border-8 border-white/20" />
      <div className="absolute right-[6%] top-[17%] h-56 w-56 border border-white/10" />
      <div className="absolute left-[3%] top-[47%] h-24 w-24 rotate-12 bg-blue-200/20 [clip-path:polygon(45%_0,57%_0,57%_35%,88%_18%,96%_28%,67%_50%,96%_72%,88%_82%,57%_65%,57%_100%,45%_100%,45%_65%,12%_82%,4%_72%,33%_50%,4%_28%,12%_18%,45%_35%)]" />
      <div className="absolute left-[32%] top-[11%] h-20 w-20 bg-white/15 [clip-path:polygon(50%_0,61%_36%,100%_36%,68%_58%,80%_96%,50%_73%,20%_96%,32%_58%,0_36%,39%_36%)]" />
    </div>
  );
}
