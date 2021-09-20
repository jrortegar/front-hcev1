import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HcPathologicalComponent } from './hc-pathological.component';

describe('HcPathologicalComponent', () => {
  let component: HcPathologicalComponent;
  let fixture: ComponentFixture<HcPathologicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HcPathologicalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HcPathologicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
