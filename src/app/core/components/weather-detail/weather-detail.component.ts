import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-weather-detail',
  imports: [],
  templateUrl: './weather-detail.component.html',
  styleUrl: './weather-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherDetailComponent {

}
