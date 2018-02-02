import * as React from 'react';
import { Points as Props } from '../../types';

import './Points.css';

const Points = ({ current, possible }: Props) => {
    return (
        <p className="points">
            {current} / {possible} points
        </p>
    );
};

export default Points;