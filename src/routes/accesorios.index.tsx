import { createFileRoute } from "@tanstack/react-router";
import { CollectionPage } from "@/components/catalog/CollectionPage";
import { collectionsMeta } from "@/data/catalog";

const meta = collectionsMeta.accesorios;
const SITE = "https://somosvivirbonitolima.lovable.app";
const url = `${SITE}/accesorios`;
const title = `${meta.seoTitle} · VivirBonito`;

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE}/` },
    { "@type": "ListItem", position: 2, name: "Accesorios", item: url },
  ],
};

export const Route = createFileRoute("/accesorios/")({
  head: () => ({
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
      { type: "application/ld+json", children: JSON.stringify(breadcrumb) },
    ],
  }),
  component: () => <CollectionPage slug="accesorios" />,
});