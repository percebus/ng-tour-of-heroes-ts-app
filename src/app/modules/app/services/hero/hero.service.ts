import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { MessageService } from '../message/message.service';
import { Hero } from 'src/app/types/hero';
import { heroes } from 'src/data/mock/heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getAll(): Observable<Array<Hero>> {
    this.messageService.add('HeroService: fetched heroes');
    return of(heroes);
  }
}
