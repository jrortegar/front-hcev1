import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HcTraumaComponent } from './hc-trauma.component';

describe('HcTraumaComponent', () => {
  let component: HcTraumaComponent;
  let fixture: ComponentFixture<HcTraumaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HcTraumaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HcTraumaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
