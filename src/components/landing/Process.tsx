import { Reveal } from "./Reveal";

const steps = [
  { n: "01", title: "Entendemos tu espacio", body: "Analizamos tu estilo, iluminación y distribución mediante fotos." },
  { n: "02", title: "Diseñamos la propuesta", body: "Seleccionamos las macetas, plantas y ubicaciones ideales." },
  { n: "03", title: "Implementación y logística", body: "Coordinamos el envío y entrega de soluciones listas para disfrutar, sin fricciones." },
];

export function Process() {
  return (
    <section id="proceso" className="bg-bone">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-10">
        <Reveal>
          <div className="mb-16 max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.32em] text-olive">Cómo trabajamos</p>
            <h2 className="mt-5 text-3xl text-ink sm:text-4xl md:text-5xl">
              Un proceso simple, pensado para el detalle.
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <div className="flex h-full flex-col">
                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-5xl text-olive">{s.n}</span>
                  <div className="h-px flex-1 bg-hairline" />
                </div>
                <h3 className="mt-6 text-xl text-ink sm:text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-ink">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}