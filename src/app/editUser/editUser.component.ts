import { Component, OnInit } from '@angular/core';
 
import { User } from '../_models/index';
import { UserService, AlertService, LocationService } from '../_services/index';
import { ActivatedRoute, Router } from "@angular/router";
 
@Component({
    moduleId: module.id,
    templateUrl: 'editUser.component.html'
})
 
export class EditUserComponent implements OnInit {
    currentUser: any = {};
    userId : number;
    loading = false;
    cities: any = [];
    states: any = [];
    coutries: any = [];
    newStates: any = [];
    newCities: any = [];
 
    constructor(private userService: UserService,
                private route:ActivatedRoute,
                private alertService : AlertService,
                private router:Router,
                private locationService: LocationService) {       
    }
 
    ngOnInit() {
        this.userId = this.route.snapshot.params['id'];
        this.loadUser(this.userId);
        this.locationService.getCities().subscribe((cities => { this.cities = cities }));
        this.locationService.getStates().subscribe((states => { this.states = states }));
        this.locationService.getCoutries().subscribe((coutries => { this.coutries = coutries }));
    }

    selectCountry() {
      this.newStates = [];
      for (let state of this.states) {
          if(state.countryId == this.currentUser.countryId){
            this.newStates.push(state);
          }
      }
    }
    selectState() {
      this.newCities = [];
      for (let city of this.cities) {
          if(city.stateId == this.currentUser.stateId){
            this.newCities.push(city);
          }
      }
    }

    updateUser(id : number){
        this.userService.update(this.userId, this.currentUser).subscribe(
                data => {
                    this.alertService.success('User successful created', true);
                    this.router.navigate(['']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
 
    private loadUser(id) {
        this.userService.getById(id).subscribe(user => { this.currentUser = user; });
    }
}
