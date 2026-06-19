// Edita aquí el número de WhatsApp (formato internacional sin +)
export const WHATSAPP_NUMBER = "51932572455";
export const INSTAGRAM_URL = "https://www.instagram.com/vivirbonito";

export function waUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

import type { Product } from "@/data/catalog";

export function buildProductMessage(p: Product): string {
  const parts = [
    `Hola VivirBonito, me interesa ${p.name}`,
    p.size ? `(${p.size})` : "",
    `— S/ ${p.pricePEN}.`,
    "¿Disponibilidad?",
  ];
  return parts.filter(Boolean).join(" ");
}