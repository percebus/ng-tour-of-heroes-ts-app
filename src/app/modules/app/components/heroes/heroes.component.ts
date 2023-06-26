import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/types/hero';
import { HeroService } from '../../services/hero/hero.service';
import { MessageService } from '../../services/message/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes: Array<Hero> = [];

  selectedHero?: Hero;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  // XXX DEPRECATED dead code
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  // }

  update(): void {
    this.heroService
      .getAll() // returns Observable
      .subscribe((heroes) => (this.heroes = heroes));

    console.info('HeroesComponent: update()');
  }

  ngOnInit(): void {
    this.update();
    console.info('HeroesComponent: OnInit()');
  }
}
