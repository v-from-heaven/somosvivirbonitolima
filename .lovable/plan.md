## Cambios de diseño — Identidad arquitectónica VivirBonito

Refactor tipográfico y visual alineado al logo: sans-serif geométrico minimalista, jerarquía clara de títulos y paleta verde corporativa restringida a 3 tonos exactos.

### 1. Paleta verde corporativa (exacta)

Reemplazar tokens actuales en `src/styles.css`:

- `--olive: oklch(0.78 0.18 128)` → **#8FBF26** (principal, dominante: botones, eyebrows, CTAs)
- `--olive-soft: oklch(0.86 0.14 128)` → **#B2D95F** (acento secundario: hover sutiles, líneas de acento, número de colección activa)
- `--olive-pale: oklch(0.88 0.07 125)` → **#C9D98F** (uso puntual: chips/fondos muy suaves, separadores decorativos)
- Eliminar `--olive-deep`. Para hover de botones primarios se usa `--olive-soft` (#B2D95F) o un oscurecimiento sutil del principal vía `color-mix`.
- `--primary` = `--olive` (#8FBF26). `--primary-foreground` = blanco.

Regla de uso: **#8FBF26 manda**; los otros dos verdes aparecen solo para matizar o diferenciar, nunca compiten con el principal.

### 2. Tipografía global (`src/styles.css` + `__root.tsx`)

- Eliminar `--font-serif` (Cormorant Garamond) por completo.
- Familia única: `--font-sans: "Inter", "Helvetica Neue", ui-sans-serif, system-ui, sans-serif`.
- Cargar Inter (300/400/500/600) vía `<link>` en `src/routes/__root.tsx`.
- Quitar la regla `h1, h2, h3 { font-family: var(--font-serif) }`.

### 3. Jerarquía de títulos (clara y consistente)

Todos sans-serif, uppercase, diferenciados por peso/tamaño/tracking:

- **H1 Hero** — `text-5xl md:text-7xl font-extralight uppercase tracking-[0.14em] leading-[1.05]`
- **H2 sección** — `text-3xl md:text-5xl font-light uppercase tracking-[0.10em]`
- **H3 tarjeta/colección** — `text-xl md:text-2xl font-normal uppercase tracking-[0.08em]`
- **Eyebrows** — `text-[11px] font-medium uppercase tracking-[0.32em] text-olive` (#8FBF26)
- **Body** — `text-base font-light leading-relaxed text-muted-ink`
- **Meta/specs** — `text-xs tracking-wide text-muted-ink`

Aplicada en Hero, ValueProp, Collections, Services, Projects, Process, Closing.

### 4. Eliminar itálicas y serifs

- `Closing.tsx`: quitar `italic` de "O puede sentirse completamente distinto" → `font-extralight tracking-wide text-white/70`. Fondo negro intacto, tipografía blanca fina.
- `ValueProp.tsx`: quitar `italic` del span "Se trata de cómo se siente".
- `Process.tsx`: `01/02/03` → `font-sans font-extralight text-6xl tracking-tight text-olive` (#8FBF26).
- `Services.tsx`: `I/II/III` → `font-sans font-light text-3xl text-olive` (#8FBF26).
- Barrer cualquier `italic` o `font-serif` residual en Hero, Nav, Footer, FloatingWA, Projects, Collections.

### 5. Sistema verde para diferenciar colecciones

En `Collections.tsx`, cada colección usa un tono distinto del trio — pero siempre el eyebrow principal y el CTA quedan en #8FBF26:

- **Contemporánea** → línea/acento superior en `--olive` (#8FBF26)
- **Nature** → línea/acento superior en `--olive-soft` (#B2D95F)
- **Petite** → línea/acento superior en `--olive-pale` (#C9D98F)

CTAs ("Cotizar →", flechas, botones primarios) siempre en #8FBF26 para mantener coherencia.

### 6. Refinamiento de tarjetas y divisores

- `--hairline` aclarado a `oklch(0.94 0 0)` (~border-gray-100).
- `Services.tsx`: `border-ink` → `border-hairline` para aire de catálogo de estudio.
- Mantener divisores `border-t border-hairline` en Collections y Process.

### Archivos a modificar

- `src/styles.css`
- `src/routes/__root.tsx` (link a Inter)
- `src/components/landing/Hero.tsx`
- `src/components/landing/ValueProp.tsx`
- `src/components/landing/Closing.tsx`
- `src/components/landing/Collections.tsx`
- `src/components/landing/Services.tsx`
- `src/components/landing/Process.tsx`
- Revisión rápida: `Nav.tsx`, `Footer.tsx`, `FloatingWA.tsx`, `Projects.tsx`
