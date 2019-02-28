import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import Auth from './Auth'
import Dashboard from './Dashboard'
// import * as serviceWorker from './serviceWorker';
const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : () => { }

//using compose to compose two functions
const store = createStore(reducer, compose(
	applyMiddleware(thunk),
	reduxDevtools
))

function render() {
	//for decoupling, we pass in the functions from redux as parameters
	ReactDOM.render(
		<Provider store={store}>
			<BrowserRouter>				
					<Switch>
						<Route path='/login' component={Auth}></Route>
						<Route path='/dashboard' component={Dashboard}></Route>
						<Redirect to='/dashboard'></Redirect>
					</Switch>	
			</BrowserRouter>
		</Provider>
		, document.getElementById('root')
	);
}
render()

	// // If you want your app to work offline and load faster, you can change
	// // unregister() to register() below. Note this comes with some pitfalls.
	// // Learn more about service workers: http://bit.ly/CRA-PWA
	// serviceWorker.unregister();

