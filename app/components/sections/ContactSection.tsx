import { Mail, MapPin, Phone } from "lucide-react";
import { contacts } from "../../data/content";

const contactIconMap = {
  mail: Mail,
  phone: Phone,
  map: MapPin,
};

export default function ContactSection() {
  return (
    <section id="contact" className="grid gap-8 md:grid-cols-[1.05fr_0.95fr]">
      <div className="border border-neutral-200 bg-neutral-50 p-8">
        <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">
          Contact
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-neutral-900">
          Diskusikan tantangan digital Anda.
        </h2>
        <p className="mt-3 text-sm text-neutral-600">
          Ceritakan kebutuhan bisnis, kami siapkan rekomendasi langkah cepat
          beserta estimasi waktu pengerjaan.
        </p>
        <div className="mt-6 space-y-3">
          {contacts.map((item) => {
            const Icon =
              contactIconMap[item.icon as keyof typeof contactIconMap];
            return (
              <div
                key={item.label}
                className="flex items-center gap-3 border border-neutral-200 bg-white p-4"
              >
                {Icon ? <Icon className="h-5 w-5 text-neutral-900" /> : null}
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">
                    {item.label}
                  </p>
                  <p className="text-sm font-semibold text-neutral-900">
                    {item.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="border border-neutral-200 bg-white p-8">
        <form className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm text-neutral-700">
              <span>Name</span>
              <input
                type="text"
                placeholder="Full name"
                className="w-full border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-500 focus:border-neutral-900 focus:outline-none"
              />
            </label>
            <label className="space-y-2 text-sm text-neutral-700">
              <span>Email</span>
              <input
                type="email"
                placeholder="email@company.com"
                className="w-full border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-500 focus:border-neutral-900 focus:outline-none"
              />
            </label>
          </div>
          <label className="space-y-2 text-sm text-neutral-700">
            <span>Company</span>
            <input
              type="text"
              placeholder="Company name"
              className="w-full border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-500 focus:border-neutral-900 focus:outline-none"
            />
          </label>
          <label className="space-y-2 text-sm text-neutral-700">
            <span>Needs</span>
            <textarea
              rows={4}
              placeholder="Describe challenges or targets"
              className="w-full border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-500 focus:border-neutral-900 focus:outline-none"
            />
          </label>
          <button
            type="button"
            className="w-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
