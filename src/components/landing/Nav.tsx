import logoAsset from "@/assets/logo.png.asset.json";
import { waUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

const links = [
  { href: "#colecciones", label: "Colecciones" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#proceso", label: "Proceso" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-background/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="flex items-center" aria-label="VivirBonito">
          <img src={logoAsset.url} alt="VivirBonito Deco & Design" className="h-9 w-auto sm:h-10" />
        </a>
        <ul className="hidden items-center gap-9 text-[13px] tracking-wide text-ink/80 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-olive">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={waUrl("Hola VivirBonito, me gustaría agendar una asesoría para diseñar mi espacio.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-olive px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-white transition-colors hover:bg-olive-soft hover:text-ink"
        >
          <WhatsAppIcon className="h-4 w-4" />
          <span className="hidden sm:inline">Agendar asesoría</span>
          <span className="sm:hidden">Asesoría</span>
        </a>
      </nav>
    </header>
  );
}