import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
import { appConfig } from '../app.config';
import { PsycheAnswer, PsycheQuestion, PsycheTest, PsycheTestComp } from '../_models/index';
 
@Injectable()
export class PsycheService {
    constructor(private http: HttpClient) { }
 
    getAllPsycheTest() {
        return this.http.get<PsycheTest[]>(appConfig.apiUrl + '/psyche/test-name/getAllPsyche');
    }
 
    getById(id: number) {
        return this.http.get(appConfig.apiUrl + '/psyche/' + id);
    }
 
    create(test: PsycheTest) {
        return this.http.post(appConfig.apiUrl + '/psyche/registerUser', user);
    }
 
    update(test: PsycheTest) {
        return this.http.put(appConfig.apiUrl + '/psyche/' + user.id, user);
    }
 
    delete(id: number) {
        return this.http.delete(appConfig.apiUrl + '/psyche/' + id);
    }
}
