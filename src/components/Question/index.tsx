import * as React from 'react';
import { Question as Props, Answer as AnswerProps } from '../../types';
import Answer from '../Answer';

export interface State {
    selectedAnswers: number[];
    pointsPossible: number;
}

class Question extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state = {
            selectedAnswers: [],
            pointsPossible: 3
        }
    }

    render() {

        const answers = this.props.answers.map((answer: AnswerProps, index: number) => {
            return <Answer
                text={answer.text}
                selected={this.state.selectedAnswers.indexOf(index) > -1 ? true : false}
                correct={this.props.correctAnswerIndex === index}
            />
        });

        return (
            <div className="Question">
                <img src={this.props.img} alt="" />
                {answers}
            </div>
        )
    }
}

export default Question;