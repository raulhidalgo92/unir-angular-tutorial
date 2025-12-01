import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { JustificacionComponent } from './pages/justificacion/justificacion.component';
import { InstalacionComponent } from './pages/instalacion/instalacion.component';
import { PrimerosPatosComponent } from './pages/primeros-pasos/primeros-pasos.component';
import { UtilizacionComponent } from './pages/utilizacion/utilizacion.component';
import { FuncionamientoComponent } from './pages/funcionamiento/funcionamiento.component';
import { ConclusionesComponent } from './pages/conclusiones/conclusiones.component';

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: HomeComponent },
  { path: 'justificacion', component: JustificacionComponent },
  { path: 'instalacion', component: InstalacionComponent },
  { path: 'primeros-pasos', component: PrimerosPatosComponent },
  { path: 'utilizacion', component: UtilizacionComponent },
  { path: 'funcionamiento', component: FuncionamientoComponent },
  { path: 'conclusiones', component: ConclusionesComponent },
  { path: '**', redirectTo: '/inicio' }
];
