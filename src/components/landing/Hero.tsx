import heroAsset from "@/assets/hero.jpg.asset.json";
import { waUrl } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroAsset.url}
          alt="Interior con macetas de diseño VivirBonito"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/55" />
      </div>
      <div className="mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-end px-6 pb-20 pt-32 sm:pb-28 sm:pt-40 lg:px-10">
        <div className="max-w-3xl text-white">
          <p className="mb-6 text-[11px] uppercase tracking-[0.32em] text-white/80">
            Boutique de macetas · Deco &amp; Design
          </p>
          <h1 className="text-4xl font-extralight uppercase leading-[1.05] tracking-[0.12em] sm:text-5xl md:text-6xl lg:text-[64px]">
            Macetas y diseño verde para transformar tus espacios
          </h1>
          <p className="mt-7 max-w-xl text-base font-light leading-relaxed text-white/90 sm:text-lg">
            Diseñamos composiciones con macetas exclusivas y plantas que elevan la estética,
            generan bienestar y aportan equilibrio a tu entorno.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href={waUrl("Hola VivirBonito, me gustaría agendar una asesoría para diseñar mi espacio.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-olive px-8 py-4 text-xs font-medium uppercase tracking-[0.18em] text-white transition-colors hover:bg-olive-soft hover:text-ink"
            >
              Agendar Asesoría
            </a>
            <a
              href="#colecciones"
              className="inline-flex items-center justify-center rounded-full border border-white/70 px-8 py-4 text-xs font-medium uppercase tracking-[0.18em] text-white transition-colors hover:bg-white hover:text-ink"
            >
              Ver Colecciones
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}