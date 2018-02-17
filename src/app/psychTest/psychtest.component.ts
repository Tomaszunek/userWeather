import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
 
import { AlertService, AuthenticationService } from '../_services/index';
 
@Component({
    moduleId: module.id,
    selector: 'psychtest',
    templateUrl: 'psychtest.component.html',
    styleUrls: ['./psychtest.component.scss']
})
 
export class PsychtestComponent implements OnInit {

    answers: any[] = [
      {
        "name": "Answer A"
      },
      {
        "name": "Answer B"
      },
      {
        "name": "Answer C"
      },
      {
        "name": "Answer D"
      }
    ];

    question: any[] = [{'name' : 'Question'}];

    letters: string[] = ['a', 'b', 'c', 'd'];
 
    constructor(
        private route: ActivatedRoute,
        private router: Router) { }
 
    ngOnInit() {
        
    }

    public askQuestion = (index) => {
      console.log(index);
    }
    
}
