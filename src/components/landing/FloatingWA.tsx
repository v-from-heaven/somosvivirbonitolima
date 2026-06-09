import { waUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function FloatingWA() {
  return (
    <a
      href={waUrl("Hola VivirBonito, me gustaría más información.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-olive text-white shadow-[0_10px_30px_-10px_rgba(143,191,38,0.5)] transition-all hover:scale-105 hover:bg-olive-soft hover:text-ink sm:bottom-8 sm:right-8"
    >
      <WhatsAppIcon className="h-6 w-6" />
    </a>
  );
}