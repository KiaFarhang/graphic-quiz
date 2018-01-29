export interface Answer {
    text: string;
    selected?: boolean;
    correct: boolean;
    action?: Function;
}

export interface Question {
    img: string;
    answers: Answer[];
    correctAnswerIndex: number;
    addPoints?: Function;
    incrementQuestionIndex?: Function;
}

export interface AppState {
    currentQuestionIndex: number;
    points: number;
}