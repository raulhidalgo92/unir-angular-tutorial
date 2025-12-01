import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-instalacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './instalacion.component.html',
  styleUrl: './instalacion.component.scss'
})
export class InstalacionComponent {
  installationSteps = [
    {
      number: 1,
      title: 'Instalar Node.js y npm',
      description: 'Node.js es necesario para ejecutar npm y angular-cli. Descargar desde nodejs.org',
      versions: 'Node.js v20 LTS o superior, npm v10 o superior'
    },
    {
      number: 2,
      title: 'Instalar Angular CLI globalmente',
      description: 'Angular CLI es la herramienta oficial de línea de comandos para Angular',
      command: 'npm install -g @angular/cli'
    },
    {
      number: 3,
      title: 'Crear un nuevo proyecto Angular',
      description: 'Usar el comando ng new para crear una nueva aplicación',
      command: 'ng new nombre-proyecto'
    },
    {
      number: 4,
      title: 'Navegar al proyecto y ejecutarlo',
      description: 'Entrar en el directorio del proyecto e iniciar el servidor de desarrollo',
      command: 'cd nombre-proyecto && ng serve'
    }
  ];

  requirements = [
    'Node.js v20.0.0 o superior',
    'npm v10.0.0 o superior (incluido con Node.js)',
    'Angular CLI 21.x',
    'TypeScript 5.9 o superior (instalado automáticamente)',
    'Editor de código (VS Code recomendado)',
    '200MB de espacio en disco (aproximadamente)'
  ];

  environmentVars = [
    {
      name: 'NODE_PATH',
      description: 'Ruta al directorio de módulos de Node.js (opcional)'
    },
    {
      name: 'PATH',
      description: 'Debe incluir el directorio bin de Node.js'
    }
  ];
}
