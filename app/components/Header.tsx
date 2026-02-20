import Link from "next/link";
import { navigation } from "../data/content";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-neutral-900"
        >
          Nusantara Digital
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-neutral-600 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-neutral-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#contact"
          className="hidden border border-neutral-900 px-5 py-2.5 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-900 hover:text-white md:inline-flex"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
