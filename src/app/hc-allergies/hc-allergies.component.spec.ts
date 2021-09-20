import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HcAllergiesComponent } from './hc-allergies.component';

describe('HcAllergiesComponent', () => {
  let component: HcAllergiesComponent;
  let fixture: ComponentFixture<HcAllergiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HcAllergiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HcAllergiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
