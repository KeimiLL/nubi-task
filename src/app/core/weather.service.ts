import { effect, inject, Injectable, signal } from '@angular/core';
import { CurrentWeather } from './models/weather.model';
import { WeatherHttpService } from './weather-http.service';
import { catchError, tap, throwError } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  city = signal('Gliwice');
  currentWeather = signal<CurrentWeather | null>(null);
  errorMessage = signal<string | null>(null);

  searchForm = new FormGroup({
    cityControl: new FormControl(''),
  });

  readonly #weatherHttpService = inject(WeatherHttpService);

  constructor() {
    effect(() => {
      this.loadCurrentWeather(this.city());
    });
  }

  loadCurrentWeather(city: string): void {
    this.#weatherHttpService
      .getWeatherForecastData$(city)
      .pipe(
        tap((currentWeather) => {
          this.currentWeather.set(currentWeather);
          this.errorMessage.set(null);
        }),
        catchError((error) => {
          let message = 'Unexpected error. Please try again.';

          if (error.status === 404 || error.status === 400) {
            message = 'City not found. Enter valid city.';
          } else if (error.status === 500) {
            message = 'Server error. Please try again.';
          }

          this.errorMessage.set(message);
          return throwError(() => new Error(message));
        })
      )
      .subscribe();
  }

  getLargeIconUrl(size = 128): string | undefined {
    return this.currentWeather()?.current.condition.icon.replace(
      '/64x64/',
      `/${size}x${size}/`
    );
  }
}
