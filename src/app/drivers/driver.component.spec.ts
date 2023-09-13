import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DriversComponent } from './driver.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DriversComponent', () => {
  let component: DriversComponent;
  let fixture: ComponentFixture<DriversComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DriversComponent,HttpClientTestingModule,BrowserAnimationsModule]
    });
    fixture = TestBed.createComponent(DriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
