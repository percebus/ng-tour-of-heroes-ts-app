import { Component } from '@angular/core';
import { Hero } from 'src/app/types/hero';

const windstormHero: Hero = {
  id: 1,
  name: 'Windstorm'
};

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent {
  hero: Hero = windstormHero;
}
