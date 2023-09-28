import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-subquestion',
  templateUrl: './subquestion.component.html',
  styleUrls: ['./subquestion.component.css']
})
export class SubquestionComponent {
 @Input()subQues:any;
 @Input()subQuesForm:FormGroup;
 @Input ()index =0;
 constructor(private fb :FormBuilder){
  this.subQuesForm = this.fb.group({})
 }
 ngOnInit(){
  const control = this.fb.control('');
  this.subQuesForm.addControl(this.subQues.question, control);
 }
 updateValue(value:string){
  this.subQuesForm.get(this.subQues.question)?.patchValue(value);
 }
}
