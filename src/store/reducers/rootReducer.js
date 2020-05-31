import { GET_TASKS } from '../actions/index'

const initialState = {
  tasks: []
}

function rootReducer(state = initialState, action) {
  if (action.type === GET_TASKS)
    return Object.assign({}, state, {
      tasks: action.payload
    })

  return state
}

export default rootReducer