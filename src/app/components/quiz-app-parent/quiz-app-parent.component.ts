import { Component } from '@angular/core';
import { QuizService } from '../../service/quiz.service';
import { catchError, map } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'quiz-parent',
  templateUrl: './quiz-app-parent.component.html',
  styleUrls: ['./quiz-app-parent.component.css']
})
export class QuizAppParentComponent {
  parentForm: FormGroup;
  questions = [
    {
        "queType": "Main",
        "type": "dropdown",
        "question": "Which company was established in 1976 by Steve Jobs ?",
        "options": [
            "Apple",
            "Microsoft",
            "Atari"
        ],
        "subQue": [
            {
                "queType": "Sub",
                "showIf": "Apple",
                "type": "dropdown",
                "question": "What is the most common way to iterate through an array ?",
                "options": [
                    "For loop",
                    "If Statements"
                ]
            },
            {
                "queType": "Sub",
                "showIf": "Apple",
                "type": "textinput",
                "question": "Which type of code is represented in 0 and 1 ?",
                "options": []
            }
        ]
    },
    {
        "queType": "Main",
        "type": "textinput",
        "question": "What is use for CSS ?",
        "options": [
            "Styling websites",
            "JS logic",
            "Database"
        ]
    }
];
formValue :any={}
  constructor(private quiz:QuizService,private fb:FormBuilder){
    this.parentForm = this.fb.group({});

  }
  ngOnInit(){
    // this.quiz.getQuestions().
    //   pipe(map(res => {
    //     if (res) {
    //       return res
    //     } else {
    //       return undefined
    //     }
    //   }), catchError(err => { throw Error(err) })).
    //   subscribe(res => {
    //     this.questions = res;
    //   });
  }

  submitResult(){
    console.log(this.parentForm.value)
  }
}
