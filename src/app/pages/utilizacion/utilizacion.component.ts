import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-utilizacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './utilizacion.component.html',
  styleUrl: './utilizacion.component.scss'
})
export class UtilizacionComponent {
  creationMethods = [
    {
      title: 'Usar Angular CLI (Recomendado)',
      command: 'ng generate component nombre-componente',
      description: 'La forma más rápida y con mejores prácticas'
    },
    {
      title: 'Crear carpeta y archivos manualmente',
      command: 'Crear carpeta y archivos .ts, .html, .scss',
      description: 'Máximo control sobre la estructura'
    }
  ];

  appStructure = [
    { name: 'src/', description: 'Carpeta raíz de código fuente' },
    { name: 'src/app/', description: 'Componentes y servicios de la app' },
    { name: 'src/app/components/', description: 'Componentes reutilizables' },
    { name: 'src/app/pages/', description: 'Componentes de página (rutas)' },
    { name: 'src/app/services/', description: 'Servicios (lógica compartida)' },
    { name: 'src/styles/', description: 'Estilos globales' },
    { name: 'angular.json', description: 'Configuración de Angular CLI' }
  ];

  developmentSteps = [
    {
      title: 'Iniciar servidor de desarrollo',
      command: 'ng serve',
      result: 'La app está disponible en http://localhost:4200'
    },
    {
      title: 'Editar archivos',
      command: 'Modificar .ts, .html, .scss',
      result: 'Los cambios se reflejan automáticamente en el navegador'
    },
    {
      title: 'Abrir el navegador',
      command: 'Ir a http://localhost:4200',
      result: 'Ver la aplicación en ejecución'
    },
    {
      title: 'Inspeccionar con DevTools',
      command: 'F12 en el navegador',
      result: 'Acceder a herramientas de desarrollo para debugging'
    }
  ];
}
