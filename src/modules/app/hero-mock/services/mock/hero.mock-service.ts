import { Observable, of } from 'rxjs';
import { Optional } from '../../../types/nothing';
import { Hero } from '../../../hero/types/hero';
import { HeroAPI } from '../../../hero/types/hero-api';
import { heroes } from '../../data/heroes';

export class MockHeroService implements HeroAPI {
  post(hero: Hero): Observable<Hero> {
    heroes.push(hero);
    return of(hero);
  }

  put(hero: Hero): Observable<any> {
    const index = heroes.findIndex((oHero) => oHero.id === hero.id);
    heroes[index] = hero;
    return of(hero);
  }

  delete(hero: Hero): Observable<Hero> {
    const index = heroes.findIndex((oHero) => oHero.id === hero.id);
    heroes.splice(index, 1);
    return of(hero);
  }

  getById(id: number): Observable<Optional<Hero>> {
    const oHero: Optional<Hero> = heroes.find((hero) => hero.id === id);
    return of(oHero);
  }

  getAll(): Observable<Hero[]> {
    return of(heroes);
  }
}
