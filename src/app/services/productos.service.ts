import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class ProductosService {

  productos:any= {};
  cargando:boolean = true;

  constructor( private http:Http ) {

    this.cargar_productos();
   }

  public cargar_productos(){
    this.cargando= true;

    this.http.get('https://portafolio-5c49f.firebaseio.com/productos_idx.json')
    .subscribe( res =>{

    setTimeout( ()=>{
      this.cargando = false;
      this.productos = res.json();
    },1500)

    })


  }

}
