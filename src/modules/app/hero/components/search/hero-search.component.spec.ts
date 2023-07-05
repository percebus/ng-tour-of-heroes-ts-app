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
  let refresh: jest.SpyInstance;

  describe('using MockHeroService', () => {
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

          expect(oHTMLElement.textContent).toBe('Hero Search');
        });
      });

      it('matches snapshot', () => {
        expect(oComponentFixture).toMatchSnapshot();
      });
    });
  });
});
