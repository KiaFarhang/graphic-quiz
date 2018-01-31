import * as constants from '../constants';

export interface Action {
    type: string;
}

export interface SendAnswer extends Action {
    type: constants.SEND_ANSWER;
    index: number;
}

export interface IncrementQuestionIndex extends Action {
    type: constants.INCREMENT_QUESTION_INDEX;
}

export const sendAnswer = (index: number): SendAnswer => {
    return {
        type: constants.SEND_ANSWER,
        index
    };
};

export const incrementQuestionIndex = (): IncrementQuestionIndex => {
    return {
        type: constants.INCREMENT_QUESTION_INDEX
    };
};