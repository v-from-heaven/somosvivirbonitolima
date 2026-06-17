## Tipografía normal, sin mayúsculas forzadas ni pesos light

### Objetivo
Cambiar el sistema tipográfico actual (todo uppercase + tracking amplio + pesos light/extralight) a uno natural y legible: títulos en normal-case, pesos medium/semibold, sin font-light ni font-extralight. Mantener Inter como fuente.

### Cambios en archivos

#### 1. `src/routes/__root.tsx`
- Actualizar el link de Google Fonts: cambiar `Inter:wght@200;300;400;500;600` a `Inter:wght@400;500;600;700`.
- Eliminar pesos 200 y 300 de la carga.

#### 2. `src/styles.css`
- Quitar `text-transform: uppercase` de la regla `h1, h2, h3` en `@layer base`.
- Cambiar `font-weight: 300` a `font-weight: 400` en la misma regla.
- Actualizar `--font-sans` si es necesario.

#### 3. `src/components/landing/Hero.tsx`
- H1: cambiar `font-extralight uppercase tracking-[0.12em]` a `font-medium normal-case tracking-tight`.
- Párrafo: cambiar `font-light` a `font-normal`.
- Botones: quitar `uppercase tracking-[0.18em]`, pasar a `font-semibold normal-case`.

#### 4. `src/components/landing/ValueProp.tsx`
- H2: cambiar `font-light uppercase tracking-[0.1em]` a `font-semibold normal-case tracking-tight`.
- Span interno: cambiar `font-extralight` a `font-normal`.
- Párrafo: cambiar `font-light` a `font-normal`.

#### 5. `src/components/landing/Collections.tsx`
- H2: cambiar `font-light uppercase tracking-[0.1em]` a `font-semibold normal-case tracking-tight`.
- H3: cambiar `font-normal uppercase tracking-[0.08em]` a `font-medium normal-case`.
- Descripción y meta: cambiar `font-light` a `font-normal`.
- Link CTA: quitar `uppercase tracking-[0.16em]`, pasar a `font-medium normal-case`.

#### 6. `src/components/landing/Services.tsx`
- H2: cambiar `font-light uppercase tracking-[0.1em]` a `font-semibold normal-case tracking-tight`.
- Números romanos: cambiar `font-extralight` a `font-semibold`.
- H3: quitar `uppercase tracking-[0.08em]`, pasar a `font-medium normal-case`.
- Body: cambiar `font-light` a `font-normal`.
- Botón CTA: quitar `uppercase tracking-[0.18em]`, pasar a `font-semibold normal-case`.

#### 7. `src/components/landing/Process.tsx`
- H2: cambiar `font-light uppercase tracking-[0.1em]` a `font-semibold normal-case tracking-tight`.
- Números 01/02/03: cambiar `font-extralight tracking-tight` a `font-semibold`.
- H3: quitar `uppercase tracking-[0.08em]`, pasar a `font-medium normal-case`.
- Body: cambiar `font-light` a `font-normal`.

#### 8. `src/components/landing/Closing.tsx`
- H2: cambiar `font-light uppercase tracking-[0.1em]` a `font-semibold normal-case tracking-tight`.
- Span interno: cambiar `font-extralight` a `font-normal`.
- Botones: quitar `uppercase tracking-[0.18em]`, pasar a `font-semibold normal-case`.

#### 9. `src/components/landing/Projects.tsx`
- H2: cambiar `font-light uppercase tracking-[0.1em]` a `font-semibold normal-case tracking-tight`.
- Párrafo: cambiar `font-light` a `font-normal`.
- Link CTA: quitar `uppercase tracking-[0.16em]`, pasar a `font-medium normal-case`.
- Figcaptions: quitar `uppercase tracking-[0.28em]`, pasar a `font-medium normal-case`.

#### 10. `src/components/landing/Nav.tsx`
- Botón CTA: quitar `uppercase tracking-[0.18em]`, pasar a `font-semibold normal-case`.
- Links nav: mantener en normal-case (ya lo están).

#### 11. `src/components/landing/Footer.tsx`
- Etiquetas "Showroom", "Contacto": cambiar `uppercase tracking-[0.28em]` a `font-medium normal-case`.
- Copyright tagline: quitar `uppercase tracking-[0.18em]`, pasar a `font-normal normal-case`.

### Reglas de aplicación
- **Eyebrows** ("Nuestra filosofía", "Catálogo curado"): se mantienen en `uppercase tracking-[0.24em]` como patrón de metadato/sección. Es la única excepción.
- **Todos los demás títulos y textos**: normal-case.
- **No queda ni un solo `font-light` ni `font-extralight`** en ningún componente de landing.
- **Los pesos válidos** en toda la web serán: 400 (normal), 500 (medium), 600 (semibold), 700 (bold).
- No se instala ninguna fuente nueva; se mantiene Inter.