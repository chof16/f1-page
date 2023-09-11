import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverComponentComponent } from './driver-component.component';

describe('DriverComponentComponent', () => {
  let component: DriverComponentComponent;
  let fixture: ComponentFixture<DriverComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DriverComponentComponent]
    });
    fixture = TestBed.createComponent(DriverComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
