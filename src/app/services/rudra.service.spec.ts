import { TestBed } from '@angular/core/testing';

import { RudraService } from './rudra.service';

describe('RudraService', () => {
  let service: RudraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RudraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
