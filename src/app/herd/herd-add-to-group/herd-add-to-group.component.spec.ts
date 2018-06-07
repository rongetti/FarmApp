import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerdAddToGroupComponent } from './herd-add-to-group.component';

describe('HerdAddToGroupComponent', () => {
  let component: HerdAddToGroupComponent;
  let fixture: ComponentFixture<HerdAddToGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerdAddToGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerdAddToGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
