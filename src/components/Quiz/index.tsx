import * as React from 'react';
import { Quiz as Props } from '../../types';
import Points from '../Points';
import CurrentQuestion from '../containers/CurrentQuestion';
import NextQuestionButton from '../containers/NextQuestionButton';
import './Quiz.css';

const Quiz = ({ currentQuestionIndex, points, possiblePoints, showNextButton }: Props) => {
    const pointsComponent = currentQuestionIndex === 0 ? null : <Points current={points} possible={possiblePoints} />;

    const nextButton = showNextButton ? <NextQuestionButton text="Next" /> : null;

    return (
        <div className="quiz">
            {pointsComponent}
            <CurrentQuestion />
            {nextButton}
        </div>
    );
};

export default Quiz;