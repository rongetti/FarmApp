import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerdCreateGroupComponent } from './herd-create-group.component';

describe('HerdCreateGroupComponent', () => {
  let component: HerdCreateGroupComponent;
  let fixture: ComponentFixture<HerdCreateGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerdCreateGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerdCreateGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
