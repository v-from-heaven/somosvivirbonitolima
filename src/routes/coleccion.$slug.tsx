import { createFileRoute, notFound } from "@tanstack/react-router";
import { CollectionPage } from "@/components/catalog/CollectionPage";
import { collectionsMeta, getProductsByCollection, type CollectionSlug } from "@/data/catalog";

const SITE = "https://somosvivirbonitolima.lovable.app";

const valid: CollectionSlug[] = ["contemporanea", "nature", "petite", "novo"];

export const Route = createFileRoute("/coleccion/$slug")({
  beforeLoad: ({ params }) => {
    if (!valid.includes(params.slug as CollectionSlug)) throw notFound();
  },
  head: ({ params }) => {
    const slug = params.slug as CollectionSlug;
    const meta = collectionsMeta[slug];
    if (!meta) return { meta: [] };
    const title = `${meta.seoTitle} · VivirBonito`;
    const url = `${SITE}/coleccion/${slug}`;
    const products = getProductsByCollection(slug);
    const itemList = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: meta.name,
      description: meta.description,
      url,
      inLanguage: "es-PE",
      image: meta.image,
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: products.length,
        itemListElement: products.slice(0, 30).map((p, i) => ({
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
        { "@type": "ListItem", position: 2, name: "Colecciones", item: `${SITE}/` },
        { "@type": "ListItem", position: 3, name: meta.name, item: url },
      ],
    };
    return {
      meta: [
        { title },
        { name: "description", content: meta.description },
        { name: "keywords", content: meta.keywords.join(", ") },
        { property: "og:title", content: title },
        { property: "og:description", content: meta.description },
        { property: "og:type", content: "product.group" },
        { property: "og:url", content: url },
        { property: "og:locale", content: "es_PE" },
        { property: "og:site_name", content: "VivirBonito" },
        { property: "og:image", content: meta.image },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: meta.description },
        { name: "twitter:image", content: meta.image },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(itemList) },
        { type: "application/ld+json", children: JSON.stringify(breadcrumb) },
      ],
    };
  },
  component: CollectionRoute,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center">
      <p className="text-sm text-muted-ink">Colección no encontrada.</p>
    </div>
  ),
});

function CollectionRoute() {
  const { slug } = Route.useParams();
  return <CollectionPage slug={slug as CollectionSlug} />;
}