import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { counter } from './index.redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Link } from 'react-router-dom'
// import * as serviceWorker from './serviceWorker';
const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : () => { }

//using compose to compose two functions
const store = createStore(counter, compose(
	applyMiddleware(thunk),
	reduxDevtools
))

function Second() {
	return <h2>Counter 2</h2>
}

function Third() {
	return <h2>Counter 3</h2>
}

function render() {

	//for decoupling, we pass in the functions from redux as parameters
	ReactDOM.render(
		<Provider store={store}>
			<BrowserRouter>
				<div>
					<ul>
						<li>
							<Link to='/'>Counter 1</Link>
						</li>
						<li>
							<Link to='/2'>Counter 2</Link>
						</li>
						<li>
							<Link to='/3'>Counter 3</Link>
						</li>
					</ul>
					<Switch>
						<Route path='/' exact component={App}></Route>
						<Route path='/2' component={Second}></Route>
						<Route path='/3' component={Third}></Route>
					</Switch>
				</div>
			</BrowserRouter>
		</Provider>
		, document.getElementById('root')
	);
}
render()

store.subscribe(render)

	// // If you want your app to work offline and load faster, you can change
	// // unregister() to register() below. Note this comes with some pitfalls.
	// // Learn more about service workers: http://bit.ly/CRA-PWA
	// serviceWorker.unregister();

