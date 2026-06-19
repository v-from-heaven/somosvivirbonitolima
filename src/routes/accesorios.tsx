import { createFileRoute } from "@tanstack/react-router";
import { CollectionPage } from "@/components/catalog/CollectionPage";
import { collectionsMeta } from "@/data/catalog";

const meta = collectionsMeta.accesorios;

export const Route = createFileRoute("/accesorios")({
  head: () => ({
    meta: [
      { title: "Accesorios y parantes · VivirBonito" },
      { name: "description", content: meta.description },
      { property: "og:title", content: "Accesorios y parantes · VivirBonito" },
      { property: "og:description", content: meta.description },
      { property: "og:image", content: meta.image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: meta.image },
    ],
    links: [{ rel: "canonical", href: "/accesorios" }],
  }),
  component: () => <CollectionPage slug="accesorios" />,
});