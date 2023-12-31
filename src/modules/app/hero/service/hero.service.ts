import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Optional } from '../../types/nothing';
import { MessageService } from '../../message/service/message.service';
import { Hero } from '../types/hero';
import { HeroAPI } from '../types/hero-api';

@Injectable({
  providedIn: 'root',
})
export class HeroService implements HeroAPI {
  private URL = 'api/heroes'; // URL to web api
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    // FIXME
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.warn(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** POST: add a new hero to the server */
  post(hero: Hero): Observable<Hero> {
    return this.http //
      .post<Hero>(this.URL, hero, this.httpOptions) //
      .pipe(
        tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
        catchError(this.handleError<Hero>('post'))
      );
  }

  /** PUT: update the hero on the server */
  // FIXME
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  put(hero: Hero): Observable<any> {
    return this.http //
      .put(`${this.URL}/${hero.id}`, hero, this.httpOptions) //
      .pipe(
        tap(() => this.log(`updated hero id=${hero.id}`)),
        catchError(
          // FIXMEaa
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          this.handleError<any>('put')
        )
      );
  }

  /** DELETE: delete the hero from the server */
  delete(hero: Hero): Observable<Hero> {
    return this.http //
      .delete<Hero>(`${this.URL}/${hero.id}`, this.httpOptions) //
      .pipe(
        tap(() => this.log(`deleted hero id=${hero.id}`)),
        catchError(this.handleError<Hero>('deleteHero'))
      );
  }

  getById(id: number): Observable<Optional<Hero>> {
    return this.http //
      .get<Hero>(`${this.URL}/${id}`) //
      .pipe(
        tap(() => this.log(`fetched hero id=${id}`)),
        catchError(this.handleError<Hero>(`get id=${id}`))
      );
  }

  getAll(): Observable<Hero[]> {
    return this.http //
      .get<Hero[]>(this.URL) //
      .pipe(
        tap(() => this.log('fetched heroes')),
        catchError(this.handleError<Hero[]>('getAll', []))
      );
  }

  /* GET heroes whose name contains search term */
  get(hero: Hero): Observable<Hero[]> {
    const name = hero.name;

    // TODO build URL with more properties
    const url = `${this.URL}/?name=${name}`;
    return this.http //
      .get<Hero[]>(url) //
      .pipe(
        tap((heroes: Hero[]) => {
          return heroes.length //
            ? this.log(`found heroes matching "${name}"`)
            : this.log(`no heroes matching "${name}"`);
        }),
        catchError(this.handleError<Hero[]>('search', []))
      );
  }
}
