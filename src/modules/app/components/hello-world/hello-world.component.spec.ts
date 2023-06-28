import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HelloWorldComponent } from './hello-world.component';

describe('HelloWorldComponent', () => {
  let oHelloWorldComponent: HelloWorldComponent;
  let oComponentFixture: ComponentFixture<HelloWorldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [HelloWorldComponent],
    });

    oComponentFixture = TestBed.createComponent(HelloWorldComponent);
    oHelloWorldComponent = oComponentFixture.componentInstance;
  });

  it('is instanceof HelloWorld', () => {
    expect(oHelloWorldComponent).toBeInstanceOf(HelloWorldComponent);
  });

  describe('rendering', () => {
    describe('by default', () => {
      beforeEach(() => oComponentFixture.detectChanges());

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
        oHelloWorldComponent.name = 'David';
        oComponentFixture.detectChanges();
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
