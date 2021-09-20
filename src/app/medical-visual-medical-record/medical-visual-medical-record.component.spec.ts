import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalVisualMedicalRecordComponent } from './medical-visual-medical-record.component';

describe('MedicalVisualMedicalRecordComponent', () => {
  let component: MedicalVisualMedicalRecordComponent;
  let fixture: ComponentFixture<MedicalVisualMedicalRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalVisualMedicalRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalVisualMedicalRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
