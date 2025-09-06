# 📚 EstudiaYa - Plataforma Educativa Moderna

![EstudiaYa Logo](https://img.shields.io/badge/EstudiaYa-Plataforma%20Educativa-blue?style=for-the-badge&logo=graduation-cap)

**EstudiaYa** es una plataforma educativa moderna desarrollada con React que ofrece un catálogo interactivo de cursos, testimonios dinámicos y herramientas de aprendizaje personalizadas para estudiantes de todas las edades.

## 🚀 Características Principales

### 📊 **Catálogo Interactivo de Cursos**
- **12+ cursos disponibles** en diferentes categorías (Matemáticas, Ciencias, Tecnología, Arte, etc.)
- **Filtros avanzados** por categoría y nivel de dificultad
- **Búsqueda en tiempo real** por nombre, instructor o descripción
- **Ordenamiento dinámico** por nombre, precio, calificación o popularidad
- **Visualización dinámica** con información completa de cada curso

### 💬 **Testimonios Dinámicos**
- **Testimonios reales** cargados desde archivos JSON
- **Estudiantes verificados** con fotos y roles
- **Calificaciones con estrellas** y comentarios detallados
- **Presentación del equipo** con información profesional

### 🔍 **Sistema de Búsqueda y Filtros**
- **Filtro por categoría**: Matemáticas, Ciencias, Tecnología, Humanidades, etc.
- **Filtro por nivel**: Básico, Intermedio, Avanzado
- **Búsqueda textual**: Busca en nombres, instructores y descripciones
- **Contador de resultados**: Muestra resultados encontrados vs total
- **Mensaje sin resultados**: UX amigable cuando no hay coincidencias

## 🛠️ Tecnologías Utilizadas

```
Frontend:
├── React 19.1.1          # Biblioteca principal
├── React Router DOM 7.8  # Navegación SPA
├── Tailwind CSS 4.1      # Estilos y diseño responsive
├── Vite 7.1              # Build tool y desarrollo
└── React Icons 5.5       # Iconografía

Herramientas:
├── ESLint               # Linting de código
├── PostCSS              # Procesamiento CSS
└── Autoprefixer         # Compatibilidad CSS
```

## 📁 Estructura del Proyecto

```
estudia-ya-react/
├── public/              # Archivos estáticos
├── src/
│   ├── components/      # Componentes reutilizables
│   │   └── Layout.jsx   # Layout principal con navegación
│   ├── data/           # Simulación de base de datos
│   │   ├── courses.json     # Catálogo de cursos
│   │   ├── testimonials.json # Testimonios de estudiantes
│   │   ├── features.json     # Características de la plataforma
│   │   └── team.json         # Información del equipo
│   ├── pages/          # Páginas de la aplicación
│   │   ├── Home.jsx         # Página principal
│   │   ├── Catalogo.jsx     # Catálogo interactivo
│   │   ├── QuienesSomos.jsx # Información del equipo
│   │   ├── MisionVision.jsx # Misión y visión
│   │   └── Contacto.jsx     # Formulario de contacto
│   ├── App.jsx         # Componente principal
│   ├── main.jsx        # Punto de entrada
│   └── index.css       # Estilos globales
├── index.html          # Template HTML
├── package.json        # Dependencias y scripts
├── vite.config.js      # Configuración de Vite
├── postcss.config.js   # Configuración PostCSS
├── tailwind.config.js  # Configuración Tailwind
└── README.md          # Este archivo
```

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone [url-del-repositorio]
   cd estudia-ya-react
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:5173
   ```

### Scripts disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build para producción
npm run preview  # Preview del build
npm run lint     # Verificar código con ESLint
```

## 📊 Datos de Ejemplo

La aplicación incluye datos de ejemplo realistas:

- **12 cursos** en 6 categorías diferentes
- **8 testimonios** de estudiantes verificados
- **Equipo de 8 profesionales** con roles específicos
- **Estadísticas** de 50,000+ usuarios activos

## 🎨 Diseño y UX

### Paleta de Colores
- **Primario**: Azul (#3B82F6) - Confianza y profesionalismo
- **Secundario**: Verde (#10B981) - Crecimiento y éxito
- **Acentos**: Amarillo (#F59E0B) - Energía y motivación

### Características de UX
- **Responsive Design**: Optimizado para móviles, tablets y desktop
- **Loading States**: Indicadores de carga en todas las secciones
- **Animaciones Suaves**: Transiciones CSS para mejor experiencia
- **Iconografía Clara**: Emojis y iconos descriptivos
- **Navegación Intuitiva**: Menú sticky con indicadores activos

## 📱 Páginas Implementadas

1. **🏠 Inicio**: Hero, estadísticas, cursos destacados, testimonios
2. **📚 Catálogo**: Filtros, búsqueda, ordenamiento, vista de cursos
3. **👥 Quiénes Somos**: Equipo, historia, valores de la empresa
4. **🎯 Misión y Visión**: Objetivos, testimonios, metas 2025
5. **📞 Contacto**: Formulario, tipos de usuario, FAQ

## 🔄 Funcionalidades Implementadas

### Consigna "Opción 2 - Mi Startup Soñada"

✅ **Catálogo interactivo de productos/servicios**
- Visualización dinámica de 12 cursos
- Información completa: precio, instructor, calificación, estudiantes
- Imágenes representativas y categorización

✅ **Testimonios dinámicos desde JSON**
- 8 testimonios reales con fotos y verificación
- Presentación del equipo con roles específicos
- Carga dinámica con estados de loading

✅ **Filtros y búsqueda básica**
- Filtro por categoría (6 opciones)
- Filtro por nivel (básico, intermedio, avanzado)
- Búsqueda textual en tiempo real
- Ordenamiento por múltiples criterios

## 🧪 Testing y Calidad

- **ESLint**: Configurado para mantener calidad del código
- **Responsive Testing**: Probado en múltiples dispositivos
- **Performance**: Optimizado con Vite y lazy loading
- **Accessibility**: Uso de semantic HTML y ARIA labels

## 📈 Roadmap Futuro

- [ ] Sistema de autenticación de usuarios
- [ ] Panel de administración para cursos
- [ ] Sistema de calificaciones en vivo
- [ ] Chat en tiempo real con instructores
- [ ] Certificados digitales
- [ ] Integración con plataformas de pago

## 🤝 Contribuciones

Este proyecto fue desarrollado como parte del programa **ChicasTEC 5 - Unidad 3**, enfocado en crear aplicaciones React modernas con funcionalidades interactivas.

## 📄 Licencia

Este proyecto es parte de un programa educativo y está disponible para fines de aprendizaje.

---

**💡 Desarrollado con ❤️ por el Equipo EstudiaYa**

*¿Listo para transformar tu experiencia de aprendizaje? ¡Únete a EstudiaYa hoy!* 🚀
