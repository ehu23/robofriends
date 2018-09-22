import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import {searchRobots} from './reducers';
import 'tachyons';

const logger = createLogger();
const store = createStore(searchRobots, applyMiddleware(logger)); //rootReducer is a combination of all the reducers. Uses reducers to create the store.

ReactDOM.render(//provider passes store as a prop down to App
                <Provider store = {store}> 
                    <App />
                </Provider>, document.getElementById('root'));
registerServiceWorker();
