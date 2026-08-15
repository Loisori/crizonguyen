"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, type HTMLMotionProps, type Variants } from "framer-motion";

import { bannerClients, bannerStats, bannerTools } from "@/constants/banner";

const bannerTransition = {
  duration: 1,
  ease: [0.25, 1, 0.5, 1] as const,
  type: "tween" as const,
};

const bannerClientsLoopTransition = {
  duration: 18,
  ease: "linear" as const,
  repeat: Infinity,
};

const bannerSectionVariants: Variants = {
  hidden: {},
  visible: {},
};

const backgroundTextVariants: Variants = {
  hidden: { opacity: 0, y: -100, scale: 0.5 },
  visible: { opacity: 1, y: 0, scale: 1, transition: bannerTransition },
};

const bannerBackdropVariants: Variants = {
  hidden: { opacity: 0, y: "2%" },
  visible: {
    opacity: 1,
    y: "0%",
    transition: bannerTransition,
  },
};

const bannerOverlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: bannerTransition },
};

const centerImageVariants: Variants = {
  hidden: { opacity: 0, y: 300, scale: 0.5 },
  visible: { opacity: 1, y: 0, scale: 1, transition: bannerTransition },
};

const leftContentVariants: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: bannerTransition },
};

const rightContentVariants: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: bannerTransition },
};

const circle1Variants: Variants = {
  hidden: { left: "0%", top: "20%", opacity: 0, rotate: 45 },
  visible: {
    left: "7%",
    top: "9%",
    opacity: 1,
    rotate: 0,
    transition: bannerTransition,
  },
};

const circle2Variants: Variants = {
  hidden: { right: "0%", top: "27%", opacity: 0, rotate: 45 },
  visible: {
    right: "6%",
    top: "17%",
    opacity: 1,
    rotate: 0,
    transition: bannerTransition,
  },
};

const star1Variants: Variants = {
  hidden: { left: "0%", top: "47%", opacity: 0 },
  visible: {
    left: "3%",
    top: "47%",
    opacity: 1,
    transition: bannerTransition,
  },
};

const star2Variants: Variants = {
  hidden: { left: "32%", top: "0%", opacity: 0 },
  visible: {
    left: "32%",
    top: "11%",
    opacity: 1,
    transition: bannerTransition,
  },
};

type BannerTriggerProps = Pick<
  HTMLMotionProps<"section">,
  "animate" | "whileHover" | "whileInView" | "viewport"
>;

export default function Banner() {
  const isDesktop = useMediaQuery("(min-width: 1025px)");
  const animationTriggerProps: BannerTriggerProps =
    isDesktop === null
      ? { animate: "hidden" }
      : isDesktop
        ? { animate: "hidden", whileHover: "visible" }
        : {
            whileInView: "visible",
            viewport: { once: true, margin: "-50px" },
          };

  return (
    <motion.section
      aria-labelledby="banner-heading"
      className="overflow-hidden pb-0!"
      initial="hidden"
      variants={bannerSectionVariants}
      {...animationTriggerProps}
    >
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_12%_70%,rgba(18,76,255,0.9),transparent_28%),radial-gradient(circle_at_95%_6%,rgba(17,64,132,0.75),transparent_34%),linear-gradient(115deg,#07080d_0%,#101010_54%,#071932_100%)]"
        variants={bannerBackdropVariants}
      />
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.2)_58%,rgba(0,0,0,0.86)_100%)]"
        variants={bannerOverlayVariants}
      />
      <div className="wrapper wrapper--lg group relative max-h-[84.4rem] h-screen w-screen text-white">
        <DecorativeShapes />
        {/* text-transparent */}
        {/* [-webkit-text-stroke:1px_rgba(255,255,255,0.4)] */}
        <motion.p
          aria-hidden="true"
          className="pointer-events-none absolute top-[12%] max-lg:w-full select-none text-center 
          font-heathergreen leading-none whitespace-nowrap bg-linear-to-b from-white/11 to-transparent bg-clip-text text-transparent
          drop-shadow-[0_0_18px_rgba(255,255,255,0.22)] text-[16rem] sm:text-[32rem] xmd:text-[50rem]"
          variants={backgroundTextVariants}
        >
          Video Editor
        </motion.p>
        <motion.p
          className="font-1k-reey text-[4rem] pointer-events-none absolute left-[34%] top-[13%] hidden -rotate-12 select-none text-5xl font-light italic text-white/35 lg:block"
          variants={backgroundTextVariants}
        >
          Vietnamese
        </motion.p>

        <div className="relative z-10 mx-auto flex h-full flex-col justify-end gap-10">
          <motion.div
            className="absolute bottom-0 left-1/2 z-20 h-[92vh] w-200 -translate-x-1/2"
            variants={centerImageVariants}
          >
            <div className="relative size-full">
              <Image
                alt="Nam Nguyen portrait"
                src="/imgs/banner.png"
                fill
                priority
                sizes="(min-width: 1024px) 50rem, 100vw"
                className="object-contain object-bottom drop-shadow-[0_30px_90px_rgba(0,0,0,0.65)]"
              />
            </div>
          </motion.div>

          <div className="grid gap-3 xmd:gap-10 xmd:grid-cols-[1fr_0.9fr] xmd:items-end pb-[5rem] xmd:pb-[10rem] max-xmd:text-center max-xmd:justify-center max-xmd:z-50">
            <motion.article
              className="w-full xmd:max-w-2xl"
              variants={leftContentVariants}
            >
              <h1
                id="banner-heading"
                className="font-heathergreen text-[4rem] md:text-[8rem] lg:text-[12rem] tracking-[1%] whitespace-nowrap text-white drop-shadow-[0_3px_18px_rgba(255,255,255,0.69)]"
              >
                Hi, I&apos;m Crizo Nguyen
              </h1>
              <p className="font-sf mt-1 lg:max-w-2xl text-small leading-[150%] text-white">
                I help content creators and agencies craft high-engaging videos
                that reflect their values and connect deeply with their audience
              </p>

              <div
                className="mt-3 xmd:mt-6 flex gap-2 max-xmd:justify-center"
                aria-label="Software tools"
              >
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
                      className="size-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </motion.article>

            <motion.aside
              className="flex flex-col gap-12 lg:items-end"
              variants={rightContentVariants}
            >
              <div className="relative z-30 grid w-full grid-cols-3 gap-5 xmd:max-w-160">
                {bannerStats.map((stat) => (
                  <article
                    key={stat.label}
                    className="text-center lg:text-left"
                  >
                    <p className="font-heathergreen text-h1 xmd:text-[8rem] tracking-[1%] font-black leading-none text-white drop-shadow-[0_0_14px_rgba(255,255,255,0.5)]">
                      {stat.value}
                    </p>
                    <p className="font-sf mt-4 text-white/85 text-small">
                      {stat.label}
                    </p>
                  </article>
                ))}
              </div>

              <div className="relative z-10 w-full overflow-hidden xmd:max-w-[60rem] mask-[linear-gradient(90deg,transparent,black_12%,black_88%,transparent)] max-xmd:hidden">
                <motion.div
                  className="flex w-max gap-3 lg:gap-5"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={bannerClientsLoopTransition}
                >
                  {[...bannerClients, ...bannerClients].map((brand, index) => (
                    <div
                      key={`${brand.src}-${index}`}
                      className="flex aspect-square shrink-0 items-center justify-center overflow-hidden rounded-full grayscale"
                    >
                      <div className="relative size-12 overflow-hidden rounded-full sm:size-16 md:size-20 lg:size-24">
                        {/* Lớp phủ Overlay Gradient làm giảm Brightness từ trên xuống dưới */}
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 z-10 bg-linear-to-b from-transparent via-black/60 to-black/80"
                        />

                        <Image
                          alt={brand.alt}
                          src={brand.src}
                          fill
                          sizes="(max-width: 640px) 48px, (max-width: 768px) 64px, (max-width: 1280px) 80px, 96px"
                          className="object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.aside>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState<boolean | null>(null);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const updateMatches = () => setMatches(mediaQueryList.matches);

    updateMatches();
    mediaQueryList.addEventListener("change", updateMatches);

    return () => {
      mediaQueryList.removeEventListener("change", updateMatches);
    };
  }, [query]);

  return matches;
}

function DecorativeShapes() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <motion.div className="absolute" variants={circle1Variants}>
        <Image
          alt="Decorative shape"
          src="/imgs/circle1.png"
          width={128}
          height={128}
          className="size-16 sm:size-24 xmd:size-32"
        />
      </motion.div>
      <motion.div className="absolute" variants={circle2Variants}>
        <Image
          alt="Decorative shape"
          src="/imgs/circle2.png"
          width={140}
          height={140}
          className="size-30 sm:size-40 xmd:size-56"
        />
      </motion.div>
      <motion.div className="absolute" variants={star1Variants}>
        <Image
          alt="Decorative shape"
          src="/imgs/star1.png"
          width={128}
          height={128}
          className="size-16 sm:size-24 xmd:size-32 animate-spin [animation-duration:12s]"
        />
      </motion.div>
      <motion.div className="absolute" variants={star2Variants}>
        <div className="size-14 sm:size-16 xmd:size-20 bg-white/15 [clip-path:polygon(50%_0,61%_36%,100%_36%,68%_58%,80%_96%,50%_73%,20%_96%,32%_58%,0_36%,39%_36%)]" />
      </motion.div>
    </div>
  );
}
