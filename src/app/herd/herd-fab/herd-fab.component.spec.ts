import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerdFabComponent } from './herd-fab.component';

describe('HerdFabComponent', () => {
  let component: HerdFabComponent;
  let fixture: ComponentFixture<HerdFabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerdFabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerdFabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
