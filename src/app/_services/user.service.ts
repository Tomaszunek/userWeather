import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
import { appConfig } from '../app.config';
import { User, UserDetails } from '../_models/index';
 
@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }
 
    getAll() {
        return this.http.get<User[]>(appConfig.apiUrl + '/user/users');
    }
 
    getById(id: number) {
        return this.http.get(appConfig.apiUrl + '/user/users/' + id);
    }
 
    create(user: User) {
        return this.http.post(appConfig.apiUrl + '/user/registerUser', user);
    }

    createDetails(details: UserDetails) {
        return this.http.post(appConfig.apiUrl + '/user/createDetails', details);
    }
 
    update(user: User) {
        return this.http.put(appConfig.apiUrl + '/users/' + user.id, user);
    }
 
    delete(id: number) {
        return this.http.delete(appConfig.apiUrl + '/users/' + id);
    }
}
