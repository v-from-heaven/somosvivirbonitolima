import logoAsset from "@/assets/logo.png.asset.json";

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-background">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <img src={logoAsset.url} alt="VivirBonito" className="h-9 w-auto" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-ink">
              Boutique de macetas. Creamos espacios verdes con estética, funcionalidad y naturaleza.
            </p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-muted-ink">Showroom</p>
            <p className="mt-4 text-sm leading-relaxed text-ink">
              Av. Daniel Hernández 128
              <br />
              San Isidro, Lima — Perú
            </p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-muted-ink">Contacto</p>
            <p className="mt-4 text-sm leading-relaxed text-ink">
              WhatsApp +51 932 572 455
              <br />
              Lun – Sáb · 10:00 – 19:00
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-hairline pt-6 text-xs text-muted-ink sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} VivirBonito Deco &amp; Design. Todos los derechos reservados.</p>
          <p className="uppercase tracking-[0.18em]">Boutique de macetas · Lima</p>
        </div>
      </div>
    </footer>
  );
}