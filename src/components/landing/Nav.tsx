import { useState } from "react";
import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/logo.png.asset.json";
import { waUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

const collectionLinks = [
  { to: "/coleccion/$slug", params: { slug: "contemporanea" }, label: "Contemporánea" },
  { to: "/coleccion/$slug", params: { slug: "nature" }, label: "Nature" },
  { to: "/coleccion/$slug", params: { slug: "petite" }, label: "Petite" },
  { to: "/coleccion/$slug", params: { slug: "novo" }, label: "Novo" },
] as const;

const accesoriosLinks = [
  { to: "/accesorios/$tipo", params: { tipo: "colgantes" }, label: "Colgantes" },
  { to: "/accesorios/$tipo", params: { tipo: "parantes" }, label: "Parantes" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const [colOpen, setColOpen] = useState(false);
  const [accOpen, setAccOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-background/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link to="/" className="flex items-center" aria-label="VivirBonito">
          <img src={logoAsset.url} alt="VivirBonito Deco & Design" className="h-11 w-auto sm:h-12" />
        </Link>

        <ul className="hidden items-center gap-9 text-[13px] tracking-wide text-ink/80 md:flex">
          <li
            className="relative"
            onMouseEnter={() => setColOpen(true)}
            onMouseLeave={() => setColOpen(false)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 transition-colors hover:text-olive"
              onClick={() => setColOpen((v) => !v)}
              aria-expanded={colOpen}
            >
              Colecciones
              <span aria-hidden="true" className="text-xs">▾</span>
            </button>
            {colOpen && (
              <div className="absolute left-0 top-full min-w-[200px] border border-hairline bg-background py-2 shadow-sm">
                {collectionLinks.map((c) => (
                  <Link
                    key={c.params.slug}
                    to={c.to}
                    params={c.params}
                    className="block px-4 py-2 text-sm text-ink/80 transition-colors hover:bg-bone hover:text-olive"
                    onClick={() => setColOpen(false)}
                  >
                    {c.label}
                  </Link>
                ))}
              </div>
            )}
          </li>
          <li
            className="relative"
            onMouseEnter={() => setAccOpen(true)}
            onMouseLeave={() => setAccOpen(false)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 transition-colors hover:text-olive"
              onClick={() => setAccOpen((v) => !v)}
              aria-expanded={accOpen}
            >
              Accesorios
              <span aria-hidden="true" className="text-xs">▾</span>
            </button>
            {accOpen && (
              <div className="absolute left-0 top-full min-w-[180px] border border-hairline bg-background py-2 shadow-sm">
                {accesoriosLinks.map((a) => (
                  <Link
                    key={a.params.tipo}
                    to={a.to}
                    params={a.params}
                    className="block px-4 py-2 text-sm text-ink/80 transition-colors hover:bg-bone hover:text-olive"
                    onClick={() => setAccOpen(false)}
                  >
                    {a.label}
                  </Link>
                ))}
              </div>
            )}
          </li>
          <li>
            <Link to="/" hash="proceso" className="transition-colors hover:text-olive">
              Proceso
            </Link>
          </li>
          <li>
            <Link to="/" hash="proyectos" className="transition-colors hover:text-olive">
              Proyectos
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={waUrl("Hola VivirBonito, me gustaría agendar una asesoría para diseñar mi espacio.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-olive px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-olive-soft hover:text-ink sm:px-5 sm:py-2.5"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span className="hidden sm:inline">Asesoría</span>
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-hairline text-ink md:hidden"
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menú</span>
            <span aria-hidden="true">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-hairline bg-background md:hidden">
          <ul className="mx-auto max-w-7xl px-6 py-4 text-sm">
            <li className="border-b border-hairline py-3">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-ink">
                Colecciones
              </p>
              <div className="flex flex-col gap-2">
                {collectionLinks.map((c) => (
                  <Link
                    key={c.params.slug}
                    to={c.to}
                    params={c.params}
                    className="text-ink transition-colors hover:text-olive"
                    onClick={() => setOpen(false)}
                  >
                    {c.label}
                  </Link>
                ))}
              </div>
            </li>
            <li className="border-b border-hairline py-3">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-ink">
                Accesorios
              </p>
              <div className="flex flex-col gap-2">
                {accesoriosLinks.map((a) => (
                  <Link
                    key={a.params.tipo}
                    to={a.to}
                    params={a.params}
                    className="text-ink transition-colors hover:text-olive"
                    onClick={() => setOpen(false)}
                  >
                    {a.label}
                  </Link>
                ))}
              </div>
            </li>
            <li className="border-b border-hairline py-3">
              <Link to="/" hash="proceso" className="text-ink hover:text-olive" onClick={() => setOpen(false)}>
                Proceso
              </Link>
            </li>
            <li className="py-3">
              <Link to="/" hash="proyectos" className="text-ink hover:text-olive" onClick={() => setOpen(false)}>
                Proyectos
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}