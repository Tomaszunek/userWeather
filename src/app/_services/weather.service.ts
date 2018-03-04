import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
import { appConfig } from '../app.config';
 
@Injectable()
export class WeatherService {
    constructor(private http: HttpClient) { }
 
    getWeather(city : string) {
      var searchtext = "select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22" + city +"%2C%20pl%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
      return this.http.get("https://query.yahooapis.com/v1/public/yql?q=" + searchtext + "&format=json");
    } 
}
