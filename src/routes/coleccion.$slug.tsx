import { createFileRoute, notFound } from "@tanstack/react-router";
import { CollectionPage } from "@/components/catalog/CollectionPage";
import { collectionsMeta, type CollectionSlug } from "@/data/catalog";

const valid: CollectionSlug[] = ["contemporanea", "nature", "petite", "novo"];

export const Route = createFileRoute("/coleccion/$slug")({
  beforeLoad: ({ params }) => {
    if (!valid.includes(params.slug as CollectionSlug)) throw notFound();
  },
  head: ({ params }) => {
    const slug = params.slug as CollectionSlug;
    const meta = collectionsMeta[slug];
    if (!meta) return { meta: [] };
    const title = `Colección ${meta.name} · VivirBonito`;
    return {
      meta: [
        { title },
        { name: "description", content: meta.description },
        { property: "og:title", content: title },
        { property: "og:description", content: meta.description },
        { property: "og:image", content: meta.image },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: meta.image },
      ],
      links: [{ rel: "canonical", href: `/coleccion/${slug}` }],
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