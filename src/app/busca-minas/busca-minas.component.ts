import { Component } from '@angular/core';

@Component({
  selector: 'app-busca-minas',
  templateUrl: './busca-minas.component.html',
  styleUrls: ['./busca-minas.component.css']
})
export class BuscaMinasComponent {
  tablero: any[][] = [];
  minas: Set<string> = new Set<string>(); // Almacena las posiciones de las minas
  casillasReveladas: Set<string> = new Set<string>(); // Almacena las posiciones de las casillas ya reveladas

  constructor() {
    this.inicializarTablero();
    this.generarMinas();
    this.calcularMinasCercanas();
  }

  inicializarTablero() {
    for (let i = 0; i < 8; i++) {
      this.tablero[i] = [];
      for (let j = 0; j < 8; j++) {
        this.tablero[i][j] = { tieneMina: false, minasCercanas: 0, revelada: false };
      }
    }
  }

  generarMinas() {
    // Generar 10 minas aleatorias
    let minasGeneradas = 0;
    while (minasGeneradas < 10) {
      const fila = Math.floor(Math.random() * 8);
      const columna = Math.floor(Math.random() * 8);
      if (!this.tablero[fila][columna].tieneMina) {
        this.tablero[fila][columna].tieneMina = true;
        this.minas.add(`${fila}-${columna}`);
        minasGeneradas++;
      }
    }
  }

  calcularMinasCercanas() {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (!this.tablero[i][j].tieneMina) {
          this.tablero[i][j].minasCercanas = this.contarMinasCercanas(i, j);
        }
      }
    }
  }

  contarMinasCercanas(fila: number, columna: number): number {
    let minasCercanas = 0;
    for (let i = fila - 1; i <= fila + 1; i++) {
      for (let j = columna - 1; j <= columna + 1; j++) {
        if (i >= 0 && i < 8 && j >= 0 && j < 8 && !(i === fila && j === columna)) {
          if (this.tablero[i][j].tieneMina) {
            minasCercanas++;
          }
        }
      }
    }
    return minasCercanas;
  }

  onCasillaClic(fila: number, columna: number) {
    const casilla = this.tablero[fila][columna];
    if (!casilla.revelada) {
      casilla.revelada = true;
      if (casilla.tieneMina) {
        // Game over, mostrar todas las minas
        this.minas.forEach(posicion => {
          const [fila, columna] = posicion.split('-').map(Number);
          this.tablero[fila][columna].revelada = true;
        });
      } else {
        // Descubrir casillas adyacentes si no hay mina
        this.descubrirCasillasAdyacentes(fila, columna);
      }
    }
  }

  descubrirCasillasAdyacentes(fila: number, columna: number) {
    const deltas = [-1, 0, 1];
    for (const dx of deltas) {
      for (const dy of deltas) {
        const nx = fila + dx;
        const ny = columna + dy;
        if (this.esCasillaValida(nx, ny) && !this.tablero[nx][ny].tieneMina && !this.tablero[nx][ny].revelada) {
          this.tablero[nx][ny].revelada = true;
          if (this.tablero[nx][ny].minasCercanas === 0) {
            this.descubrirCasillasAdyacentes(nx, ny);
          }
        }
      }
    }
  }
  
  esCasillaValida(fila: number, columna: number): boolean {
    return fila >= 0 && fila < 8 && columna >= 0 && columna < 8;
  }
  
}
