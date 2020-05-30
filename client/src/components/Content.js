import React from 'react'

import './../styles/content.css'

function Content() {
  return (
    <>
      <div className="member-list">
        <span>Members</span>
        <div className="member-item">@Username</div>
        <div className="member-item">@Username</div>
        <div className="member-item">@Username</div>
        <div className="member-item">@Username</div>
        <div className="member-item">@Username</div>
      </div>
      <div className="full-task-list">
        <div className="full-task">
          <h6>Build a web app</h6>
          <span>create design</span>
          <span>write frontend</span>
          <span>write backend</span>
        </div>
        <div className="full-task">
          <h6>Build a web app</h6>
          <span>create design</span>
          <span>write frontend</span>
          <span>write backend</span>
        </div>
        <div className="full-task">
          <h6>Build a web app</h6>
          <span>create design</span>
          <span>write frontend</span>
          <span>write backend</span>
        </div>
      </div>
      <div className="plagin-list">
        <span>Build a web app</span>
        <span>create design</span>
        <span>write frontend</span>
        <span>write backend</span>
      </div>

      <h3>Latest commits</h3>
      <div className="latest-commit-list">
        <span>https://github.com/HackathonITBoroda</span>
        <div className="commit-list">
          <div className="commit">
            <div className="commit-name">commit by Oleksandr Kobzar</div>
            <div className="commit-description">MongoDB bug fix</div>
            <div>
              <div className="commit-branch">branch: master</div>
              <div className="commit-time">6:30PM</div>
            </div>
          </div>
        </div>
      </div>
      <div className="latest-commit-list">
        <span>https://github.com/HackathonITBoroda</span>
        <div className="commit-list">
          <div className="commit">
            <div className="commit-name">commit by Oleksandr Kobzar</div>
            <div className="commit-description">MongoDB bug fix</div>
            <div>
              <div className="commit-branch">branch: master</div>
              <div className="commit-time">6:30PM</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Content