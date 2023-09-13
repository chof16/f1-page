import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SeasonService } from './season.service';

describe('SeasonService', () => {
  let service: SeasonService;


  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(SeasonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('get all seasons', (done: DoneFn) => {
    service.getAllSeasons().subscribe(value => {
      expect(value.MRData.total).toBe("74");
      done()
    })
  })


});
