import fetch from 'cross-fetch'

export const GET_TASKS = 'GET_TASKS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REQUEST_POSTS = 'REQUEST_POSTS'

export function getTasks(payload) {
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

function receiveTasks(subreddit, json) {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

function fetchTasks(subreddit) {

  return dispatch => {

    dispatch(requestPosts(subreddit))

    return fetch(
      'https://postman-echo.com/post',
      {
        method:'POST',
        mode: 'no-cors',
        headers: {
          'Access-Control-Allow-Origin':'*'
        }
      }
    )
      .then(response => response.json())
      .then(json => dispatch(receiveTasks(subreddit, json)))
  }
}

export function fetchPostsIfNeeded(subreddit) {
  return dispatch => {
    return dispatch(fetchTasks(subreddit))
  }
}

export function fetchData(url) {
  const payload = fetch(url)
    .then(response => response.json())

  return {
    type: GET_TASKS,
    payload
  }
}