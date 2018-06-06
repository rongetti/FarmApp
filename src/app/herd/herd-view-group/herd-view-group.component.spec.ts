import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerdViewGroupComponent } from './herd-view-group.component';

describe('HerdViewGroupComponent', () => {
  let component: HerdViewGroupComponent;
  let fixture: ComponentFixture<HerdViewGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerdViewGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerdViewGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
