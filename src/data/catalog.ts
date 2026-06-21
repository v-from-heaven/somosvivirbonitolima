export type CollectionSlug = "contemporanea" | "nature" | "petite" | "novo" | "accesorios";

export type Product = {
  collection: CollectionSlug;
  family: string;
  name: string;
  size?: string;
  pricePEN: number;
  material: string;
  colors?: string;
  notes?: string;
  type: "Maceta" | "Parante" | "Decorativo";
  subcategory?: "Colgantes" | "Parantes";
};

export type CollectionMeta = {
  slug: CollectionSlug;
  name: string;
  eyebrow: string;
  tagline: string;
  description: string;
  image: string;
  accent: string;
};

import contemporaneaAsset from "@/assets/contemporanea.jpg.asset.json";
import natureAsset from "@/assets/nature.jpg.asset.json";
import petiteAsset from "@/assets/petite.jpg.asset.json";
import accentAsset from "@/assets/accent.jpg.asset.json";

import famBola from "@/assets/family/bola.jpg.asset.json";
import famCylindro from "@/assets/family/cylindro.jpg.asset.json";
import famCopa from "@/assets/family/copa.jpg.asset.json";
import famQuattro from "@/assets/family/quattro.jpg.asset.json";
import famTuby from "@/assets/family/tuby.jpg.asset.json";
import famRibby from "@/assets/family/ribby.jpg.asset.json";
import famCuenco from "@/assets/family/cuenco.jpg.asset.json";
import famMiniPetite from "@/assets/family/mini-petite.jpg.asset.json";
import famBolaPetite from "@/assets/family/bola-petite.jpg.asset.json";
import famSisal from "@/assets/family/sisal.jpg.asset.json";
import famPlatano from "@/assets/family/platano.jpg.asset.json";
import famBambu from "@/assets/family/bambu.jpg.asset.json";
import famLuna from "@/assets/family/luna.jpg.asset.json";
import famGota from "@/assets/family/gota.jpg.asset.json";
import famMacrame from "@/assets/family/macrame.jpg.asset.json";
import famColganteMini from "@/assets/family/colgante-mini.jpg.asset.json";
import famParanteBola from "@/assets/family/parante-bola.jpg.asset.json";
import famParanteCylindro from "@/assets/family/parante-cylindro.jpg.asset.json";
import famParanteU from "@/assets/family/parante-u.jpg.asset.json";
import famParanteCopa from "@/assets/family/parante-copa.jpg.asset.json";
import famParanteQuattro from "@/assets/family/parante-quattro.jpg.asset.json";
import famParantePetite from "@/assets/family/parante-petite.jpg.asset.json";

export const familyImages: Record<string, string> = {
  "Bola Series": famBola.url,
  "Cylindro": famCylindro.url,
  "Copa": famCopa.url,
  "Quattro": famQuattro.url,
  "Tuby": famTuby.url,
  "Ribby": famRibby.url,
  "Cuenco": famCuenco.url,
  "Mini Petite": famMiniPetite.url,
  "Bola Petite": famBolaPetite.url,
  "Sisal Cilíndrica": famSisal.url,
  "Sisal Bowl": famSisal.url,
  "Plátano Cilíndrica": famPlatano.url,
  "Plátano Bowl": famPlatano.url,
  "Bambú Redondeada": famBambu.url,
  "Luna": famLuna.url,
  "Gota": famGota.url,
  "Macramé": famMacrame.url,
  "Colgante Mini Petite": famColganteMini.url,
  "Parantes Bola": famParanteBola.url,
  "Parantes Cylindro": famParanteCylindro.url,
  "Parantes U": famParanteU.url,
  "Parantes Copa": famParanteCopa.url,
  "Parantes Quattro": famParanteQuattro.url,
  "Parantes Petite": famParantePetite.url,
};

export const collectionsMeta: Record<CollectionSlug, CollectionMeta> = {
  contemporanea: {
    slug: "contemporanea",
    name: "Contemporánea",
    eyebrow: "Colección 01",
    tagline: "Arquitectónica y de gran escala",
    description:
      "Piezas geométricas de Polietileno HD, alta durabilidad y formatos de gran escala. Incluye sistemas de Auto Riego para interiores modernos y exteriores exigentes.",
    image: contemporaneaAsset.url,
    accent: "var(--olive)",
  },
  nature: {
    slug: "nature",
    name: "Nature",
    eyebrow: "Colección 02",
    tagline: "Texturas naturales y artesanales",
    description:
      "Fibras nobles —sisal, hoja de plátano y bambú— sobre base de fibra de cemento. Sofisticación relajada para salones y rincones de descanso.",
    image: natureAsset.url,
    accent: "var(--olive-soft)",
  },
  petite: {
    slug: "petite",
    name: "Petite",
    eyebrow: "Colección 03",
    tagline: "Detalles y composiciones a menor escala",
    description:
      "Acentos verdes para repisas, escritorios y mesas. Piezas decorativas en metal —luna, gota, macramé— y parantes en negro, dorado y bronce.",
    image: petiteAsset.url,
    accent: "var(--olive-pale)",
  },
  novo: {
    slug: "novo",
    name: "Novo",
    eyebrow: "Colección 04",
    tagline: "Formas suaves en polietileno",
    description:
      "Líneas redondeadas y nervaduras sutiles. Tuby, Ribby y Cuenco: piezas versátiles que conectan lo contemporáneo con lo orgánico.",
    image: contemporaneaAsset.url,
    accent: "var(--olive)",
  },
  accesorios: {
    slug: "accesorios",
    name: "Accesorios",
    eyebrow: "Complementos",
    tagline: "Colgantes y parantes en metal",
    description:
      "Colgantes decorativos y parantes en fierro acabado negro, dorado o bronce. Pensados para realzar cada maceta y elevar la composición del espacio.",
    image: accentAsset.url,
    accent: "var(--olive)",
  },
};

export const products: Product[] = [
  // Contemporánea
  { collection: "contemporanea", family: "Bola Series", name: "Bola Auto Riego", size: "Ø46 x h34", pricePEN: 549, material: "Polietileno HD", notes: "Auto riego", type: "Maceta" },
  { collection: "contemporanea", family: "Bola Series", name: "Bola Auto Riego", size: "Ø56 x h44", pricePEN: 699, material: "Polietileno HD", notes: "Auto riego", type: "Maceta" },
  { collection: "contemporanea", family: "Bola Series", name: "Bola Auto Riego", size: "Ø61 x h51", pricePEN: 919, material: "Polietileno HD", notes: "Auto riego", type: "Maceta" },
  { collection: "contemporanea", family: "Bola Series", name: "Bola Auto Riego", size: "Ø75 x h60", pricePEN: 1349, material: "Polietileno HD", notes: "A pedido", type: "Maceta" },
  { collection: "contemporanea", family: "Cylindro", name: "Cylindro", size: "Ø34 x h38", pricePEN: 459, material: "Polietileno HD", type: "Maceta" },
  { collection: "contemporanea", family: "Cylindro", name: "Cylindro", size: "Ø40 x h43", pricePEN: 549, material: "Polietileno HD", type: "Maceta" },
  { collection: "contemporanea", family: "Cylindro", name: "Cylindro", size: "Ø45 x h50", pricePEN: 629, material: "Polietileno HD", type: "Maceta" },
  { collection: "contemporanea", family: "Cylindro", name: "Cylindro", size: "Ø58 x h64", pricePEN: 1059, material: "Polietileno HD", type: "Maceta" },
  { collection: "contemporanea", family: "Cylindro", name: "Cylindro", size: "Ø74 x h81", pricePEN: 1549, material: "Polietileno HD", type: "Maceta" },
  { collection: "contemporanea", family: "Copa", name: "Copa", size: "Ø61 x h29", pricePEN: 499, material: "Polietileno HD", type: "Maceta" },
  { collection: "contemporanea", family: "Copa", name: "Copa", size: "Ø89 x h42", pricePEN: 889, material: "Polietileno HD", type: "Maceta" },
  { collection: "contemporanea", family: "Copa", name: "Copa", size: "Ø119 x h51", pricePEN: 1869, material: "Polietileno HD", notes: "A pedido", type: "Maceta" },
  { collection: "contemporanea", family: "Quattro", name: "Quattro", size: "32x32 x h32", pricePEN: 269, material: "Polietileno HD", type: "Maceta" },
  { collection: "contemporanea", family: "Quattro", name: "Quattro", size: "48x48 x h50", pricePEN: 769, material: "Polietileno HD", type: "Maceta" },
  { collection: "contemporanea", family: "Quattro", name: "Quattro", size: "68x68 x h67", pricePEN: 1499, material: "Polietileno HD", notes: "A pedido", type: "Maceta" },

  // Novo
  { collection: "novo", family: "Tuby", name: "Tuby Short", size: "Ø40 x h40", pricePEN: 389, material: "Polietileno", type: "Maceta" },
  { collection: "novo", family: "Tuby", name: "Tuby Tall", size: "Ø40 x h70", pricePEN: 679, material: "Polietileno", type: "Maceta" },
  { collection: "novo", family: "Ribby", name: "Ribby", size: "Ø40 x h40", pricePEN: 439, material: "Polietileno", type: "Maceta" },
  { collection: "novo", family: "Ribby", name: "Ribby", size: "Ø40 x h48", pricePEN: 599, material: "Polietileno", type: "Maceta" },
  { collection: "novo", family: "Cuenco", name: "Cuenco", size: "Ø45 x h38", pricePEN: 509, material: "Polietileno", type: "Maceta" },
  { collection: "novo", family: "Cuenco", name: "Cuenco", size: "Ø55 x h46", pricePEN: 739, material: "Polietileno", type: "Maceta" },

  // Petite
  { collection: "petite", family: "Mini Petite", name: "Mini Petite S", size: "Ø17 x h14", pricePEN: 149, material: "Impresión 3D", notes: "Incluye maceta interna", type: "Maceta" },
  { collection: "petite", family: "Mini Petite", name: "Mini Petite M", size: "Ø22 x h17", pricePEN: 169, material: "Impresión 3D", notes: "Incluye maceta interna", type: "Maceta" },
  { collection: "petite", family: "Bola Petite", name: "Bola Petite", size: "Ø30 x h24", pricePEN: 189, material: "Fibra de vidrio", type: "Maceta" },

  // Nature
  { collection: "nature", family: "Sisal Cilíndrica", name: "Sisal Cilíndrica S", size: "Ø15 x h14", pricePEN: 99, material: "Fibra cemento + sisal", notes: "Promoción", type: "Maceta" },
  { collection: "nature", family: "Sisal Cilíndrica", name: "Sisal Cilíndrica M", size: "Ø20 x h19", pricePEN: 149, material: "Fibra cemento + sisal", notes: "Promoción", type: "Maceta" },
  { collection: "nature", family: "Sisal Cilíndrica", name: "Sisal Cilíndrica L", size: "Ø25 x h24", pricePEN: 219, material: "Fibra cemento + sisal", notes: "Promoción", type: "Maceta" },
  { collection: "nature", family: "Sisal Cilíndrica", name: "Sisal Cilíndrica XL", size: "Ø32 x h31", pricePEN: 299, material: "Fibra cemento + sisal", notes: "Promoción", type: "Maceta" },
  { collection: "nature", family: "Sisal Bowl", name: "Sisal Bowl S", size: "Ø24 x h21", pricePEN: 239, material: "Fibra cemento + sisal", notes: "Promoción", type: "Maceta" },
  { collection: "nature", family: "Sisal Bowl", name: "Sisal Bowl M", size: "Ø34 x h30", pricePEN: 429, material: "Fibra cemento + sisal", notes: "Promoción", type: "Maceta" },
  { collection: "nature", family: "Sisal Bowl", name: "Sisal Bowl L", size: "Ø48 x h41", pricePEN: 629, material: "Fibra cemento + sisal", notes: "Promoción", type: "Maceta" },
  { collection: "nature", family: "Plátano Cilíndrica", name: "Plátano Cilíndrica S", size: "Ø14 x h13", pricePEN: 99, material: "Fibra cemento + hoja plátano", notes: "Promoción", type: "Maceta" },
  { collection: "nature", family: "Plátano Cilíndrica", name: "Plátano Cilíndrica M", size: "Ø19 x h18", pricePEN: 179, material: "Fibra cemento + hoja plátano", notes: "Promoción", type: "Maceta" },
  { collection: "nature", family: "Plátano Cilíndrica", name: "Plátano Cilíndrica L", size: "Ø25 x h24", pricePEN: 229, material: "Fibra cemento + hoja plátano", notes: "Promoción", type: "Maceta" },
  { collection: "nature", family: "Plátano Cilíndrica", name: "Plátano Cilíndrica XL", size: "Ø31 x h31", pricePEN: 299, material: "Fibra cemento + hoja plátano", notes: "Promoción", type: "Maceta" },
  { collection: "nature", family: "Plátano Bowl", name: "Plátano Bowl S", size: "Ø35 x h31", pricePEN: 219, material: "Fibra cemento + hoja plátano", notes: "Promoción", type: "Maceta" },
  { collection: "nature", family: "Plátano Bowl", name: "Plátano Bowl M", size: "Ø41 x h37", pricePEN: 369, material: "Fibra cemento + hoja plátano", notes: "Promoción", type: "Maceta" },
  { collection: "nature", family: "Plátano Bowl", name: "Plátano Bowl L", size: "Ø48 x h42", pricePEN: 599, material: "Fibra cemento + hoja plátano", notes: "Promoción", type: "Maceta" },
  { collection: "nature", family: "Bambú Redondeada", name: "Bambú Redondeada S", size: "Ø30 x h30", pricePEN: 199, material: "Fibra cemento + bambú", notes: "Promoción", type: "Maceta" },
  { collection: "nature", family: "Bambú Redondeada", name: "Bambú Redondeada M", size: "Ø37 x h36", pricePEN: 269, material: "Fibra cemento + bambú", notes: "Promoción", type: "Maceta" },
  { collection: "nature", family: "Bambú Redondeada", name: "Bambú Redondeada L", size: "Ø44 x h42", pricePEN: 399, material: "Fibra cemento + bambú", notes: "Promoción", type: "Maceta" },

  // Accesorios
  // Colgantes
  { collection: "accesorios", subcategory: "Colgantes", family: "Luna", name: "Pieza Luna + Bola Petite", pricePEN: 449, material: "Metal", notes: "Bajo pedido", type: "Decorativo" },
  { collection: "accesorios", subcategory: "Colgantes", family: "Luna", name: "Pieza Luna Colgante + Bola Petite", size: "85 cm o 1 m", pricePEN: 479, material: "Metal", notes: "Bajo pedido", type: "Decorativo" },
  { collection: "accesorios", subcategory: "Colgantes", family: "Luna", name: "Luna Colgante Cadena + Bola Petite", size: "85 cm o 1 m", pricePEN: 489, material: "Metal", notes: "Bajo pedido", type: "Decorativo" },
  { collection: "accesorios", subcategory: "Colgantes", family: "Gota", name: "Gota Colgante + Bola Petite", size: "85 cm o 1 m", pricePEN: 479, material: "Metal", notes: "Bajo pedido", type: "Decorativo" },
  { collection: "accesorios", subcategory: "Colgantes", family: "Gota", name: "Gota Colgante Cadena + Bola Petite", size: "85 cm o 1 m", pricePEN: 489, material: "Metal", notes: "Bajo pedido", type: "Decorativo" },
  { collection: "accesorios", subcategory: "Colgantes", family: "Macramé", name: "Macramé + Bola Petite", size: "85 cm o 1 m", pricePEN: 339, material: "Algodón", notes: "Bajo pedido", type: "Decorativo" },
  { collection: "accesorios", subcategory: "Colgantes", family: "Colgante Mini Petite", name: "Colgante Mini Petite", pricePEN: 419, material: "Metal + maceta", notes: "Bajo pedido", type: "Decorativo" },
  // Parantes
  { collection: "accesorios", subcategory: "Parantes", family: "Parantes Bola", name: "Parante Bola", size: "Para Bola Ø46", pricePEN: 269, material: "Fierro", colors: "Negro · Dorado · Bronce", type: "Parante" },
  { collection: "accesorios", subcategory: "Parantes", family: "Parantes Cylindro", name: "Parante Cylindro Bajo", size: "50 cm", pricePEN: 269, material: "Fierro", colors: "Negro · Dorado", type: "Parante" },
  { collection: "accesorios", subcategory: "Parantes", family: "Parantes Cylindro", name: "Parante Cylindro Alto", size: "70 cm", pricePEN: 279, material: "Fierro", colors: "Negro · Dorado", type: "Parante" },
  { collection: "accesorios", subcategory: "Parantes", family: "Parantes U", name: "Parante U", size: "20 cm", pricePEN: 239, material: "Fierro", colors: "Negro · Dorado · Bronce", type: "Parante" },
  { collection: "accesorios", subcategory: "Parantes", family: "Parantes Copa", name: "Parante Copa", size: "20 cm", pricePEN: 289, material: "Fierro", colors: "Negro · Dorado · Bronce", type: "Parante" },
  { collection: "accesorios", subcategory: "Parantes", family: "Parantes Quattro", name: "Parante Quattro Bajo", size: "50 cm", pricePEN: 269, material: "Fierro", colors: "Negro · Dorado", type: "Parante" },
  { collection: "accesorios", subcategory: "Parantes", family: "Parantes Quattro", name: "Parante Quattro Alto", size: "70 cm", pricePEN: 279, material: "Fierro", colors: "Negro · Dorado", type: "Parante" },
  { collection: "accesorios", subcategory: "Parantes", family: "Parantes Petite", name: "Parante Petite S", size: "40 cm", pricePEN: 239, material: "Fierro", type: "Parante" },
  { collection: "accesorios", subcategory: "Parantes", family: "Parantes Petite", name: "Parante Petite M", size: "60 cm", pricePEN: 259, material: "Fierro", type: "Parante" },
  { collection: "accesorios", subcategory: "Parantes", family: "Parantes Petite", name: "Parante Petite L", size: "80 cm", pricePEN: 279, material: "Fierro", type: "Parante" },
];

export function getProductsByCollection(slug: CollectionSlug): Product[] {
  return products.filter((p) => p.collection === slug);
}

export function getAccessoriesBySubcategory(sub: "Colgantes" | "Parantes"): Product[] {
  return products.filter((p) => p.collection === "accesorios" && p.subcategory === sub);
}

export function groupByFamily(items: Product[]): { family: string; items: Product[] }[] {
  const map = new Map<string, Product[]>();
  for (const p of items) {
    if (!map.has(p.family)) map.set(p.family, []);
    map.get(p.family)!.push(p);
  }
  return Array.from(map, ([family, items]) => ({ family, items }));
}