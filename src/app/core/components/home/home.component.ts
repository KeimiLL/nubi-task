import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { HomeHttpService } from '../../home-http.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { tap } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  readonly #homeHttpService = inject(HomeHttpService);

  ngOnInit() {
    this.#homeHttpService
      .getCurrentWeather('Gliwice')
      .pipe(
        tap((res) => {
          console.log(res);
        })
      )
      .subscribe();
    this.#homeHttpService
      .getWeatherForecast('Gliwice')
      .pipe(
        tap((res) => {
          console.log(res);
        })
      )
      .subscribe();
  }
}
