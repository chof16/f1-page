import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { RouterOutlet } from '@angular/router';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent,NavComponent],
    imports: [RouterOutlet]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'F1Page'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('F1Page');
  });
});
