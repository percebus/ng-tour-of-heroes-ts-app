import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HeroAPI } from '../../types/hero-api';
import { MockHeroService } from '../../../hero-mock/services/mock/hero.mock-service';
import { HeroSearchComponent } from '../search/hero-search.component';
import { DashboardComponent } from './dashboard.component';
import { HeroService } from '../../service/hero.service';

describe('DashboardComponent', () => {
  let oDashboardComponent: DashboardComponent;
  let oComponentFixture: ComponentFixture<DashboardComponent>;
  let mockHeroService: HeroAPI;
  let refresh: jest.SpyInstance;

  describe('using MockHeroService', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        declarations: [DashboardComponent, HeroSearchComponent],
      })
        .overrideComponent(DashboardComponent, {
          set: {
            providers: [{ provide: HeroService, useClass: MockHeroService }],
          },
        })
        .compileComponents();

      oComponentFixture = TestBed.createComponent(DashboardComponent);
      mockHeroService =
        oComponentFixture.debugElement.injector.get(HeroService);

      oDashboardComponent = oComponentFixture.componentInstance;
      refresh = jest.spyOn(oDashboardComponent, 'refresh');

      oComponentFixture.detectChanges();
    });

    it('is instanceof DashboardComponent', () => {
      expect(oDashboardComponent).toBeInstanceOf(DashboardComponent);
    });

    describe('Dependency Injection', () => {
      describe('HeroService', () => {
        it('is instanceof MockHeroService', () => {
          expect(mockHeroService).not.toBeInstanceOf(HeroService);
          expect(mockHeroService).toBeInstanceOf(MockHeroService);
        });
      });
    });

    describe('.refresh()', () => {
      it('got invoked OnInit', () => {
        expect(refresh).toHaveBeenCalled();
      });
    });

    describe('HTML', () => {
      describe('heading', () => {
        it('renders "Top Heroes"', () => {
          const oHTMLElement = oComponentFixture.nativeElement //
            .querySelector('.heroes-dashboard');

          expect(oHTMLElement.textContent).toContain('Top Heroes');
        });
      });

      describe('links', () => {
        let oHTMLElement: HTMLElement;
        beforeEach(() => {
          oHTMLElement =
            oComponentFixture.nativeElement.querySelector('.heroes-menu');
        });

        it('contains 4 heroes', () => {
          expect(oHTMLElement.children.length).toEqual(4);
        });

        it('contains "Bombasto', () => {
          expect(oHTMLElement.textContent).toContain('Bombasto');
        });

        it('contains "Celeritas', () => {
          expect(oHTMLElement.textContent).toContain('Celeritas');
        });

        it('contains "Magneta', () => {
          expect(oHTMLElement.textContent).toContain('Magneta');
        });

        it('contains "RubberMan', () => {
          expect(oHTMLElement.textContent).toContain('RubberMan');
        });
      });

      describe('HeroSearchComponent', () => {
        it('renders HTML into <app-search-hero />"', () => {
          const oHTMLElement = oComponentFixture.nativeElement //
            .querySelector('#search-component');

          expect(oHTMLElement.textContent).toContain('Hero Search');
        });
      });

      it('matches snapshot', () => {
        expect(oComponentFixture).toMatchSnapshot();
      });
    });
  });
});
