import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HcInmunizationComponent } from './hc-inmunization.component';

describe('HcInmunizationComponent', () => {
  let component: HcInmunizationComponent;
  let fixture: ComponentFixture<HcInmunizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HcInmunizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HcInmunizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
