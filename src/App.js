import React from 'react'
import { connect } from 'react-redux'
import { add, reduce, addAsync } from './index.redux'
//dont import index.redux here to prevent coupling
// import { add, reduce } from './index.redux'

//Using connect API
//first param: state / attributes
const mapStatetoProps = (state) => {
	return {num:state.counter}
}
//second param: methods
const actionCreators = { add, reduce, addAsync}
@connect(mapStatetoProps, actionCreators)
class App extends React.Component {
	render() {
		// const store = this.props.store
		const num = this.props.num
		//decouple components and redux
		const add = this.props.add
		const reduce = this.props.reduce
		const addAsync = this.props.addAsync
		return (
			<div>
				<h1>Now the number is {num}</h1>
				{/*use dispatch function to change the state */}
				<button onClick={() => add()}>Add number</button>
				<button onClick={() => reduce()}>Reduce number</button>
				<button onClick={() => addAsync()}>Add number after 2s</button>
			</div>
		)
	}
}


//App = connect(mapStatetoProps, actionCreators)(App)
export default App