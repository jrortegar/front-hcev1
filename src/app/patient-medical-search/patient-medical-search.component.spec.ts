import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientMedicalSearchComponent } from './patient-medical-search.component';

describe('PatientMedicalSearchComponent', () => {
  let component: PatientMedicalSearchComponent;
  let fixture: ComponentFixture<PatientMedicalSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientMedicalSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientMedicalSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
