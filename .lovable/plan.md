## Objetivo

Mostrar todo el catálogo de VivirBonito en la web, con una página por colección y una sección dedicada a Accesorios accesible desde el menú.

## Colecciones detectadas en el catálogo

- **Contemporánea** — Bola Auto Riego, Cylindro, Copa, Quattro
- **Nature** — Sisal Cilíndrica, Sisal Bowl, Plátano Cilíndrica (+ variantes)
- **Petite** — Mini Petite, Bola Petite, Colgantes, Parantes Petite, Luna, Gota, Macramé
- **Novo** *(nueva, no estaba en la web)* — Tuby, Ribby, Cuenco
- **Accesorios** — Parantes (Bola, Cylindro, U, Copa, Quattro)

> Confirmar: ¿incluimos **Novo** como cuarta colección destacada en la home, o solo accesible desde el menú?

## Estructura de rutas (nuevas)

```
/coleccion/contemporanea
/coleccion/nature
/coleccion/petite
/coleccion/novo
/accesorios
```

Ruta dinámica única `src/routes/coleccion.$slug.tsx` para las 4 colecciones + ruta dedicada `src/routes/accesorios.tsx`. Cada una con su propio `head()` (title, description, og).

## Navegación

Menú principal (Nav.tsx) pasa de 1 botón (WhatsApp) a links de navegación reales:

- Colecciones (dropdown o links: Contemporánea · Nature · Petite · Novo)
- Accesorios
- Proceso
- Contacto (WhatsApp)

En móvil: menú hamburguesa con los mismos enlaces.

## Página de colección (`/coleccion/$slug`)

Layout tipo catálogo de estudio de arquitectura:

1. **Header**: eyebrow "Colección", H1 con el nombre, breve descripción, imagen hero de la colección.
2. **Grid de familias**: cada familia (Bola Series, Cylindro, Copa, Quattro…) como bloque con:
   - Nombre de la familia (H2)
   - Material / acabado
   - Tabla de variantes: Medida · Precio · Notas (auto riego / a pedido / promoción)
   - Botón "Cotizar por WhatsApp" pre-rellenado con producto + medida
3. Divisores `border-hairline` muy sutiles. Acento verde solo en CTAs y precio destacado.

## Página Accesorios (`/accesorios`)

Mismo patrón pero centrado en Parantes (Bola, Cylindro Bajo/Alto, U, Copa, Quattro Bajo/Alto), agrupados por tipo. Cada item: medida, colores disponibles (Negro/Dorado/Bronce), precio, CTA WhatsApp.

## Sección Collections (home)

Las 3 (o 4) tarjetas actuales se mantienen, pero el CTA "Explorar colección" lleva a `/coleccion/$slug` en lugar de scroll. Lista corta de modelos sigue visible como teaser.

## Datos

Un único `src/data/catalog.ts` con el catálogo tipado, derivado del Excel subido. Las páginas leen de ahí; nada hardcodeado en componentes. Sin backend — datos estáticos en el bundle.

```ts
export type Product = {
  collection: 'contemporanea' | 'nature' | 'petite' | 'novo' | 'accesorios';
  family: string;
  name: string;
  size?: string;
  pricePEN: number;
  material: string;
  colors?: string[];
  notes?: string;
  type: 'Maceta' | 'Parante' | 'Decorativo';
};
```

## WhatsApp

Helper `buildWaMessage(product)` que genera: *"Hola, me interesa la {familia} {nombre} ({medida}) — S/ {precio}. ¿Disponibilidad?"* y abre el link de WhatsApp existente.

## Tipografía / estilo

Se mantiene la dirección actual (Inter, jerarquía normal, verde #8FBF26 como acento principal, #B2D95F y #C9D98F secundarios, divisores `border-hairline`). Sin cambios al sistema de diseño.

## Archivos a crear / editar

- **Nuevo** `src/data/catalog.ts` — catálogo tipado completo
- **Nuevo** `src/routes/coleccion.$slug.tsx` — página dinámica por colección
- **Nuevo** `src/routes/accesorios.tsx` — página de accesorios
- **Nuevo** `src/components/catalog/ProductTable.tsx` — tabla de variantes reutilizable
- **Nuevo** `src/components/catalog/FamilyBlock.tsx` — bloque por familia
- **Editar** `src/components/landing/Nav.tsx` — menú real con links + hamburguesa móvil
- **Editar** `src/components/landing/Collections.tsx` — CTAs apuntan a nuevas rutas, agregar Novo si se confirma
- **Editar** `src/lib/whatsapp.ts` — helper `buildWaMessage(product)`

## Preguntas abiertas

1. ¿Incluir **Novo** como 4ª colección en la home, o solo en el menú?
2. ¿Mostrar precios en S/ visibles, o solo "Cotizar"? (recomiendo mostrarlos — genera confianza y reduce fricción)
3. ¿Imágenes por producto disponibles? Si no, usaré la imagen hero de cada colección como fondo de los bloques de familia.
