import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HcVisualizationComponent } from './hc-visualization.component';

describe('HcVisualizationComponent', () => {
  let component: HcVisualizationComponent;
  let fixture: ComponentFixture<HcVisualizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HcVisualizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HcVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
