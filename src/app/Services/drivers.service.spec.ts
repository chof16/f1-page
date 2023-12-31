import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DriversService } from './drivers.service';

describe('DriversService', () => {
  let service: DriversService;

  beforeEach(() => {


    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(DriversService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('get all drivers', (done: DoneFn) => {
    service.getAllDrivers().subscribe(value => {
      expect(value.MRData.total).toBe("858");
      done()
    })
  })


});
