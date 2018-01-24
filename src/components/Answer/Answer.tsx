import * as React from 'react';
import { Answer as Props } from '../../types';

const Answer = ({ text, selected = false, correct }: Props) => {
    return (
        <p>{text}</p>
    )
}

export default Answer;