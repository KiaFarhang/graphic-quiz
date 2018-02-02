import * as React from 'react';
import { QuestionComponent as Props, Answer as AnswerProps } from '../../types';
import ConnectedAnswer from '../containers/ConnectedAnswer';

import './Question.css';

const Question = ({ answers, answerFunction, correctAnswerIndex,
    description, img, selectedAnswers, showDescription }: Props) => {
    const answerComponents = answers.map((answer: AnswerProps, index) => {
        const currentAnswer = answers[index];
        return (
            <ConnectedAnswer
                correct={correctAnswerIndex === index}
                index={index}
                key={index}
                selected={selectedAnswers.indexOf(index) >= 0}
                text={currentAnswer.text}
            />
        );
    });

    return (
        <div className="question">
            <img src={img} alt="" />
            <div className="answers">
                {answerComponents}
            </div>
            {showDescription &&
                <p>{description}</p>}
            {selectedAnswers.length > 0 && !showDescription &&
                <p>Sorry, try again.</p>
            }
        </div>
    );
};

export default Question;