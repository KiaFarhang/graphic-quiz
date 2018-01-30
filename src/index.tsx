import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { Provider } from 'react-redux';
import App from './components/App';

import { quizApp } from './reducers';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = createStore(quizApp, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('graphic-quiz-root') as HTMLElement
);
registerServiceWorker();
