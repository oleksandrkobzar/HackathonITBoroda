import React from 'react'

import './../styles/home.css'
import UserPanel from './UserPanel'
import Content from './Content'

function Home() {
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

export default Home