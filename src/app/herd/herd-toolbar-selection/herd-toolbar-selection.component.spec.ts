import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerdToolbarSelectionComponent } from './herd-toolbar-selection.component';

describe('HerdToolbarSelectionComponent', () => {
  let component: HerdToolbarSelectionComponent;
  let fixture: ComponentFixture<HerdToolbarSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerdToolbarSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerdToolbarSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
