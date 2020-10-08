import { Component, OnInit, ViewChild } from '@angular/core';
import { DatosPokemonService } from '../../services/datos-pokemon.service';
import { Router } from '@angular/router';

import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  previous: string;
  next : string;
  results = [];
  count: number

  displayedColumns: string[] = ['name','url','detalle'];
  dataSource; //= new MatTableDataSource<any>(this.results);
  @ViewChild(MatPaginator) paginator: MatPaginator;



  constructor(private pokemones: DatosPokemonService, private router : Router) { 
    this.dataSource = new MatTableDataSource<any>(this.results);
  }

  ngOnInit(): void {
    
    this.pokemones.getPokemones()
      .subscribe((data: Pokemon) => {
        console.log(data);
        this.previous=data.previous;
        this.next=data.next
        this.results=data.results
        this.count=data.count;
        this.dataSource = new MatTableDataSource<any>(this.results);
    })
    
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  VerDetalle(pokemon)
  {
    this.SetearPoke(pokemon);

    this.router.navigate(['detalle/'],{ queryParams: {pais: pokemon.name}})
      .then(data => {
        console.log(data);
      })
      .catch(e =>{
        console.log(e);
      })
  }

  SetearPoke(poke)
  {
    this.pokemones.SetPokemon(poke);
  }

}

interface Pokemon {
  next: string;
  previous : string;
  count: number;
  results: Array<any>;
}

/*const ELEMENT_DATA: Pokemon[] = [
  {name: 'Hydrogen'},
];*/
