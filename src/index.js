import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import { createStore } from 'redux'
import { counter } from './index.redux'
// import * as serviceWorker from './serviceWorker';

const store = createStore(counter)

function render() {
    ReactDOM.render(<App store={store} />, document.getElementById('root'));
}
render()

store.subscribe(render)

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

