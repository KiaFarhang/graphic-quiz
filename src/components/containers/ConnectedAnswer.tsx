import { connect, Dispatch } from 'react-redux';
import Answer from '../Answer';
// import { AppState } from '../../types';
import { SendAnswer, sendAnswer } from '../../actions';

interface Props {
    correct: boolean;
    index: number;
    selected: boolean;
    text: string;
}

// const mapStateToProps = (state: AppState, { index }: Props) => {
//     const answer = state.questions[state.currentQuestionIndex].answers[index];
//     const selected = state.selectedAnswers.indexOf(index) >= 0;

//     return {
//         correct: state.questions[state.currentQuestionIndex].correctAnswerIndex === index,
//         selected,
//         text: answer.text
//     };
// };

const mapDispatchToProps = (dispatch: Dispatch<SendAnswer>, { correct, index, selected, text }: Props) => {
    return {
        action: () => dispatch(sendAnswer(index)),
        correct,
        selected,
        text
    };
};

export default connect(
    null,
    mapDispatchToProps
)(Answer);