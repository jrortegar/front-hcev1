import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HcSurgicalComponent } from './hc-surgical.component';

describe('HcSurgicalComponent', () => {
  let component: HcSurgicalComponent;
  let fixture: ComponentFixture<HcSurgicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HcSurgicalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HcSurgicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
