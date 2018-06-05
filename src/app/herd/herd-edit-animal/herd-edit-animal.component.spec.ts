import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerdEditAnimalComponent } from './herd-edit-animal.component';

describe('HerdEditAnimalComponent', () => {
  let component: HerdEditAnimalComponent;
  let fixture: ComponentFixture<HerdEditAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerdEditAnimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerdEditAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
