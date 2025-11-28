# 💙 Asistente de Apoyo - App de Bienestar Mental

Una aplicación web responsive de nivel profesional construida con React que proporciona apoyo emocional y recursos de salud mental para estudiantes universitarios.

## ✨ Características Principales

### 🏠 Feed Principal (MEJORADO)
- **Búsqueda en tiempo real** de eventos y recursos
- **Filtros avanzados** por categoría (Todos, Eventos, Grupos, Recursos)
- **8 eventos completos** con información detallada
- **6 recursos educativos** con ratings y estadísticas
- Sistema de marcadores interactivo
- Registro a eventos con confirmación
- **Modal de detalles** con información completa
- **Badges visuales** de tipo de contenido
- **Metadata completa**: fecha, hora, ubicación, asistentes, organizador
- Contador de resultados disponibles
- Estado vacío elegante

### 💬 Chat de Apoyo (MEJORADO)
- Interfaz de mensajería en tiempo real
- Asistente virtual con 10+ respuestas empáticas
- **8 respuestas rápidas** con emojis para selección rápida
- **5 sugerencias contextuales** de conversación
- Indicador de escritura animado
- **Timestamps reales** en cada mensaje
- Scroll automático a nuevos mensajes
- Feedback háptico en dispositivos móviles
- Botón de enviar inteligente (deshabilitado sin texto)

### 👥 Resultados/Perfiles (MEJORADO)
- Grid responsive de perfiles profesionales
- Sistema de matching con porcentajes
- Vista de grid o lista intercambiable
- **Filtro por especialidad** (7 categorías)
- **Ordenamiento múltiple** (match, rating, reseñas)
- **Modal de perfil completo** con información detallada
- **Badge de verificación** para profesionales
- **Información expandida**: experiencia, disponibilidad, idiomas, tiempo de respuesta
- **Sistema de ratings** con estrellas y reseñas
- Seguimiento de solicitudes enviadas
- Botones separados: Ver Perfil y Conectar

### ❓ Ayuda Profesional
- Información sobre privacidad y bienestar
- Líneas de emergencia 24/7
- Búsqueda de centros de ayuda cercanos
- Recursos educativos con acordeones
- FAQs completas

### 👤 Perfil y Configuración (MEJORADO)
- **Sistema de tabs** (Estadísticas, Logros, Ajustes)
- **6 estadísticas detalladas** del usuario
- **Sistema de logros** con 5 badges desbloqueables
- **Tarjeta de racha** destacada con gradiente
- Gestión de cuenta
- Modo de chat anónimo
- Notificaciones push
- Toggles interactivos con feedback visual
- Notificaciones toast
- Animaciones escalonadas
- Opción de cerrar sesión

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

- ✅ 80+ animaciones suaves en todas las transiciones
- ✅ Feedback háptico en dispositivos compatibles
- ✅ Notificaciones toast para acciones
- ✅ 4 modales informativos con animaciones
- ✅ Estados de carga y typing indicators
- ✅ Navegación con indicador activo
- ✅ Scroll automático en chat
- ✅ Sistema de bookmarks persistente
- ✅ Validación de formularios
- ✅ **Búsqueda y filtrado en tiempo real**
- ✅ **Sistema de tabs interactivo**
- ✅ **Respuestas rápidas en chat**
- ✅ **Sistema de gamificación con logros**
- ✅ **Estadísticas de usuario detalladas**
- ✅ **Ordenamiento y filtros avanzados**

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
│   ├── Welcome.css
│   ├── Notification.jsx  # Sistema de notificaciones
│   └── Notification.css
├── pages/
│   ├── Chat.jsx          # Chat con asistente + respuestas rápidas
│   ├── Chat.css
│   ├── Feed.jsx          # Feed principal + búsqueda y filtros
│   ├── Feed.css
│   ├── Help.jsx          # Ayuda profesional
│   ├── Help.css
│   ├── Profile.jsx       # Perfil + estadísticas + logros
│   ├── Profile.css
│   ├── Results.jsx       # Perfiles + filtros avanzados
│   └── Results.css
├── data/
│   └── mockData.js       # 400+ líneas de datos mockeados
├── assets/
│   └── images/           # Imágenes de perfiles y eventos
├── App.jsx               # Componente principal + navegación
├── App.css
├── main.jsx              # Entry point
└── index.css             # Estilos globales + variables CSS
```

## 📊 Datos Mockeados

La aplicación incluye datos realistas y completos:

- **8 eventos** con información detallada (fecha, hora, ubicación, asistentes, organizador)
- **6 recursos educativos** con ratings, vistas, duración y autor
- **6 perfiles profesionales** con 13+ campos de información cada uno
- **8 respuestas rápidas** para el chat
- **5 sugerencias** de conversación
- **7 estadísticas** de usuario
- **5 badges** desbloqueables
- **4 notificaciones** de ejemplo
- **6 tips** de bienestar
- **5 FAQs** con respuestas completas

## 🎨 Características de Diseño

- **Animaciones escalonadas** en listas y grids
- **Gradientes modernos** en elementos destacados
- **Badges y verificaciones** visuales
- **Estados vacíos** informativos
- **Modales informativos** con scroll
- **Tabs interactivos** para organizar contenido
- **Feedback visual** en todas las interacciones
- **Iconos emoji** para mejor UX
- **Sombras y elevaciones** sutiles
- **Transiciones suaves** (0.3s ease)

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
- [ ] Calendario integrado
- [ ] Sistema de videollamadas
- [ ] Exportar estadísticas

## 📄 Licencia

MIT License - Siéntete libre de usar este proyecto para aprender o construir tu propia aplicación.

---

Hecho con 💙 para apoyar el bienestar mental estudiantil
