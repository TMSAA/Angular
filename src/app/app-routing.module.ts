import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { PiedraPapelTijeraComponent } from './piedra-papel-tijera/piedra-papel-tijera.component';
import { TresEnRayaComponent } from './tres-en-raya/tres-en-raya.component'; 

const routes: Routes = [
  { path: 'tres-en-raya', component: TresEnRayaComponent }, // Define la ruta para el componente TresEnRayaComponent
  { path: 'piedra-papel-tijera', component: PiedraPapelTijeraComponent }, // Define la ruta para el componente PiedraPapelTijeraComponent
  { path: '', redirectTo: '/piedra-papel-tijera', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  titel = 'PrimerProyectov15'

  constructor(private router: Router){

  }

  cambiarRuta(){
   
  }
 }
