import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {WeatherData} from '../models/weather.mdoel';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {

   }

   getWeatherData(cityName: string):Observable<WeatherData> {
     return this.http.get<WeatherData>(environment.WeatherApibaseUrl,{
        params: {
          q:cityName,
          units: 'imperial',
          mode: 'json' 
        },
        headers: {
          'X-RapidAPI-Host': environment.RapidAPIHost,
          'X-RapidAPI-Key':environment.RapidAPIKey
        }
      })
   }
}
