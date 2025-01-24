import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentWeather } from './models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherHttpService {
  readonly #apiKey = 'e2415181a90047da859124039252401';
  readonly #apiUrl = 'https://api.weatherapi.com/v1';

  readonly #http = inject(HttpClient);

  getCurrentWeatherData$(city: string): Observable<CurrentWeather> {
    const url = `${this.#apiUrl}/current.json?key=${
      this.#apiKey
    }&q=${city}&aqi=no`;
    return this.#http.get<CurrentWeather>(url);
  }

  getWeatherForecastData$(city: string, days: number = 5): Observable<any> {
    const url = `${this.#apiUrl}/forecast.json?key=${
      this.#apiKey
    }&q=${city}&days=${days}&aqi=no&alerts=no`;
    return this.#http.get(url);
  }
}
