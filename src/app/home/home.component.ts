import { Component, OnInit } from '@angular/core';
 
import { User } from '../_models/index';
import { UserService, WeatherService } from '../_services/index';
 
@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})
 
export class HomeComponent implements OnInit {
    currentUser: any = {};
    users: User[] = [];
    weather: any = {};
 
    constructor(private userService: UserService, private weatherService : WeatherService) {       
    }
 
    ngOnInit() {
        this.loadAllUsers();

    }

    selectUser(id: number) {
        this.userService.getById(id)
          .subscribe((user) => {
           this.currentUser = user;
           this.weatherService.getWeather(
             this.currentUser.UserCountry.sortname,
             this.currentUser.UserCity.cityName)
             .subscribe((weather) => {this.weather = weather;});
         });
    }
 
    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }
 
    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users;
        this.selectUser(users[0].id))});
    }
}
