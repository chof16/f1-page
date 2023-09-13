import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonDetailComponent } from './season-detail.component';
import { NavComponent } from '../nav/nav.component';
import { NgModule } from '@angular/core';

describe('SeasonDetailComponent', () => {
  let component: SeasonDetailComponent;
  let fixture: ComponentFixture<SeasonDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavComponent,SeasonDetailComponent]
    });
    fixture = TestBed.createComponent(SeasonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
