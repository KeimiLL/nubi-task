import { DetailItem } from '../models/weather.model';

export const WEATHER_DETAILS: DetailItem[] = [
  {
    key: 'temp_c',
    label: 'Temperature',
    icon: 'device_thermostat',
    unit: '°C',
  },
  { key: 'wind_kph', label: 'Wind Speed', icon: 'air', unit: 'kph' },
  { key: 'humidity', label: 'Humidity', icon: 'water_drop', unit: '%' },
  { key: 'feelslike_c', label: 'Feels Like', icon: 'thermostat', unit: '°C' },
  { key: 'vis_km', label: 'Visibility', icon: 'visibility', unit: 'km' },
  { key: 'pressure_mb', label: 'Pressure', icon: 'compress', unit: 'mb' },
] as const;
