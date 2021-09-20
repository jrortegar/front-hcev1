import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HcPersonalHabitsComponent } from './hc-personal-habits.component';

describe('HcPersonalHabitsComponent', () => {
  let component: HcPersonalHabitsComponent;
  let fixture: ComponentFixture<HcPersonalHabitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HcPersonalHabitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HcPersonalHabitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
