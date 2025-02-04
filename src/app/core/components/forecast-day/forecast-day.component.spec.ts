import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastDayComponent } from './forecast-day.component';

describe('ForecastDayComponent', () => {
  let component: ForecastDayComponent;
  let fixture: ComponentFixture<ForecastDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForecastDayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForecastDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
