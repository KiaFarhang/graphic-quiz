import { connect, Dispatch } from 'react-redux';
import Button from '../Button';
import { IncrementQuestionIndex, incrementQuestionIndex } from '../../actions';

interface Props {
    text: string;
}

const mapDispatchToProps = (dispatch: Dispatch<IncrementQuestionIndex>, { text }: Props) => {
    return {
        onClick: () => {
            dispatch(incrementQuestionIndex());
        },
        text
    };
};

export default connect(
    null,
    mapDispatchToProps
)(Button);