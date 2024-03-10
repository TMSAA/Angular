import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-casilla',
  templateUrl: './casilla.component.html',
  styleUrls: ['./casilla.component.css']
})
export class CasillaComponent {
  @Input() tieneMina: boolean = false;
  @Input() minasCercanas: number = 0;
  @Output() clicCasilla: EventEmitter<void> = new EventEmitter<void>();

  onCasillaClick() {
    if (!this.tieneMina) {
      this.clicCasilla.emit(); // Emitir evento de clic si no hay mina
    }
  }
}
