import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSearchComponent } from './hero-search.component';
import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('HeroSearchComponent', () => {
  let component: HeroSearchComponent;
  let fixture: ComponentFixture<HeroSearchComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [HeroSearchComponent],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);

    fixture = TestBed.createComponent(HeroSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});