import { Component, OnInit } from '@angular/core';
import { DatosPokemonService } from '../../services/datos-pokemon.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  url;
  name;
  
  datosCompletos;
  poke;
  datos;
  imagenes=[];
  habilidades:any=[];

  constructor(private pokemones : DatosPokemonService) { }

  ngOnInit(): void {
    
    this.poke=this.pokemones.GetPokemon();

    /*this.datosCompletos=this.pokemones.GetDatosPoke(this.poke.url);
    console.log(this.datosCompletos);*/

    this.pokemones.GetDatosPoke(this.poke.url)
      .subscribe(data => {
        console.log(data);

        this.datos=data;
        //imagenes
        console.log(this.datos.sprites.back_default);
        this.imagenes.push(this.datos.sprites.back_default);
        this.imagenes.push(this.datos.sprites.back_shiny);
        this.imagenes.push(this.datos.sprites.front_default);
        this.imagenes.push(this.datos.sprites.front_shiny);
        //hablidades
        console.log(this.datos.abilities);
        this.habilidades=this.datos.abilities;
    })

    this.url=this.poke.url;
    this.name=this.poke.name;
    
  }

}
