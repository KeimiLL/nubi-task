import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { WeatherService } from '../../weather.service';
import moment from 'moment';
import { WeatherDetailComponent } from '../weather-detail/weather-detail.component';
import { WEATHER_DETAILS } from '../../constants/weather-details.constants';
import { Details, ForecastDay } from '../../models/weather.model';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ForecastDayComponent } from '../forecast-day/forecast-day.component';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    WeatherDetailComponent,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    ForecastDayComponent
  ],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss', './weather-media.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherComponent {
  protected readonly WEATHER_DETAILS = WEATHER_DETAILS;
  protected readonly weatherService = inject(WeatherService);
  protected readonly moment = moment;

  protected getValueForDetail(detail: keyof Details): number | null {
    return this.weatherService.currentWeather()?.current?.[detail] ?? null;
  }

  protected getForecastDays(): ForecastDay[] | null {
    return this.weatherService.currentWeather()?.forecast.forecastday ?? null;
  }

  protected submitSearch(): void {
    const cityValue = this.weatherService.searchForm.controls.cityControl.value;

    if (cityValue !== null && cityValue !== this.weatherService.city()) {
      this.weatherService.city.set(cityValue);
    }
  }
}
