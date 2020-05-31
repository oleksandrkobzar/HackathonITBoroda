import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import UserPanel from './UserPanel'
import Content from './Content'

import { fetchPostsIfNeeded, fetchData, getTasks } from '../store/actions/index'

import './../styles/home.css'

function Home({ tasks, fetchPostsIfNeeded, getTasks, fetchData }) {
  
  useEffect(() => {
    // const url = "https://postman-echo.com/get?foo1=bar1&foo2=bar2"
    // const res = fetch(url)
    // getTasks(res)
  })
  // fetchData(url)
  fetchPostsIfNeeded()

  console.log(tasks)
  return (
    <>
      <div className="container-fluid">
        <div className="row height-100-vh">
          <div className="col-12 col-sm-4 col-md-4 col-lg-3 col-xl-2 content-left">
            <UserPanel />
          </div>
          <div className="col-12 col-sm-8 col-md-8 col-lg-9 col-xl-10 content-right">
            <Content />
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  tasks: state.rootReducer.tasks
})

const mapDispatchToProps = dispatch => ({
  fetchPostsIfNeeded: payload => dispatch(fetchPostsIfNeeded(payload)),
  fetchData: payload => dispatch(fetchData(payload)),
  getTasks: payload => dispatch(getTasks(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)