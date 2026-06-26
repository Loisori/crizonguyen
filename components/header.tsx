import Link from "next/link";
const navigationItems = [
  "About Me",
  "Workspace",
  "Project",
  "Case Study",
  "Let's Work",
];

export default function Header() {
  return (
    <header
      className="fixed top-12 left-0 right-0 mx-auto max-w-[60rem] overflow-hidden rounded-full  backdrop-blur-xs p-2 text-white shadow-[0_30px_80px_-35px_rgba(15,23,42,0.65)] z-50"
    >
      <nav>
        <ul className="text-white flex justify-between gap-5">
          {navigationItems.map((item) => (
            <li key={item} className="hover:text-black rounded-full hover:bg-white">
              <Link href={`#${item.toLowerCase().replace(" ", "-")}`}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
