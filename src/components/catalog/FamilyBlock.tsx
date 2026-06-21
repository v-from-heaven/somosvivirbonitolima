import { familyImages, type Product } from "@/data/catalog";
import { buildProductMessage, waUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/landing/WhatsAppIcon";

export function FamilyBlock({ family, items }: { family: string; items: Product[] }) {
  const material = items[0]?.material;
  const image = familyImages[family];
  return (
    <article className="border-t border-hairline py-10 first:border-t-0 first:pt-0">
      {image && (
        <div className="mb-8 aspect-[4/3] w-full overflow-hidden bg-bone">
          <img
            src={image}
            alt={`Macetas ${family} – VivirBonito Lima${material ? `, ${material}` : ""}`}
            loading="lazy"
            width={1024}
            height={768}
            className="h-full w-full object-cover"
          />
        </div>
      )}
      <header className="mb-6 flex flex-wrap items-baseline justify-between gap-3">
        <h2 className="text-2xl font-medium tracking-tight text-ink sm:text-3xl">{family}</h2>
        {material && (
          <p className="text-xs font-normal text-muted-ink">{material}</p>
        )}
      </header>

      <ul className="divide-y divide-hairline border-y border-hairline">
        {items.map((p, i) => (
          <li key={`${p.name}-${i}`} className="grid grid-cols-12 items-center gap-4 py-4">
            <div className="col-span-12 sm:col-span-5">
              <p className="text-sm font-medium text-ink">{p.name}</p>
              {p.colors && (
                <p className="mt-1 text-xs font-normal text-muted-ink">{p.colors}</p>
              )}
            </div>
            <div className="col-span-6 sm:col-span-3 text-sm font-normal text-muted-ink">
              {p.size ?? "—"}
            </div>
            <div className="col-span-3 sm:col-span-2 text-sm font-semibold text-olive">
              S/ {p.pricePEN.toLocaleString("es-PE")}
            </div>
            <div className="col-span-3 sm:col-span-2 flex justify-end">
              <a
                href={waUrl(buildProductMessage(p))}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-olive px-3 py-1.5 text-xs font-semibold text-olive transition-colors hover:bg-olive hover:text-white"
                aria-label={`Cotizar ${p.name} por WhatsApp`}
              >
                <WhatsAppIcon className="h-3.5 w-3.5" />
                Cotizar
              </a>
            </div>
            {p.notes && (
              <div className="col-span-12 -mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-olive/80">
                {p.notes}
              </div>
            )}
          </li>
        ))}
      </ul>
    </article>
  );
}