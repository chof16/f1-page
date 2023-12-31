import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { QualifyingService } from './qualifying.service';

describe('QualifyingService', () => {
  let service: QualifyingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports :[HttpClientTestingModule]
    });
    service = TestBed.inject(QualifyingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
