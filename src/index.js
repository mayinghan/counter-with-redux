import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { counter, add, reduce, addAsync } from './index.redux'
// import * as serviceWorker from './serviceWorker';

const store = createStore(counter, applyMiddleware(thunk))

function render() {
    //for decoupling, we pass in the functions from redux as parameters
    ReactDOM.render(<App store={store} add={add} reduce={reduce} addAsync={addAsync}/>, document.getElementById('root'));
}
render()

store.subscribe(render)

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

