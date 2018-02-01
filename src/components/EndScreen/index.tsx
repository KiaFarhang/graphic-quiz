import * as React from 'react';
import ResetButton from '../containers/ResetButton';

const EndScreen = () => {
    return (
        <div>
            <p>Play again?</p>
            <ResetButton text="Reset" />
        </div>
    );
};

export default EndScreen;