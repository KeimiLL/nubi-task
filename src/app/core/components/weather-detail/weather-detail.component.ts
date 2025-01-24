import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { DetailItem } from '../../models/weather.model';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-weather-detail',
  imports: [MatIconModule, MatCardModule],
  templateUrl: './weather-detail.component.html',
  styleUrl: './weather-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherDetailComponent {
  detail = input.required<DetailItem>();
  value = input.required<number | null>();
}
