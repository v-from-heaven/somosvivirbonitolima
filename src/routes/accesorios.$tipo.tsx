import { createFileRoute, notFound } from "@tanstack/react-router";
import { CollectionPage } from "@/components/catalog/CollectionPage";
import { collectionsMeta } from "@/data/catalog";

type Tipo = "colgantes" | "parantes";
const valid: Tipo[] = ["colgantes", "parantes"];

const subMeta: Record<Tipo, { title: string; eyebrow: string; tagline: string; description: string }> = {
  colgantes: {
    title: "Colgantes",
    eyebrow: "Accesorios · Colgantes",
    tagline: "Piezas decorativas que cuelgan y elevan el espacio",
    description:
      "Luna, Gota, Macramé y Mini Petite: colgantes decorativos en metal y algodón, pensados para acompañar plantas y darle ritmo vertical a interiores.",
  },
  parantes: {
    title: "Parantes",
    eyebrow: "Accesorios · Parantes",
    tagline: "Soportes en fierro para realzar cada maceta",
    description:
      "Estructuras en fierro acabado negro, dorado o bronce para macetas Bola, Cylindro, Copa, Quattro, U y Petite. Diseñados para componer alturas y aportar carácter.",
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
    const title = `${sm.title} · Accesorios · VivirBonito`;
    const image = collectionsMeta.accesorios.image;
    return {
      meta: [
        { title },
        { name: "description", content: sm.description },
        { property: "og:title", content: title },
        { property: "og:description", content: sm.description },
        { property: "og:image", content: image },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: image },
      ],
      links: [{ rel: "canonical", href: `/accesorios/${tipo}` }],
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