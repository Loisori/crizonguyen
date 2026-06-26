const contactActions = [
  {
    label: "Chat on Instagram",
    href: "https://www.instagram.com/",
    icon: "instagram",
  },
  {
    label: "Send an Email",
    href: "mailto:hello@example.com",
    icon: "email",
  },
];

export default function Footer() {
  return (
    <footer
      id="let's-work"
      className="relative left-1/2 min-h-[760px] w-screen -translate-x-1/2 overflow-hidden bg-[#08090d] px-5 pt-28 text-white sm:px-10 lg:min-h-[980px] lg:px-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_82%,rgba(18,74,255,0.96),transparent_42%),linear-gradient(180deg,#08090d_0%,#0a0a0d_48%,#062fc7_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.2)_0%,transparent_42%,rgba(0,0,0,0.08)_100%)]" />

      <div className="pointer-events-none absolute inset-x-0 top-[9%] select-none text-center text-[clamp(7rem,18vw,24rem)] font-black leading-none text-white/[0.12] drop-shadow-[0_0_16px_rgba(255,255,255,0.2)]">
        Let&apos;s Work Together
      </div>

      <div className="pointer-events-none absolute left-[22%] top-[52%] hidden select-none text-[clamp(4rem,7vw,9rem)] font-black leading-none text-white/[0.08] lg:block">
        Nam Nguyen
      </div>
      <div className="pointer-events-none absolute right-[23%] top-[53%] hidden select-none text-[clamp(4rem,7vw,9rem)] font-black leading-none text-white/[0.08] lg:block">
        Video Editor
      </div>

      <DecorativeBurst />

      <div className="relative z-10 mx-auto flex min-h-[630px] max-w-[108rem] flex-col items-center justify-end lg:min-h-[820px]">
        <div className="absolute bottom-0 left-1/2 h-[82%] w-[36rem] max-w-[115vw] -translate-x-1/2">
          <FooterPortrait />
        </div>

        <div className="relative z-20 mb-[9.5rem] grid w-full max-w-[54rem] gap-4 sm:grid-cols-2">
          {contactActions.map((action) => (
            <a
              key={action.label}
              href={action.href}
              className="flex h-20 items-center justify-center gap-5 rounded-full border border-white/20 bg-black px-8 text-xl font-semibold text-white/80 shadow-[0_14px_45px_rgba(0,0,0,0.45)] transition duration-200 hover:-translate-y-1 hover:text-white hover:shadow-[0_18px_60px_rgba(0,0,0,0.58)] sm:text-2xl"
            >
              {action.icon === "instagram" ? <InstagramIcon /> : <EmailIcon />}
              <span>{action.label}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

function FooterPortrait() {
  return (
    <div className="absolute inset-x-0 bottom-0 h-full">
      <div className="absolute left-[28%] top-[1%] h-[36%] w-[44%] rounded-[45%_45%_48%_48%] bg-[#070707] shadow-[0_0_60px_rgba(255,255,255,0.16)]" />
      <div className="absolute left-[30%] top-[14%] h-[40%] w-[40%] rounded-[46%] bg-[#d7dce5]" />
      <div className="absolute left-[28%] top-[3%] h-[21%] w-[44%] rounded-[50%_50%_35%_35%] bg-[#0b0b0d]" />
      <div className="absolute left-[25%] top-[10%] h-[15%] w-[50%] rounded-[55%_55%_36%_36%] bg-[#0b0b0d]" />
      <div className="absolute left-[36%] top-[31%] h-4 w-4 rounded-full bg-black" />
      <div className="absolute right-[36%] top-[31%] h-4 w-4 rounded-full bg-black" />
      <div className="absolute left-[46%] top-[43%] h-[2%] w-[8%] rounded-full bg-black/60" />
      <div className="absolute left-[32%] top-[53%] h-[6%] w-[36%] rounded-b-full bg-[#c8ced8]" />
      <div className="absolute bottom-0 left-[6%] h-[37%] w-[88%] rounded-t-[48%] bg-[#08090d]" />
      <div className="absolute bottom-0 left-[16%] h-[51%] w-[68%] rounded-t-[42%] bg-[#0c0d12]" />
      <div className="absolute inset-x-0 bottom-0 h-[48%] bg-[linear-gradient(180deg,transparent,rgba(4,46,206,0.84)_55%,rgba(4,46,206,0.98)_100%)]" />
    </div>
  );
}

function DecorativeBurst() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="absolute right-[28%] top-[8%] h-24 w-24 rotate-12 bg-white/25 [clip-path:polygon(45%_0,57%_0,57%_35%,88%_18%,96%_28%,67%_50%,96%_72%,88%_82%,57%_65%,57%_100%,45%_100%,45%_65%,12%_82%,4%_72%,33%_50%,4%_28%,12%_18%,45%_35%)]" />
      <div className="absolute left-[8%] top-[12%] h-80 w-10 bg-white/18" />
      <div className="absolute right-[9%] top-[12%] h-80 w-10 bg-white/18" />
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
