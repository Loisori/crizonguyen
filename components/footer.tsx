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

const star1Variants: Variants = {
  hidden: { right: "20%", top: "5%", opacity: 0 },
  visible: {
    right: "26%",
    top: "8%",
    opacity: 0.35,
    transition: stageTwoTransition,
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

const neckTextVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 36 },
  visible: { opacity: 1, scale: 1, y: 0, transition: stageTwoTransition },
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
      id="lets-work"
      className="relative w-full overflow-hidden bg-[#111111] px-5 pt-28 text-white sm:px-10 lg:px-20"
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

        <motion.p
          className="tracking-[4%] text-[16rem] sm:text-[32rem] xmd:text-[40] 
          pointer-events-none absolute inset-x-0 top-[9%] select-none 
          text-center font-black opacity-0 drop-shadow-[0_0_16px_rgba(255,255,255,0.2)]
          font-heathergreen leading-none whitespace-nowrap bg-linear-to-b from-white/11 to-transparent bg-clip-text text-transparent
          "
          variants={backgroundTextVariants}
        >
          Let&apos;s Work Together
        </motion.p>

        <motion.div
          className="opacity-0 font-heathergreen tracking-[4%] text-white/8 
          pointer-events-none select-none text-[clamp(5rem,8vw,10rem)] font-black leading-none hidden lg:block"
          variants={rightContentVariants}
        >
          <p className="absolute left-[22%] top-[52%]">Crizo Nguyen</p>
          <p className="absolute right-[23%] top-[53%]">Video Editor</p>
        </motion.div>
        <motion.div
          className="absolute pointer-events-none select-none z-0"
          variants={star1Variants}
        >
          <Image
            alt="Decorative shape"
            src="/imgs/star1.png"
            width={128}
            height={128}
            className="size-16 sm:size-20 lg:size-24 animate-spin [animation-duration:16s] opacity-35"
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-1/2 z-10 h-[92vh] w-[90rem] -translate-x-1/2 scale-[1.2] origin-bottom"
        variants={footerImageVariants}
      >
        <FooterBannerImage />
      </motion.div>

      <div className="relative z-10 mx-auto flex min-h-[630px] max-w-[108rem] flex-col items-center justify-end lg:min-h-[820px]">
        <motion.div
          className="pointer-events-none absolute left-1/2 top-[40px] z-0 size-[32rem] -translate-x-1/2 select-none opacity-0 [mask-image:linear-gradient(180deg,#000_0%,#000_48%,transparent_49%)] sm:size-[42rem] lg:top-[120px] lg:size-[54rem]"
          variants={neckTextVariants}
        >
          {/* <RotatingNeckText pathId="footer-neck-text-back" /> */}
        </motion.div>

        <motion.div
          className="pointer-events-none absolute left-1/2 top-[40px] z-20 size-[32rem] -translate-x-1/2 select-none opacity-0 [mask-image:linear-gradient(180deg,transparent_0%,transparent_48%,#000_49%,#000_100%)] sm:size-[42rem] lg:top-[120px] lg:size-[54rem]"
          variants={neckTextVariants}
        >
          {/* <RotatingNeckText pathId="footer-neck-text-front" /> */}
        </motion.div>

        <motion.div
          className="relative z-30 mb-16 flex flex-col sm:flex-row gap-4 items-center justify-center opacity-0 w-full px-4"
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
    <div className="relative size-full">
      <Image
        alt="Nam Nguyen footer banner portrait"
        src="/imgs/footer_banner.png"
        fill
        priority
        sizes="(min-width: 1280px) 50rem, (min-width: 768px) 80vw, 104vw"
        className="object-contain object-bottom drop-shadow-[0_30px_90px_rgba(0,0,0,0.65)]"
      />
    </div>
  );
}

type RotatingNeckTextProps = {
  pathId: string;
};

function RotatingNeckText({ pathId }: RotatingNeckTextProps) {
  const text = "Just Do It! * Just Do It! * ";

  return (
    <motion.svg
      aria-hidden="true"
      className="h-full w-full overflow-visible"
      viewBox="0 0 400 400"
      animate={{ rotate: 360 }}
      transition={{
        duration: 14,
        ease: "linear",
        repeat: Infinity,
      }}
    >
      <defs>
        <path
          id={pathId}
          d="M 200 200 m -142 0 a 142 142 0 1 1 284 0 a 142 142 0 1 1 -284 0"
        />
      </defs>
      <text
        className="font-sf fill-white text-[3.8rem] font-black drop-shadow-[0_0_8px_rgba(255,255,255,0.85)]"
        letterSpacing="1.5"
      >
        <textPath href={`#${pathId}`} startOffset="0%">
          {text}
        </textPath>
        <textPath href={`#${pathId}`} startOffset="50%">
          {text}
        </textPath>
      </text>
    </motion.svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6 shrink-0"
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
      className="h-6 w-6 shrink-0"
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
