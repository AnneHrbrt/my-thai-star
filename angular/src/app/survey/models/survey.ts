export interface SURVEYQuestion {
  questionText: string;
  answers: SURVEYAnswer[];
  selectedAnswer: string;
  type: 'range'|'text'|'regular';
}

export interface SURVEYAnswer {
  answerText: string;
  selected: boolean;
  requiresComment: boolean;
  comment: string;
}