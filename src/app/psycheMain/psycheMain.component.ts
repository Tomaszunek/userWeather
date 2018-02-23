import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthGuard } from '../_guards/auth.guard';
 
import { AlertService, AuthenticationService } from '../_services/index';
 
@Component({
    moduleId: module.id,
    selector: 'psyche-main',
    templateUrl: 'psycheMain.component.html'
})
 
export class PsycheMainComponent implements OnInit {

    isLoggedIn$: Observable<boolean>;
 
    constructor(
        private route: ActivatedRoute,
        private authGuard: AuthGuard,
        private router: Router) { }
 
    ngOnInit() {
        this.isLoggedIn$ = this.authGuard.canActivate();
    }
    
}
