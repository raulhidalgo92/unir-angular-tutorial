import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  author = {
    name: 'Raúl Hidalgo Calvo',
    title: 'Angular Tech Lead & Project Manager IT',
    experience: '10+ años en IT',
    institution: 'UNIR',
    linkedin: 'https://www.linkedin.com/in/ra%C3%BAl-hidalgo-calvo-5168b0122/',
    github: 'https://github.com/raulhidalgo92'
  };

  sections = [
    { label: 'Justificación', route: '/justificacion' },
    { label: 'Instalación', route: '/instalacion' },
    { label: 'Primeros pasos', route: '/primeros-pasos' },
    { label: 'Utilización', route: '/utilizacion' },
    { label: 'Funcionamiento', route: '/funcionamiento' },
    { label: 'Conclusiones', route: '/conclusiones' }
  ];
}
