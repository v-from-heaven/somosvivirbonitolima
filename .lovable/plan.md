## Cambios

### 1. Quitar WhatsApp del header
En `src/components/landing/Nav.tsx`: eliminar el botón "Asesoría" (link de WhatsApp) y su import de `waUrl` / `WhatsAppIcon`. El `FloatingWA` fijo abajo-derecha sigue intacto. El botón hamburguesa móvil queda solo a la derecha.

### 2. Más SEO por colección y accesorio

**a) Descripciones más ricas y orientadas a búsqueda** en `src/data/catalog.ts` (`collectionsMeta`) y en `subMeta` de `src/routes/accesorios.$tipo.tsx`. Cada una con keywords naturales: "macetas [familia] Lima", "decoración interiores", materiales (fibra de vidrio, fierro), usos (interiores/exteriores, residencial/oficina).

**b) `head()` enriquecido** en `src/routes/coleccion.$slug.tsx` y `src/routes/accesorios.$tipo.tsx`:
- `title` con keyword + marca + ubicación (ej: "Macetas Contemporánea · Diseño minimalista en Lima · VivirBonito")
- `description` ≤160 chars, específica por colección/tipo
- `keywords` meta (lista por colección)
- `og:type: "product.group"`, `og:url` absoluto a `https://somosvivirbonitolima.lovable.app/...`
- `og:locale: "es_PE"`
- `canonical` absoluto

**c) JSON-LD `CollectionPage` + `BreadcrumbList` + `ItemList`** en cada ruta de colección y accesorio, listando los productos de esa colección (nombre, familia, imagen). Mejora rich results.

**d) `og:image` por colección/accesorio**: ya existe `meta.image`; convertirlo a URL absoluta usando el dominio del proyecto.

**e) H1 único + jerarquía**: revisar `CollectionPage.tsx` mantiene un solo `<h1>` (ya correcto) y que `FamilyBlock` use `<h2>` para familias y `<h3>` para productos (verificar en build).

**f) Alt text descriptivo** en `FamilyBlock` (hero familia) y en `CollectionPage` hero: usar "Maceta [familia] [colección] – [tagline corto]" en lugar de genérico.

### 3. Sin cambios funcionales adicionales
No tocar productos, navegación de accesorios ni el slider antes/después.

## Archivos a modificar
- `src/components/landing/Nav.tsx` — quitar botón WhatsApp + imports
- `src/data/catalog.ts` — enriquecer `collectionsMeta.description`, añadir `keywords` por colección
- `src/routes/coleccion.$slug.tsx` — head más rico + JSON-LD CollectionPage/Breadcrumb/ItemList
- `src/routes/accesorios.$tipo.tsx` — head más rico + JSON-LD + `subMeta` con keywords
- `src/routes/accesorios.index.tsx` — head con keywords + JSON-LD
- `src/components/catalog/FamilyBlock.tsx` — alt descriptivo en hero familia
- `src/components/catalog/CollectionPage.tsx` — alt descriptivo en hero
