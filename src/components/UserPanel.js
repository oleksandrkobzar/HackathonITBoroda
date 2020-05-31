import React from 'react'

import './../styles/user-panel.css'

function UserPanel() {
  return (
    <>
      <div className="user-panel d-flex">
        <div className="user-logo"></div>
        <div className="user-info">
          <div className="user-name">Roman</div>
          <div className="user-id">@romanID</div>
        </div>
      </div>
      <hr/>
      <div className="team-list">
        <h5>Teams</h5>
        <ul className="scrollable">
          <li className="team-item">The Hackathon Team</li>
          <li className="team-item active">The Hackathon Team</li>
          <li className="team-item">The Hackathon Team</li>
          <li className="team-item">The Hackathon Team</li>
          <li className="team-item">The Hackathon Team</li>
          <li className="team-item">The Hackathon Team</li>
          <li className="team-item">The Hackathon Team</li>
          <li className="team-item">The Hackathon Team</li>
          <li className="team-item">The Hackathon Team</li>
        </ul>
      </div>
      <hr/>
      <div className="team-list">
        <h5>Members</h5>
        <ul className="scrollable">
          <li className="team-item">@Username</li>
          <li className="team-item">@Username</li>
          <li className="team-item">@Username</li>
          <li className="team-item">@Username</li>
          <li className="team-item">@Username</li>
        </ul>
      </div>
      <hr/>
    </>
  )
}
export default UserPanel