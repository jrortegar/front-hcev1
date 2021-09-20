import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalRecordEditionBarComponent } from './medical-record-edition-bar.component';

describe('MedicalRecordEditionBarComponent', () => {
  let component: MedicalRecordEditionBarComponent;
  let fixture: ComponentFixture<MedicalRecordEditionBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalRecordEditionBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalRecordEditionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
