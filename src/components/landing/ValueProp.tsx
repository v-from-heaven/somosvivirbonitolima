import { Reveal } from "./Reveal";

export function ValueProp() {
  return (
    <section className="bg-bone">
      <div className="mx-auto max-w-3xl px-6 py-28 text-center sm:py-36 lg:px-10">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.32em] text-olive">Nuestra filosofía</p>
          <h2 className="mt-8 text-3xl leading-tight text-ink sm:text-4xl md:text-5xl">
            No se trata solo de decorar un espacio.
            <br />
            <span className="italic text-muted-ink">Se trata de cómo se siente.</span>
          </h2>
          <p className="mx-auto mt-10 max-w-2xl text-base leading-relaxed text-muted-ink sm:text-lg">
            En VivirBonito diseñamos espacios verdes que combinan estética, funcionalidad y
            naturaleza, logrando ambientes que transmiten calma, orden y sofisticación.
          </p>
        </Reveal>
      </div>
    </section>
  );
}