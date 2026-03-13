import { Injectable } from '@angular/core';
import { QuizModel } from '../models/quiz.model';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private questions : QuizModel[] = [
   { id: 1, question: "What does SPA stand for?", answer: "Single Page Application" },
    { id: 2, question: "Which command creates a new component?", answer: "ng generate component" },
    { id: 3, question: "What is the default port for 'ng serve'?", answer: "4200" },
    { id: 4, question: "What decorator marks a class as a service?", answer: "@Injectable" },
    { id: 5, question: "What is used for two-way data binding?", answer: "ngModel" },
    { id: 6, question: "Which file is the entry point for Angular apps?", answer: "main.ts" },
    { id: 7, question: "What does CLI stand for?", answer: "Command Line Interface" },
    { id: 8, question: "What is the purpose of a Pipe?", answer: "To transform data in templates" },
    { id: 9, question: "What decorator defines a component's metadata?", answer: "@Component" },
    { id: 10, question: "Which module is required for HTTP requests?", answer: "HttpClientModule" },
    { id: 11, question: "What is the lifecycle hook for initialization?", answer: "ngOnInit" },
    { id: 12, question: "What handles navigation in Angular?", answer: "Router" },
    { id: 13, question: "What is a Directive?", answer: "A class that adds behavior to DOM elements" },
    { id: 14, question: "Which file contains environment settings?", answer: "environment.ts" },
    { id: 15, question: "What is the root module called by default?", answer: "AppModule" },
    { id: 16, question: "What syntax is used for Interpolation?", answer: "{{ value }}" },
    { id: 17, question: "What is the purpose of RxJS in Angular?", answer: "Handling asynchronous data streams" },
    { id: 18, question: "What does AOT stand for?", answer: "Ahead-of-Time compilation" },
    { id: 19, question: "Which directive is used for conditional rendering?", answer: "*ngIf" },
    { id: 20, question: "What is a Guard used for?", answer: "To control access to routes" }
  ];

  getQuestions(): QuizModel[] {
    return this.questions;
  };
}
