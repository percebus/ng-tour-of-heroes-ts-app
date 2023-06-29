import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HelloWorldComponent } from './hello-world.component';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('HelloWorldComponent', () => {
  let oHelloWorldComponent: HelloWorldComponent;
  let oComponentFixture: ComponentFixture<HelloWorldComponent>;
  let oRouter: Router;
  let oActivatedRoute: ActivatedRoute;

  describe('rendering', () => {
    describe('by default', () => {
      beforeEach(() => {
        TestBed.configureTestingModule({
          imports: [FormsModule, RouterTestingModule.withRoutes([])],
          declarations: [HelloWorldComponent],
        });

        oRouter = TestBed.inject(Router);
        oActivatedRoute = TestBed.inject(ActivatedRoute);

        oComponentFixture = TestBed.createComponent(HelloWorldComponent);
        oComponentFixture.detectChanges();
        oHelloWorldComponent = oComponentFixture.componentInstance;
      });

      it('is instanceof HelloWorld', () => {
        expect(oHelloWorldComponent).toBeInstanceOf(HelloWorldComponent);
      });

      it('displays "Hello World!"', () => {
        const oHTMLElement = oComponentFixture.nativeElement //
          .querySelector('.hello-world h1');

        expect(oHTMLElement.textContent).toEqual('Hello World!');
      });

      it('matches snapshot', () => {
        expect(oComponentFixture).toMatchSnapshot();
      });
    });

    describe('name: "David"', () => {
      beforeEach(() => {
        const mockActivatedRoute = {
          snapshot: {
            paramMap: {
              get: () => 'David',
            },
          },
        };

        TestBed.configureTestingModule({
          imports: [FormsModule, RouterTestingModule.withRoutes([])],
          declarations: [HelloWorldComponent],
          providers: [
            { provide: ActivatedRoute, useValue: mockActivatedRoute },
          ],
        });

        oRouter = TestBed.inject(Router);
        oActivatedRoute = TestBed.inject(ActivatedRoute);

        oComponentFixture = TestBed.createComponent(HelloWorldComponent);
        oComponentFixture.detectChanges();
        oHelloWorldComponent = oComponentFixture.componentInstance;
      });

      it('displays "Hello David!"', () => {
        const oHTMLElement = oComponentFixture.nativeElement //
          .querySelector('.hello-world h1');

        expect(oHTMLElement.textContent).toEqual('Hello David!');
      });

      it('matches snapshot', () => {
        expect(oComponentFixture).toMatchSnapshot();
      });
    });
  });
});
