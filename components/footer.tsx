"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, type HTMLMotionProps, type Variants } from "framer-motion";

import { contactActions } from "@/constants/contact";

const footerTransition = {
  duration: 0.6,
  ease: [0.25, 1, 0.5, 1] as const,
  type: "tween" as const,
};

const stageTwoDelay = 0.6;

const stageTwoTransition = {
  ...footerTransition,
  delay: stageTwoDelay,
};

const fullAnimationTransition = {
  duration: stageTwoDelay + footerTransition.duration,
  ease: footerTransition.ease,
  type: footerTransition.type,
};

const footerSectionVariants: Variants = {
  hidden: {
    backgroundColor: "#111111",
  },
  visible: {
    backgroundColor: ["#ffffff", "#ffffff", "#111111"],
    transition: {
      ...fullAnimationTransition,
      times: [0, 0.5, 1],
    },
  },
};

const stageTwoContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: stageTwoDelay,
      staggerChildren: 0.08,
    },
  },
};

const footerBackgroundVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: [0, 0, 1],
    transition: {
      ...fullAnimationTransition,
      times: [0, 0.5, 1],
    },
  },
};

const backgroundTextVariants: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: footerTransition },
};

const footerImageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: footerTransition },
};

const leftContentVariants: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: stageTwoTransition },
};

const rightContentVariants: Variants = {
  hidden: { opacity: 0, x: 0 },
  visible: { opacity: 1, x: 0, transition: footerTransition },
};

type FooterTriggerProps = Pick<
  HTMLMotionProps<"footer">,
  "animate" | "whileHover" | "whileInView" | "viewport"
>;

export default function Footer() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const animationTriggerProps: FooterTriggerProps =
    isDesktop === null
      ? { animate: "hidden" }
      : isDesktop
        ? { animate: "hidden", whileHover: "visible" }
        : {
            whileInView: "visible",
            viewport: { once: true, margin: "-50px" },
          };

  return (
    <motion.footer
      id="let's-work"
      className="relative left-1/2 min-h-[760px] w-screen -translate-x-1/2 overflow-hidden bg-[#111111] px-5 pt-28 text-white sm:px-10 lg:min-h-[980px] lg:px-20"
      initial="hidden"
      variants={footerSectionVariants}
      {...animationTriggerProps}
    >
      <motion.div className="contents" variants={stageTwoContainerVariants}>
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_82%,rgba(18,74,255,0.96),transparent_42%),linear-gradient(180deg,#111111_0%,#0a0a0d_48%,#062fc7_100%)]"
          variants={footerBackgroundVariants}
        />
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.2)_0%,transparent_42%,rgba(0,0,0,0.08)_100%)]"
          variants={footerBackgroundVariants}
        />

        <motion.div
          className="font-heathergreen pointer-events-none absolute inset-x-0 top-[9%] select-none text-center text-[clamp(7rem,18vw,24rem)] font-black leading-none text-white/[0.12] opacity-0 drop-shadow-[0_0_16px_rgba(255,255,255,0.2)]"
          variants={backgroundTextVariants}
        >
          Let&apos;s Work Together
        </motion.div>

        <motion.div className="opacity-0" variants={rightContentVariants}>
          <div className="font-heathergreen pointer-events-none absolute left-[22%] top-[52%] hidden select-none text-[clamp(4rem,7vw,9rem)] font-black leading-none text-white/[0.08] lg:block">
            Nam Nguyen
          </div>
          <div className="font-heathergreen pointer-events-none absolute right-[23%] top-[53%] hidden select-none text-[clamp(4rem,7vw,9rem)] font-black leading-none text-white/[0.08] lg:block">
            Video Editor
          </div>
        </motion.div>

        <motion.div className="opacity-0" variants={footerBackgroundVariants}>
          <DecorativeBurst />
        </motion.div>
      </motion.div>

      <div className="relative z-10 mx-auto flex min-h-[630px] max-w-[108rem] flex-col items-center justify-end lg:min-h-[820px]">
        <motion.div
          className="absolute left-1/2 size-[100rem] -translate-x-1/2 "
          variants={footerImageVariants}
        >
          <FooterBannerImage />
        </motion.div>

        <motion.div
          className="relative z-20 mb-[9.5rem] grid gap-rem opacity-0 sm:grid-cols-2"
          variants={leftContentVariants}
        >
          {contactActions.map((action) => (
            <a
              key={action.label}
              href={action.href}
              className="flex w-[38rem] h-[7.5rem] items-center justify-center gap-5 rounded-full border border-white/20 bg-black text-h5 text-[#C5C5C5] shadow-[0_14px_45px_rgba(0,0,0,0.45)] transition-all duration-300 
              hover:bg-[radial-gradient(circle,_#1C7AE5_0%,_#D8D6D6_100%)] hover:text-black"
            >
              {action.icon === "instagram" ? <InstagramIcon /> : <EmailIcon />}
              <span>{action.label}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </motion.footer>
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

function FooterBannerImage() {
  return (
    <div className="relative h-full w-full">
      <Image
        alt="Nam Nguyen footer banner portrait"
        src="/imgs/footer_banner.png"
        fill
        priority
        sizes="(min-width: 1280px) 50rem, (min-width: 768px) 80vw, 104vw"
        className="object-contain object-center drop-shadow-[0_30px_90px_rgba(0,0,0,0.65)]"
      />
    </div>
  );
}

function DecorativeBurst() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="absolute right-[28%] top-[8%] size-24 rotate-12 bg-white/25 [clip-path:polygon(45%_0,57%_0,57%_35%,88%_18%,96%_28%,67%_50%,96%_72%,88%_82%,57%_65%,57%_100%,45%_100%,45%_65%,12%_82%,4%_72%,33%_50%,4%_28%,12%_18%,45%_35%)]" />
    </div>
  );
}

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-8 w-8 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="12" cy="12" r="3.3" />
      <circle cx="17" cy="7" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-8 w-8 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}
