import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Hero } from 'src/app/types/hero';
import { heroes } from 'src/data/mock/heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  getAll(): Observable<Array<Hero>> {
    return of(heroes);
  }
}
