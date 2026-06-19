import contemporaneaAsset from "@/assets/contemporanea.jpg.asset.json";
import natureAsset from "@/assets/nature.jpg.asset.json";
import petiteAsset from "@/assets/petite.jpg.asset.json";
import { Link } from "@tanstack/react-router";
import type { CollectionSlug } from "@/data/catalog";
import { Reveal } from "./Reveal";

type Collection = {
  eyebrow: string;
  title: string;
  description: string;
  models: string[];
  meta: string;
  cta: string;
  slug: CollectionSlug;
  image: string;
  alt: string;
  accent: string;
};

const collections: Collection[] = [
  {
    eyebrow: "01 / Contemporánea",
    title: "Línea Arquitectónica & Contemporánea",
    description:
      "Piezas geométricas de gran escala y alta durabilidad en Polietileno HD, ideales para interiores modernos y exteriores exigentes. Incluye sistemas de Auto Riego.",
    models: ["Bola Series", "Cylindro", "Quattro", "Copa"],
    meta: "Ø 34 – 119 cm · Auto Riego · 15 referencias",
    cta: "Ver colección",
    slug: "contemporanea",
    image: contemporaneaAsset.url,
    alt: "Macetas Bola Series de gran formato en color carbón sobre terraza",
    accent: "var(--olive)",
  },
  {
    eyebrow: "02 / Nature",
    title: "Línea Orgánica & Nature",
    description:
      "Texturas artesanales y fibras naturales que aportan sofisticación relajada y calidez a salones o rincones de descanso.",
    models: ["Sisal Cilíndrica", "Sisal Bowl", "Plátano Cilíndrica", "Plátano Bowl", "Bambú Redondeada"],
    meta: "17 referencias en promoción · Fibras nobles",
    cta: "Ver colección",
    slug: "nature",
    image: natureAsset.url,
    alt: "Maceta colgante con planta de hojas largas entre árboles",
    accent: "var(--olive-soft)",
  },
  {
    eyebrow: "03 / Petite",
    title: "Línea Petite & Detalles",
    description:
      "Puntos de acento verde. Composiciones a menor escala y parantes de diseño en negro, dorado y bronce para repisas, escritorios o mesas de centro.",
    models: ["Mini Petite", "Bola Petite", "Luna", "Gota", "Macramé"],
    meta: "Negro · Dorado · Bronce · Hierro y porcelana",
    cta: "Ver colección",
    slug: "petite",
    image: petiteAsset.url,
    alt: "Macetas Petite blancas y cacao sobre parantes dorados",
    accent: "var(--olive-pale)",
  },
  {
    eyebrow: "04 / Novo",
    title: "Línea Novo",
    description:
      "Formas suaves y nervaduras sutiles en polietileno. Tuby, Ribby y Cuenco: piezas versátiles que conectan lo contemporáneo con lo orgánico.",
    models: ["Tuby Short", "Tuby Tall", "Ribby", "Cuenco"],
    meta: "Ø 40 – 55 cm · 6 referencias",
    cta: "Ver colección",
    slug: "novo",
    image: contemporaneaAsset.url,
    alt: "Maceta de polietileno con forma cilíndrica suave",
    accent: "var(--olive)",
  },
];

export function Collections() {
  return (
    <section id="colecciones" className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-10">
        <Reveal>
          <div className="mb-16 max-w-2xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-olive">Catálogo curado</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl">
              Tres líneas estéticas, una sola búsqueda: equilibrio.
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-10 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-10">
          {collections.map((c, i) => (
            <Reveal key={c.title} delay={i * 120}>
              <article className="group flex h-full flex-col">
                <div className="mb-5 h-px w-12" style={{ backgroundColor: c.accent }} />
                <div className="relative aspect-[4/5] overflow-hidden bg-bone">
                  <img
                    src={c.image}
                    alt={c.alt}
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col pt-7">
                  <p className="text-[11px] font-medium uppercase tracking-[0.24em]" style={{ color: c.accent }}>
                    {c.eyebrow}
                  </p>
                  <h3 className="mt-4 text-xl font-medium leading-snug text-ink sm:text-[22px]">
                    {c.title}
                  </h3>
                  <p className="mt-4 text-sm font-normal leading-relaxed text-muted-ink">{c.description}</p>

                  <div className="mt-6 border-t border-hairline pt-5">
                    <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-muted-ink/70">
                      Modelos destacados
                    </p>
                    <p className="mt-2 text-sm font-normal text-ink">{c.models.join(" · ")}</p>
                    <p className="mt-3 text-xs font-normal text-muted-ink">{c.meta}</p>
                  </div>

                  <Link
                    to="/coleccion/$slug"
                    params={{ slug: c.slug }}
                    className="mt-8 inline-flex w-fit items-center gap-2 border-b border-olive pb-1 text-sm font-medium text-olive transition-colors hover:text-olive-soft"
                  >
                    {c.cta}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-hairline pt-8">
            <p className="text-sm font-normal text-muted-ink">
              ¿Buscas parantes, soportes o complementos en fierro?
            </p>
            <Link
              to="/accesorios"
              className="inline-flex items-center gap-2 border-b border-olive pb-1 text-sm font-medium text-olive transition-colors hover:text-olive-soft"
            >
              Ver accesorios y parantes
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}