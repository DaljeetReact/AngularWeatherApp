import { Component, OnInit } from '@angular/core';
import {WeatherService} from './services/weather.service'
import {WeatherData} from './models/weather.mdoel'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  constructor(private WeatherService:WeatherService){

  }
  weatherData?:WeatherData;
  cityName:string='napoli';

  ngOnInit(): void{
    this.getWeatherData(this.cityName);
    this.cityName='';
  }
  
  private getWeatherData(CityName:string){
    this.WeatherService.getWeatherData(CityName).subscribe({
      next:(response) => {
        this.weatherData  = response;
      console.log(response)
     }
    });
  }

  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName='';
  }

  title = 'AngularWeatherApp';
}
