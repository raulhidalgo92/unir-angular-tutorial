import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-justificacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './justificacion.component.html',
  styleUrl: './justificacion.component.scss'
})
export class JustificacionComponent {
  justificationPoints = [
    {
      title: '¿Para qué sirve Angular?',
      description: 'Angular es un framework de desarrollo web que facilita la creación de aplicaciones web modernas, dinámicas y de una sola página (SPA). Permite construir interfaces de usuario reactivas y escalables con TypeScript.'
    },
    {
      title: '¿Qué aplicaciones tiene?',
      description: 'Se utiliza para crear dashboards, aplicaciones empresariales, portales web, sistemas de gestión, plataformas colaborativas, aplicaciones progresivas (PWA) y cualquier aplicación web que requiera interactividad y rendimiento.'
    },
    {
      title: '¿Sobre qué lenguajes se apoya?',
      description: 'Angular se construye sobre TypeScript (un superset de JavaScript), HTML5 para las vistas y CSS3 para los estilos. Utiliza RxJS para programación reactiva y gestión de estado.'
    },
    {
      title: '¿Qué prerrequisitos necesita?',
      description: 'Conocimientos de JavaScript ES6+, TypeScript, HTML5 y CSS3. Comprensión básica de conceptos como componentes, directivas, servicios y programación reactiva. Node.js y npm instalados en el sistema.'
    },
    {
      title: '¿Por qué elegir Angular frente a otros frameworks?',
      description: 'Angular ofrece una solución completa y robusta con estructura definida, soporte oficial de Google, ecosistema maduro, herramientas CLI potentes, TypeScript integrado de serie y arquitectura escalable que facilita el mantenimiento en proyectos grandes.'
    },
    {
      title: '¿Qué empresas utilizan Angular?',
      description: 'Empresas líderes como Google, Microsoft, Forbes, BMW, Samsung, IBM, PayPal y HBO utilizan Angular en producción. Su adopción empresarial demuestra su capacidad para manejar aplicaciones a gran escala con millones de usuarios.'
    }
  ];
}
