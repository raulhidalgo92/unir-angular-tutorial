import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-funcionamiento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './funcionamiento.component.html',
  styleUrl: './funcionamiento.component.scss'
})
export class FuncionamientoComponent {
  arquitecturaItems = [
    {
      title: 'Componentes',
      description: 'Unidades reutilizables que encapsulan HTML, CSS y lógica TypeScript. Cada componente es responsable de una parte de la interfaz.',
      example: '@Component({ selector: "app-nombre", ... })'
    },
    {
      title: 'Directivas',
      description: 'Instrucciones que modifican el comportamiento o la apariencia de elementos del DOM. Las más comunes son *ngIf, *ngFor, [ngClass].',
      example: '<div *ngIf="mostrar">Contenido</div>'
    },
    {
      title: 'Servicios',
      description: 'Clases que contienen lógica compartida entre componentes. Se inyectan donde se necesitan mediante inyección de dependencias.',
      example: '@Injectable({ providedIn: "root" })'
    },
    {
      title: 'Rutas',
      description: 'Sistema de enrutamiento que permite navegar entre diferentes componentes sin recargar la página.',
      example: 'const routes: Routes = [{ path: "inicio", component: InicioComponent }]'
    }
  ];

  fileTypes = [
    { ext: '.ts', name: 'TypeScript', description: 'Lógica del componente y clases', color: '#3178c6' },
    { ext: '.html', name: 'Template', description: 'Estructura HTML del componente', color: '#e34c26' },
    { ext: '.scss', name: 'Estilos', description: 'Estilos CSS del componente', color: '#c6538c' },
    { ext: '.spec.ts', name: 'Testing', description: 'Pruebas unitarias del componente', color: '#f7df1e' }
  ];

  referencingMethods = [
    {
      method: 'Interpolación',
      syntax: '{{ variableDelComponente }}',
      use: 'Mostrar valores dinámicos en el template'
    },
    {
      method: 'Property Binding',
      syntax: '[propiedad]="valor"',
      use: 'Vincular propiedades HTML a variables TypeScript'
    },
    {
      method: 'Event Binding',
      syntax: '(evento)="metodo()"',
      use: 'Responder a eventos del usuario'
    },
    {
      method: 'Two-Way Binding',
      syntax: '[(ngModel)]="variable"',
      use: 'Sincronizar datos bidireccionales entre template y componente'
    },
    {
      method: 'Selector de componente',
      syntax: '<app-nombre></app-nombre>',
      use: 'Incrustar componentes dentro de otros componentes'
    }
  ];
}
