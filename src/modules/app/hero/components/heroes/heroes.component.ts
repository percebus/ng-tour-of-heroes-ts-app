import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Hero } from '../../types/hero';
import { HeroService } from '../../service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  // TODO? Move to HeroService ?
  heroes: Array<Hero> = [];

  constructor(
    // private messageService: MessageService // TODO? or XXX?
    private heroService: HeroService,
    private location: Location
  ) {}

  refresh(): void {
    console.info('HeroesComponent: refresh()');
    this.heroService
      .getAll() // returns Observable< Hero[] >
      .subscribe((heroes) => (this.heroes = heroes));
  }

  ngOnInit(): void {
    console.info('HeroesComponent: OnInit()');
    this.refresh();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      // TODO? throw?
      return;
    }

    this.heroService
      .post({ name } as Hero) //
      .subscribe(this.heroes.push);
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter((oHero) => oHero !== hero);
    this.heroService //
      .delete(hero) //
      .subscribe();
  }
}
