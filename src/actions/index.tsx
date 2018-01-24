import * as constants from '../constants';

export interface Action {
    type: string;
}

export interface IncrementQuestionIndex extends Action {
    type: constants.INCREMENT_QUESTION_INDEX;
}

export interface AddPoints extends Action {
    type: constants.ADD_POINTS;
    points: number;
}

export const incrementQuestionIndex = (): IncrementQuestionIndex => {
    return {
        type: constants.INCREMENT_QUESTION_INDEX
    };
};

export const addPoints = (points: number): AddPoints => {
    return {
        type: constants.ADD_POINTS,
        points
    };
};