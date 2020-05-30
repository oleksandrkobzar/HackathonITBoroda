import React from 'react'

import './../styles/user-panel.css'

function UserPanel() {
  return (
    <>
      <div className="user-panel">
        <div className="user-logo"></div>
        <div>
          <div className="user-name">Roman</div>
          <div className="user-id">@romanID</div>
        </div>
      </div>
      <div className="team-list">
        <span>Teams</span>
        <div>
          <div>The Hackathon Team</div>
          <div>The Hackathon Team</div>
          <div>The Hackathon Team</div>
          <div>The Hackathon Team</div>
          <div>The Hackathon Team</div>
        </div>
      </div>
      <div className="task-list">
        <span>Tasks</span>
        <div>
          <div><span>The hackathon team</span>Build a web app</div>
          <div><span>The hackathon team</span>Build a web app</div>
          <div><span>The hackathon team</span>Build a web app</div>
          <div><span>The hackathon team</span>Build a web app</div>
          <div><span>The hackathon team</span>Build a web app</div>
        </div>
      </div>
    </>
  )
}
export default UserPanel