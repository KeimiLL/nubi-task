import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { WeatherService } from '../../weather.service';
import moment from 'moment';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherComponent {
  readonly weatherService = inject(WeatherService);

  constructor() {
    moment.locale('pl');
  }

  protected formatDate(value: string | undefined): string {
    return moment(value).format('dddd DD-MM-YYYY HH:mm');
  }
}
