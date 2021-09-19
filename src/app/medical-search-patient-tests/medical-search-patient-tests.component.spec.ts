import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalSearchPatientTestsComponent } from './medical-search-patient-tests.component';

describe('MedicalSearchPatientTestsComponent', () => {
  let component: MedicalSearchPatientTestsComponent;
  let fixture: ComponentFixture<MedicalSearchPatientTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalSearchPatientTestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalSearchPatientTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
