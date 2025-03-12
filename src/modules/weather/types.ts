export interface WeatherDataTypes {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface Clouds {
  all: number;
}

export interface Coord {
  lon: number;
  lat: number;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

export interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Wind {
  speed: number;
  deg: number;
}

export interface ForecastDatatype {
  cod: string;
  message: number;
  cnt: number;
  list: List[];
  city: City;
}

export interface City {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface Coord {
  lat: number;
  lon: number;
}

export interface List {
  dt: number;
  main: MainClass;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  sys: Sys;
  dt_txt: string;
}

export interface Clouds {
  all: number;
}

export interface MainClass {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface Sys {
  pod: Pod;
}

export enum Pod {
  D = "d",
  N = "n",
}

export interface Weather {
  id: number;
  icon: string;
}

export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

export interface WeatherDetailsProps {
  data: {
    name: string;
    sys: {
      country: string;
    };
    main: {
      temp: number;
      feels_like: number;
      humidity: number;
    };
    wind: {
      speed: number;
    };
  };
  handleSave?: () => void;
  handleRemove?: () => void;
}

export interface ForecastDetailsProps {
  forecastData: {
    list: {
      dt_txt: string;
      main: {
        temp: number;
        humidity?: string;
      };
      weather: {
        description: string;
      }[];
    }[];
  };
}
