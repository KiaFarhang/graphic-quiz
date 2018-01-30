import * as React from 'react';
import { Button as Props } from '../../types';

import './Button.css';

const Button = ({ text, onClick }: Props) => {
    return (
        <button onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;