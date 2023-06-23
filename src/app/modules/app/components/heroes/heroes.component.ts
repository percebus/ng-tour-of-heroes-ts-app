import { Component } from '@angular/core';
import { Hero } from 'src/app/types/hero';
import { heroes } from 'src/data/mock/heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent {
  heroes: Array<Hero> = heroes;

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
