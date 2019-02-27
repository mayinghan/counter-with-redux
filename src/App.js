import React from 'react'
//dont import index.redux here to prevent coupling
// import { add, reduce } from './index.redux'

class App extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		const store = this.props.store
		const num = store.getState()
		//decouple components and redux
		const add = this.props.add
		const reduce = this.props.reduce
		const addAsync = this.props.addAsync
		return (
			<div>
				<h1>Now the number is {num}</h1>
				{/*use dispatch function to change the state */}
				<button onClick={() => store.dispatch(add())}>Add number</button>
				<button onClick={() => store.dispatch(reduce())}>Reduce number</button>
				<button onClick={() => store.dispatch(addAsync())}>Add number after 2s</button>
			</div>
		)
	}
}

export default App