import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-casilla',
  templateUrl: './casilla.component.html',
  styleUrls: ['./casilla.component.css']
})
export class CasillaComponent {
  @Input() tieneMina: boolean = false;
  @Input() minasCercanas: number = 0;
  @Input() revelada: boolean = false;
  @Input() disabled: boolean = false;
  gameOver: boolean = false;
  @Output() clicCasilla: EventEmitter<void> = new EventEmitter<void>();

  onCasillaClick() {
    this.clicCasilla.emit();
  }
}
