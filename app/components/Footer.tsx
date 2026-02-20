import Link from "next/link";
import { navigation } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="text-lg font-semibold tracking-tight text-neutral-900">
              Nusantara Digital
            </div>
            <p className="text-sm text-neutral-600">
              Studio produk digital yang membantu brand Indonesia bertumbuh
              dengan strategi dan teknologi modern.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-900">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm text-neutral-600">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition hover:text-neutral-900"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-900">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>halo@nusantaradigital.id</li>
              <li>+62 812-3456-7890</li>
              <li>Jl. Sudirman No. 22, Jakarta</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-900">
              Social
            </h3>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>
                <a href="#" className="transition hover:text-neutral-900">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-neutral-900">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-neutral-900">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-neutral-200 pt-8 text-center text-sm text-neutral-500">
          © {new Date().getFullYear()} Nusantara Digital. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
