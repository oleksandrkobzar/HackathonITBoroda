import React from 'react'

function LatestCommits() {
  return (
    <>
      <div className="card text-white bg-dark mb-3 shadow">
        <div className="card-header">Latest commits</div>
        <div className="card-body latest-commits scrollable">
          <div className="commit-list">
            <h6>https://github.com/HackathonITBoroda</h6>
            <CommitItem />
            <CommitItem />
          </div>
          <hr/>
          <div className="commit-list">
            <h6>https://github.com/ITBoroda</h6>
            <CommitItem />
          </div>
          <hr/>
          <div className="commit-list">
            <h6>https://github.com/Hackathon</h6>
            <CommitItem />
            <CommitItem />
            <CommitItem />
          </div>
        </div>
      </div>
    </>
  )
}

const CommitItem = () => {
  return (
    <div className="commit">
      <div className="commit-name font-italic">commit by Oleksandr Kobzar</div>
      <div className="commit-description font-weight-bold">MongoDB bug fix</div>
      <div className="d-flex justify-content-between">
        <div className="commit-branch">branch: master</div>
        <div className="commit-time">6:30PM</div>
      </div>
    </div>
  )
}

export default LatestCommits