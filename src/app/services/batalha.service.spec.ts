import { TestBed } from '@angular/core/testing';

import { BatalhaService } from './batalha.service';

describe('BatalhaService', () => {
  let service: BatalhaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BatalhaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
