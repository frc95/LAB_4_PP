import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class DatosPokemonService {

  pokemon;

  constructor(private http: HttpService) { }


  getPokemones(url = "https://pokeapi.co/api/v2/pokemon/")
  {
    return this.http.get(url);
  }
  SetPokemon(pokemon)
  {
    this.pokemon=pokemon;
  }
  GetPokemon()
  {
    return this.pokemon;
  }
  GetDatosPoke(url)
  {
    return this.http.get(url);
  }


}
