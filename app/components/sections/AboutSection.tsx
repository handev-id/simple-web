import { highlights, specializations } from "../../data/content";
import {
  Activity,
  Hammer,
  LayoutPanelLeft,
  Sparkles,
  Users,
} from "lucide-react";

const iconMap = {
  strategy: Sparkles,
  delivery: Hammer,
  brand: LayoutPanelLeft,
  collaboration: Users,
  design: LayoutPanelLeft,
  observability: Activity,
};

export default function AboutSection() {
  return (
    <section
      id="about"
      className="grid gap-10 border border-neutral-200 bg-neutral-50 p-8 md:grid-cols-[1.1fr_0.9fr]"
    >
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">
          Tentang Kami
        </p>
        <h2 className="text-3xl font-semibold text-neutral-900">
          Studio teknologi dan kreatif yang lahir di Indonesia.
        </h2>
        <p className="text-lg leading-relaxed text-neutral-700">
          Kami menggabungkan strategi bisnis, desain, dan teknologi untuk
          membantu brand bergerak lebih cepat. Tim lintas disiplin kami bekerja
          kolaboratif dengan metodologi yang transparan.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {highlights.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <div
                key={item.title}
                className="flex gap-3 border border-neutral-200 bg-white p-4"
              >
                {Icon ? (
                  <Icon className="h-5 w-5 flex-shrink-0 text-neutral-900" />
                ) : null}
                <div>
                  <p className="text-sm font-semibold text-neutral-900">
                    {item.title}
                  </p>
                  <p className="text-sm text-neutral-600">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="grid gap-4 border border-neutral-200 bg-white p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-neutral-600">Bidang fokus</p>
            <p className="text-lg font-semibold text-neutral-900">
              {specializations.industries}
            </p>
          </div>
          <span className="border border-neutral-300 bg-neutral-50 px-3 py-1 text-xs font-semibold text-neutral-800">
            Industry
          </span>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="border border-neutral-200 bg-neutral-50 p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">
              Platform
            </p>
            <p className="text-sm font-semibold text-neutral-900">
              {specializations.platforms}
            </p>
          </div>
          <div className="border border-neutral-200 bg-neutral-50 p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">
              Teknologi
            </p>
            <p className="text-sm font-semibold text-neutral-900">
              {specializations.technology}
            </p>
          </div>
          <div className="border border-neutral-200 bg-neutral-50 p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">
              Kapasitas
            </p>
            <p className="text-sm font-semibold text-neutral-900">
              {specializations.capacity}
            </p>
          </div>
          <div className="border border-neutral-200 bg-neutral-50 p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">
              Tambahan
            </p>
            <p className="text-sm font-semibold text-neutral-900">
              Brand guideline, sistem desain, playbook operasional
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
