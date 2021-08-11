import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import * as fromSurveyData from './survey-data.reducer';
import * as fromRoot from './src/app/store/index';
import { environment } from 'environments/environment';

export const surveyFeatureKey = 'survey';

export interface SurveyState { 
  SurveyData: fromSurveyData.State;
}

export interface State extends fromRoot.State {
  survey: SurveyState;
}

export const reducers: ActionReducerMap<SurveyState> = {
SurveyData: fromSurveyData.reducer,
};

export const metaReducers: MetaReducer<SurveyState>[] = !environment.production ? [] : [];

export const getFeature = createFeatureSelector<State, SurveyState> ('survey');

export const getSurveyData = createSelector(
  getFeature, state => state.SurveyData
);

export const getAllItems = createSelector(
  getSurveyData,
  fromSurveyData.getAllItems
);