import { effect, inject, Injectable, signal } from '@angular/core';
import { CurrentWeather } from './models/weather.model';
import { WeatherHttpService } from './weather-http.service';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  city = signal('Gliwice');
  currentWeather = signal<CurrentWeather | null>(null);

  readonly #weatherHttpService = inject(WeatherHttpService);

  constructor() {
    effect(() => {
      this.loadCurrentWeather(this.city());
    });
  }

  loadCurrentWeather(city: string): void {
    this.#weatherHttpService
      .getCurrentWeatherData$(city)
      .pipe(tap((currentWeather) => this.currentWeather.set(currentWeather)))
      .subscribe();
  }

  getLargeIconUrl(size = 128): string | undefined {
    return this.currentWeather()?.current.condition.icon.replace(
      '/64x64/',
      `/${size}x${size}/`
    );
  }
}
