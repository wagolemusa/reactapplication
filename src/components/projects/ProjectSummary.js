import React from 'react'

const ProjectSummary = ({project}) =>{
    return (
        <div className="card z-depth-0 project-summary">
            <span className="card-title">{project.title} </span>
            <p>Posted by refige wise</p>
            <p className="greg-text">3rd September, 2em</p>
        </div>

    )
}
export default ProjectSummary