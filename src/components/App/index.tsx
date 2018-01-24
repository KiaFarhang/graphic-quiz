import * as React from 'react';
import './App.css';
import Question from '../Question';
import { Question as QuestionProps } from '../../types';

const App = () => {
  const questions: QuestionProps[] = require('../../questions.json');
  return (
    <div className="App">
      <Question
        img={questions[0].img}
        answers={questions[0].answers}
        correctAnswerIndex={questions[0].correctAnswerIndex}
      />
    </div>
  );
};

export default App;
