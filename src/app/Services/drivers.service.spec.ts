import { TestBed } from '@angular/core/testing';

import { DriversService } from './drivers.service';

describe('DriversService', () => {
  let service: DriversService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DriversService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('get first all drivers', async () => {
    expect(await service.getAllDrivers().subscribe(data => data.MRData.DriverTable?.Drivers))
  })

});
