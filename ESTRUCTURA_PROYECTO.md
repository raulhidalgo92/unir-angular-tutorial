# Estructura del Proyecto - Referencia Rápida

## 📁 Organización de Carpetas

```
angular-tutorial/
├── src/
│   ├── app/
│   │   ├── layout/
│   │   │   ├── header/              # Componente de navegación principal
│   │   │   └── footer/              # Pie de página
│   │   │
│   │   ├── pages/                   # Componentes de página (una por ruta)
│   │   │   ├── home/                # Página de inicio
│   │   │   ├── justificacion/       # Sección 1: ¿Por qué Angular?
│   │   │   ├── instalacion/         # Sección 2: Instalación
│   │   │   ├── primeros-pasos/      # Sección 3: Hola Mundo
│   │   │   ├── utilizacion/         # Sección 4: Cómo crear apps
│   │   │   ├── funcionamiento/      # Sección 5: Cómo funciona
│   │   │   └── conclusiones/        # Sección 6: Conclusiones
│   │   │
│   │   ├── styles/                  # Estilos globales
│   │   │   └── variables.scss       # Variables de color, tipografía, etc.
│   │   │
│   │   ├── app.ts                   # Componente raíz
│   │   ├── app.html                 # Template raíz
│   │   ├── app.scss                 # Estilos raíz
│   │   └── app.routes.ts            # Definición de rutas
│   │
│   ├── styles.scss                  # Estilos globales de la aplicación
│   └── index.html                   # HTML raíz
│
└── [configuración general]
    ├── package.json
    ├── angular.json
    ├── tsconfig.json
    └── README.md
```

## 🔄 Flujo de Navegación

```
Inicio (Home)
    ↓
[Header Sticky con links a todas las secciones]
    ↓
Justificación → Instalación → Primeros Pasos → Utilización → Funcionamiento → Conclusiones
    ↓
[Footer con información de copyright]
```

## 📄 Archivos por Componente

Cada sección (page) tiene esta estructura:

```
seccion/
├── seccion.component.ts       # Lógica del componente
├── seccion.component.html     # Template (vista)
└── seccion.component.scss     # Estilos locales
```

## 🎨 Sistema de Diseño

### Colores Principales:
- Gradiente Primario: `#667eea` → `#764ba2`
- Fondo: `#fafbfc`
- Texto Principal: `#333`
- Texto Secundario: `#666`
- Bordes: `#e0e0e0`

### Espaciado:
- xs: 0.25rem
- sm: 0.5rem
- md: 1rem
- lg: 1.5rem
- xl: 2rem
- 2xl: 2.5rem
- 3xl: 3rem

## 🔗 Rutas Disponibles

| Ruta | Componente | Título |
|------|-----------|--------|
| `/` | redirects to `/inicio` | Redirección |
| `/inicio` | HomeComponent | Página de inicio |
| `/justificacion` | JustificacionComponent | ¿Por qué Angular? |
| `/instalacion` | InstalacionComponent | Instalación |
| `/primeros-pasos` | PrimerosPatosComponent | Hola Mundo |
| `/utilizacion` | UtilizacionComponent | Cómo crear apps |
| `/funcionamiento` | FuncionamientoComponent | Funcionamiento |
| `/conclusiones` | ConclusionesComponent | Conclusiones |

## 🏗️ Tecnologías Utilizadas

- **Angular 21.x** - Framework principal
- **TypeScript 5.9+** - Lenguaje
- **SCSS** - Preprocesador CSS
- **RxJS** - Programación reactiva
- **Angular Router** - Enrutamiento

## 💻 Comandos Útiles

```bash
# Desarrollo
ng serve                    # Inicia servidor desarrollo (port 4200)
ng serve --open            # Inicia y abre en navegador

# Construcción
ng build                    # Build para producción
ng build --watch           # Build en watch mode

# Testing
ng test                     # Ejecuta tests

# Generar nuevo componente
ng generate component nombre
ng g c nombre              # Forma corta

# Generar servicio
ng generate service nombre
ng g s nombre              # Forma corta
```

## ✅ Checklist de Componentes

- [x] Header (navegación sticky)
- [x] Footer (pie de página)
- [x] Home Page (página de inicio)
- [x] Justificación (¿Para qué sirve Angular?)
- [x] Instalación (Cómo instalar)
- [x] Primeros Pasos (Hola Mundo)
- [x] Utilización (Cómo crear apps)
- [x] Funcionamiento (Cómo funciona)
- [x] Conclusiones (Resumen y próximos pasos)
- [x] Sistema de rutas completo
- [x] Estilos minimalistas modernos
- [x] Responsive design
- [x] Variables SCSS centralizadas

## 🎯 Convenciones de Nombres

### Componentes:
```
nombre.component.ts       // Lógica
nombre.component.html     // Template
nombre.component.scss     // Estilos
nombre.component.spec.ts  // Tests
```

### Selectores:
```
<app-nombre></app-nombre>  // Prefijo 'app-' siempre
```

### Rutas:
```
/kebab-case  // URLs en minúsculas con guiones
```

## 📚 Recursos Internos

- `variables.scss` - Contiene todo el sistema de diseño centralizado
- `styles.scss` - Estilos globales y resets CSS
- Cada componente tiene sus estilos encapsulados

## 🔍 Puntos Clave de Implementación

1. **Standalone Components** - Todos los componentes son standalone
2. **RouterLink** - Navegación eficiente sin recargas
3. **Directivas Estructurales** - *ngFor, *ngIf, etc.
4. **Data Binding** - Interpolación y property binding
5. **Component Communication** - @Input, @Output si es necesario
6. **SCSS Imports** - Variables compartidas entre componentes

---

Para más información, consulta `TUTORIAL_README.md`
