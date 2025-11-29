# 🚀 Guía de Inicio Rápido

## Configuración Inicial

### 1. Instalar Dependencias

```bash
npm install
```

### 2. Configurar Variables de Entorno

El archivo `.env` ya está creado con las URLs de las APIs:

```env
VITE_API_TAREAS=https://3oxmwg97c0.execute-api.us-east-1.amazonaws.com/dev
VITE_API_AGENTES=https://dm8lx9wo68.execute-api.us-east-1.amazonaws.com/dev
VITE_API_ANALISIS=https://nzrmmx0hj7.execute-api.us-east-1.amazonaws.com/dev
```

### 3. Iniciar la Aplicación

```bash
npm run dev
```

La aplicación se abrirá en `http://localhost:5173`

## 🎯 Primeros Pasos

### 1. Login

- Abre la aplicación
- Verás la pantalla de login
- Selecciona un usuario del dropdown (recomendado: `carmen.fernandez@gmail.com`)
- Haz clic en "Iniciar Sesión"

### 2. Explorar la App

#### 🏠 Feed (Inicio)
- Ver eventos próximos
- Explorar recursos educativos
- Navegar por categorías

#### 📝 Tareas
- Haz clic en "+ Subir Tarea"
- Selecciona una imagen (puede ser una foto de tarea escrita)
- La API extraerá el texto automáticamente con OCR
- Verás tus tareas en una lista
- Puedes eliminar tareas

#### 💬 Chat
- Conversa con 3 tipos de agentes:
  - **🎓 Mentor Académico**: Ayuda con estudios y rendimiento
  - **🧠 Psicólogo**: Apoyo emocional y manejo de estrés
  - **🎯 Orientador Vocacional**: Guía sobre carrera
- Cambia de agente haciendo clic en el título del header
- Escribe tu mensaje y recibe respuestas personalizadas

#### 👥 Resultados
- Ver profesionales disponibles
- Filtrar por especialidad
- Ver detalles de cada profesional

#### 👤 Perfil
- Ver tus datos académicos (carrera, promedio, ciclo)
- Activar/desactivar modo anónimo
- Configurar notificaciones
- Cerrar sesión

## 🧪 Probar las APIs

### API de Tareas

1. Ve a la sección **Tareas** (📝)
2. Haz clic en **"+ Subir Tarea"**
3. Selecciona cualquier imagen con texto
4. Espera a que se procese (OCR automático)
5. Verás el texto extraído en la tarjeta de tarea

### API de Agentes

1. Ve a la sección **Chat** (💬)
2. Haz clic en el título para cambiar de agente
3. Prueba preguntas como:
   - "¿Cómo puedo mejorar mi promedio?" (Mentor Académico)
   - "Me siento estresado con los exámenes" (Psicólogo)
   - "No estoy seguro de mi carrera" (Orientador Vocacional)
4. Recibe respuestas personalizadas en tiempo real

### API de Análisis

1. Ve a tu **Perfil** (👤)
2. Verás tus datos académicos cargados desde la API:
   - Carrera
   - Promedio ponderado
   - Ciclo actual
3. Prueba el toggle de "Modo Anónimo" (actualiza la autorización en la API)

## 📱 Usuarios de Prueba

### Usuario Recomendado Principal
```
carmen.fernandez@gmail.com
- Autorización: Activa
- Datos completos
- Ideal para testing
```

### Otros Usuarios Disponibles
```
carlos.lopez@utec.edu.pe
fernando.vega@outlook.com
magali.flores@outlook.com
laura.sanchez@utec.edu.pe
sofia.castro@gmail.com
```

## 🔍 Verificar que Todo Funciona

### ✅ Checklist

- [ ] Login exitoso
- [ ] Navegación entre páginas funciona
- [ ] Subir tarea con imagen funciona
- [ ] Chat responde con mensajes reales
- [ ] Perfil muestra datos académicos
- [ ] Toggle de autorización funciona
- [ ] Logout funciona

## 🐛 Solución de Problemas

### La app no inicia
```bash
# Limpiar node_modules y reinstalar
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Las APIs no responden
1. Verifica tu conexión a internet
2. Revisa que el archivo `.env` existe
3. Verifica las URLs en `.env`
4. Abre la consola del navegador (F12) para ver errores

### No veo mis datos en el perfil
1. Asegúrate de haber iniciado sesión
2. Verifica que el usuario tiene datos en la API
3. Prueba con `carmen.fernandez@gmail.com`

### El OCR no funciona
1. Usa imágenes con texto claro
2. Formatos soportados: JPG, PNG, WEBP
3. Espera unos segundos para el procesamiento

## 📚 Documentación Adicional

- **IMPLEMENTACION_API.md**: Documentación técnica completa
- **Tecsup.postman_collection.json**: Colección de Postman para probar APIs
- **FUNCIONALIDADES.md**: Lista de funcionalidades de la app

## 🎉 ¡Listo!

Ya puedes explorar todas las funcionalidades de la aplicación. Las APIs están completamente integradas y funcionando.

### Próximos Pasos

1. Explora cada sección de la app
2. Prueba diferentes usuarios
3. Experimenta con los 3 tipos de agentes en el chat
4. Sube varias tareas para ver el OCR en acción
5. Revisa tus datos académicos en el perfil

¿Preguntas? Revisa la documentación técnica en `IMPLEMENTACION_API.md`
