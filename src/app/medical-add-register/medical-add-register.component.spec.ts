import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalAddRegisterComponent } from './medical-add-register.component';

describe('MedicalAddRegisterComponent', () => {
  let component: MedicalAddRegisterComponent;
  let fixture: ComponentFixture<MedicalAddRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalAddRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalAddRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
