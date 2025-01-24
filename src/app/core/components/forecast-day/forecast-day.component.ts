import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ForecastDay } from '../../models/weather.model';
import { MatCardModule } from '@angular/material/card';
import dayjs from 'dayjs';

@Component({
  selector: 'app-forecast-day',
  imports: [MatCardModule],
  templateUrl: './forecast-day.component.html',
  styleUrl: './forecast-day.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForecastDayComponent {
  dayjs = dayjs;
  forecastday = input.required<ForecastDay>();
}
