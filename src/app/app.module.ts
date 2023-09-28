import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizAppParentComponent } from './components/quiz-app-parent/quiz-app-parent.component';
import { QuizAppChildComponent } from './components/quiz-app-child/quiz-app-child.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule }  from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { SubquestionComponent } from './components/subquestion/subquestion.component';

@NgModule({
    declarations: [
        AppComponent,
        QuizAppParentComponent,
        QuizAppChildComponent,
        SubquestionComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatCardModule,
        NgSelectModule,
        FormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        ReactiveFormsModule
    ]
})
export class AppModule { }
