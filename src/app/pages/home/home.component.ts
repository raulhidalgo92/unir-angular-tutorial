import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  sections = [
    {
      title: 'Justificación',
      description: 'Descubre por qué Angular es el framework perfecto para tus proyectos web.',
      route: '/justificacion',
      icon: '📋'
    },
    {
      title: 'Instalación',
      description: 'Guía paso a paso para instalar Angular y configurar tu entorno de desarrollo.',
      route: '/instalacion',
      icon: '📦'
    },
    {
      title: 'Primeros Pasos',
      description: 'Crea tu primer "Hola Mundo" y entiende lo básico de Angular.',
      route: '/primeros-pasos',
      icon: '✨'
    },
    {
      title: 'Utilización',
      description: 'Aprende cómo crear y ejecutar aplicaciones Angular profesionales.',
      route: '/utilizacion',
      icon: '🎨'
    },
    {
      title: 'Funcionamiento',
      description: 'Comprende la arquitectura interna de Angular y cómo funcionan sus componentes.',
      route: '/funcionamiento',
      icon: '⚡'
    },
    {
      title: 'Conclusiones',
      description: 'Resumen del tutorial y próximos pasos en tu aprendizaje de Angular.',
      route: '/conclusiones',
      icon: '🎓'
    }
  ];
}
