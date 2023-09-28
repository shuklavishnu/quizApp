import { Component, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'quiz-child',
  templateUrl: './quiz-app-child.component.html',
  styleUrls: ['./quiz-app-child.component.css']
})
export class QuizAppChildComponent {
 @Input()question:any=[];
 @Input()index:number = 0;
  @Input()ChildForm!: FormGroup;
 selectedItem:string='';
  constructor(private fb: FormBuilder) {}
 ngOnInit(){
  const control = this.fb.control('');
  this.ChildForm.addControl(this.question.question, control);
 }

 updateValue(value: any) {
  this.ChildForm.get(this.question.question)?.patchValue(value);
}
}
