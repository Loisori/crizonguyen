"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { navigationItems } from "@/constants/header";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-[calc(100%-2rem)] overflow-hidden rounded-3xl bg-[rgba(15,23,42,0.65)] p-2 text-white shadow-[0_30px_80px_-35px_rgba(15,23,42,0.65)] backdrop-blur-xs lg:left-0 lg:right-0 lg:w-fit lg:rounded-full">
      <div className="flex items-center justify-between gap-4 px-3 py-1 lg:hidden">
        <Link
          href="#about-me"
          className="font-sf text-small leading-10"
          onClick={() => setIsMenuOpen(false)}
        >
          Nam Nguyen
        </Link>
        <button
          type="button"
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white duration-300 hover:bg-white hover:text-black"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <nav
        id="primary-navigation"
        className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-700 ease-out lg:block lg:overflow-visible lg:opacity-100 ${
          isMenuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <ul className="grid min-h-0 gap-2 pt-2 text-white lg:flex lg:justify-between lg:pt-0">
          {navigationItems.map((item) => (
            <li
              key={item}
              className="rounded-full text-smaller leading-10 duration-300 hover:bg-white hover:text-black lg:w-48 lg:text-small
              last:bg-linear-to-r last:from-[#236BBD] last:to-[#959595] last:hover:brightness-150 last:hover:text-white"
            >
              <Link
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="block size-full rounded-full px-4 text-center font-sf lg:px-0"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
