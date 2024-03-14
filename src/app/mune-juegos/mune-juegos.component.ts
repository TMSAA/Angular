import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mune-juegos',
  templateUrl: './mune-juegos.component.html',
  styleUrls: ['./mune-juegos.component.css']
})
export class MuneJuegosComponent implements OnInit{

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  irAPiedra() {
    this.router.navigate(['/piedra-papel-tijera']); 
  }

  irATres() {
    this.router.navigate(['/tres-en-raya']); 
  }

  irABusca() {
    this.router.navigate(['/buscaminas']); 
  }
}
