import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Liste de Pokémons';
  constructor(private router: Router) {}
  goToHomePage() {
    this.router.navigate(['/pokemons']);
  }
}
