import { Component } from '@angular/core';
// import {MatButtonModule} from '@angular/material/button';
// import {MatCardModule} from '@angular/material/card';
import { QuizService } from '../../service/quiz.service';
import { catchError, map } from 'rxjs/operators';
@Component({
  selector: 'quiz-parent',
  templateUrl: './quiz-app-parent.component.html',
  styleUrls: ['./quiz-app-parent.component.css']
  // standalone:true,
  // imports: [],
})
export class QuizAppParentComponent {
  questions :any
  constructor(private quiz:QuizService){

  }
  ngOnInit(){
    this.quiz.getQuestions().
      pipe(map(res => {
        if (res) {
          return res
        } else {
          return undefined
        }
      }), catchError(err => { throw Error(err) })).
      subscribe(res => {
        this.questions = res;
      });
  }
}
