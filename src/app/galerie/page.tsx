import Image from "next/image";
import PlaceholderImage from "@/components/PlaceholderImage";

const galleryItems = [
  { id: 1, span: "md:col-span-2 md:row-span-2", gradient: "from-blue-400/30 to-indigo-600/20", label: "Sommerkonzert 2024" },
  { id: 2, span: "", gradient: "from-rose-400/30 to-pink-300/20", label: "Hochzeit Müller" },
  { id: 3, span: "", gradient: "from-amber-400/30 to-orange-300/20", label: "Stadtfest" },
  { id: 4, span: "md:col-span-2", gradient: "from-violet-400/30 to-purple-300/20", label: "Silvesterball" },
  { id: 5, span: "", gradient: "from-emerald-400/30 to-teal-300/20", label: "Firmen-Gala" },
  { id: 6, span: "", gradient: "from-sky-400/30 to-blue-300/20", label: "Open Air 2023" },
  { id: 7, span: "", gradient: "from-fuchsia-400/30 to-pink-400/20", label: "Hochzeit Schmidt" },
  { id: 8, span: "md:col-span-2", gradient: "from-cyan-400/30 to-teal-400/20", label: "Probe-Session" },
];

export const metadata = {
  title: "Galerie – Kreiz & Quer",
};

export default function Galerie() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-[var(--color-surface-container-low)] py-20 px-6 md:px-8">
        <div className="max-w-screen-2xl mx-auto">
          <p className="text-[var(--color-secondary)] font-semibold uppercase text-[11px] tracking-widest mb-4" style={{ fontFamily: "var(--font-label)" }}>
            Einblicke
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-[var(--color-on-surface)]">Galerie</h1>
          <p className="text-xl text-[var(--color-on-surface-variant)] mt-4 max-w-xl" style={{ fontFamily: "var(--font-body)" }}>
            Momente, die für sich sprechen — von der Probe bis zum Finale.
          </p>
        </div>
      </div>

      {/* Band Photo */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-8 py-16">
        <div className="relative w-full h-[400px] md:h-[600px] rounded-xl overflow-hidden">
          <Image
            src="/band.png"
            alt="Kreiz & Quer Bandphoto"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-container)]/60 to-transparent" />
          <div className="absolute bottom-8 left-8">
            <span className="text-white text-3xl font-bold">Kreiz &amp; Quer</span>
            <p className="text-[var(--color-on-primary-container)] mt-1" style={{ fontFamily: "var(--font-body)" }}>Bandphoto 2024</p>
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-8 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[240px] gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`relative rounded-xl overflow-hidden group cursor-pointer ${item.span}`}
            >
              <PlaceholderImage gradient={item.gradient} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-semibold" style={{ fontFamily: "var(--font-label)" }}>{item.label}</p>
              </div>
              {/* Placeholder icon visible always */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-5xl text-slate-400/30">photo_camera</span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-[var(--color-on-surface-variant)] mt-12 text-sm" style={{ fontFamily: "var(--font-body)" }}>
          Weitere Fotos folgen. Besucht uns auch auf Instagram.
        </p>
      </section>
    </div>
  );
}
