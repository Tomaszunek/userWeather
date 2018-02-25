import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
 
import { AlertService, UserService, AuthenticationService } from '../_services/index';
import { UserDetails } from '../_models/index';
 
@Component({
    moduleId: module.id,
    selector: 'firstLogin',
    templateUrl: './firstLogin.component.html',
    styleUrls: ['./firstLogin.component.scss']
    
})
 
export class FirstLoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
 
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
        private userService: UserService) { }
 
    ngOnInit() {      
             
    } 

    createDetails(){
      this.model.userId = JSON.parse(localStorage.getItem('currentUser')).id;  
      this.userService.createDetails(this.model).subscribe(data => {
                          this.router.navigate(['home']);                  
                      },
                      error => {
                          this.alertService.error(error.text);
                          this.loading = false;
                      });
    }
    
}
