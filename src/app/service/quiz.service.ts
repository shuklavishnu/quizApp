import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http:HttpClient) { }

getQuestions(){
  return this.http.get('https://raw.githubusercontent.com/ShaneWatson7961/quizData/main/quizInterview.json')
}
}
