import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerdTabsComponent } from './herd-tabs.component';

describe('HerdTabsComponent', () => {
  let component: HerdTabsComponent;
  let fixture: ComponentFixture<HerdTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerdTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerdTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
