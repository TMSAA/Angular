import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit{

  listaDeNombre:String[] = [];
  personajes:Personaje[] = [
    new Personaje("/assets/images/11.png","Pedro","",24),
    new Personaje("/assets/images/19.png","Jaime","",0),
    new Personaje("/assets/images/12.png","Natalia","",0),
    new Personaje("/assets/images/27.png","Ruben","",0),
    new Personaje("/assets/images/33.png","Fernando","",0),
    
  ];
  imagen1:string = "/assets/images/11.png";

  ngOnInit(): void {
    this.listaDeNombre = ["Pedro", "Jaime", "Natalia", "Rosa", "Mar"];
  }

  
}

class Personaje{
  _nombre:string;
  _imagen:string ;
  _descripcion:string;
  _edad:number;
  constructor(n : string, i : string, d : string, e: number){
    this._nombre= n;
    this._imagen =i;
    this._descripcion = d;
    this._edad = e; 
  }
  get nombre(): string {
    return this._nombre;
  }

  set nombre(value: string) {
    this._nombre = value;
  }

  // Getter y Setter para imagen
  get imagen(): string {
    return this._imagen;
  }

  set imagen(value: string) {
    this._imagen = value;
  }

  // Getter y Setter para descripcion
  get descripcion(): string {
    return this._descripcion;
  }

  set descripcion(value: string) {
    this._descripcion = value;
  }

  // Getter y Setter para edad
  get edad(): number {
    return this._edad;
  }

  set edad(value: number) {
    this._edad = value;
  }
}
