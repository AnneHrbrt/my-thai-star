import { Component, OnInit } from '@angular/core';
import { SurveyQuestion } from 'app/shared/backend-models/interfaces';

@Component({
	selector: 'app-survey',
	templateUrl: './survey.component.html',
	styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {
	currentIndex: number = 0;
  savedAnswers: string[4];

		surveyQuestions: SurveyQuestion[] = [{
		questionText: 'Wie sollte man deiner Meinung nach grundsätzlich in Projekten beim Updaten von Java vorgehen?',
		answers: [{ answerText: 'Immer versuchen, die neueste Version einzusetzen', selected: false, requiresComment: false, comment: '' },
		{ answerText: 'Möglichst lange auf einer Version bleiben und erst dann wechseln, wenn man wirklich muss', selected: false, requiresComment: false, comment: '' },
		{ answerText: 'Dazu kann/möchte ich mich nichts sagen', selected: false, requiresComment: false, comment: ''}],
		selectedAnswer: "", type:"regular"
	},
	{questionText: 'Wenn du ein Java einsetzen müsstest, das nicht von Oracle ist, bei welchem Hersteller hättest du keine Bedenken?',
	answers:[{answerText: 'nur bei Oracle', selected: false, requiresComment: false, comment: ''},
			{answerText: 'IBM', selected: true, requiresComment: false, comment: ''},
			{answerText: 'Adopt Open JDK', selected: false, requiresComment: false, comment: ''},
			{answerText: 'Microsoft', selected: false, requiresComment: false, comment: ''},
			{answerText: 'andere', selected: false, requiresComment: true, comment: ''},
			{ answerText: 'Dazu kann/möchte ich mich nichts sagen', selected: false, requiresComment: false, comment: ''}],
			selectedAnswer: "", type:"regular"
	},
	{questionText: 'Wenn du ein Java einsetzt, wie wichtig ist dir persönlich der Support?',
	answers:[{answerText: 'Man braucht Support auf jeden Fall.', selected: false, requiresComment: false, comment: ''},
			{answerText: 'Support ist verzichtbar, ich würde auch eine Version, die keinen Support mehr hat, nutzen.', selected: false, requiresComment: false, comment: ''},
			{answerText: 'Support brauchen nicht das Entwicklungsteam, sondern der Betreiber der Plattform.', selected: false, requiresComment: false, comment: ''},
			{ answerText: 'Dazu kann/möchte ich mich nichts sagen', selected: false, requiresComment: false, comment: ''}],
			selectedAnswer: "", type:"regular"
	},
	{questionText: 'Wie wichtig findest du Updates in Java?',
	answers:[{answerText: 'Eigentlich sind sie lästig. Die bringen zwar neue Features, aber man ist ohne diese Features auch früher ziemlich gut klar gekommen.', selected: false, requiresComment: false, comment: ''},
			{answerText: 'Updates sind super, weil mir die neuen Features sehr wichtig sind.', selected: false, requiresComment: false, comment: ''},
			{answerText: 'Ich beschäftige mich erst mit neuen Java-Features, wenn ich muss.', selected: false, requiresComment: false, comment: ''},
			{ answerText: 'Dazu kann/möchte ich mich nichts sagen', selected: false, requiresComment: false, comment: ''}],
			selectedAnswer: "", type:"regular"
	}];

	arraylength: number= SurveyQuestion.length;

	constructor() { }

	ngOnInit(): void {
	}
}
