import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HeroDetailComponent } from './hero-detail.component';

describe('HeroDetailComponent', () => {
  let oHeroDetailComponent: HeroDetailComponent;
  let oComponentFixture: ComponentFixture<HeroDetailComponent>;
  let oRouter: Router;
  let oActivatedRoute: ActivatedRoute;
  let oHttpClient: HttpClient;
  let renderedHTML: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      declarations: [HeroDetailComponent],
    }).compileComponents();

    oRouter = TestBed.inject(Router);
    oActivatedRoute = TestBed.inject(ActivatedRoute);

    oHttpClient = TestBed.inject(HttpClient);

    oComponentFixture = TestBed.createComponent(HeroDetailComponent);
    oHeroDetailComponent = oComponentFixture.componentInstance;
    oComponentFixture.detectChanges();
    renderedHTML = oComponentFixture.nativeElement;
  });

  it('is instanceof HeroDetailComponent', () => {
    expect(oHeroDetailComponent).toBeInstanceOf(HeroDetailComponent);
  });

  describe('Dependency Injection', () => {
    describe('Router', () => {
      it('is instanceof Router', () => {
        expect(oRouter).toBeInstanceOf(Router);
      });
    });

    describe('ActivatedRoute', () => {
      it('is instanceof ActivatedRoute', () => {
        expect(oActivatedRoute).toBeInstanceOf(ActivatedRoute);
      });
    });

    describe('HttpClient', () => {
      it('is instanceof HttpClient', () => {
        expect(oHttpClient).toBeInstanceOf(HttpClient);
      });
    });
  });

  // FIXME
  // Mock route & service
  xdescribe('rendering', () => {
    describe('when hero is not defined', () => {
      describe('Details', () => {
        it('gets rendered', () => {
          const header =
            renderedHTML.querySelector('.hero-detail h2')?.textContent;
          expect(header).toContain('Details');
        });
      });
    });
  });
});
