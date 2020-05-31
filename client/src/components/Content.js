import React from 'react'

import './../styles/content.css'
import LatestCommits from './LatestCommits'
import Tascks from './Tasks'

function Content() {
  return (
    <>
      <h2 className="text-center team-name">The Hackathon Team</h2>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-8">
          <Tascks />
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-4">
          <LatestCommits />
          <div className="card text-white bg-info mb-3 shadow">
            <div className="card-header">Plagins</div>
            <div className="card-body plagin-list scrollable">
              <p className="card-text">github-team-plagin</p>
              <p className="card-text">github-team-plagin</p>
              <p className="card-text">github-team-plagin</p>
              <p className="card-text">github-team-plagin</p>
              <p className="card-text">github-team-plagin</p>
              <p className="card-text">github-team-plagin</p>
              <p className="card-text">github-team-plagin</p>
              <p className="card-text">github-team-plagin</p>
              <p className="card-text">github-team-plagin</p>
              <p className="card-text">github-team-plagin</p>
              <p className="card-text">github-team-plagin</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Content