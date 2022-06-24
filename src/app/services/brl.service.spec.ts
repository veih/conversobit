import { TestBed } from '@angular/core/testing';

import { BrlService } from './brl.service';

describe('BrlService', () => {
  let service: BrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
