import { Observable } from 'rxjs';
import { Optional } from '../../types/nothing';
import { Hero } from './hero';

export interface HeroAPI {
  post(hero: Hero): Observable<Hero>;
  put(hero: Hero): Observable<any>; // FIXME
  delete(hero: Hero): Observable<Hero>;
  getById(id: number): Observable<Optional<Hero>>;
  getAll(): Observable<Hero[]>;
}
