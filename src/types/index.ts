export interface AppState {
    questions: Question[];
    currentQuestionIndex: number;
    points: number;
    possiblePoints: number;
    selectedAnswers: number[];
    answeredCorrectly: boolean;
}

export interface Quiz {
    currentQuestionIndex: number;
    points: number;
    possiblePoints: number;
    answeredCorrectly: boolean;
    ended: boolean;
}

export interface Question {
    answers: Answer[];
    correctAnswerIndex: number;
    description?: string;
    img: string;
}

export interface QuestionComponent extends Question {
    answerFunction: Function;
    selectedAnswers: number[];
    showDescription: boolean;
}

export interface Answer {
    text: string;
    selected?: boolean;
    correct: boolean;
    action?: Function;
}

export interface Button {
    text: string;
    onClick?: () => void;
}

export interface Points {
    current: number;
    possible: number;
}