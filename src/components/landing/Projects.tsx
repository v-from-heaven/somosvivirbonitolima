import project1 from "@/assets/project1.jpg.asset.json";
import project2 from "@/assets/project2.jpg.asset.json";
import accent from "@/assets/accent.jpg.asset.json";
import { INSTAGRAM_URL } from "@/lib/whatsapp";
import { Reveal } from "./Reveal";

const projects = [
  { url: project1.url, alt: "Patio con macetas grandes y bougainvillea", tag: "Residencial · Jardín" },
  { url: project2.url, alt: "Composición de macetas de interior con plantas variadas", tag: "Composición · Interior" },
  { url: accent.url, alt: "Maceta esférica negra con planta sobre parante dorado", tag: "Acento · Lobby" },
];

export function Projects() {
  return (
    <section id="proyectos" className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-10">
        <Reveal>
          <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-olive">Proyectos reales</p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl">
                Pequeños cambios, grandes resultados.
              </h2>
              <p className="mt-5 max-w-lg text-sm font-normal leading-relaxed text-muted-ink sm:text-base">
                Cada elemento está pensado para aportar equilibrio visual y funcional al entorno.
              </p>
            </div>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-b border-olive pb-1 text-sm font-medium text-olive transition-colors hover:text-olive-soft"
            >
              Ver más proyectos reales <span aria-hidden="true">→</span>
            </a>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.url} delay={i * 120}>
              <figure className="group">
                <div className="relative aspect-[4/5] overflow-hidden bg-bone">
                  <img
                    src={p.url}
                    alt={p.alt}
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                    loading="lazy"
                  />
                </div>
                <figcaption className="mt-4 text-sm font-medium text-muted-ink">
                  {p.tag}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}