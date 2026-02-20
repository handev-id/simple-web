import { Activity, Hammer, LayoutPanelLeft, Sparkles } from "lucide-react";
import { workflow } from "../../data/content";

const iconMap = {
  strategy: Sparkles,
  delivery: Hammer,
  design: LayoutPanelLeft,
  observability: Activity,
};

export default function WorkflowSection() {
  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">
            Kolaborasi
          </p>
          <h2 className="text-3xl font-semibold text-neutral-900">
            Jejak kerja yang konsisten dengan hasil terukur.
          </h2>
        </div>
        <span className="border border-neutral-300 bg-neutral-50 px-4 py-2 text-xs font-semibold text-neutral-800">
          Rilis setiap 2 minggu
        </span>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {workflow.map((item) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap];
          return (
            <div
              key={item.title}
              className="flex h-full gap-3 border border-neutral-200 bg-white p-5"
            >
              {Icon ? (
                <Icon className="mt-1 h-5 w-5 flex-shrink-0 text-neutral-900" />
              ) : null}
              <div>
                <p className="text-sm font-semibold text-neutral-900">
                  {item.title}
                </p>
                <p className="mt-1 text-sm text-neutral-600">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
