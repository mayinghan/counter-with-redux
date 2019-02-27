//reducer

const ADD = '1'
const SUBT = '2'

export function counter(state = 0, action) {
    switch(action.type) {
      case '1':
        return state + 1
      case '2':
        return state - 1
      default:
        return 10
    }
}

//action creator
export function add() {
    return {type:ADD}
}
export function reduce() {
    return {type:SUBT}
}
