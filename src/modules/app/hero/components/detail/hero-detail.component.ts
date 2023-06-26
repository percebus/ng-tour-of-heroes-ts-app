import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from '../../types/hero';
import { HeroService } from '../../service/hero.service';

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

  refresh(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService
      .getById(id) // Observable<Hero>
      .subscribe((hero) => (this.hero = hero));
  }

  ngOnInit(): void {
    this.refresh();
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.hero) {
      this.heroService.put(this.hero).subscribe(() => this.goBack());
    }
  }
}
