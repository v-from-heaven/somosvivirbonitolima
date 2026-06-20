## Plan consolidado

### A. Reestructurar Accesorios con submenú

**`src/data/catalog.ts`** — Reclasificar:
- Colgante Mini Petite, Luna (3), Gota (2), Macramé → `accesorios` / **Colgantes**
- Parantes Petite S/M/L → `accesorios` / **Parantes**
- Petite queda solo con macetas (Mini Petite, Bola Petite)
- Añadir campos opcionales: `subcategory?: "Colgantes" | "Parantes"` y `image?: string` por familia

**`src/components/landing/Nav.tsx`** — Accesorios pasa a dropdown:
- Colgantes → `/accesorios/colgantes`
- Parantes → `/accesorios/parantes`

**Rutas nuevas:**
- `src/routes/accesorios.tsx` → layout con `<Outlet />`
- `src/routes/accesorios.index.tsx` → vista general con ambos grupos
- `src/routes/accesorios.$tipo.tsx` → ruta dinámica filtrada con `head()` específico

**`CollectionPage` / `FamilyBlock`** — aceptar `filterSubcategory?` y renderizar imagen hero de la familia.

### B. Imágenes por familia (~22)

Generar hero editorial (fondo bone #F4EFE6, luz natural, 4:3) por familia:
- Contemporánea: Bola, Cylindro, Copa, Quattro
- Nature: Sisal Cilíndrica, Sisal Bowl, Plátano Cilíndrica, Plátano Bowl, Bambú
- Novo: Tuby, Ribby, Cuenco
- Petite: Mini Petite, Bola Petite
- Colgantes: Luna, Gota, Macramé, Colgante Mini Petite
- Parantes: Bola, Cylindro, U, Copa, Quattro, Parantes Petite

Cada familia añade `image: <asset.url>` en su primer producto; `FamilyBlock` la renderiza como banda visual superior.

### C. Logo correcto

Subir la nueva imagen (VIVIRBONITO + línea verde + DECO & DESIGN) a CDN y reemplazar `src/assets/logo.png.asset.json`. El `Nav.tsx` la usa automáticamente.

### D. Antes/Después en Proyectos (NUEVO)

**`src/components/landing/BeforeAfter.tsx`** — Componente reutilizable con slider deslizable:
- Dos imágenes apiladas (antes / después), recortadas por `clip-path` controlado por la posición del cursor o un handle arrastrable
- Handle vertical con línea fina verde (#8FBF26) y círculo con flechas izq/der
- Labels discretos "Antes" / "Después" en esquinas
- Funciona en mouse, touch y teclado (←/→)
- Aspect ratio 4:3, fondo bone

**`src/components/landing/Projects.tsx`** — Insertar un bloque featured arriba o debajo del grid actual:
- Eyebrow "Transformación" + título corto ("Antes y después")
- `<BeforeAfter beforeUrl={...} afterUrl={...} alt="..." />` en ancho amplio
- Mantener el grid de 3 proyectos existente debajo

**Imágenes:** generar 1 par antes/después (mismo encuadre, antes = espacio vacío/descuidado, después = decorado con macetas VivirBonito) y subirlas como assets.

### Preguntas abiertas

1. **Parantes Petite (40/60/80 cm)**: ¿moverlos a Accesorios > Parantes (recomendado) o dejarlos en Petite?
2. **22 imágenes IA** como placeholders editoriales hasta tener fotos reales del catálogo. ¿Procedo con IA?
3. `/accesorios` sin filtro: ¿muestra ambos grupos en una página o redirige a `/accesorios/colgantes`?
4. **Antes/Después**: ¿generamos el par con IA (interior tipo terraza/lobby) o tienes tú las fotos reales del proyecto?