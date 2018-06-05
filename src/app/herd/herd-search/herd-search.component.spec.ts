import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerdSearchComponent } from './herd-search.component';

describe('HerdSearchComponent', () => {
  let component: HerdSearchComponent;
  let fixture: ComponentFixture<HerdSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerdSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerdSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
