import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from '../../../../types/hero';
import { HeroService } from '../../services/hero/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  update(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService
      .get(id) // Observable<Hero>
      .subscribe((hero) => (this.hero = hero));
  }

  ngOnInit(): void {
    this.update();
  }

  goBack(): void {
    this.location.back();
  }
}
