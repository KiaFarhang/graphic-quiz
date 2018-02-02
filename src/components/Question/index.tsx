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

    const isMobileScreen = window.innerWidth >= 768;

    return (
        <div className="question">
            <div className="imgContainer">
                <img src={img} alt="" />
                {showDescription && isMobileScreen &&
                    <p>{description}</p>}
            </div>
            <div className="answerContainer">
                {answerComponents}
                {showDescription && !isMobileScreen &&
                    <p>{description}</p>}
            </div>
        </div>
    );
};

export default Question;