import * as React from 'react';
import { Answer as Props } from '../../types';

import './Answer.css';

const Answer = ({ text, selected = false, correct, action }: Props) => {
    let answerClass = 'answer';
    if (selected) {
        answerClass += ' selected';
        let correctStatus = correct ? ' correct' : ' incorrect';
        answerClass += correctStatus;
    }
    // console.log(action);
    return (
        // tslint:disable-next-line
        <p onClick={action as any} className={answerClass}>{text}</p>
    );
};

export default Answer;