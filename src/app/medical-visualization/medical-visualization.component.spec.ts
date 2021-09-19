import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalVisualizationComponent } from './medical-visualization.component';

describe('MedicalVisualizationComponent', () => {
  let component: MedicalVisualizationComponent;
  let fixture: ComponentFixture<MedicalVisualizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalVisualizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
