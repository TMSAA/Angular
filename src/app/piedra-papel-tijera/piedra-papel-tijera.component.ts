import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent {

  imagenes: string[] = ['/assets/images/piedra.jpg', '/assets/images/avion-papel.jpg', '/assets/images/tijera3.jpeg'];
  indiceActual: number = 0;
  vidasJugador: number = 5;
  vidasMaquina: number = 5;
  mostrarImagenes: boolean = false;
  imagenFija: number | null = null;
  intervalo: any;
  rotacionEnCurso: boolean = false;

  repetir(cantidad: number): any[] {
    return Array(cantidad).fill(0);
  }

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  cambiarImagen(): void {
    if (this.imagenFija !== null) {
      return;
    }
    this.indiceActual = (this.indiceActual + 1) % this.imagenes.length;
  }

  iniciarRotacion(): void {
    this.intervalo = setInterval(() => {
      this.cambiarImagen();
    }, 400);
  }

  iniciarRotacionEnCentro(boton: string): void {
    if (this.rotacionEnCurso) {
      return; // Evita iniciar otra rotación si ya está en curso
    }
    this.rotacionEnCurso = true; 
    this.mostrarImagenes = true;

    const contenedorImagen = this.el.nativeElement.querySelector('#contenedor-imagen');
    

    this.iniciarRotacion();

    setTimeout(() => {
      clearInterval(this.intervalo);

      let randomIndex = Math.floor(Math.random() * this.imagenes.length);
      while (randomIndex === this.indiceActual) {
        randomIndex = Math.floor(Math.random() * this.imagenes.length);
      }
      this.indiceActual = randomIndex;
      this.imagenFija = randomIndex;

      setTimeout(() => {
        this.imagenFija = null;

        // Determina la elección aleatoria de la máquina y compara con la elección del jugador
        const maquina = this.indiceActual + 1;
        const jugador = parseInt(boton.substr(boton.length - 1), 10); // Extrae el número del botón seleccionado

        this.juego(jugador, maquina);
      }, 1000);
      this.rotacionEnCurso = false;
    }, 4000);
  }

  juego(jugador: number, maquina: number): void {

    if (jugador === maquina) {
    } else {
        switch (true) {
            case jugador === 1 && maquina === 3:
            case jugador === 2 && maquina === 1:
            case jugador === 3 && maquina === 2:
                this.vidasMaquina--;
                break;

            case jugador === 1 && maquina === 2:
            case jugador === 2 && maquina === 3:
            case jugador === 3 && maquina === 1:
                this.vidasJugador--;
                break;
        }
    }

    if (this.vidasJugador === 0) {
        this.mostrarResultado("¡La máquina ha ganado!");
    } else if (this.vidasMaquina === 0) {
        this.mostrarResultado("¡Has ganado!");
    }
}

mostrarResultado(resultado: string): void {
    alert(resultado);
    this.reiniciarJuego();
}

reiniciarJuego(): void {
    this.vidasJugador = 5;
    this.vidasMaquina = 5;
    this.mostrarImagenes = false;
    this.imagenFija = null;
}

}
