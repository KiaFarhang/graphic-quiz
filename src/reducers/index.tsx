import * as types from '../types';
import * as constants from '../constants';
import * as actions from '../actions';

export const initialState: types.AppState = {
    currentQuestionIndex: 0,
    points: 0
}

export const questionIndex = (currentIndex: number = 0, action: actions.IncrementQuestionIndex): number => {
    return currentIndex + 1;
}

export const points = (currentPoints: number = 0, action: actions.AddPoints): number => {
    return currentPoints + action.points;
}

export const quizApp = (state: types.AppState = initialState, action: actions.Action): types.AppState => {
    switch (action.type) {
        case constants.INCREMENT_QUESTION_INDEX:
            return Object.assign({}, state, { currentQuestionIndex: questionIndex(state.currentQuestionIndex, action as actions.IncrementQuestionIndex) });
        case constants.ADD_POINTS:
            return Object.assign({}, state, { points: points(state.points, action as actions.AddPoints) });
        default:
            return state;
    }
}