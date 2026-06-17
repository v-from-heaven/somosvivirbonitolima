import { waUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { Reveal } from "./Reveal";

export function Closing() {
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto max-w-5xl px-6 py-28 text-center sm:py-36 lg:px-10">
        <Reveal>
          <h2 className="text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl md:text-5xl">
            Tu espacio puede verse bien.
            <br />
            <span className="font-normal text-white/70">O puede sentirse completamente distinto.</span>
            <br />
            La diferencia está en el diseño.
          </h2>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={waUrl("Hola VivirBonito, me gustaría agendar una asesoría para diseñar mi espacio.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-olive px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-olive-soft hover:text-ink"
            >
              🌿 Agenda tu Asesoría
            </a>
            <a
              href={waUrl("Hola VivirBonito, me gustaría más información sobre sus productos y servicios.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-ink"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Escríbenos por WhatsApp
            </a>
          </div>
          <p className="mt-12 text-xs leading-relaxed text-white/55 sm:text-sm">
            Atendemos proyectos residenciales y corporativos · Asesorías personalizadas · Envíos y coordinación logística.
          </p>
        </Reveal>
      </div>
    </section>
  );
}