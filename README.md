This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
A counter implemented with react + redux

### How to use Redux:
1.  First create ‘store’ with reducer, then use store.getState to get real time state.
2. Use store.dispatch(action) to change state
3. Reducer function take state and action, return state. We can use store.subscribe to listen every changes.

### Using with react
1. use store.dispatch to pass the state (or modify the state) to component
2. use subscribe() to subscribe the render() function, every change need to re-render the page
3. put redux related code to another file (index.redux.js)
