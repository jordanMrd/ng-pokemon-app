import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ng-pokemon-app';
  pokemonList = ['Bulbizarre', 'Salamèche', 'Caracpuce'];

  ngOnInit(): void {
    console.table(this.pokemonList);
  }
}
