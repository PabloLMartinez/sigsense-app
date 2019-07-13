import { TestBed } from '@angular/core/testing';

import { SigsenseService } from './sigsense.service';

describe('SigsenseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SigsenseService = TestBed.get(SigsenseService);
    expect(service).toBeTruthy();
  });
});
