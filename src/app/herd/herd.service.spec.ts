import { TestBed, inject } from '@angular/core/testing';

import { HerdService } from './herd.service';

describe('HerdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HerdService]
    });
  });

  it('should be created', inject([HerdService], (service: HerdService) => {
    expect(service).toBeTruthy();
  }));
});
