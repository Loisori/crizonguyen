import Link from "next/link";
import { navigationItems } from "@/constants/header";

export default function Header() {
  return (
    <header className="fixed top-4 left-0 right-0 mx-auto w-fit overflow-hidden rounded-full bg-[rgba(15,23,42,0.65)] backdrop-blur-xs p-2 text-white shadow-[0_30px_80px_-35px_rgba(15,23,42,0.65)] z-50">
      <nav>
        <ul className="text-white flex justify-between gap-2">
          {navigationItems.map((item) => (
            <li
              key={item}
              className="w-48 text-small leading-10 hover:text-black rounded-full hover:bg-white duration-300
              last:bg-linear-to-r last:from-[#236BBD] last:to-[#959595] last:hover:brightness-150 last:hover:text-white"
            >
              <Link
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="size-full block text-center"
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
