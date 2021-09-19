import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalRegisterComponent } from './medical-register.component';

describe('MedicalRegisterComponent', () => {
  let component: MedicalRegisterComponent;
  let fixture: ComponentFixture<MedicalRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
