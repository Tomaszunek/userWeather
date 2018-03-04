import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
import { appConfig } from '../app.config';
import { User } from '../_models/index';
 
@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }
 
    getAll() {
        return this.http.get<User[]>(appConfig.apiUrl + '/user/users');
    }
 
    getById(id: number) {
        return this.http.get(appConfig.apiUrl + '/user/getUser/' + id);
    }
 
    create(user: User) {
        return this.http.post(appConfig.apiUrl + '/user/createUser', user);
    }
 
    update(id: number, user: User) {
        return this.http.post(appConfig.apiUrl + '/user/updateUser/' + user.id, user);
    }
 
    delete(id: number) {
        return this.http.delete(appConfig.apiUrl + '/user/deleteUser/' + id);
    }
}
