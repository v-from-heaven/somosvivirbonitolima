## Problema

Vite devuelve 504 al pedir `/node_modules/.vite/deps/chunk-OB7N4GO6.js`. Esto suele ocurrir tras instalar nuevas dependencias (en este caso `@supabase/supabase-js` al activar Cloud): Vite empieza a servir antes de terminar el pre-bundle de dependencias y la primera petición al chunk caduca.

## Solución

Pre-declarar las dependencias pesadas en `optimizeDeps.include` en `vite.config.ts` para que Vite las descubra y empaque en el primer arranque, evitando la re-optimización en caliente que provoca el 504.

### Cambios

1. **`vite.config.ts`**: añadir bloque `vite.optimizeDeps.include` con:
   - `@supabase/supabase-js`
   - `@tanstack/react-router`
   - `@tanstack/react-query`
   - `react`, `react-dom/client`

   Mantener intactos `tanstackStart` y el resto de configuración inyectada por `@lovable.dev/vite-tanstack-config`.

2. **Reiniciar el dev server** y limpiar la caché `.vite/deps` para forzar un pre-bundle limpio.

### Nota sobre los logs

Los warnings de hidratación que aparecen en consola provienen de la extensión **Dark Reader** del navegador (atributos `data-darkreader-*` inyectados antes de la hidratación de React). No están relacionados con el 504 y no se tocan en este plan.
