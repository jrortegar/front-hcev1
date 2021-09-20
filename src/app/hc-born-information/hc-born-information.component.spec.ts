import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HcBornInformationComponent } from './hc-born-information.component';

describe('HcBornInformationComponent', () => {
  let component: HcBornInformationComponent;
  let fixture: ComponentFixture<HcBornInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HcBornInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HcBornInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
