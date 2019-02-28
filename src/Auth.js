import  React, { Component } from 'react'
import { login } from './Auth.redux'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

//now we have two reducers,
// we need to combine them
@connect(
	state=>state.auth, 
	{login}
)
class Auth extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div>
				{this.props.isAuth ? <Redirect to='/dashboard'></Redirect> : null}
				<h2>Log in is needed to view</h2>
				<button onClick={this.props.login}>Login</button>
			</div>
		)
			
	}

}

export default Auth