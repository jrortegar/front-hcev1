import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HcEmergencyComponent } from './hc-emergency.component';

describe('HcEmergencyComponent', () => {
  let component: HcEmergencyComponent;
  let fixture: ComponentFixture<HcEmergencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HcEmergencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HcEmergencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
