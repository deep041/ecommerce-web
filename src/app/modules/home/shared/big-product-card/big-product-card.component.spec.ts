import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigProductCardComponent } from './big-product-card.component';

describe('BigProductCardComponent', () => {
  let component: BigProductCardComponent;
  let fixture: ComponentFixture<BigProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigProductCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
