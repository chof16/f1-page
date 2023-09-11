import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriversComponent } from './driver.component';

describe('DriverComponent', () => {
  let component: DriversComponent;
  let fixture: ComponentFixture<DriversComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DriversComponent]
    });
    fixture = TestBed.createComponent(DriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
