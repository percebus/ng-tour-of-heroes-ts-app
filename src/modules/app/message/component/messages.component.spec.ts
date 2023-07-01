import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessagesComponent } from './messages.component';
import { MessageService } from '../service/message.service';

describe('MessagesComponent', () => {
  let oMessageComponent: MessagesComponent;
  let oMessageService: MessageService;
  let oComponentFixture: ComponentFixture<MessagesComponent>;

  describe('w/o messages', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [MessagesComponent],
      });

      oMessageService = TestBed.inject(MessageService);

      oComponentFixture = TestBed.createComponent(MessagesComponent);
      oMessageComponent = oComponentFixture.componentInstance;

      oComponentFixture.detectChanges();
    });

    it('is instanceof MessageComponent', () => {
      expect(oMessageComponent).toBeInstanceOf(MessagesComponent);
    });

    describe('messages', () => {
      it('is an empty array', () => {
        expect(oMessageComponent.messageService.messages).toEqual([]);
      });
    });

    describe('HTML', () => {
      describe('<app-messages>', () => {
        it('is empty', () => {
          expect(oComponentFixture.nativeElement.children.length).toBe(0);
        });
      });

      it('matches snapshot', () => {
        expect(oComponentFixture).toMatchSnapshot();
      });
    });
  });

  describe('with 1 message', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [MessagesComponent],
      });

      oMessageService = TestBed.inject(MessageService);

      oComponentFixture = TestBed.createComponent(MessagesComponent);
      oMessageComponent = oComponentFixture.componentInstance;

      oMessageService.add('Message #1');
      oComponentFixture.detectChanges();
    });

    describe('MessageService', () => {
      describe('.messages[]', () => {
        it('contains "Message #1"', () => {
          expect(oMessageComponent.messageService.messages).toEqual(
            ['Message #1']
          );
        });
      });
    });

    describe('HTML', () => {
      describe('<app-messages>', () => {
        it('is NOT empty', () => {
          expect(oComponentFixture.nativeElement.children.length).toBeGreaterThan(0);
        });
      });

      describe('heading', () => {
        it('renders "Messages"', () => {
          const oHTMLElement = oComponentFixture.nativeElement.querySelector(
            '.messages-component h2'
          );

          expect(oHTMLElement.textContent).toEqual('Messages');
        });
      });

      describe('"Clear messages" button', () => {
        it('gets rendered', () => {
          const oHTMLElement = oComponentFixture.nativeElement.querySelector(
            '.messages-component button'
          );

          expect(oHTMLElement.textContent).toEqual('Clear messages');
        });
      });

      it('matches snapshot', () => {
        expect(oComponentFixture).toMatchSnapshot();
      });
    });

    describe('.clear()', () => {
      beforeEach(() => {
        oMessageComponent.clear();
        oComponentFixture.detectChanges();
      });

      it('removes all messages', () => {
        expect(oMessageComponent.messageService.messages).toEqual([]);
      });

      describe('HTML', () => {
        describe('<app-messages>', () => {
          it('is empty', () => {
            expect(oComponentFixture.nativeElement.children.length).toBe(0);
          });
        });

        it('matches snapshot', () => {
          expect(oComponentFixture).toMatchSnapshot();
        });
      });
    });
  });
});
