import { Component, OnInit, Input } from '@angular/core';
import { SurveyQuestion } from 'app/shared/backend-models/interfaces';

@Component({
  selector: 'app-survey-answer',
  templateUrl: './survey-answer.component.html',
  styleUrls: ['./survey-answer.component.scss']
})
export class SurveyAnswerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
