import { Link } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";
import { FloatingWA } from "@/components/landing/FloatingWA";
import { FamilyBlock } from "./FamilyBlock";
import {
  collectionsMeta,
  getProductsByCollection,
  groupByFamily,
  type CollectionSlug,
} from "@/data/catalog";

export function CollectionPage({ slug }: { slug: CollectionSlug }) {
  const meta = collectionsMeta[slug];
  const families = groupByFamily(getProductsByCollection(slug));

  return (
    <main className="min-h-screen bg-background text-ink">
      <Nav />

      <section className="border-b border-hairline">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-24">
          <div className="flex flex-col justify-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-olive">
              {meta.eyebrow}
            </p>
            <h1 className="mt-5 text-4xl font-medium tracking-tight text-ink sm:text-5xl lg:text-6xl">
              {meta.name}
            </h1>
            <p className="mt-4 text-base font-normal text-muted-ink sm:text-lg">{meta.tagline}</p>
            <p className="mt-6 max-w-xl text-sm font-normal leading-relaxed text-muted-ink sm:text-base">
              {meta.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-xs">
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 border-b border-hairline pb-0.5 text-muted-ink transition-colors hover:text-olive"
              >
                ← Volver al inicio
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden bg-bone lg:aspect-auto">
            <img src={meta.image} alt={`Colección ${meta.name}`} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-10 lg:py-24">
        {families.length === 0 ? (
          <p className="text-sm text-muted-ink">Sin productos disponibles.</p>
        ) : (
          families.map((f) => <FamilyBlock key={f.family} family={f.family} items={f.items} />)
        )}
      </section>

      <Footer />
      <FloatingWA />
    </main>
  );
}