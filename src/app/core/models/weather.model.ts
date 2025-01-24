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

export interface Details {
  temp_c: number;
  wind_kph: number;
  humidity: number;
  feelslike_c: number;
  vis_km: number;
  pressure_mb: number;
}

export interface DetailItem {
  key: keyof Details;
  label: string;
  icon: string;
  unit: string;
}

export interface CurrentConditions extends Details {
  condition: Condition;
}

export interface CurrentWeather {
  location: Location;
  current: CurrentConditions;
}
