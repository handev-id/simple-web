import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { hero, metrics } from "../../data/content";

export default function HeroSection() {
  return (
    <section
      className="grid items-start gap-12 md:grid-cols-[1.1fr_0.9fr]"
      id="home"
    >
      <div className="space-y-8">
        <span className="inline-flex items-center border border-neutral-300 bg-neutral-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-700">
          {hero.badge}
        </span>
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold leading-tight text-neutral-900 sm:text-5xl">
            {hero.title}
          </h1>
          <p className="text-lg leading-relaxed text-neutral-600">
            {hero.subtitle}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href={hero.primaryCta.href}
            className="inline-flex items-center justify-center gap-2 bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            {hero.primaryCta.label}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link
            href={hero.secondaryCta.href}
            className="inline-flex items-center justify-center gap-2 border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:border-neutral-900"
          >
            {hero.secondaryCta.label}
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="border border-neutral-200 bg-white p-4"
            >
              <div className="text-2xl font-semibold text-neutral-900">
                {metric.value}
              </div>
              <div className="text-sm text-neutral-600">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-4 border border-neutral-200 bg-neutral-50 p-6">
        <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">
              Client story
            </p>
            <p className="text-lg font-semibold text-neutral-900">
              Astra Energi
            </p>
          </div>
          <span className="bg-neutral-900 px-3 py-1 text-xs font-semibold text-white">
            Growth 48%
          </span>
        </div>
        <p className="text-sm leading-relaxed text-neutral-700">
          Transformasi portal layanan pelanggan dengan integrasi omnichannel,
          meningkatkan kepuasan pengguna dan efisiensi tim support.
        </p>
        <div className="grid grid-cols-3 gap-3">
          <div className="border border-neutral-200 bg-white p-3 text-center">
            <div className="text-xl font-semibold text-neutral-900">-32%</div>
            <div className="text-xs text-neutral-600">Waktu respon</div>
          </div>
          <div className="border border-neutral-200 bg-white p-3 text-center">
            <div className="text-xl font-semibold text-neutral-900">+2.4x</div>
            <div className="text-xs text-neutral-600">Lead berkualitas</div>
          </div>
          <div className="border border-neutral-200 bg-white p-3 text-center">
            <div className="text-xl font-semibold text-neutral-900">98%</div>
            <div className="text-xs text-neutral-600">CSAT</div>
          </div>
        </div>
      </div>
    </section>
  );
}
