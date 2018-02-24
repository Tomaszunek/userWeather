import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
import { appConfig } from '../app.config';
import { PsycheAnswer, PsycheQuestion, PsycheTest, PsycheTestComp } from '../_models/index';
 
@Injectable()
export class PsycheService {
    constructor(private http: HttpClient) { }
 
    getAllPsycheTest() {
        return this.http.get<PsycheTest[]>(appConfig.apiUrl + '/psyche/test-name/getAllPsyche');
    }

    getAllQuestion(testId: number) {
        return this.http.get<PsycheQuestion[]>(appConfig.apiUrl + '/psyche/question/getQuestions/' + testId);
    }

    getAllAnswers(testId: number) {
        return this.http.get<PsycheAnswer[]>(appConfig.apiUrl + '/psyche/answer/getAnswers/' + testId);
    }

    askQuestion(userId: number, questionId: number, answerId: number) {
        return this.http.post(appConfig.apiUrl + '/psyche/user-answer/createUserAnswer/' + userId + '/' + questionId + '/' + answerId);
    }
 
    getById(id: number) {
        return this.http.get(appConfig.apiUrl + '/psyche/');
    }
 
    create(test: PsycheTest) {
        return this.http.post(appConfig.apiUrl + '/psyche/registerUser');
    }
 
    update(test: PsycheTest) {
        return this.http.put(appConfig.apiUrl + '/psyche/');
    }
 
    delete(id: number) {
        return this.http.delete(appConfig.apiUrl + '/psyche/');
    }
}
