import { connect, Dispatch } from 'react-redux';
import { Question } from '../Question';
import * as types from '../../types';
import { AddPoints, IncrementQuestionIndex, addPoints, incrementQuestionIndex } from '../../actions';

const questions: types.Question[] = require('../../questions.json');

const mapStateToProps = (state: types.AppState) => ({
    img: questions[state.currentQuestionIndex].img,
    answers: questions[state.currentQuestionIndex].answers,
    correctAnswerIndex: questions[state.currentQuestionIndex].correctAnswerIndex
});

const mapDispatchToProps = (dispatch: Dispatch<AddPoints | IncrementQuestionIndex>) => ({
    addPoints: (points: number) => dispatch(addPoints(points)),
    incrementQuestionIndex: () => dispatch(incrementQuestionIndex())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Question)