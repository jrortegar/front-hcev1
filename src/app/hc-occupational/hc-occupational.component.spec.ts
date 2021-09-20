import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HcOccupationalComponent } from './hc-occupational.component';

describe('HcOccupationalComponent', () => {
  let component: HcOccupationalComponent;
  let fixture: ComponentFixture<HcOccupationalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HcOccupationalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HcOccupationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
