import React from 'react'
import { add, reduce } from './index.redux'

class App extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		const store = this.props.store
		const num = store.getState()
		return (
			<div>
				<h1>Now the number is {num}</h1>
				<button onClick={() => store.dispatch(add())}>Add number</button>
				<button onClick={() => store.dispatch(reduce())}>Reduce number</button>
			</div>
		)
	}
}

export default App