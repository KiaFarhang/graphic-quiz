import * as constants from '../constants';

export interface Action {
    type: string;
}

export interface SendAnswer extends Action {
    type: constants.SEND_ANSWER;
    index: number;
}

export const sendAnswer = (index: number): SendAnswer => {
    return {
        type: constants.SEND_ANSWER,
        index
    }
}