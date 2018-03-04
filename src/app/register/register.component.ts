import { Component } from '@angular/core';
import { Router } from '@angular/router';
 
import { AlertService, UserService, LocationService } from '../_services/index';
 
@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})
 
export class RegisterComponent {
    model: any = {};
    loading = false;
    cities: any = [];
    states: any = [];
    coutries: any = [];
    newStates: any = [];
    newCities: any = [];
 
    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService,
        private locationService : LocationService) { }

      ngOnInit() {
        this.locationService.getCities().subscribe((cities => { this.cities = cities }));
        this.locationService.getStates().subscribe((states => { this.states = states }));
        this.locationService.getCoutries().subscribe((coutries => { this.coutries = coutries }));
      }

      selectCountry() {
        this.newStates = [];
        for (let state of this.states) {
            if(state.countryId == this.model.countryId){
              this.newStates.push(state);
            }
        }
      }
      selectState() {
        this.newCities = [];
        for (let city of this.cities) {
            if(city.stateId == this.model.stateId){
              this.newCities.push(city);
            }
        }
      }
 
    createUser() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('User successful created', true);
                    this.router.navigate(['']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
