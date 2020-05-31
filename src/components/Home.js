import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import UserPanel from './UserPanel'
import Content from './Content'

import { fetchTasks } from '../store/actions/index'

import './../styles/home.css'

function Home({ tasks, fetchTasks }) {

  useEffect(() => {

  })
  
  fetchTasks('https://postman-echo.com/post')

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
  fetchTasks: payload => dispatch(fetchTasks(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)