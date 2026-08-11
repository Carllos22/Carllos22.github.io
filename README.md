<div align="center">

# Carlos Contreras Hernández

[🌐 Ver Sitio Web en Vivo](https://carllos22.github.io) • [💼 Solicitar Cotización](https://carllos22.github.io/#contacto)

</div>

---

## 📖 Descripción General

Este repositorio contiene el código fuente de mí portfolio.

El sitio ha sido diseñado con un enfoque de ingeniería de producto moderno (estética **shadcn/ui + Linear**), tipografía nítida `SF Pro` / `Inter`, contraste calibrado en modo claro y oscuro, arquitectura modular de componentes React, soporte bilingüe y envío directo de cotizaciones.

---

## ✨ Características Principales

- 🎨 **Estética shadcn/ui & Linear Pro**: Modo oscuro mate profundo (`#09090b`), modo claro alabastro (`#FAFAFA`), micro-bordes milimétricos y sombras sutiles.
- 💼 **Servicios Especializados & Modelo de Pricing**:
  - 📱 **Desarrollo Multiplataforma (Mobile & Desktop)**: Kotlin Multiplatform (KMP), Android/Kotlin, Jetpack Compose y SwiftUI.
  - 💻 **Desarrollo Web & Integración Cloud**: React, TypeScript, Node.js y Supabase / SQL.
  - 📈 **Posicionamiento SEO / SEM & Google Business Profile**: Optimización orgánica, campañas SEM y gestión de fichas locales.
  - 💡 **Consultoría Técnica 1:1 ($50 USD / h)**: Reserva de sesiones de 60 min (Presenciales u Online) para revisión de arquitectura, código y viabilidad de proyectos.
- 📱 **Proyecto Destacado Real**: Presentación arquitectónica de **Biweki KMP** (App móvil multiplataforma de finanzas personales).
- 🧭 **Metodología & Ejecución**: Bloque estructurado de principios de desarrollo (Arquitectura Limpia & Modular, Desarrollo Orientado a Producto, Rendimiento & Disciplina).
- 🌐 **Soporte Bilingüe Completo (Español / Inglés)**: Alternancia instantánea de idioma gestionada a través de React Context API.
- 📬 **Envío Directo de Formulario a Correo Personal**: Procesamiento AJAX seguro con sanitización de entradas.
- 🎵 **Widget de Audio Ambiental**: Reproducción/pausa de música de fondo (`/rock-suave.mp3`) con icono de nota musical interactivo en el Navbar.

---

## 🛠️ Stack Tecnológico

| Capa | Tecnologías |
| :--- | :--- |
| **Frontend Framework** | React 18 (JSX, Context API, Custom Hooks) |
| **Build Tool & Server** | Vite 5 (HMR ultrarrápido, compilación en ~4s) |
| **Estilos & UI** | Tailwind CSS 3, Vanilla CSS, shadcn/ui tokens |
| **Tipografía** | SF Pro Display, SF Pro Text, Inter, JetBrains Mono |
| **Iconografía** | Lucide React & Devicon CDN (Iconos oficiales de tecnologías) |
| **Despliegue CI/CD** | GitHub Actions (`.github/workflows/deploy.yml`) -> GitHub Pages |

---

## 📁 Estructura del Proyecto

```
portfolio-dev/
├── .github/
│   └── workflows/
│       └── deploy.yml           <-- Flujo de despliegue automático de GitHub Actions
├── public/
│   └── rock-suave.mp3           <-- Pista de audio ambiental
├── src/
│   ├── components/              <-- Componentes UI modulares
│   │   ├── Navbar.jsx           <-- Cabecera, navegación, idioma, tema e icono de audio
│   │   ├── Hero.jsx             <-- Portada principal, biografía y enlaces
│   │   ├── Services.jsx         <-- Tarjetas de servicios (Mobile, Web, SEO, Consultoría)
│   │   ├── ProjectsShowcase.jsx <-- Ficha del proyecto principal Biweki KMP
│   │   ├── TechStack.jsx        <-- Badges de tecnologías categorizados con Devicons
│   │   ├── Methodology.jsx      <-- Principios de ingeniería y ejecución (Limpia, Producto, Rendimiento)
│   │   ├── AmbientPlayer.jsx    <-- Botón compacto de reproducción musical (On/Off)
│   │   ├── SpotlightCard.jsx    <-- Tarjeta estilo shadcn con micro-hover
│   │   ├── ProjectModal.jsx     <-- Modal de detalles de arquitectura
│   │   ├── ProjectWizardModal.jsx <-- Asistente modal de cotizaciones y envío a ProtonMail
│   │   └── Footer.jsx           <-- Pie de página y enlaces a redes
│   ├── context/
│   │   ├── ThemeContext.jsx     <-- Control de Modo Claro / Modo Oscuro
│   │   └── LanguageContext.jsx  <-- Control de idioma Español / Inglés
│   ├── data/
│   │   └── translations.js      <-- Diccionario bilingüe desacoplado
│   ├── App.jsx                  <-- Layout principal
│   ├── main.jsx                 <-- Punto de entrada de React
│   └── index.css                <-- Sistema de diseño CSS, variables y clases
├── index.html                   <-- Plantilla HTML5 con fuentes tipográficas
├── tailwind.config.js           <-- Configuración de paleta y tipografía
└── vite.config.js               <-- Configuración de compilación Vite
```

---

<div align="center">
  <p>© 2026 Carlos Contreras Hernández. Todos los derechos reservados.</p>
</div>
