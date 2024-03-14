import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PiedraPapelTijeraComponent } from './piedra-papel-tijera/piedra-papel-tijera.component';
import { TresEnRayaComponent } from './tres-en-raya/tres-en-raya.component';
import { BuscaMinasComponent } from './busca-minas/busca-minas.component';
import { MenuComponent } from './menu/menu.component';
import { MuneJuegosComponent } from './mune-juegos/mune-juegos.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { ExplicacionesComponent } from './explicaciones/explicaciones.component';

const routes: Routes = [
  { path: 'buscaminas', component: BuscaMinasComponent },
  { path: 'tres-en-raya', component: TresEnRayaComponent },
  { path: 'piedra-papel-tijera', component: PiedraPapelTijeraComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'juegos', component: MuneJuegosComponent},
  { path: 'curriculum',component: CurriculumComponent},
  { path: 'explicaciones', component: ExplicacionesComponent},
  { path: '', redirectTo: '/menu', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/menu' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
