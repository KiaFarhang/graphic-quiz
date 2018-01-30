import * as React from 'react';
import { Answer as Props } from '../../types';

const Answer = ({ text, selected = false, correct, action }: Props) => {
    return (
        <p onClick={action ? action() : null}>{text}</p>
    );
};

export default Answer;