import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SemaforoComponent } from './semaforo/semaforo.component';
import { ListaComponent } from './lista/lista.component';
import { PiedraPapelTijeraComponent } from './piedra-papel-tijera/piedra-papel-tijera.component';
import { ListaTarjetaComponent } from './lista-tarjeta/lista-tarjeta.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { TresEnRayaComponent } from './tres-en-raya/tres-en-raya.component';
import { CasillaComponent } from './casilla/casilla.component';
import { BuscaMinasComponent } from './busca-minas/busca-minas.component';
import { MenuComponent } from './menu/menu.component';
import { MuneJuegosComponent } from './mune-juegos/mune-juegos.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { ExplicacionesComponent } from './explicaciones/explicaciones.component';



@NgModule({
  declarations: [
    AppComponent,
    SemaforoComponent,
    ListaComponent,
    PiedraPapelTijeraComponent,
    ListaTarjetaComponent,
    TresEnRayaComponent,
    CasillaComponent,
    BuscaMinasComponent,
    MenuComponent,
    MuneJuegosComponent,
    CurriculumComponent,
    ExplicacionesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
