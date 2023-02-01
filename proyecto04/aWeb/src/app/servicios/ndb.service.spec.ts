import { TestBed } from '@angular/core/testing';

import { NdbService } from './ndb.service';

describe('NdbService', () => {
  let service: NdbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NdbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
