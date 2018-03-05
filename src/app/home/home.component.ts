import { Component, OnInit } from '@angular/core';
 
import { User } from '../_models/index';
import { UserService, WeatherService } from '../_services/index';
import { Observable } from 'rxjs/Rx';
 
@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})
 
export class HomeComponent implements OnInit {
    currentUser: any = {};
    users: User[] = [];
    usersFound: boolean;
    whetherFound: boolean;
    weather: any = {};
 
    constructor(private userService: UserService, private weatherService : WeatherService) {       
    }
 
    ngOnInit() {
        this.usersFound = false;
        this.whetherFound = false;
        this.loadAllUsers();
    }

    selectUser(id: number) {
        this.userService.getById(id)
          .subscribe((user) => {
           this.currentUser = user;
           this.weatherService.getWeather(
             this.currentUser.UserCountry.sortname,
             this.currentUser.UserCity.cityName)
             .subscribe((weather) => {this.weather = weather; this.whetherFound = true;});
         });
    }
 
    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }
 
    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users;
        this.selectUser(users[0].id);
        this.usersFound = true;
      });
    }
  }
