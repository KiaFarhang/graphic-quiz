import { connect, Dispatch } from 'react-redux';
import Button from '../Button';
import { ResetQuiz, resetQuiz } from '../../actions';

interface Props {
    text: string;
}

const mapDispatchToProps = (dispatch: Dispatch<ResetQuiz>, { text }: Props) => {
    return {
        onClick: () => {
            dispatch(resetQuiz());
        },
        text
    };
};

export default connect(
    null,
    mapDispatchToProps
)(Button);