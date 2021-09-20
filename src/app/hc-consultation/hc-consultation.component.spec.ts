import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HcConsultationComponent } from './hc-consultation.component';

describe('HcConsultationComponent', () => {
  let component: HcConsultationComponent;
  let fixture: ComponentFixture<HcConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HcConsultationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HcConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
