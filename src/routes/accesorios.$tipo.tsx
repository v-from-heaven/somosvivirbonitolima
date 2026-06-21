import { createFileRoute, notFound } from "@tanstack/react-router";
import { CollectionPage } from "@/components/catalog/CollectionPage";
import { collectionsMeta, getAccessoriesBySubcategory } from "@/data/catalog";

const SITE = "https://somosvivirbonitolima.lovable.app";

type Tipo = "colgantes" | "parantes";
const valid: Tipo[] = ["colgantes", "parantes"];

const subMeta: Record<Tipo, { title: string; seoTitle: string; eyebrow: string; tagline: string; description: string; keywords: string[] }> = {
  colgantes: {
    title: "Colgantes",
    seoTitle: "Colgantes para plantas · Luna, Gota y Macramé en Lima",
    eyebrow: "Accesorios · Colgantes",
    tagline: "Piezas decorativas que cuelgan y elevan el espacio",
    description:
      "Colgantes para macetas en Lima: piezas Luna, Gota, Macramé y Mini Petite en metal y algodón. Decoración vertical para interiores, salas y oficinas.",
    keywords: [
      "colgantes para plantas Lima",
      "macetas colgantes",
      "macramé colgante",
      "colgante metal decorativo",
      "decoración vertical interior",
    ],
  },
  parantes: {
    title: "Parantes",
    seoTitle: "Parantes para macetas · Soportes en fierro negro, dorado y bronce",
    eyebrow: "Accesorios · Parantes",
    tagline: "Soportes en fierro para realzar cada maceta",
    description:
      "Parantes para macetas en Lima: estructuras en fierro acabado negro, dorado o bronce, compatibles con Bola, Cylindro, Copa, Quattro, U y Petite. Componen alturas y aportan carácter.",
    keywords: [
      "parantes para macetas Lima",
      "soporte maceta fierro",
      "base maceta dorada",
      "pedestal planta interior",
      "stand maceta negro",
    ],
  },
};

export const Route = createFileRoute("/accesorios/$tipo")({
  beforeLoad: ({ params }) => {
    if (!valid.includes(params.tipo as Tipo)) throw notFound();
  },
  head: ({ params }) => {
    const tipo = params.tipo as Tipo;
    const sm = subMeta[tipo];
    if (!sm) return { meta: [] };
    const title = `${sm.seoTitle} · VivirBonito`;
    const image = collectionsMeta.accesorios.image;
    const url = `${SITE}/accesorios/${tipo}`;
    const sub = tipo === "colgantes" ? "Colgantes" : "Parantes";
    const items = getAccessoriesBySubcategory(sub);
    const collection = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: `${sm.title} · Accesorios VivirBonito`,
      description: sm.description,
      url,
      inLanguage: "es-PE",
      image,
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: items.length,
        itemListElement: items.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: p.size ? `${p.name} ${p.size}` : p.name,
        })),
      },
    };
    const breadcrumb = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Accesorios", item: `${SITE}/accesorios` },
        { "@type": "ListItem", position: 3, name: sm.title, item: url },
      ],
    };
    return {
      meta: [
        { title },
        { name: "description", content: sm.description },
        { name: "keywords", content: sm.keywords.join(", ") },
        { property: "og:title", content: title },
        { property: "og:description", content: sm.description },
        { property: "og:type", content: "product.group" },
        { property: "og:url", content: url },
        { property: "og:locale", content: "es_PE" },
        { property: "og:site_name", content: "VivirBonito" },
        { property: "og:image", content: image },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: sm.description },
        { name: "twitter:image", content: image },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(collection) },
        { type: "application/ld+json", children: JSON.stringify(breadcrumb) },
      ],
    };
  },
  component: TipoRoute,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center">
      <p className="text-sm text-muted-ink">Categoría no encontrada.</p>
    </div>
  ),
});

function TipoRoute() {
  const { tipo } = Route.useParams();
  const t = tipo as Tipo;
  const sm = subMeta[t];
  const sub = t === "colgantes" ? "Colgantes" : "Parantes";
  return (
    <CollectionPage
      slug="accesorios"
      filterSubcategory={sub}
      titleOverride={sm.title}
      eyebrowOverride={sm.eyebrow}
      taglineOverride={sm.tagline}
      descriptionOverride={sm.description}
    />
  );
}