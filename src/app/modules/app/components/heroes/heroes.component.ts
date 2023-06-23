import { Component } from '@angular/core';
import { Hero } from 'src/app/types/hero';
import { HeroService } from '../../services/hero/hero.service';
import { MessageService } from '../../services/message/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent {
  heroes: Array<Hero> = [];

  selectedHero?: Hero;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  update() {
    this.heroService
      .getAll() // returns Observable
      .subscribe((heroes) => (this.heroes = heroes));
  }

  ngOnInit(): void {
    this.update();
  }
}
