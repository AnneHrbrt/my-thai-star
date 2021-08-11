import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { WindowService } from '../core/window/window.service';
import { SharedModule } from '../shared/shared.module';

import { TranslocoRootModule } from '../transloco-root.module';
import { SurveyComponent } from './container/survey/survey.component';
import { SurveyQuestionComponent } from "./components/survey-question/SurveyQuestionComponent";
import { SurveyAnswerComponent } from './components/survey-answer/survey-answer.component';
import { StoreModule } from '@ngrx/store';
import * as fromSurvey from './reducers';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,
    TranslocoRootModule,
    CoreModule,
    StoreModule.forFeature(fromSurvey.surveyFeatureKey, fromSurvey.reducers, { metaReducers: fromSurvey.metaReducers }),
  ],
  providers: [WindowService],
  declarations: [SurveyComponent, SurveyQuestionComponent, SurveyAnswerComponent],
  exports: [],
  entryComponents: [],
})
export class SurveyModule {}
