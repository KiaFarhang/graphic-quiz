import { connect, Dispatch } from 'react-redux';
import Question from '../Question';
import { Question as QuestionProps } from '../../types';
import * as types from '../../types';
import { SendAnswer, sendAnswer } from '../../actions';

const mapStateToProps = (state: types.AppState) => {
    const currentQuestion: QuestionProps = state.questions[state.currentQuestionIndex];

    return {
        answers: currentQuestion.answers,
        correctAnswerIndex: currentQuestion.correctAnswerIndex,
        img: currentQuestion.img,
        selectedAnswers: state.selectedAnswers,
        showDescription: state.answeredCorrectly,
        description: currentQuestion.description
    };
};

const mapDispatchToProps = (dispatch: Dispatch<SendAnswer>) => {
    return {
        answerFunction: (index: number) => dispatch(sendAnswer(index))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Question);