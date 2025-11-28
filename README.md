# 💙 Asistente de Apoyo - App de Bienestar Mental

Una aplicación web responsive construida con React que proporciona apoyo emocional y recursos de salud mental para estudiantes universitarios.

## ✨ Características

### 🏠 Feed Principal
- Búsqueda de eventos y recursos
- Filtros por categoría (Todos, Grupos, Eventos, Tuto)
- Sistema de marcadores interactivo
- Registro a eventos con confirmación

### 💬 Chat de Apoyo
- Interfaz de mensajería en tiempo real
- Asistente virtual con respuestas empáticas
- Indicador de escritura animado
- Scroll automático a nuevos mensajes
- Feedback háptico en dispositivos móviles

### 👥 Resultados/Perfiles
- Grid responsive de perfiles profesionales
- Sistema de matching con porcentajes
- Vista de grid o lista
- Modal de conexión personalizado
- Seguimiento de solicitudes enviadas

### ❓ Ayuda Profesional
- Información sobre privacidad y bienestar
- Líneas de emergencia 24/7
- Búsqueda de centros de ayuda cercanos
- Recursos educativos con acordeones

### 👤 Perfil y Configuración
- Gestión de cuenta
- Modo de chat anónimo
- Notificaciones push
- Toggles interactivos con feedback visual
- Notificaciones toast

## 🚀 Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build
```

## 🎨 Tecnologías

- **React 18** - Framework principal
- **React Router** - Navegación entre páginas
- **Vite** - Build tool y dev server
- **CSS3** - Estilos y animaciones

## 📱 Responsive Design

La aplicación está optimizada para:
- 📱 Móviles (320px - 480px)
- 📱 Tablets (481px - 768px)
- 💻 Desktop (769px+)

## 🎯 Funcionalidades Interactivas

- ✅ Animaciones suaves en todas las transiciones
- ✅ Feedback háptico en dispositivos compatibles
- ✅ Notificaciones toast para acciones
- ✅ Modales con animaciones
- ✅ Estados de carga y typing indicators
- ✅ Navegación con indicador activo
- ✅ Scroll automático en chat
- ✅ Sistema de bookmarks persistente
- ✅ Validación de formularios

## 🎨 Paleta de Colores

- **Primario**: `#4c6ef5` (Azul)
- **Secundario**: `#667eea` (Púrpura)
- **Fondo**: `#1a1f3a` (Azul oscuro)
- **Superficie**: `#0f1429` (Azul muy oscuro)
- **Texto**: `#ffffff` (Blanco)
- **Texto secundario**: `#8b92b0` (Gris azulado)
- **Acento**: `#ffd43b` (Amarillo)
- **Éxito**: `#51cf66` (Verde)

## 📂 Estructura del Proyecto

```
src/
├── components/
│   ├── Welcome.jsx       # Pantalla de bienvenida
│   └── Welcome.css
├── pages/
│   ├── Chat.jsx          # Chat con asistente
│   ├── Chat.css
│   ├── Feed.jsx          # Feed principal
│   ├── Feed.css
│   ├── Help.jsx          # Ayuda profesional
│   ├── Help.css
│   ├── Profile.jsx       # Perfil y configuración
│   ├── Profile.css
│   ├── Results.jsx       # Perfiles y matching
│   └── Results.css
├── App.jsx               # Componente principal
├── App.css
├── main.jsx              # Entry point
└── index.css             # Estilos globales
```

## 🌟 Mejoras Futuras

- [ ] Backend con Node.js/Express
- [ ] Base de datos para persistencia
- [ ] Autenticación de usuarios
- [ ] Chat en tiempo real con WebSockets
- [ ] Notificaciones push reales
- [ ] Integración con APIs de salud mental
- [ ] Tests unitarios y E2E
- [ ] PWA con service workers
- [ ] Modo oscuro/claro
- [ ] Internacionalización (i18n)

## 📄 Licencia

MIT License - Siéntete libre de usar este proyecto para aprender o construir tu propia aplicación.

---

Hecho con 💙 para apoyar el bienestar mental estudiantil
