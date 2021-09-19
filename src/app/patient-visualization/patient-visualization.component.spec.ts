import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientVisualizationComponent } from './patient-visualization.component';

describe('PatientVisualizationComponent', () => {
  let component: PatientVisualizationComponent;
  let fixture: ComponentFixture<PatientVisualizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientVisualizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
