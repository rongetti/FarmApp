import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerdGroupsComponent } from './herd-groups.component';

describe('HerdGroupsComponent', () => {
  let component: HerdGroupsComponent;
  let fixture: ComponentFixture<HerdGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerdGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerdGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
