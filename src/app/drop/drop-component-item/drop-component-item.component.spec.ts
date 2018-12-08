import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropComponentItemComponent } from './drop-component-item.component';

describe('DropComponentItemComponent', () => {
  let component: DropComponentItemComponent;
  let fixture: ComponentFixture<DropComponentItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropComponentItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropComponentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
