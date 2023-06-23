import { Component } from '@angular/core';
import { Hero } from 'src/app/types/hero';
import { HeroService } from '../../services/hero/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent {
  heroes: Array<Hero> = [];

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  update() {
    this.heroService
      .getAll() // returns Observable
      .subscribe((heroes) => (this.heroes = heroes));
  }

  /* eslint-disable-next-line @typescript-eslint/no-empty-function */
  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.update();
  }
}
