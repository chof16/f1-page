import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StandingsService } from './standings.service';

describe('StandingsService', () => {
  let service: StandingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule]
    });
    service = TestBed.inject(StandingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
