import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPlanComponent } from './display-plan.component';

describe('DisplayPlanComponent', () => {
  let component: DisplayPlanComponent;
  let fixture: ComponentFixture<DisplayPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
