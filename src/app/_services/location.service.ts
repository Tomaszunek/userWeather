import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
import { appConfig } from '../app.config';
 
@Injectable()
export class LocationService {
    constructor(private http: HttpClient) { }
 
    getCities() {
        return this.http.get<any[]>(appConfig.apiUrl + '/user/cities');
    }

    getStates() {
        return this.http.get<any[]>(appConfig.apiUrl + '/user/stetes');
    }

    getCoutries() {
        return this.http.get<any[]>(appConfig.apiUrl + '/user/coutries');
    }
}
