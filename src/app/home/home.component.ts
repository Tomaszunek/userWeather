import { Component, OnInit } from '@angular/core';
 
import { User } from '../_models/index';
import { UserService, WeatherService } from '../_services/index';
 
@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})
 
export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
 
    constructor(private userService: UserService, private weatherService : WeatherService) {       
    }
 
    ngOnInit() {
        this.loadAllUsers();
    }

    selectUser(id: number, city: string) {
        this.weatherService.getWeather(city).subscribe((weather) => {console.log(weather)})
    }
 
    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }
 
    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }
}
