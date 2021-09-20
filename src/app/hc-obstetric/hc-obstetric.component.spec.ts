import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HcObstetricComponent } from './hc-obstetric.component';

describe('HcObstetricComponent', () => {
  let component: HcObstetricComponent;
  let fixture: ComponentFixture<HcObstetricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HcObstetricComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HcObstetricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
