import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'quiz-child',
  templateUrl: './quiz-app-child.component.html',
  styleUrls: ['./quiz-app-child.component.css']
})
export class QuizAppChildComponent {
 @Input()question:any=[];
 @Input()index:number=1;
 selectedItem:string='';
 ngOnInit(){
  console.log(this.question);
 }
}
