import { waUrl } from "@/lib/whatsapp";
import { Reveal } from "./Reveal";

const services = [
  {
    n: "I",
    title: "Curaduría de Piezas",
    body: "Seleccionadas minuciosamente por su estética, proporción y durabilidad.",
  },
  {
    n: "II",
    title: "Asesoría en Composición",
    body: "Te guiamos en la elección perfecta de macetas, plantas y distribución según la luz de tu ambiente.",
  },
  {
    n: "III",
    title: "Proyectos Integrales",
    body: "Transformación completa de espacios, desde el concepto inicial hasta la implementación final.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="bg-bone">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-10">
        <Reveal>
          <div className="mb-16 max-w-2xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-olive">Qué hacemos</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl">
              Servicios a medida para cada espacio.
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-12 md:grid-cols-3 md:gap-10">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <div className="flex h-full flex-col border-t border-hairline pt-6">
                <span className="text-3xl font-semibold text-olive">{s.n}</span>
                <h3 className="mt-6 text-xl font-medium text-ink sm:text-[22px]">{s.title}</h3>
                <p className="mt-4 text-sm font-normal leading-relaxed text-muted-ink">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 flex justify-center">
            <a
              href={waUrl("Hola VivirBonito, quiero solicitar una propuesta personalizada para un proyecto.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-olive px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-olive-soft hover:text-ink"
            >
              Solicitar propuesta personalizada
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}