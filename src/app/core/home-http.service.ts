import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeHttpService {
  readonly #apiKey = 'e2415181a90047da859124039252401';
  readonly #apiUrl = 'https://api.weatherapi.com/v1';

  readonly #http = inject(HttpClient);

  getCurrentWeather(city: string): Observable<any> {
    const url = `${this.#apiUrl}/current.json?key=${
      this.#apiKey
    }&q=${city}&aqi=no`;
    return this.#http.get(url);
  }

  getWeatherForecast(city: string, days: number = 5): Observable<any> {
    const url = `${this.#apiUrl}/forecast.json?key=${
      this.#apiKey
    }&q=${city}&days=${days}&aqi=no&alerts=no`;
    return this.#http.get(url);
  }
}
