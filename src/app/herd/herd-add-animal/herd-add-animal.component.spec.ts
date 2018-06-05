import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerdAddAnimalComponent } from './herd-add-animal.component';

describe('HerdAddAnimalComponent', () => {
  let component: HerdAddAnimalComponent;
  let fixture: ComponentFixture<HerdAddAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerdAddAnimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerdAddAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
