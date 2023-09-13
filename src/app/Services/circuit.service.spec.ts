import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CircuitService } from './circuit.service';

describe('CircuitService', () => {
  let service: CircuitService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports :[HttpClientTestingModule]
    });
    service = TestBed.inject(CircuitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
