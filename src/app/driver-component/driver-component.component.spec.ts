import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DriverComponent } from './driver-component.component';
import { ActivatedRoute } from '@angular/router';

describe('DriverComponent', () => {
  let component: DriverComponent;
  let fixture: ComponentFixture<DriverComponent>;

  beforeEach(() => {

    let mockActicvtedRoute = {
      snapshot: {
        paramMap: {
          get: () => {
            return "alonso"
          }
        }
      }
    }

    let mockLocation

    TestBed.configureTestingModule({
      declarations: [DriverComponent],
      imports: [HttpClientTestingModule],
      providers : [
        {provide: ActivatedRoute, useValue : mockActicvtedRoute}
      ]
    });
    fixture = TestBed.createComponent(DriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
