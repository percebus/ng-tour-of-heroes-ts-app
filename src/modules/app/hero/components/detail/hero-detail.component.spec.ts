import { ActivatedRoute, Router } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Hero } from '../../types/hero';
import { HeroAPI } from '../../types/hero-api';
import { HeroService } from '../../service/hero.service';
import { MockHeroService } from '../../../hero-mock/services/mock/hero.mock-service';
import { HeroDetailComponent } from './hero-detail.component';

describe('HeroDetailComponent', () => {
  let oHeroDetailComponent: HeroDetailComponent;
  let oComponentFixture: ComponentFixture<HeroDetailComponent>;
  let oRouter: Router;
  let oActivatedRoute: ActivatedRoute;
  let heroService: HeroAPI;
  const mockHeroService = new MockHeroService();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      declarations: [HeroDetailComponent],
      providers: [{ provider: HeroService, useValue: mockHeroService }], // FIXME
    }).compileComponents();

    oRouter = TestBed.inject(Router);
    oActivatedRoute = TestBed.inject(ActivatedRoute);

    oComponentFixture = TestBed.createComponent(HeroDetailComponent);
    oHeroDetailComponent = oComponentFixture.componentInstance;
    heroService = oComponentFixture.debugElement.injector.get(HeroService);
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

    describe('HeroService', () => {
      // FIXME
      xit('is instanceof MockHeroService', () => {
        expect(heroService).not.toBeInstanceOf(HeroService);
        expect(heroService).toBeInstanceOf(MockHeroService);
      });
    });
  });

  // FIXME
  // Mock route & service
  xdescribe('HTML', () => {
    let renderedHTML: HTMLElement;

    describe('hero.id 42', () => {
      // beforeEach(() => {});

      describe('Details', () => {
        it('gets rendered', () => {
          const testHero: Hero = { id: 42, name: 'Test' };
          jest
            .spyOn(oActivatedRoute.snapshot.paramMap, 'get')
            .mockReturnValueOnce(testHero.id.toString());

          oHeroDetailComponent.hero = testHero;
          oComponentFixture.detectChanges();
          renderedHTML = oComponentFixture.nativeElement;
          const header = renderedHTML.querySelector('.hero-detail');
          expect(header?.textContent).toContain('Details');
        });
      });
    });
  });
});
