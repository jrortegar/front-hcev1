import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HcDrugIntoleranceComponent } from './hc-drug-intolerance.component';

describe('HcDrugIntoleranceComponent', () => {
  let component: HcDrugIntoleranceComponent;
  let fixture: ComponentFixture<HcDrugIntoleranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HcDrugIntoleranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HcDrugIntoleranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
