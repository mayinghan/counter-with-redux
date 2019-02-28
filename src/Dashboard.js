import React, { Component } from 'react'
import { Route, Link, Redirect } from 'react-router-dom'
import App from './App'
import { connect } from 'react-redux'
import { logout } from './Auth.redux'
function Second() {
	return <h2>Counter 2</h2>
}

function Third() {
	return <h2>Counter 3</h2>
}
@connect(
	state=>state.auth,
	{logout}
)
class Dashboard extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		//match contains the url and path info
		const match = this.props.match
		console.log(match)
		const redirectToLogin = <Redirect to='/login'></Redirect>
		const app  = (
			<div>
				<h1>Hello!</h1>
				{this.props.isAuth ? <button onClick={this.props.logout}>Logout!</button> : null}
				<ul>
					<li>
						{/* <Link to='/dashboard/'>Counter 1</Link> */}
						<Link to={`${match.url}`}>Counter 1</Link>
					</li>
					<li>
						<Link to={`${match.url}/2`}>Counter 2</Link>
					</li>
					<li>
						<Link to={`${match.url}/3`}>Counter 3</Link>
					</li>
				</ul>
				<Route path={`${match.url}`} exact component={App}></Route>
				<Route path={`${match.url}/2`} component={Second}></Route>
				<Route path={`${match.url}/3`} component={Third}></Route>
			</div>
		)
		return this.props.isAuth ? app : redirectToLogin
	}

}

export default Dashboard