## Objetivo
Landing page boutique de una sola página para VivirBonito: catálogo de exhibición orientado a captar leads. Todos los CTAs abren WhatsApp (`https://wa.me/51932572455?text=...`) con mensajes contextuales en español.

## Sistema de diseño
- **Paleta**: fondo blanco `#FFFFFF` y hueso `#F9F9F9`; texto carbón `#1A1A1A`; acento verde oliva `#4A5D4E` (botones, líneas finas, hover). Gris muted `#6B6B6B` para subtexto.
- **Tipografía**: serif elegante para H1/H2 (Cormorant Garamond) + sans-serif limpia para cuerpo (Inter). Cargadas vía `<link>` en `__root.tsx` y registradas en `@theme` de `src/styles.css`.
- **Tokens** definidos en `src/styles.css` (oklch) y mapeados con `@theme inline`. Componente botón con variante `olive` (acento) y `ghost-dark`.
- Animaciones suaves: fade/slide-in al hacer scroll (CSS + IntersectionObserver, sin libs).
- Mobile-first, generoso espacio en blanco, líneas finas separadoras.

## Estructura (una sola ruta `/`)
Reemplazo el placeholder en `src/routes/index.tsx`. Componentes en `src/components/landing/`:

1. **Nav** — logo VivirBonito (imagen subida via lovable-assets), enlaces ancla (Colecciones, Servicios, Proyectos, Proceso), CTA WhatsApp pequeño.
2. **Hero** — imagen full-bleed (foto de terraza/interior subida), H1 serif "Macetas y diseño verde para transformar tus espacios", subtítulo, dos CTAs (Agendar Asesoría → WA; Ver Colecciones → scroll suave).
3. **Propuesta de valor** — bloque centrado, tipografía grande serif.
4. **Catálogo curado** — grid de 3 tarjetas (Arquitectónica/Contemporánea, Orgánica/Nature, Petite & Detalles). Cada una con imagen del brochure, modelos destacados enriquecidos del PDF (ej. Contemporánea: Bola Auto Riego Ø46–75cm, Cylindro Ø34–74cm, Quattro, Copa, Novo Ribby/Tuby/Cuenco; Nature: Sisal Cilíndrica, Sisal Bowl, Plátano Bowl, Bambú Redondeada, Macramé; Petite: Mini Petite S Ø17cm, Bola Petite Ø30cm, Luna pared/colgante, Gota, Parantes Negro/Dorado/Bronce). Mención sutil "Garantía 5 años · Auto Riego · Importadas de Vietnam (Nature)". CTA por tarjeta a WhatsApp con mensaje específico. Sin precios.
5. **Servicios** — 3 columnas (Curaduría, Asesoría en Composición, Proyectos Integrales) + CTA inferior "Solicitar propuesta personalizada".
6. **Antes / Después** — grid comparativa de 2–3 proyectos usando fotos del brochure/uploads; CTA "Ver más proyectos reales" a Instagram (placeholder `INSTAGRAM_URL`) o WhatsApp.
7. **Proceso** — flujo horizontal de 3 pasos numerados.
8. **Cierre comercial + Footer** — frase grande serif, dos CTAs (Agendar Asesoría, WhatsApp), microtexto de confianza, dirección del showroom (Av. Daniel Hernández 128, San Isidro), © VivirBonito.
9. **Botón flotante WhatsApp** — fijo bottom-right, ícono SVG limpio, color oliva, sombra sutil.

## CTAs WhatsApp
Helper `buildWhatsAppUrl(message)` en `src/lib/whatsapp.ts` con constante `WHATSAPP_NUMBER = "51932572455"` (fácil de editar). Todos los botones lo usan con su mensaje específico (los del prompt).

## Imágenes
- Logo VivirBonito (upload).
- Hero: foto subida `vivir_bonito_103.jpg` o `RR_-_3_1.jpg`.
- Tarjetas catálogo: `RR_-_3_1` (Contemporánea), `DG_-_8` (Petite/parantes), `HUB_-_15` (Nature/colgantes), `HUB_-_20` (proyectos), `VB-4_nw` (composición), `WhatsApp_...` (acentos).
- Subidas a Lovable Assets desde `/mnt/user-uploads/` (no se copian binarios al repo) y referenciadas via `*.asset.json`.

## SEO
- `head()` en `index.tsx`: title "VivirBonito · Macetas de diseño y paisajismo boutique", meta description, og:title/description/image (hero), twitter card.
- H1 único, alt text descriptivo en cada imagen, HTML semántico (`<section>`, `<nav>`, `<footer>`).

## Detalles técnicos
- TanStack Start, una sola ruta `/`. Sin backend, sin DB.
- Tailwind v4 puro vía `src/styles.css`.
- Scroll suave via `scroll-behavior: smooth` en html + anchors `#colecciones`, `#servicios`, etc.
- 100% responsive, breakpoints sm/md/lg.
- Sin carritos, sin checkout, sin precios.
