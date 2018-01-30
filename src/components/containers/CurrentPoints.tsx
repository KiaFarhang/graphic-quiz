import { connect } from 'react-redux';
import Points from '../Points';
import * as types from '../../types';

const mapStateToProps = (state: types.AppState) => ({
    current: state.points,
    possible: state.currentQuestionIndex * 3
});

export default connect(
    mapStateToProps,
    null
)(Points);