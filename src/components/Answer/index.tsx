import * as React from 'react';
import { Answer as Props } from '../../types';

import './Answer.css';

const Answer = ({ text, selected = false, correct, action }: Props) => {
    // tslint:disable-next-line 
    console.log('rendering answer');
    let answerClass = 'answer';
    if (selected) {
        answerClass += ' selected';
        let correctStatus = correct ? ' correct' : ' incorrect';
        answerClass += correctStatus;
    }
    return (
        <p onClick={action ? action() : null} className={answerClass}>{text}</p>
    );
};

export default Answer;