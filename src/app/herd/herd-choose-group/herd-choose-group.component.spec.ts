import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerdChooseGroupComponent } from './herd-choose-group.component';

describe('HerdChooseGroupComponent', () => {
  let component: HerdChooseGroupComponent;
  let fixture: ComponentFixture<HerdChooseGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerdChooseGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerdChooseGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
