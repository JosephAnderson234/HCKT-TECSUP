# 🚀 Comandos Útiles

## Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev

# El servidor estará disponible en:
# http://localhost:5173/
```

## Producción

```bash
# Construir para producción
npm run build

# Vista previa de la build de producción
npm run preview
```

## Estructura de URLs

- `/` - Feed principal (Home)
- `/chat` - Chat con asistente de apoyo
- `/results` - Perfiles y matching
- `/help` - Ayuda profesional
- `/profile` - Perfil y configuración

## Atajos de Teclado

### En el Chat
- `Enter` - Enviar mensaje
- `Esc` - Limpiar input

### Navegación
- Usa la barra inferior para cambiar entre secciones
- Los iconos son:
  - 🏠 Home/Feed
  - 👥 Resultados
  - 💬 Chat
  - ❓ Ayuda
  - 👤 Perfil

## Tips de Desarrollo

### Hot Module Replacement (HMR)
Vite recarga automáticamente los cambios. No necesitas refrescar el navegador.

### Inspeccionar en Móvil
1. Abre DevTools (F12)
2. Presiona el ícono de dispositivo móvil
3. Selecciona un dispositivo o usa responsive mode

### Debugging
```javascript
// Agregar console.log en cualquier componente
console.log('Estado actual:', state)

// Ver props
console.log('Props recibidas:', props)
```

## Personalización

### Cambiar Colores
Edita `src/index.css` y busca las variables de color:
```css
--primary: #4c6ef5;
--secondary: #667eea;
--background: #1a1f3a;
```

### Agregar Nuevas Páginas
1. Crea el componente en `src/pages/`
2. Crea el CSS correspondiente
3. Agrega la ruta en `src/App.jsx`
4. Agrega el ícono en la navegación

### Modificar Datos
Edita `src/data/mockData.js` para cambiar:
- Perfiles de profesionales
- Eventos disponibles
- Recursos
- Respuestas del bot

## Solución de Problemas

### El servidor no inicia
```bash
# Eliminar node_modules y reinstalar
rm -rf node_modules
npm install
npm run dev
```

### Errores de compilación
```bash
# Limpiar caché de Vite
rm -rf node_modules/.vite
npm run dev
```

### Puerto ocupado
Si el puerto 5173 está ocupado, Vite usará automáticamente el siguiente disponible (5174, 5175, etc.)

## Deployment

### Vercel
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Build
npm run build

# La carpeta dist/ contiene los archivos estáticos
# Sube dist/ a Netlify
```

### GitHub Pages
```bash
# Agregar en vite.config.js:
# base: '/nombre-repo/'

npm run build
# Sube la carpeta dist/ a gh-pages branch
```

## Mantenimiento

### Actualizar Dependencias
```bash
# Ver dependencias desactualizadas
npm outdated

# Actualizar todas
npm update

# Actualizar una específica
npm update react
```

### Auditoría de Seguridad
```bash
# Ver vulnerabilidades
npm audit

# Intentar arreglar automáticamente
npm audit fix
```

## Testing (Futuro)

```bash
# Instalar Vitest
npm install -D vitest @testing-library/react

# Correr tests
npm test
```

## Recursos Adicionales

- [Documentación de React](https://react.dev)
- [Documentación de Vite](https://vitejs.dev)
- [React Router](https://reactrouter.com)
- [MDN Web Docs](https://developer.mozilla.org)

---

¡Feliz desarrollo! 🎉
