import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HeroSearchComponent } from './hero-search.component';
import { HeroAPI } from '../../types/hero-api';
import { HeroService } from '../../service/hero.service';
import { MockHeroService } from '../../../hero-mock/services/mock/hero.mock-service';

describe('HeroSearchComponent', () => {
  let oHeroSearchComponent: HeroSearchComponent;
  let oComponentFixture: ComponentFixture<HeroSearchComponent>;
  let mockHeroService: HeroAPI;
  let searchInput: HTMLInputElement;
  let refresh: jest.SpyInstance;
  let search: jest.SpyInstance;

  describe('using MockHeroService', () => {
    describe('search=""', () => {
      beforeEach(() => {
        TestBed.configureTestingModule({
          imports: [HttpClientTestingModule],
          declarations: [HeroSearchComponent],
        })
          .overrideComponent(HeroSearchComponent, {
            set: {
              providers: [{ provide: HeroService, useClass: MockHeroService }],
            },
          })
          .compileComponents();

        oComponentFixture = TestBed.createComponent(HeroSearchComponent);
        mockHeroService =
          oComponentFixture.debugElement.injector.get(HeroService);

        oHeroSearchComponent = oComponentFixture.componentInstance;
        refresh = jest.spyOn(oHeroSearchComponent, 'refresh');

        oComponentFixture.detectChanges();
      });

      it('is instanceof HeroSearchComponent', () => {
        expect(oHeroSearchComponent).toBeInstanceOf(HeroSearchComponent);
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
        describe('search input text box', () => {
          it('renders "Hero Search"', () => {
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

  describe('search="Celer"', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        declarations: [HeroSearchComponent],
      })
        .overrideComponent(HeroSearchComponent, {
          set: {
            providers: [{ provide: HeroService, useClass: MockHeroService }],
          },
        })
        .compileComponents();

      oComponentFixture = TestBed.createComponent(HeroSearchComponent);
      mockHeroService =
        oComponentFixture.debugElement.injector.get(HeroService);

      oHeroSearchComponent = oComponentFixture.componentInstance;
      search = jest.spyOn(oHeroSearchComponent, 'search');

      searchInput =
        oComponentFixture.nativeElement.querySelector('input#search-box');
      searchInput.value = 'Celer';
      searchInput.dispatchEvent(new Event('input'));

      oComponentFixture.detectChanges();
    });

    describe('search(text)', () => {
      it('gets invoked', () => {
        expect(search).toHaveBeenCalledWith('Celer');
      });
    });

    describe('HTML', () => {
      // FIXME
      xdescribe('.search-result', () => {
        it('contains "Celeritas"', () => {
          const oHTMLElement =
            oComponentFixture.nativeElement.querySelector('.search-result');

          expect(oHTMLElement.textContent).toContain('Celeritas');
        });
      });

      it('matches snapshot', () => {
        expect(oComponentFixture).toMatchSnapshot();
      });
    });
  });
});
