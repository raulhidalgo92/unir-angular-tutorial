import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  navItems = [
    { label: 'Justificación', route: '/justificacion' },
    { label: 'Instalación', route: '/instalacion' },
    { label: 'Primeros pasos', route: '/primeros-pasos' },
    { label: 'Utilización', route: '/utilizacion' },
    { label: 'Funcionamiento', route: '/funcionamiento' },
    { label: 'Conclusiones', route: '/conclusiones' }
  ];
}
