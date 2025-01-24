export interface Location {
  name: string;
  country: string;
  localtime: string;
}

export interface Condition {
  text: string;
  icon: string;
  code: number;
}

export interface CurrentConditions {
  temp_c: number;
  condition: Condition;
  wind_kph: number;
  humidity: number;
  feelslike_c: number;
  vis_km: number;
  pressure_mb: number;
  precip_mm: number;
}

export interface CurrentWeather {
  location: Location;
  current: CurrentConditions;
}
