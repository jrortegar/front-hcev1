import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HcActivateComponent } from './hc-activate.component';

describe('HcActivateComponent', () => {
  let component: HcActivateComponent;
  let fixture: ComponentFixture<HcActivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HcActivateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HcActivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
