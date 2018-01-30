import * as React from 'react';
import { Points as Props } from '../../types';

const Points = ({ current, possible }: Props) => {
    return (
        <p className="Points">
            {current} / {possible} points
        </p>
    );
};

export default Points;