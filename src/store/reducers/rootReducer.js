import { GET_TASKS, REQUEST_POSTS } from '../actions/index'

const initialState = {
  tasks: [],
  subreddit: ''
}

function rootReducer(state = initialState, action) {
  if (action.type === GET_TASKS)
    return Object.assign({}, state, {
      tasks: action.payload
    })

  if (action.type === REQUEST_POSTS)
    return Object.assign({}, state, {
      subreddit: action.subreddit
    })

  return state
}

export default rootReducer