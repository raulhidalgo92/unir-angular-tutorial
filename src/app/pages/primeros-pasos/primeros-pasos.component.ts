import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-primeros-pasos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './primeros-pasos.component.html',
  styleUrl: './primeros-pasos.component.scss'
})
export class PrimerosPatosComponent {
  helloWorldCode = `import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  template: '<h1>{{ message }}</h1>'
})
export class HelloComponent {
  message = 'Hola Mundo desde Angular';
}`;

  steps = [
    {
      title: '1. Crear un componente',
      description: 'En Angular, todo gira alrededor de componentes. Es la unidad básica de una aplicación Angular.'
    },
    {
      title: '2. Definir el template',
      description: 'El template HTML contiene la vista del componente con interpolación de datos y directivas.'
    },
    {
      title: '3. Añadir lógica TypeScript',
      description: 'La clase del componente contiene la lógica, propiedades y métodos de la aplicación.'
    },
    {
      title: '4. Inyectar en el módulo/app',
      description: 'Incluir el componente en las importaciones de la aplicación principal.'
    },
    {
      title: '5. Ver en el navegador',
      description: 'El componente se renderiza en el navegador cuando accedes a la ruta correspondiente.'
    }
  ];

  explanation = `Un componente "Hola Mundo" es la forma más simple de empezar con Angular.
  Consiste en una clase con un decorador @Component que define la lógica y una plantilla
  que muestra un mensaje en el navegador. Es el primer paso para entender cómo funcionan
  los componentes en Angular.`;
}
