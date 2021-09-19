import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalSearchPatientComponent } from './medical-search-patient.component';

describe('MedicalSearchPatientComponent', () => {
  let component: MedicalSearchPatientComponent;
  let fixture: ComponentFixture<MedicalSearchPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalSearchPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalSearchPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
