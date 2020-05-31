import React from 'react'

function Tascks() {

  const data = {
    background: "bg-success",
    title: "Build a web app",
    description: "Card subtitle",
    text: {
      tasks:
        ["Some quick example text to he card's content.",
          "Some quick example text to he card's content.",
          "Some quick example text to he card's content.",
          "Some quick example text to he card's content."]
    }
  }

  return (
    <>
      <div className="task-header">
        <h5>Tasks</h5>
        <i className="btn btn-primary fa fa-plus"></i>
      </div>
      <hr />
      <div className="task-board scrollable">
        <Task data={data} />
        <Task data={data} />
        <Task data={data} />
        <Task data={data} />
        <Task data={data} />
        <Task data={data} />
      </div>
    </>
  )
}

const Task = props => {
  return (
    <div className={`card shadow text-white ${props.data.background} task-item`}>
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">{props.data.title}</h5>
          <div className="task-group-icon">
            <i className="fa fa-pencil"></i>
            <i className="fa fa-eye-slash"></i>
            <i className="fa fa-trash"></i>
          </div>
        </div>
        <h6 className="card-subtitle mb-2">{props.data.description}</h6>
        {props.data.text.tasks.map((elem, idx) => <div className="card-text" key={idx}><input type="checkbox" value="option1" aria-label="..." />{elem}</div>)}
      </div>
      <div className="card-footer d-flex justify-content-between">
        <div>@username</div>
        <div>6:10 PM</div>
      </div>
    </div>
  )
}

export default Tascks