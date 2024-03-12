import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { PiedraPapelTijeraComponent } from './piedra-papel-tijera/piedra-papel-tijera.component';
import { TresEnRayaComponent } from './tres-en-raya/tres-en-raya.component'; 
import { BuscaMinasComponent } from './busca-minas/busca-minas.component';

const routes: Routes = [
  { path: 'buscaminas', component: BuscaMinasComponent },
  { path: 'tres-en-raya', component: TresEnRayaComponent }, 
  { path: 'piedra-papel-tijera', component: PiedraPapelTijeraComponent }, 
  { path: '', redirectTo: '/piedra-papel-tijera', pathMatch: 'full' },
  { path: '**', redirectTo: '/piedra-papel-tijera' },
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
