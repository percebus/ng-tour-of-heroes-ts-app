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
      it('displays "Hello World!"', () => {
        oComponentFixture.detectChanges();

        const heading = oComponentFixture.nativeElement.querySelector(
          '.hello-world h1'
        ) as HTMLElement;

        expect(heading.textContent).toEqual('Hello World!');
      });
    });

    describe('name: "David"', () => {
      it('displays "Hello David!"', () => {
        oHelloWorldComponent.name = 'David';
        oComponentFixture.detectChanges();

        const oHTMLElement = oComponentFixture.nativeElement.querySelector(
          '.hello-world h1'
        ) as HTMLElement;

        expect(oHTMLElement.textContent).toEqual('Hello David!');
      });
    });
  });
});
