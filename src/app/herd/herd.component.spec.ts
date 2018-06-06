import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerdComponent } from './herd.component';

describe('HerdComponent', () => {
  let component: HerdComponent;
  let fixture: ComponentFixture<HerdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
