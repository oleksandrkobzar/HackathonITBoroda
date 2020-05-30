import React from 'react'

import './../styles/home.css'
import UserPanel from './UserPanel'
import Content from './Content'

function Home() {
  return (
    <>
      <div className="container-xl">
        <div className="row">
          <div className="col-lg-4">
            <UserPanel />
          </div>
          <div className="column col-8">
            <Content />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home