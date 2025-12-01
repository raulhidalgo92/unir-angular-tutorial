import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-conclusiones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './conclusiones.component.html',
  styleUrl: './conclusiones.component.scss'
})
export class ConclusionesComponent {
  objectives = [
    'Entender la estructura y propósito de Angular como framework',
    'Conocer los pasos necesarios para instalar Angular en tu entorno',
    'Crear tu primer componente "Hola Mundo"',
    'Aprender a ejecutar y visualizar aplicaciones Angular',
    'Comprender la arquitectura de componentes y servicios',
    'Dominar los mecanismos de vinculación de datos (data binding)'
  ];

  keyTakeaways = [
    {
      title: 'Angular es modular',
      description: 'Todo se organiza en componentes reutilizables que facilitan el mantenimiento y escalabilidad'
    },
    {
      title: 'TypeScript es fundamental',
      description: 'El tipado estático permite detectar errores tempranamente y mejorar la calidad del código'
    },
    {
      title: 'La reactividad es clave',
      description: 'RxJS y el data binding permiten crear interfaces dinámicas y responsivas'
    },
    {
      title: 'La comunidad es activa',
      description: 'Amplio ecosistema de librerías y herramientas que extienden las capacidades de Angular'
    },
    {
      title: 'Curva de aprendizaje',
      description: 'Aunque requiere conocimientos previos, Angular ofrece un framework robusto y profesional'
    },
    {
      title: 'Herramientas potentes',
      description: 'Angular CLI y DevTools facilitan el desarrollo, testing y deployment de aplicaciones'
    }
  ];

  nextSteps = [
    'Explorar la documentación oficial de Angular',
    'Crear tu primer proyecto completo',
    'Aprender sobre servicios e inyección de dependencias',
    'Dominar el enrutamiento y la navegación',
    'Estudiar formularios reactivos',
    'Investigar HTTP client para integración con APIs',
    'Practicar testing con Jasmine/Karma',
    'Explorar PWA y optimización de rendimiento'
  ];
}
