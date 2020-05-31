import fetch from 'cross-fetch'

export const GET_TASKS = 'GET_TASKS'
export const REQUEST_POSTS = 'REQUEST_POSTS'

function getTasks(payload) {
  return {
    type: GET_TASKS,
    payload
  }
}

function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit
  }
}

export function fetchTasks(subreddit) {
  return dispatch => {
    dispatch(requestPosts(subreddit))
    return fetch(subreddit,
      {
        method: 'POST',
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      }
    )
      .then(response => dispatch(getTasks(response.json())))
      .catch(err => console.log(err))
  }
}