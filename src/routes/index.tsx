import { createFileRoute } from "@tanstack/react-router";
import heroAsset from "@/assets/hero.jpg.asset.json";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { ValueProp } from "@/components/landing/ValueProp";
import { Collections } from "@/components/landing/Collections";
import { Services } from "@/components/landing/Services";
import { Projects } from "@/components/landing/Projects";
import { Process } from "@/components/landing/Process";
import { Closing } from "@/components/landing/Closing";
import { Footer } from "@/components/landing/Footer";
import { FloatingWA } from "@/components/landing/FloatingWA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VivirBonito · Macetas de diseño y paisajismo boutique" },
      {
        name: "description",
        content:
          "Boutique de macetas exclusivas y diseño de espacios verdes en Lima. Asesoría personalizada, curaduría de piezas y proyectos integrales para residencias y oficinas.",
      },
      { property: "og:title", content: "VivirBonito · Macetas de diseño y paisajismo boutique" },
      {
        property: "og:description",
        content:
          "Diseñamos composiciones con macetas exclusivas y plantas que elevan la estética y aportan equilibrio a tu entorno.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroAsset.url },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroAsset.url },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-ink">
      <Nav />
      <Hero />
      <ValueProp />
      <Collections />
      <Services />
      <Projects />
      <Process />
      <Closing />
      <Footer />
      <FloatingWA />
    </main>
  );
}
