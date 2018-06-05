import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerdToolbarComponent } from './herd-toolbar.component';

describe('HerdToolbarComponent', () => {
  let component: HerdToolbarComponent;
  let fixture: ComponentFixture<HerdToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerdToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerdToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
