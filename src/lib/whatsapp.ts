// Edita aquí el número de WhatsApp (formato internacional sin +)
export const WHATSAPP_NUMBER = "51932572455";
export const INSTAGRAM_URL = "https://www.instagram.com/vivirbonito";

export function waUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}