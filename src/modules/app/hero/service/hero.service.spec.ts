import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HeroService } from './hero.service';

describe('HeroService', () => {
  let oHeroService: HeroService;
  let oHttpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HeroService],
    });

    oHttpClient = TestBed.inject(HttpClient);
    oHeroService = TestBed.inject(HeroService);
  });

  it('is instanceof HeroService', () => {
    expect(oHeroService).toBeInstanceOf(HeroService);
  });

  describe('Dependency Injection', () => {
    describe('HttpClient', () => {
      it('is instanceof HttpClient', () => {
        expect(oHttpClient).toBeInstanceOf(HttpClient);
      });
    });
  });
});
