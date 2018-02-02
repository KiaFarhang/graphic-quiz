import * as types from '../types';
import * as constants from '../constants';
import * as actions from '../actions';

const questions: types.Question[] = require('../questions.json');

export const initialState: types.AppState = {
    questions,
    currentQuestionIndex: 0,
    points: 0,
    possiblePoints: questions[0].answers.length - 1,
    selectedAnswers: [],
    answeredCorrectly: false
};

export const answer = (state: types.AppState = initialState, action: actions.SendAnswer): types.AppState => {
    const { index } = action;
    // If the given answer has already been selected, we don't have to do anything.
    if (state.selectedAnswers.indexOf(index) >= 0) {
        return state;
    }

    const correctAnswerIndex = state.questions[state.currentQuestionIndex].correctAnswerIndex;

    if (correctAnswerIndex === index) {
        // Add the possible points to total points, set the answeredCorrectly flag and add selected index to array
        return Object.assign({}, state, {
            answeredCorrectly: true,
            selectedAnswers: state.selectedAnswers.concat([index])
        });
    } else {
        // Decrement number of possible points and add the index to the selected array
        return Object.assign({}, state, {
            possiblePoints: state.possiblePoints - 1,
            selectedAnswers: state.selectedAnswers.concat([index])
        });
    }
};

export const questionIndex = (state: types.AppState, action: actions.IncrementQuestionIndex): types.AppState => {
    const nextQuestion = state.questions[state.currentQuestionIndex + 1];
    const possibleP = state.possiblePoints;

    return Object.assign({}, state, {
        currentQuestionIndex: state.currentQuestionIndex + 1,
        points: state.points += possibleP,
        possiblePoints: nextQuestion ? nextQuestion.answers.length - 1 : 0,
        selectedAnswers: [],
        answeredCorrectly: false
    });
};

export const reset = (state: types.AppState, action: actions.ResetQuiz): types.AppState => {
    return initialState;
};

export const quizApp = (state: types.AppState = initialState, action: actions.Action): types.AppState => {
    switch (action.type) {
        case constants.SEND_ANSWER:
            return answer(state, action as actions.SendAnswer);
        case constants.INCREMENT_QUESTION_INDEX:
            return questionIndex(state, action as actions.IncrementQuestionIndex);
        case constants.RESET_QUIZ:
            return reset(state, action as actions.ResetQuiz);
        default:
            return state;
    }
};