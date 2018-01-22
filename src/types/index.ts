export interface Answer {
    text: string;
    selected: boolean;
    action?: Function;
}

export interface Question {
    img: string;
    answers: Answer[];
    correctAnswerIndex: number;
}

export interface AppState {
    questions: Question[];
    currentQuestionIndex: number;
    points: number;
}