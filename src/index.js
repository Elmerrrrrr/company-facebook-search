import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider,  } from 'react-redux';
import { createStore , applyMiddleware, combineReducers } from 'redux';
import { createLogger} from 'redux-logger';
import  thunkMiddleware  from 'redux-thunk';
import { searchEmployees, requestEmployees } from './reducers';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

const logger = createLogger();

const rootReducer = combineReducers({searchEmployees, requestEmployees});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware ,logger));


ReactDOM.render(
  <React.StrictMode>
    
    <div>
      <Provider store={store}>
        <App  />
      </Provider>      
    </div>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
