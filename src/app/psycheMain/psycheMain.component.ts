import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthGuard } from '../_guards/auth.guard';
import { PsycheService } from '../_services/index';

import { PsycheTest } from '../_models/index';
import { AlertService, AuthenticationService } from '../_services/index';
 
@Component({
    moduleId: module.id,
    selector: 'psyche-main',
    templateUrl: 'psycheMain.component.html',
    styleUrls: ['./psycheMain.component.scss']
})
 
export class PsycheMainComponent implements OnInit {
    tests: PsycheTest[] = [];

    isLoggedIn$: Observable<boolean>;
 
    constructor(
        private route: ActivatedRoute,
        private authGuard: AuthGuard,
        private router: Router,
        private psycheService: PsycheService) { }
 
    ngOnInit() {
        this.isLoggedIn$ = this.authGuard.canActivate();
        this.loadAllTests();
    }

    private loadAllTests() {
        this.psycheService.getAllPsycheTest().subscribe(tests => { this.tests = tests; });
    }
    
}
