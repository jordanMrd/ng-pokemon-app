import { Component } from '@angular/core';
import { POKEMONS } from './moke-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Liste de Pokémons';
}
