import { Component, OnInit, Input } from '@angular/core';
import { SurveyQuestion } from 'app/shared/backend-models/interfaces';

@Component({
  selector: 'app-survey-question',
  templateUrl: './survey-question.component.html',
  styleUrls: ['./survey-question.component.scss']
})
export class SurveyQuestionComponent implements OnInit {

  @Input() surveyQuestion:SurveyQuestion;

  constructor() { }

  ngOnInit(): void {
  }

}
