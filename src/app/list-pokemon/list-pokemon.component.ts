import { Component } from '@angular/core';
import { POKEMONS } from '../moke-pokemon-list';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss'],
})
export class ListPokemonComponent {
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;
}
