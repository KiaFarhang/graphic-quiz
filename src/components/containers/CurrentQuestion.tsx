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
        selectedAnswers: state.selectedAnswers
    };
};

const mapDispatchToProps = (dispatch: Dispatch<SendAnswer>) => {
    return {
        answerFunction: (index: number) => dispatch(sendAnswer(index))
    };
};

// const mapStateToProps = (state: types.AppState) => {
//     return {
//         img: questions[state.currentQuestionIndex].img,
//         answers: questions[state.currentQuestionIndex].answers,
//         correctAnswerIndex: questions[state.currentQuestionIndex].correctAnswerIndex,
//     };
// };

// const mapDispatchToProps = (dispatch: Dispatch<AddPoints | IncrementQuestionIndex>) => {
//     return {
//         addPoints: (points: number) => dispatch(addPoints(points)),
//         incrementQuestionIndex: () => dispatch(incrementQuestionIndex()),
//     };
// };

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps)
//     // tslint:disable-next-line 
//     (Question as any);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Question);