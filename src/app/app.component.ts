import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = `quiz-editor${100 + 23}`;
  title = 'Quiz Editor';

  quizzes = [
    "Quiz 1"
    , "Quiz 2"
    , `Quiz ${1 + 2}`
    , `Quiz ${Math.max(4, -12234)}`
  ];

  addFunnyQuiz = () => {
    this.quizzes = [
      ...this.quizzes
      , "Funny Quiz"
    ];
  };
}
