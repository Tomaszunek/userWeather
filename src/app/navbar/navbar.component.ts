import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthGuard } from '../_guards/auth.guard';
 
import { AlertService, AuthenticationService } from '../_services/index';
 
@Component({
    moduleId: module.id,
    selector: 'navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
 
export class NavbarComponent implements OnInit {
 
    constructor(
        private route: ActivatedRoute,
        private authGuard: AuthGuard,
        private router: Router) { }
 
    ngOnInit() {
        
    }
    
}
