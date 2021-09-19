import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalRequestAccessComponent } from './medical-request-access.component';

describe('MedicalRequestAccessComponent', () => {
  let component: MedicalRequestAccessComponent;
  let fixture: ComponentFixture<MedicalRequestAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalRequestAccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalRequestAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
