import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.scss'],
})
export class PokemonFormComponent implements OnInit {
  @Input() pokemon: Pokemon; //lorsqu'on va appeler app-pokemon-form, on doit passer un pokemon en parametre
  pokemonTypeList: string[];
  constructor(private pokemonService: PokemonService, private router: Router) {}

  ngOnInit(): void {
    this.pokemonTypeList = this.pokemonService.getPokemonTypeList();
  }
  hasType(type: string): boolean {
    return this.pokemon.types.includes(type);
  }

  selectType($event: Event, type: string) {
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;

    if (isChecked) {
      this.pokemon.types.push(type);
    } else {
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index, 1);
      //delete this.pokemon.types[index];
    }
  }

  onSubmit() {
    console.log('submit form');
    this.router.navigate(['/pokemon', this.pokemon.id]);
  }

  isTypesValid(type: string): boolean {
    if (
      (this.pokemon.types.length == 1 && this.hasType(type)) ||
      (this.pokemon.types.length > 2 && !this.hasType(type))
    ) {
      return false;
    }

    return true;
  }
}
