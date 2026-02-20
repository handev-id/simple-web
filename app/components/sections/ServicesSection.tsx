import Link from "next/link";
import {
  Activity,
  Hammer,
  LayoutPanelLeft,
  Palette,
  Sparkles,
} from "lucide-react";
import { services } from "../../data/content";

const iconMap = {
  strategy: Sparkles,
  delivery: Hammer,
  brand: Palette,
  design: LayoutPanelLeft,
  observability: Activity,
};

export default function ServicesSection() {
  return (
    <section id="services" className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">
            Services
          </p>
          <h2 className="text-3xl font-semibold text-neutral-900">
            Paket lengkap dari strategi hingga eksekusi.
          </h2>
        </div>
        <Link
          href="#contact"
          className="hidden border border-neutral-300 px-4 py-2.5 text-sm font-semibold text-neutral-900 transition hover:border-neutral-900 md:inline-flex"
        >
          Schedule a call
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service) => {
          const Icon = iconMap[service.icon as keyof typeof iconMap];
          return (
            <div
              key={service.title}
              className="flex h-full flex-col gap-3 border border-neutral-200 bg-white p-6"
            >
              {Icon ? <Icon className="h-6 w-6 text-neutral-900" /> : null}
              <h3 className="text-xl font-semibold text-neutral-900">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
