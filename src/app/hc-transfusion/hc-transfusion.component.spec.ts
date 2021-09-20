import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HcTransfusionComponent } from './hc-transfusion.component';

describe('HcTransfusionComponent', () => {
  let component: HcTransfusionComponent;
  let fixture: ComponentFixture<HcTransfusionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HcTransfusionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HcTransfusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
