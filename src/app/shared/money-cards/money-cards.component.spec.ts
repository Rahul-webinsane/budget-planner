import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyCardsComponent } from './money-cards.component';

describe('MoneyCardsComponent', () => {
  let component: MoneyCardsComponent;
  let fixture: ComponentFixture<MoneyCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoneyCardsComponent]
    });
    fixture = TestBed.createComponent(MoneyCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
