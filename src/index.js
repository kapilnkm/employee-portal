import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from "react-redux";
import rootReducer from "./Reducers/reducer";
import { createStore, applyMiddleware } from "redux";
//import { loadEmployees } from './Actions/action-creators';

import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk))
);

// console.log(store.getState());

// let sampleData =[
//   {LocationId:"Mum",Name:"ABC",Age:30,Department:"Dept01",Designation:'Design01',Location:"Mumbai",EmpCode:"E0101"},
//   {LocationId:"Pun",Name:"XYZ",Age:32,Department:"Dept02",Designation:'Design02',Location:"Pune",EmpCode:"E0102"}
// ]
// store.dispatch(loadEmployees(sampleData));

// console.log(store.getState);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
