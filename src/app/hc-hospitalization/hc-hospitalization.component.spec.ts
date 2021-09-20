import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HcHospitalizationComponent } from './hc-hospitalization.component';

describe('HcHospitalizationComponent', () => {
  let component: HcHospitalizationComponent;
  let fixture: ComponentFixture<HcHospitalizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HcHospitalizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HcHospitalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
