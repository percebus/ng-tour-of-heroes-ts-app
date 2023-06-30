import { Component, OnInit } from '@angular/core';
import { Hero } from '../../types/hero';
import { HeroService } from '../../service/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  refresh(): void {
    this.heroService
      .getAll() // Observable< Hero[] >
      .subscribe((heroes) => (this.heroes = heroes.slice(1, 5)));
  }

  ngOnInit(): void {
    this.refresh();
  }
}
