import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizAppChildComponent } from './quiz-app-child.component';

describe('QuizAppChildComponent', () => {
  let component: QuizAppChildComponent;
  let fixture: ComponentFixture<QuizAppChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizAppChildComponent]
    });
    fixture = TestBed.createComponent(QuizAppChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
