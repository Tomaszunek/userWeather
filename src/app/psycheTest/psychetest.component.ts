import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthGuard } from '../_guards/auth.guard';
import { PsycheService } from '../_services/index';

import { PsycheQuestion, PsycheAnswer } from '../_models/index'; 
import { AlertService, AuthenticationService } from '../_services/index';
 
@Component({
    moduleId: module.id,
    selector: 'psychetest',
    templateUrl: 'psychetest.component.html',
    styleUrls: ['./psychetest.component.scss']
})
 
export class PsychetestComponent implements OnInit {

    questions: PsycheQuestion[] = [];
    answers: PsycheAnswer[] = [];
    testId: number;
    private sub: any;
 
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private psycheService: PsycheService) { }
 
    ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
        this.testId = +params['id'];
      });
      this.loadAllQuestion();
    }

    public askQuestion = (question, answer) => {
      this.psycheService.askQuestion(JSON.parse(localStorage.getItem('currentUser')).id, question, answer).subscribe();
    }

    private loadAllQuestion() {
        this.psycheService.getAllQuestion(this.testId).subscribe(questions => { this.questions = questions; });
        this.psycheService.getAllAnswers(this.testId).subscribe(answers => { this.answers = answers; });

    }
    
}
