import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ForecastDay } from '../../models/weather.model';
import { MatCardModule } from '@angular/material/card';
import moment from 'moment';

@Component({
  selector: 'app-forecast-day',
  imports: [MatCardModule],
  templateUrl: './forecast-day.component.html',
  styleUrl: './forecast-day.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForecastDayComponent {
  moment = moment;
  forecastday = input.required<ForecastDay>();
}
