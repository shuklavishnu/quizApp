import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizAppParentComponent } from './quiz-app-parent.component';

describe('QuizAppParentComponent', () => {
  let component: QuizAppParentComponent;
  let fixture: ComponentFixture<QuizAppParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizAppParentComponent]
    });
    fixture = TestBed.createComponent(QuizAppParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
