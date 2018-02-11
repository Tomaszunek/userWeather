import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
 
@Component({
    moduleId: module.id,
    selector: 'footer-comp',
    templateUrl: 'footer.component.html'
})
 
export class FooterComponent implements OnInit {
 
    constructor(
        private route: ActivatedRoute,
        private router: Router) { }
 
    ngOnInit() {
        
    }
    
}
